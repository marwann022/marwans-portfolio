import test from 'node:test';
import assert from 'node:assert/strict';
import { access, readFile, stat } from 'node:fs/promises';
import { projects, flagshipProjects, projectKeys } from '../src/data/projects.js';
import { projectPresentation, getPresentation, workFilters, archivePresentation } from '../src/data/projectPresentation.js';
import { gallery } from '../src/data/gallery.js';

test('project roles and stages distinguish client work from prototypes', async () => {
  const resume = JSON.parse(await readFile('content/resume.json', 'utf8'));
  assert.equal(projects.goldera.meta.roleTitle, resume.experience[0].title.split(' | ')[0]);
  assert.equal(projects.goldera.meta.period, 'Jan–May 2026');
  assert.match(projects.smartmeet.meta.statusShort, /prototype/i);
  assert.match(projects.wecare.meta.statusShort, /prototype/i);
  assert.deepEqual(flagshipProjects.map(p => p.id), projectKeys.slice(0, flagshipProjects.length));
  assert.equal(resume.projects.filter(p => /Goldera/.test(p.title)).length, 0);
  assert.ok(resume.projects.some(p => /WeCare/.test(p.title)));
});

test('case studies publish delivered scope and evaluation plans without undocumented metrics', () => {
  for (const project of Object.values(projects)) {
    assert.ok(project.meta.period && project.meta.deliverables, project.id);
    assert.ok(project.outcomes.delivered && project.outcomes.validationPlan, project.id);
    assert.equal(project.outcomes.measured, undefined, project.id);
    assert.equal(project.outcomes.validated, undefined, project.id);
    const text = JSON.stringify([project.outcomes, project.decisions]);
    assert.ok(!/(?:100%|90%|35%|60%|4\.5 minutes|45 seconds|top evaluation score)/i.test(text), project.id);
  }
});

test('SmartMeet cover and workflow images use the corresponding design screens', async () => {
  assert.equal(projects.smartmeet.image, projects.smartmeet.screens.meetingReview);
  assert.ok(!projects.smartmeet.image.includes('Thumbnail'));
  const screens = projectPresentation.smartmeet.screens;
  assert.equal(screens.find(screen => screen.id === 'review').image, projects.smartmeet.screens.meetingReview);
  assert.equal(screens.find(screen => screen.id === 'schedule').image, projects.smartmeet.screens.newMeeting);
  assert.ok(screens.every(screen => !screen.image.includes('live-meeting.jpg') && !screen.image.includes('Thumbnail')));
});

test('downloadable CV in the build matches the revised source asset', async () => {
  const original = await readFile('public/Marwan-Ashraf-uiux design-CV.pdf');
  const deployed = await readFile('dist/Marwan-Ashraf-uiux design-CV.pdf');
  assert.deepEqual(deployed, original);
});

test('the latest live project has distinct, locally served screen assets', async () => {
  const latest = flagshipProjects[0];
  assert.equal(latest.id, 'vactives');
  assert.equal(latest.liveUrl, 'https://www.vactives.com/');
  assert.equal(latest.meta.statusShort, 'Live website');
  assert.equal(new Set(latest.screenTabs.map(screen => screen.image)).size, 4);
  for (const screen of latest.screenTabs) {
    await access(`public${screen.image}`);
    const screenshot = await readFile(`dist${screen.image}`);
    assert.ok(screenshot.length > 10000, screen.image);
  }
  assert.equal(new Set(projectKeys.map(id => projects[id].num)).size, projectKeys.length);
});


test('every published project has a concise, truthful visual presentation and existing screens', async () => {
  for (const id of projectKeys) {
    const look = getPresentation(id);
    assert.ok(look, id);
    assert.ok(workFilters.some(filter => filter.id === look.category), id);
    assert.ok(look.tagline.split(/\s+/).length <= 14, id);
    assert.ok(look.brief.split(/\s+/).length <= 25, id);
    assert.ok(look.solution.split(/\s+/).length <= 25, id);
    assert.ok(look.screens.length >= 3, id);
    assert.equal(new Set(look.screens.map(screen => screen.id)).size, look.screens.length, id);
    for (const screen of look.screens) await access(`public${screen.image}`);
    if (look.logo) await access(`public${look.logo}`);
  }
  for (const id of ['__proto__', 'constructor', 'missing']) assert.equal(getPresentation(id), null);
  assert.match(getPresentation('smartmeet').stage, /prototype/i);
  assert.match(getPresentation('wecare').stage, /exploration/i);
  assert.match(getPresentation('goldera').stage, /design/i);
});

test('brand collections retain their original artwork and valid cover images', async () => {
  for (const project of gallery) {
    await access(`public${archivePresentation[project.id].cover}`);
    for (const group of project.groups || [project]) {
      for (const item of [group.hero, ...(group.rows || []).flatMap(row => row.items)].filter(Boolean)) await access(`public${item.image}`);
    }
  }
});

test('archive preview exports cover every artwork without replacing its original', async () => {
  const previews = JSON.parse(await readFile('src/data/archivePreviews.json', 'utf8'));
  const originals = new Set();
  for (const project of gallery) for (const group of project.groups || [project]) {
    [group.hero, ...(group.rows || []).flatMap(row => row.items)].filter(Boolean).forEach(item => originals.add(item.image));
  }
  assert.deepEqual(new Set(Object.keys(previews)), originals);
  let originalBytes = 0;
  let previewBytes = 0;
  for (const source of originals) {
    assert.notEqual(previews[source], source);
    originalBytes += (await stat(`public${source}`)).size;
    previewBytes += (await stat(`public${previews[source]}`)).size;
  }
  assert.ok(previewBytes < originalBytes / 2);
});
