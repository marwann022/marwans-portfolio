import { readFile, writeFile, mkdir, readdir, rm } from 'node:fs/promises';
import { loadEnv } from 'vite';
import { getPageMetadata, normalizeSiteUrl, publicPaths, defaultSiteUrl } from '../src/lib/pageMetadata.js';

const siteUrl = normalizeSiteUrl(process.env.VITE_SITE_URL || loadEnv('production', process.cwd(), 'VITE_').VITE_SITE_URL || defaultSiteUrl);
const template = await readFile('dist/index.html', 'utf8');
const escapeHtml = value => value.replace(/[&<>"']/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[char]);

function pageHtml(path) {
  const meta = getPageMetadata(path, siteUrl);
  let html = template.replace(/<title>[^<]*<\/title>/, `<title>${escapeHtml(meta.title)}</title>`);
  for (const [key, value] of Object.entries({ description: meta.description, robots: meta.robots, 'og:url': meta.url, 'og:title': meta.title, 'og:description': meta.description, 'og:image': meta.image, 'twitter:title': meta.title, 'twitter:description': meta.description, 'twitter:image': meta.image })) {
    html = html.replace(new RegExp(`(<meta (?:name|property)="${key}" content=")[^"]*("\\s*/?>)`), (_, start, end) => `${start}${escapeHtml(value)}${end}`);
  }
  html = html.replace(/(<link rel="canonical" href=")[^"]*("\s*\/?>)/, (_, start, end) => `${start}${escapeHtml(meta.url)}${end}`);
  // Keep structured data consistent with the configured public domain.
  return html.replaceAll('https://marwans-portfolio-wine.vercel.app', siteUrl);
}

for (const path of publicPaths) {
  const directory = path === '/' ? 'dist' : `dist${path}`;
  await mkdir(directory, { recursive: true });
  await writeFile(`${directory}/index.html`, pageHtml(path));
}
await writeFile('dist/404.html', pageHtml('/not-found'));
await writeFile('dist/sitemap.xml', `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${publicPaths.map(path => `  <url><loc>${escapeHtml(new URL(path, siteUrl).href)}</loc></url>`).join('\n')}\n</urlset>\n`);
await writeFile('dist/robots.txt', `User-agent: *\nAllow: /\n\nSitemap: ${siteUrl}/sitemap.xml\n`);

// Editable design sources and OS metadata belong in the workspace, not on the public site.
async function removePrivateAssets(directory) {
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const path = `${directory}/${entry.name}`;
    if (entry.isDirectory()) await removePrivateAssets(path);
    else if (/\.(psd|ai|log|map)$/i.test(entry.name) || entry.name === '.DS_Store') await rm(path);
  }
}
await removePrivateAssets('dist');
console.log(`Generated sharing HTML for ${publicPaths.length} pages (${siteUrl}).`);
