<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <main class="about-page min-h-[calc(100vh-82px)] font-sans text-ink bg-paper">
    <!-- Hero Section: Editorial & Strong Positioning -->
    <section class="py-16 md:py-24 px-5 md:px-[7vw] bg-ink text-paper border-b border-ink">
      <div class="max-w-[1240px] mx-auto">
        <!-- Top Label & Sub-badge -->
        <div class="flex items-center justify-between border-b border-paper/20 pb-4 mb-10">
          <span class="font-sans font-extrabold text-[12px] tracking-[0.08em] uppercase text-lime">
            ABOUT MARWAN ASHRAF
          </span>
          <span class="text-[12px] font-bold text-paper/60 uppercase tracking-wider hidden sm:inline-block">
            PRODUCT DESIGNER &amp; FRONTEND ENGINEER
          </span>
        </div>

        <!-- Editorial Hero Grid: Text & Portrait -->
        <div class="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-12 lg:gap-16 items-start">
          <div class="space-y-8">
            <h1 class="text-[clamp(36px,5.2vw,76px)] leading-[1.04] tracking-[-0.035em] font-extrabold m-0 text-paper">
              Computer &amp; Control Engineer <br />
              <span class="font-serif italic font-normal text-lime">who designs SaaS products</span> <br />
              &amp; builds production interfaces.
            </h1>

            <p class="text-[18px] md:text-[21px] leading-[1.55] tracking-[-0.015em] text-paper/90 font-medium max-w-[720px]">
              I bridge technical constraints with user psychology. With a B.Sc. in Computer &amp; Control Engineering and 6 months of intensive UI/UX development at ITI, I transform complex operational challenges into systematic, high-performing product experiences.
            </p>

            <!-- Key Strategic Advantage Callout Box -->
            <div class="p-6 border-l-2 border-lime bg-paper/5 rounded-r-md space-y-2">
              <span class="font-sans text-[11px] font-extrabold uppercase tracking-widest text-lime block">
                THE CORE ADVANTAGE
              </span>
              <p class="text-[19px] md:text-[22px] font-serif italic text-paper m-0 leading-[1.35]">
                “I understand both user problems and technical constraints.”
              </p>
              <p class="text-[13px] text-paper/70 font-medium m-0 pt-1">
                Eliminating handoff guesswork between Figma design tokens and production Vue 3 code architecture.
              </p>
            </div>

            <!-- Action Buttons -->
            <div class="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="/Marwan-Ashraf-Product-Designer-CV.pdf"
                download="Marwan-Ashraf-Product-Designer-CV.pdf"
                class="px-7 py-3.5 bg-lime text-ink rounded-full font-extrabold text-[13px] hover:bg-lime/90 transition-colors inline-flex items-center gap-2"
              >
                Download Résumé / CV ↗
              </a>
              <RouterLink
                to="/contact"
                class="px-7 py-3.5 border border-paper/40 text-paper rounded-full font-bold text-[13px] hover:bg-paper hover:text-ink transition-colors"
              >
                Initiate Contact
              </RouterLink>
            </div>
          </div>

          <!-- Real Portrait Photo Area -->
          <div class="space-y-4">
            <div class="border border-paper/30 bg-[#202020] p-3 shadow-2xl">
              <div class="aspect-[4/5] overflow-hidden border border-paper/20 bg-ink relative">
                <img
                  src="/assets/marwan-portrait.png"
                  alt="Marwan Ashraf — Product Designer & Engineer"
                  class="w-full h-full object-cover grayscale contrast-105 hover:grayscale-0 transition-all duration-500"
                />
              </div>
              <div class="pt-3 px-1 flex items-center justify-between text-paper/80 font-sans text-[12px] font-bold">
                <span>Marwan Ashraf</span>
                <span class="text-lime font-mono text-[11px]">Suez Canal Univ B.Sc.</span>
              </div>
            </div>
            <div class="text-[12px] text-paper/60 font-medium leading-[1.5] border-t border-paper/15 pt-3">
              Specialized in role-based enterprise SaaS, health tech appointment systems, and AI workspace platforms.
            </div>
          </div>
        </div>

        <!-- Visual Discipline Progression Bar -->
        <div class="mt-16 pt-10 border-t border-paper/20">
          <p class="font-sans text-[11px] font-extrabold uppercase tracking-widest text-paper/60 mb-6">
            DISCIPLINE EVOLUTION TIMELINE
          </p>
          <div class="grid grid-cols-2 md:grid-cols-5 gap-3">
            <div class="p-4 border border-paper/20 bg-paper/5 space-y-1">
              <span class="text-[10px] font-extrabold uppercase tracking-wider text-lime block">STEP 01</span>
              <strong class="text-[14px] font-extrabold text-paper block">Engineering</strong>
              <span class="text-[11px] text-paper/60 block leading-tight">Systems, logic &amp; feasibility</span>
            </div>
            <div class="p-4 border border-paper/20 bg-paper/5 space-y-1">
              <span class="text-[10px] font-extrabold uppercase tracking-wider text-lime block">STEP 02</span>
              <strong class="text-[14px] font-extrabold text-paper block">Graphic Design</strong>
              <span class="text-[11px] text-paper/60 block leading-tight">Visual composition &amp; brand</span>
            </div>
            <div class="p-4 border border-paper/20 bg-paper/5 space-y-1">
              <span class="text-[10px] font-extrabold uppercase tracking-wider text-lime block">STEP 03</span>
              <strong class="text-[14px] font-extrabold text-paper block">UI/UX Design</strong>
              <span class="text-[11px] text-paper/60 block leading-tight">User flows &amp; prototyping</span>
            </div>
            <div class="p-4 border border-paper/20 bg-paper/5 space-y-1">
              <span class="text-[10px] font-extrabold uppercase tracking-wider text-lime block">STEP 04</span>
              <strong class="text-[14px] font-extrabold text-paper block">Product Design</strong>
              <span class="text-[11px] text-paper/60 block leading-tight">Complex SaaS &amp; systems</span>
            </div>
            <div class="p-4 border border-lime/40 bg-lime/10 space-y-1 col-span-2 md:col-span-1">
              <span class="text-[10px] font-extrabold uppercase tracking-wider text-lime block">CURRENT</span>
              <strong class="text-[14px] font-extrabold text-paper block">Frontend Dev</strong>
              <span class="text-[11px] text-paper/80 block leading-tight">Production-ready Vue 3</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Narrative Background Section (4 Pillars) -->
    <section class="py-16 md:py-24 px-5 md:px-[7vw] border-b border-ink bg-paper">
      <div class="max-w-[1240px] mx-auto">
        <div class="flex items-center justify-between border-b border-ink pb-4 mb-12">
          <div>
            <span class="font-sans font-extrabold text-[12px] tracking-[0.05em] uppercase text-ink/70 block">
              BACKGROUND &amp; PRACTICE
            </span>
            <h2 class="text-[28px] md:text-[36px] font-extrabold text-ink m-0 tracking-[-0.03em]">
              Four Pillars of My Practice
            </h2>
          </div>
          <span class="hidden sm:inline-block text-[12px] font-extrabold uppercase text-ink/50">SYSTEMATIC METHODOLOGY</span>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <!-- Pillar 1 -->
          <div class="p-8 border border-ink bg-paper space-y-4">
            <div class="flex items-center justify-between border-b border-ink pb-3">
              <span class="font-sans text-[11px] font-extrabold uppercase tracking-widest text-ink/50">PILLAR 01</span>
              <span class="text-[12px] font-mono font-bold text-ink/70">Engineering Foundation</span>
            </div>
            <h3 class="text-[22px] font-extrabold text-ink m-0 tracking-[-0.02em]">Algorithmic Rigor &amp; Systemic Feasibility</h3>
            <p class="text-[15px] leading-[1.6] text-ink/80 font-medium m-0">
              My Computer &amp; Control Engineering degree provided deep discipline in logical abstraction, finite state machines, data flow modeling, and edge-case prevention. Every UI layout I craft is built with real implementation architecture in mind.
            </p>
          </div>

          <!-- Pillar 2 -->
          <div class="p-8 border border-ink bg-paper space-y-4">
            <div class="flex items-center justify-between border-b border-ink pb-3">
              <span class="font-sans text-[11px] font-extrabold uppercase tracking-widest text-ink/50">PILLAR 02</span>
              <span class="text-[12px] font-mono font-bold text-ink/70">Design Systems Thinking</span>
            </div>
            <h3 class="text-[22px] font-extrabold text-ink m-0 tracking-[-0.02em]">Tokenized Component Architecture</h3>
            <p class="text-[15px] leading-[1.6] text-ink/80 font-medium m-0">
              Designing scalable UI is not about drawing pretty pages; it is about building modular token systems. I architect Figma component libraries with auto-layout variables, dark/light semantic color tokens, and role-based interface variants that mirror code base structures.
            </p>
          </div>

          <!-- Pillar 3 -->
          <div class="p-8 border border-ink bg-paper space-y-4">
            <div class="flex items-center justify-between border-b border-ink pb-3">
              <span class="font-sans text-[11px] font-extrabold uppercase tracking-widest text-ink/50">PILLAR 03</span>
              <span class="text-[12px] font-mono font-bold text-ink/70">Product Discovery</span>
            </div>
            <h3 class="text-[22px] font-extrabold text-ink m-0 tracking-[-0.02em]">Workflow Observation &amp; Persona Mapping</h3>
            <p class="text-[15px] leading-[1.6] text-ink/80 font-medium m-0">
              Great product design stems from observing how people actually work under pressure. Whether shadowing pharmaceutical sales reps in the field or analyzing patient booking drop-off points, I uncover the underlying operational friction before touching a pixel.
            </p>
          </div>

          <!-- Pillar 4 -->
          <div class="p-8 border border-ink bg-paper space-y-4">
            <div class="flex items-center justify-between border-b border-ink pb-3">
              <span class="font-sans text-[11px] font-extrabold uppercase tracking-widest text-ink/50">PILLAR 04</span>
              <span class="text-[12px] font-mono font-bold text-ink/70">Frontend Implementation</span>
            </div>
            <h3 class="text-[22px] font-extrabold text-ink m-0 tracking-[-0.02em]">Production-Ready Code Handoff</h3>
            <p class="text-[15px] leading-[1.6] text-ink/80 font-medium m-0">
              Writing production Vue 3, TailwindCSS, and JavaScript allows me to build functioning web prototypes, implement responsive visual states, optimize load performance, and communicate seamlessly with backend engineering teams.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Experience Timeline Section -->
    <section class="py-16 md:py-24 px-5 md:px-[7vw] border-b border-ink bg-story-bg">
      <div class="max-w-[1240px] mx-auto">
        <div class="flex items-center justify-between border-b border-ink pb-4 mb-12">
          <div>
            <span class="font-sans font-extrabold text-[12px] tracking-[0.05em] uppercase text-ink/70 block">
              CHRONOLOGICAL TRAJECTORY
            </span>
            <h2 class="text-[28px] md:text-[36px] font-extrabold text-ink m-0 tracking-[-0.03em]">
              Professional Experience &amp; Leadership
            </h2>
          </div>
          <span class="hidden sm:inline-block text-[12px] font-extrabold uppercase text-ink/50">CAREER PATH</span>
        </div>

        <div class="divide-y divide-ink border-t border-b border-ink bg-paper">
          <!-- Experience Item 1 -->
          <article class="p-6 md:p-8 grid grid-cols-1 md:grid-cols-[140px_1fr] gap-6 items-start">
            <div class="font-mono text-[13px] font-extrabold text-ink/70 uppercase">
              2026
            </div>
            <div class="space-y-2">
              <div class="flex flex-wrap items-center justify-between gap-2">
                <h3 class="text-[20px] font-extrabold text-ink m-0">Lead UI/UX Designer · GolderaPharm Enterprise CRM</h3>
                <span class="text-[11px] font-extrabold uppercase bg-ink text-paper px-2.5 py-0.5 rounded-sm">Enterprise SaaS</span>
              </div>
              <p class="text-[15px] leading-[1.55] text-ink/85 font-medium m-0">
                Architected and designed a multi-persona pharmaceutical CRM (50+ high-fidelity screens) custom-fitted for Managers, Supervisors, and Medical Representatives. Constructed the modular Figma design system and handoff documentation.
              </p>
            </div>
          </article>

          <!-- Experience Item 2 -->
          <article class="p-6 md:p-8 grid grid-cols-1 md:grid-cols-[140px_1fr] gap-6 items-start">
            <div class="font-mono text-[13px] font-extrabold text-ink/70 uppercase">
              2025 — 2026
            </div>
            <div class="space-y-2">
              <div class="flex flex-wrap items-center justify-between gap-2">
                <h3 class="text-[20px] font-extrabold text-ink m-0">UI/UX Development Scholar · ITI (ITP Round 2)</h3>
                <span class="text-[11px] font-extrabold uppercase bg-ink text-paper px-2.5 py-0.5 rounded-sm">Professional Diploma</span>
              </div>
              <p class="text-[15px] leading-[1.55] text-ink/85 font-medium m-0">
                Completed an intensive 6-month scholarship in UI/UX research, accessibility standards, interaction prototyping, Vue 3, Vite, Node.js, Express, MongoDB, and REST API full-stack integration.
              </p>
            </div>
          </article>

          <!-- Experience Item 3 -->
          <article class="p-6 md:p-8 grid grid-cols-1 md:grid-cols-[140px_1fr] gap-6 items-start">
            <div class="font-mono text-[13px] font-extrabold text-ink/70 uppercase">
              2021 — 2025
            </div>
            <div class="space-y-2">
              <div class="flex flex-wrap items-center justify-between gap-2">
                <h3 class="text-[20px] font-extrabold text-ink m-0">B.Sc. Computer &amp; Control Engineering · Suez Canal University</h3>
                <span class="text-[11px] font-extrabold uppercase bg-ink text-paper px-2.5 py-0.5 rounded-sm">Grade: Very Good</span>
              </div>
              <p class="text-[15px] leading-[1.55] text-ink/85 font-medium m-0">
                Rigorous grounding in control systems theory, computer architecture, software engineering principles, algorithms, and automated state machine design.
              </p>
            </div>
          </article>

          <!-- Experience Item 4 -->
          <article class="p-6 md:p-8 grid grid-cols-1 md:grid-cols-[140px_1fr] gap-6 items-start">
            <div class="font-mono text-[13px] font-extrabold text-ink/70 uppercase">
              2023 — 2024
            </div>
            <div class="space-y-2">
              <div class="flex flex-wrap items-center justify-between gap-2">
                <h3 class="text-[20px] font-extrabold text-ink m-0">Visual Systems Lead &amp; Creative Director · IEEE Student Branch</h3>
                <span class="text-[11px] font-extrabold uppercase bg-ink text-paper px-2.5 py-0.5 rounded-sm">Leadership</span>
              </div>
              <p class="text-[15px] leading-[1.55] text-ink/85 font-medium m-0">
                Directed brand identity systems, recruitment campaign graphics, stage banners, and digital promo assets for major technical summits and student organization events.
              </p>
            </div>
          </article>

          <!-- Experience Item 5 -->
          <article class="p-6 md:p-8 grid grid-cols-1 md:grid-cols-[140px_1fr] gap-6 items-start">
            <div class="font-mono text-[13px] font-extrabold text-ink/70 uppercase">
              2024
            </div>
            <div class="space-y-2">
              <div class="flex flex-wrap items-center justify-between gap-2">
                <h3 class="text-[20px] font-extrabold text-ink m-0">Graphic &amp; Campaign Designer · Cela (Remote)</h3>
                <span class="text-[11px] font-extrabold uppercase bg-ink text-paper px-2.5 py-0.5 rounded-sm">Brand Identity</span>
              </div>
              <p class="text-[15px] leading-[1.55] text-ink/85 font-medium m-0">
                Designed comprehensive brand guidelines, digital marketing materials, social media campaign templates, and print collateral.
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>

    <!-- Professional Tools & Systems -->
    <section class="py-16 md:py-24 px-5 md:px-[7vw] border-b border-ink bg-paper">
      <div class="max-w-[1240px] mx-auto">
        <div class="flex items-center justify-between border-b border-ink pb-4 mb-12">
          <div>
            <span class="font-sans font-extrabold text-[12px] tracking-[0.05em] uppercase text-ink/70 block">
              TOOLKIT &amp; TECH SPECS
            </span>
            <h2 class="text-[28px] md:text-[36px] font-extrabold text-ink m-0 tracking-[-0.03em]">
              Verified Production Tools
            </h2>
          </div>
          <span class="hidden sm:inline-block text-[12px] font-extrabold uppercase text-ink/50">NO FLOATING BADGES</span>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <!-- Tool 1: Figma -->
          <div class="p-6 border border-ink bg-paper space-y-3">
            <div class="flex items-center justify-between border-b border-ink/20 pb-2">
              <span class="font-sans text-[14px] font-black text-ink uppercase">Figma</span>
              <span class="text-[11px] font-extrabold uppercase text-ink/60 font-mono">Product Design</span>
            </div>
            <p class="text-[13px] leading-[1.55] text-ink/80 font-medium m-0">
              Advanced design system construction, variable tokens, auto-layout 5.0, interactive high-fidelity prototyping, and dev spec documentation.
            </p>
          </div>

          <!-- Tool 2: Vue.js -->
          <div class="p-6 border border-ink bg-paper space-y-3">
            <div class="flex items-center justify-between border-b border-ink/20 pb-2">
              <span class="font-sans text-[14px] font-black text-ink uppercase">Vue.js</span>
              <span class="text-[11px] font-extrabold uppercase text-ink/60 font-mono">Frontend Engineering</span>
            </div>
            <p class="text-[13px] leading-[1.55] text-ink/80 font-medium m-0">
              Vue 3 Composition API, Vue Router, reactive state management, Vite build tooling, and accessible semantic component structures.
            </p>
          </div>

          <!-- Tool 3: VS Code -->
          <div class="p-6 border border-ink bg-paper space-y-3">
            <div class="flex items-center justify-between border-b border-ink/20 pb-2">
              <span class="font-sans text-[14px] font-black text-ink uppercase">VS Code</span>
              <span class="text-[11px] font-extrabold uppercase text-ink/60 font-mono">Development Environment</span>
            </div>
            <p class="text-[13px] leading-[1.55] text-ink/80 font-medium m-0">
              Primary IDE for writing modern HTML5, vanilla CSS/Tailwind, JavaScript ES6+, debugging Vue components, and workspace management.
            </p>
          </div>

          <!-- Tool 4: GitHub -->
          <div class="p-6 border border-ink bg-paper space-y-3">
            <div class="flex items-center justify-between border-b border-ink/20 pb-2">
              <span class="font-sans text-[14px] font-black text-ink uppercase">GitHub</span>
              <span class="text-[11px] font-extrabold uppercase text-ink/60 font-mono">Version Control</span>
            </div>
            <p class="text-[13px] leading-[1.55] text-ink/80 font-medium m-0">
              Git workflow, branch management, pull request code reviews, and developer handoff repository structure.
            </p>
          </div>

          <!-- Tool 5: Adobe Photoshop -->
          <div class="p-6 border border-ink bg-paper space-y-3">
            <div class="flex items-center justify-between border-b border-ink/20 pb-2">
              <span class="font-sans text-[14px] font-black text-ink uppercase">Adobe Photoshop</span>
              <span class="text-[11px] font-extrabold uppercase text-ink/60 font-mono">Raster &amp; Visual Editing</span>
            </div>
            <p class="text-[13px] leading-[1.55] text-ink/80 font-medium m-0">
              High-resolution product mockup editing, image post-processing, campaign visual composition, and texture creation.
            </p>
          </div>

          <!-- Tool 6: Adobe Illustrator -->
          <div class="p-6 border border-ink bg-paper space-y-3">
            <div class="flex items-center justify-between border-b border-ink/20 pb-2">
              <span class="font-sans text-[14px] font-black text-ink uppercase">Adobe Illustrator</span>
              <span class="text-[11px] font-extrabold uppercase text-ink/60 font-mono">Vector Systems</span>
            </div>
            <p class="text-[13px] leading-[1.55] text-ink/80 font-medium m-0">
              Vector iconography design, brand logo construction, scalable SVG graphics, and precise layout grid assets.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Bottom Action CTA -->
    <section class="py-16 md:py-20 px-5 md:px-[7vw] bg-paper flex max-md:flex-col items-center justify-between gap-6">
      <div class="max-w-[1240px] mx-auto w-full flex max-md:flex-col items-center justify-between gap-6">
        <div>
          <h3 class="text-[28px] md:text-[36px] font-extrabold tracking-[-0.03em] text-ink m-0">Interested in working together?</h3>
          <p class="text-[15px] text-ink/75 font-medium m-0 mt-1">Explore my case studies or get in touch directly to discuss product roles.</p>
        </div>
        <div class="flex items-center gap-4">
          <RouterLink
            to="/projects"
            class="px-6 py-3.5 border border-ink bg-paper text-ink font-sans text-[13px] font-extrabold rounded-full hover:bg-ink hover:text-paper transition-colors"
          >
            Explore Featured Work ↗
          </RouterLink>
          <RouterLink
            to="/contact"
            class="px-6 py-3.5 border border-ink bg-ink text-paper font-sans text-[13px] font-extrabold rounded-full hover:bg-paper hover:text-ink transition-colors"
          >
            Get in Touch ↗
          </RouterLink>
        </div>
      </div>
    </section>
  </main>
</template>
