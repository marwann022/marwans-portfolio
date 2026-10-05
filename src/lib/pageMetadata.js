import { projects, projectKeys } from '../data/projects.js';
import { archiveProjects, archiveKeys } from '../data/gallery.js';

export const defaultSiteUrl = 'https://marwans-portfolio-wine.vercel.app';
export const publicPaths = ['/', '/projects', '/contact', ...projectKeys.map(id => `/projects/${id}`), ...archiveKeys.map(id => `/archive/${id}`)];

export function normalizeSiteUrl(value = defaultSiteUrl) {
  const url = new URL(value);
  if (url.protocol !== 'https:' || url.username || url.password || url.pathname !== '/' || url.search || url.hash) {
    throw new Error('VITE_SITE_URL must be a public HTTPS origin without a path or credentials.');
  }
  return url.origin;
}

export function getPageMetadata(path, siteUrl = defaultSiteUrl) {
  const origin = normalizeSiteUrl(siteUrl);
  const normalizedPath = path.replace(/\/+$/, '') || '/';
  const slug = normalizedPath.split('/')[2];
  const project = normalizedPath.startsWith('/projects/') && Object.hasOwn(projects, slug) ? projects[slug] : null;
  const archive = normalizedPath.startsWith('/archive/') && Object.hasOwn(archiveProjects, slug) ? archiveProjects[slug] : null;
  const pages = {
    '/': ['Marwan Elgammal — UI/UX Designer & Front-End Developer', 'Portfolio of Marwan Elgammal, Lead Product Designer & Frontend Developer specializing in SaaS systems, Vue 3 applications, and interaction design.'],
    '/projects': ['Selected Product Work & Case Studies — Marwan Elgammal', 'Explore product design case studies, healthcare experiences, enterprise CRM systems, and visual identities.'],
    '/contact': ['Contact & Primary Inbox — Marwan Elgammal', 'Get in touch with Marwan Elgammal for product design, design systems, or frontend development opportunities.']
  };
  const known = publicPaths.includes(normalizedPath);
  const [title, description] = known && project
    ? [`${project.name} — Case Study | Marwan Elgammal`, project.blurb]
    : known && archive
      ? [`${archive.name} — Visual Identity & Brand System | Marwan Elgammal`, archive.summary]
      : pages[normalizedPath] || ['404 Page Not Found — Marwan Elgammal', 'This page could not be found. Explore the portfolio and selected projects.'];
  return {
    title, description,
    url: new URL(normalizedPath, origin).href,
    image: new URL(known ? project?.image || archive?.image || '/Thumbnail.png' : '/Thumbnail.png', origin).href,
    robots: known ? 'index, follow' : 'noindex, follow'
  };
}

export function applyPageMetadata(path, siteUrl = defaultSiteUrl) {
  const meta = getPageMetadata(path, siteUrl);
  document.title = meta.title;
  const values = {
    'meta[name="description"]': meta.description,
    'meta[name="robots"]': meta.robots,
    'meta[property="og:title"]': meta.title,
    'meta[property="og:description"]': meta.description,
    'meta[property="og:url"]': meta.url,
    'meta[property="og:image"]': meta.image,
    'meta[name="twitter:title"]': meta.title,
    'meta[name="twitter:description"]': meta.description,
    'meta[name="twitter:image"]': meta.image
  };
  for (const [selector, content] of Object.entries(values)) document.querySelector(selector)?.setAttribute('content', content);
  document.querySelector('link[rel="canonical"]')?.setAttribute('href', meta.url);
}
