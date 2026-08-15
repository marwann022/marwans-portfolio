# Marwan's Portfolio

Personal portfolio for **Marwan Ashraf Elgammal** — UI/UX Designer and Developer.

Built with Vue 3, Vue Router, and Vite. Refactored into a clean, production-ready modular architecture.

## Structure

```text
marwans-portfolio/
├── public/assets/       # Approved local project imagery and icons
├── src/
│   ├── assets/          # Static assets
│   ├── components/      # Reusable Vue components
│   │   ├── case-study/  # Case study layout elements
│   │   ├── home/        # Homepage section components
│   │   ├── layout/      # Shell layout (AppHeader, AppFooter, MobileMenu)
│   │   └── shared/      # Shared UI controls (SectionHeader, ArrowButton)
│   ├── composables/     # Navigation composables (useProjectNavigation)
│   ├── data/            # Structured data (projects.js, gallery.js)
│   ├── router/          # Vue Router configuration
│   ├── styles/          # Modular CSS tokens, base, layout, components, pages, responsive
│   ├── views/           # Page view components (Home, About, Contact, CaseStudy, NotFound)
│   ├── App.vue          # Root shell component
│   └── main.js          # App entry point
├── index.html           # App entry point
└── package.json         # Scripts and dependencies
```

## Local development

```bash
npm install
npm run dev
```

## Production

```bash
npm run build
```

Vercel detects the Vite build automatically. The production output is `dist/`.

## Updating projects

Project content lives in `src/data/projects.js` and gallery items in `src/data/gallery.js`. Keep approved exported screens under `public/assets/<project-name>/` and reference them from the project data when they are ready.
