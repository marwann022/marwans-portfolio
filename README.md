# Marwan's Portfolio

Personal portfolio for **Marwan Ashraf Elgammal** — UI/UX Designer and Developer.

Built with Vue and Vite. Each core project is available as a hash-routed case-study page, which keeps every link reliable on static hosting.

## Structure

```text
marwans-portfolio/
├── public/assets/       # Approved local project imagery and icons
├── src/main.js          # Portfolio content, routing, and project data
├── src/style.css        # Visual system, layouts, motion, and responsive rules
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

Project content lives in `src/main.js`. Keep approved exported screens under `public/assets/<project-name>/` and reference them from the project data when they are ready.
