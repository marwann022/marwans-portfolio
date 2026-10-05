import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile, access, readdir } from 'node:fs/promises';
import { getPageMetadata, normalizeSiteUrl, publicPaths, defaultSiteUrl } from '../src/lib/pageMetadata.js';

test('all public pages have unique share URLs, descriptions and existing images', async () => {
  const urls = new Set();
  for (const path of publicPaths) {
    const meta = getPageMetadata(path);
    assert.ok(meta.title && meta.description);
    assert.equal(meta.robots, 'index, follow');
    assert.equal(new URL(meta.url).origin, defaultSiteUrl);
    urls.add(meta.url);
    await access(`public${decodeURIComponent(new URL(meta.image).pathname)}`);
  }
  assert.equal(urls.size, publicPaths.length);
  assert.match(getPageMetadata('/projects/goldera').title, /GolderaPharm/);
  assert.match(getPageMetadata('/archive/moon').title, /Moon/);
});

test('unknown and prototype-property slugs are safely treated as missing pages', () => {
  for (const path of ['/missing', '/projects/missing', '/archive/missing', '/projects/__proto__', '/archive/constructor', '/projects/goldera/extra']) {
    const meta = getPageMetadata(path);
    assert.equal(meta.robots, 'noindex, follow');
    assert.match(meta.title, /404/);
  }
});

test('canonical origin validation and trailing slash normalization', () => {
  assert.equal(normalizeSiteUrl('https://portfolio.example/'), 'https://portfolio.example');
  for (const origin of ['http://portfolio.example', 'javascript:alert(1)', 'https://portfolio.example/path', 'https://user:pass@portfolio.example', 'https://portfolio.example?tracking=1']) assert.throws(() => normalizeSiteUrl(origin));
  assert.equal(getPageMetadata('/projects/goldera/').url, `${defaultSiteUrl}/projects/goldera`);
});

test('production HTML contains project share metadata before JavaScript runs', async () => {
  for (const path of publicPaths) {
    const html = await readFile(`dist${path === '/' ? '' : path}/index.html`, 'utf8');
    const meta = getPageMetadata(path);
    const escapedTitle = meta.title.replaceAll('&', '&amp;');
    assert.ok(html.includes(`<title>${escapedTitle}</title>`), path);
    assert.ok(html.includes(`content="${meta.url}"`), path);
    assert.ok(html.includes('property="og:image"'), path);
    assert.ok(!html.includes('https://marwanelgammal.com'), path);
    assert.ok(!html.includes('fonts.googleapis.com'), path);
  }
  const sitemap = await readFile('dist/sitemap.xml', 'utf8');
  for (const path of publicPaths) assert.ok(sitemap.includes(new URL(path, defaultSiteUrl).href));
});

test('deployment fallback excludes file requests and applies browser protections', async () => {
  const config = JSON.parse(await readFile('vercel.json', 'utf8'));
  const fallback = new RegExp(`^${config.rewrites[0].source.replace('/:path', '/')}$`);
  assert.ok(fallback.test('/projects/goldera'));
  assert.ok(!fallback.test('/assets/missing.png'));
  assert.ok(!fallback.test('/missing.js'));
  const headers = Object.fromEntries(config.headers[0].headers.map(h => [h.key, h.value]));
  assert.equal(headers['X-Content-Type-Options'], 'nosniff');
  assert.equal(headers['X-Frame-Options'], 'DENY');
  assert.match(headers['Content-Security-Policy'], /script-src 'self';/);
  assert.match(headers['Content-Security-Policy'], /frame-ancestors 'none'/);
});

test('production output does not publish editable design sources or OS metadata', async () => {
  async function check(directory) {
    for (const entry of await readdir(directory, { withFileTypes: true })) {
      if (entry.isDirectory()) await check(`${directory}/${entry.name}`);
      else assert.ok(!/\.(psd|ai|log|map)$/i.test(entry.name) && entry.name !== '.DS_Store', entry.name);
    }
  }
  await check('dist');
});
