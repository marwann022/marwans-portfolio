# Marwan Ashraf Elgammal — Product & UI/UX Designer

A responsive, image-led portfolio for product design, client websites, and visual identities.

[Live portfolio](https://marwans-portfolio-wine.vercel.app/) · [Work collection](https://marwans-portfolio-wine.vercel.app/projects)

## Experience

- Four selected projects: VActives Agency, GolderaPharm, SmartMeet, and WeCare.
- Ten projects and visual collections in a filterable Work grid. Filter state is preserved in the URL.
- Case studies lead with the interface, concise scope, and role. Longer decision rationale, collaboration boundaries, and evaluation notes are available on demand.
- Screen browsing and full-resolution image galleries support keyboard navigation and zoom.
- Responsive artwork galleries retain all original project assets. Lightweight previews keep the initial view smaller.
- Motion uses short entry transitions, once-only scroll reveals, small image parallax, and a page progress indicator. Native scrolling is preserved. Reduced-motion preferences suppress motion.

## Run locally

```bash
npm ci
npm run dev
npm run build
npm test
npm run preview
```

The stack is Vue 3, Vue Router, Vite, Tailwind CSS, locally hosted Urbanist/Bodoni fonts, and Font Awesome Free.

## Content and assets

- Complete project records: `src/data/projects.js`, `src/data/vactives.js`.
- Concise visual presentation and screen selection: `src/data/projectPresentation.js`.
- Visual artwork collections: `src/data/gallery.js`.
- Original assets: `public/`; compressed thumbnails: `public/previews/`.
- Archive preview mapping: `src/data/archivePreviews.json`.
- Optional macOS authoring utility: `node scripts/build-archive-previews.mjs` regenerates the checked-in thumbnails with `sips`. It is not required by the production build.
- Asset provenance: `content/portfolio-assets.md`.
- CV: `public/Marwan-Ashraf-uiux design-CV.pdf`.

Keep real client work, prototypes, and independent exploration clearly distinguished. New projects need a project record and a matching visual presentation; the build derives sharing pages from the same project keys.

## Sharing and deployment

`npm run build` generates standalone HTML metadata for all 13 public routes, including case studies and the creative archive. WhatsApp, LinkedIn, and other crawlers can read each project's title, description, image, and canonical URL without running JavaScript. Vue still renders the page content in the browser.

The public origin defaults to `https://marwans-portfolio-wine.vercel.app`. Set `VITE_SITE_URL` to a verified HTTPS domain when changing domains. The build generates the sitemap and robots file from the same route data, so they stay consistent. Only `VITE_` variables are public; never put secrets in them.

`vercel.json` preserves direct navigation and refresh for client routes. Existing static files are served normally, and missing requests for files such as `.js` and `.png` remain real 404 responses. Unknown application paths show the portfolio's 404 screen and `noindex` metadata. The deployment sets CSP, clickjacking protection, MIME sniffing protection, referrer policy, and permission restrictions. Fonts are served locally. Inline styles remain allowed for Vue's dynamic styling; inline executable scripts and eval are blocked.

The build excludes editable `.psd`/`.ai` sources, source maps, logs, and `.DS_Store` files from the public output; originals stay in the workspace. Below-the-fold case study images load lazily. Project and archive navigation remounts the view, resetting image tabs and closing modals. Unexpected component errors show recovery controls instead of a blank screen.

Validate before publishing:

```bash
npm ci --include=dev
npm run build
npm test
npm audit --omit=dev
npm run preview
```

Test `/projects/goldera` by opening it directly, refreshing, switching tabs, and using back/forward. Repeat on mobile and verify an invalid archive link shows the 404 screen. After deployment, check project-specific Open Graph tags in the raw HTML, security response headers, and that an absent image returns 404 rather than HTML. Local Vite preview does not apply Vercel headers; they must also be checked on Vercel.

The October 2026 audit reports no runtime advisories and five high-severity advisory entries in the Tailwind 3 build-tool dependency tree (`braces` and its dependents). No patched compatible `braces` version was available during this review. Resolving those entries through the suggested Tailwind 4 upgrade requires a separate CSS migration and visual verification. These tools are development dependencies and are not shipped as executable dependencies of this static site.


## Portfolio content and accessibility

Project scope, stage, role, dates, and deliverables are stored in `src/data/projects.js` and reused on Home, Work, and case studies. Case studies distinguish delivered design work from design goals and future evaluation. Quantitative impact and evaluation awards are omitted until supported by documented tasks, participants, and measurement methods. Keep new evidence specific to the project and label production results separately from prototype tests.

The CV source is `content/resume.json`; `scripts/build_resume.py` renders the checked-in PDF using ReportLab and embedded Times New Roman fonts. Run it locally with Python/ReportLab; the current script uses the standard macOS supplemental font paths. The Vercel build serves the checked-in PDF and does not require Python. Preserve the actual employment titles and dates when editing the content.

Mobile navigation and image previews share focus management, background isolation with `inert`, Escape handling, scroll locking, and focus restoration. Image triggers are keyboard-operable buttons. The image viewer fits the artwork to the available width, supports 100–300% zoom, and allows vertical/horizontal scrolling. Screen selectors expose their pressed state and provide 44px targets.
