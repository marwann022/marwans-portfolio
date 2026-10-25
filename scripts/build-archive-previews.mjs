// Optional macOS authoring utility. Outputs are checked in; production builds do not require sips.
import { execFileSync } from 'node:child_process';
import { createHash } from 'node:crypto';
import { mkdir, writeFile } from 'node:fs/promises';
import { gallery } from '../src/data/gallery.js';

const sources = new Set();
for (const project of gallery) for (const group of project.groups || [project]) {
  [group.hero, ...(group.rows || []).flatMap(row => row.items)].filter(Boolean).forEach(item => sources.add(item.image));
}
await mkdir('public/previews/archive', { recursive: true });
const previews = {};
for (const source of sources) {
  const name = createHash('sha256').update(source).digest('hex').slice(0, 14);
  const destination = `/previews/archive/${name}.jpg`;
  execFileSync('sips', ['-s', 'format', 'jpeg', '-s', 'formatOptions', '78', '-Z', '1400', `public${source}`, '--out', `public${destination}`], { stdio: 'pipe' });
  previews[source] = destination;
}
await writeFile('src/data/archivePreviews.json', JSON.stringify(previews, null, 2) + '\n');
console.log(`Exported ${sources.size} lightweight previews; original artwork is retained for zoom.`);
