import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { projects, flagshipProjects, projectKeys } from '../src/data/projects.js';

test('project roles and stages distinguish client work from prototypes', async () => {
  const resume = JSON.parse(await readFile('content/resume.json', 'utf8'));
  assert.equal(projects.goldera.meta.roleTitle, resume.experience[0].title.split(' | ')[0]);
  assert.equal(projects.goldera.meta.period, 'Jan–May 2026');
  assert.match(projects.smartmeet.meta.statusShort, /prototype/i);
  assert.match(projects.wecare.meta.statusShort, /prototype/i);
  assert.deepEqual(flagshipProjects.map(p => p.id), projectKeys.slice(0, 3));
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
  const hero = await readFile('src/components/case-study/CaseStudyHero.vue', 'utf8');
  const content = await readFile('src/components/case-study/ContentBlock.vue', 'utf8');
  assert.ok(!hero.includes('/Thumbnail.png'));
  assert.ok(!content.includes('/smartmeet-pages/live-meeting.jpg'));
  assert.ok(content.includes('SmartMeet meeting scheduling screen'));
});

test('downloadable CV in the build matches the revised source asset', async () => {
  const original = await readFile('public/Marwan-Ashraf-uiux design-CV.pdf');
  const deployed = await readFile('dist/Marwan-Ashraf-uiux design-CV.pdf');
  assert.deepEqual(deployed, original);
});
