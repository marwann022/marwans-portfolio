# Marwan Ashraf — Senior Product Designer & Frontend UX Engineer Portfolio

[![Live Demo](https://img.shields.io/badge/Live_Website-marwans--portfolio-151515?style=for-the-badge&logo=vercel&logoColor=white)](https://marwans-portfolio-wine.vercel.app/)
[![Vue 3](https://img.shields.io/badge/Vue.js-v3.x-4FC08D?style=for-the-badge&logo=vuedotjs&logoColor=white)](https://vuejs.org/)
[![Vite](https://img.shields.io/badge/Vite-v6.x-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-v3.x-38BDF8?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)

A modern, editorial, evidence-backed personal portfolio built for **Marwan Ashraf Elgammal** — Senior Product Designer & UI/UX Developer focused on complex workflows, enterprise SaaS platforms, role-based CRMs, and scalable design systems.

---

## 🌟 Key Highlights & Architecture

### 1. Curated Flagship Product Work
The homepage features **exactly 3 flagship product case studies** with distinct editorial layouts and domain-level depth:
1. **01. SmartMeet** (`AI PRODUCTIVITY · VUE 3`): AI meeting intelligence and productivity platform featuring split-screen live transcripts, RAG search, and automated task extraction.
2. **02. WeCare** (`HEALTHCARE APP · UX PROCESS`): End-to-end healthcare product experience covering doctor discovery, progressive 3-step booking wizard, and anxiety-reducing UX workflows.
3. **03. GolderaPharm** (`ENTERPRISE SAAS · CRM`): Enterprise CRM for pharmaceutical field teams managing doctors, visits, planning, and performance across 3 operational roles (*Manager, Supervisor, Medical Rep*).

### 2. Extended Archive (`/projects`)
Organized multi-tier directory housing secondary product work (**HMZ E-Learning**, **212° Franchise**, **IMDb Redesign**) and creative archives (**Brand Identity** like *Moon* & *Cela*, and **Campaign & Social Systems** like *IEEE Recruitment Campaign*).

### 3. Restrained Editorial Design System
- **Typography**: Paired modern sans-serif (*Urbanist*) with editorial serif italics (*Bodoni Moda*).
- **Color Palette**: Sophisticated warm neutrals (`#f5f1e8` off-white paper, `#151515` deep ink, `#181715` dark neutral contact system) accented with restrained tokens (`lime`, `blue`, `coral`).
- **Zero Generic UI Library Dependencies**: Custom layout math, crisp grid borders, subtle micro-animations, and high contrast.

### 4. Accessibility & UX Quality (WCAG Compliance)
- **Keyboard Navigation**: Explicit `:focus-visible` focus rings across all interactive controls.
- **Semantic Routing**: All clickable project cards use `<RouterLink>` rather than non-semantic click handlers.
- **Accessible Mobile Drawer**: Built with `role="dialog"`, `aria-modal="true"`, `aria-expanded`, body scroll locking, and Escape key listeners.
- **Reduced Motion & Skip Links**: Built-in `@media (prefers-reduced-motion: reduce)` support and root skip-to-content link.
- **Direct PDF CV Download**: Integrated downloadable résumé asset (`/Marwan-Ashraf-Product-Designer-CV.pdf`).

---

## 🛠️ Technology Stack

- **Framework**: [Vue 3](https://vuejs.org/) (`<script setup>` Composition API)
- **Build Tool**: [Vite 6](https://vitejs.dev/)
- **Routing**: [Vue Router 4](https://router.vuejs.org/)
- **Styling**: [TailwindCSS 3](https://tailwindcss.com/) + Custom CSS Tokens
- **Icons**: FontAwesome 6 Free

---

## 📁 Repository Structure

```text
marwans-portfolio/
├── public/
│   ├── assets/                      # Approved local project imagery & portraits
│   │   ├── marwan-portrait.png      # Authentic B&W hero illustrated portrait
│   │   └── golderapharm-cover.png   # 3-role CRM showcase cover
│   └── Marwan-Ashraf-Product-Designer-CV.pdf  # Downloadable PDF résumé asset
├── src/
│   ├── assets/                      # Static brand assets
│   ├── components/
│   │   ├── case-study/              # Case study layout components & decision logs
│   │   ├── home/                    # Homepage sections (Hero, Philosophy, Work, Candidate)
│   │   ├── layout/                  # Shell layout (AppHeader, AppFooter, MobileMenu)
│   │   └── shared/                  # Shared UI components (SectionHeader, ArrowButton)
│   ├── composables/                 # Reactive helpers (useProjectNavigation)
│   ├── data/                        # Structured content (projects.js, gallery.js)
│   ├── router/                      # Vue Router route definitions
│   ├── styles/                      # Base CSS design tokens & utilities
│   ├── views/                       # Page view components (Home, Projects, About, Contact, CaseStudy)
│   ├── App.vue                      # Root shell component
│   └── main.js                      # Application entry point
├── index.html                       # HTML5 entry point & meta tags
├── vite.config.js                   # Vite configuration
└── package.json                     # Node dependencies & build scripts
```

---

## 🚀 Local Development

### Prerequisites
- Node.js (v18.x or higher)
- npm (v9.x or higher)

### Setup Instructions

1. **Clone the repository**:
   ```bash
   git clone https://github.com/marwann022/marwans-portfolio.git
   cd marwans-portfolio
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```
   The site will be available at `http://localhost:5173`.

4. **Build for production**:
   ```bash
   npm run build
   ```
   The production bundle is compiled into the `dist/` directory.

5. **Preview production build locally**:
   ```bash
   npm run preview
   ```

---

## 📬 Contact & Connect

- **Email**: [marwanelgammal0@gmail.com](mailto:marwanelgammal0@gmail.com)
- **LinkedIn**: [linkedin.com/in/marwan-ashraf-ibrahim](https://www.linkedin.com/in/marwan-ashraf-ibrahim/)
- **GitHub**: [github.com/marwann022](https://github.com/marwann022)
- **Phone**: +20 101 690 6441

---

*Designed and engineered with care by Marwan Ashraf.*
