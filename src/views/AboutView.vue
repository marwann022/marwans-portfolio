<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <main class="about-page min-h-[calc(100vh-82px)] font-sans text-ink">
    <!-- Hero Section -->
    <section class="py-16 md:py-24 px-5 md:px-[7vw] bg-ink text-paper">
      <p class="font-sans font-bold text-[12px] tracking-[0.05em] uppercase m-0 text-lime">ABOUT MARWAN ASHRAF</p>
      <h1 class="text-[clamp(40px,6.5vw,92px)] leading-[1.04] tracking-[-0.035em] my-6 font-extrabold">
        Engineering logic.<br /><span class="font-serif italic font-normal text-paper/90">Product design execution.</span>
      </h1>
      <p class="max-w-[620px] text-[17px] md:text-[19px] leading-[1.55] tracking-[-0.01em] text-paper/90 font-medium mb-8">
        Computer &amp; Control Engineering B.Sc. graduate and ITI 6-Month UI/UX Development Scholar. I bridge user research and Figma design systems with production-ready Vue.js code.
      </p>

      <div class="flex flex-wrap items-center gap-4">
        <a
          href="/Marwan-Ashraf-Product-Designer-CV.pdf"
          download="Marwan-Ashraf-Product-Designer-CV.pdf"
          class="px-6 py-3.5 bg-lime text-ink rounded-full font-extrabold text-[13px] hover:bg-lime/90 transition-colors"
        >
          Download CV / Résumé ↗
        </a>
        <RouterLink
          to="/contact"
          class="px-6 py-3.5 border border-paper/40 text-paper rounded-full font-bold text-[13px] hover:bg-paper hover:text-ink transition-colors"
        >
          Get in touch
        </RouterLink>
      </div>
    </section>

    <!-- Narrative Discipline Progression Section -->
    <section class="py-16 md:py-24 px-5 md:px-[7vw] bg-paper border-b border-ink">
      <p class="font-sans font-bold text-[12px] tracking-[0.05em] uppercase mb-8 text-ink/70">
        (01) HOW THE BACKGROUND ENRICHES THE WORK
      </p>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div class="p-6 border border-ink bg-paper space-y-2">
          <span class="text-[11px] font-extrabold uppercase tracking-wider text-ink/50 block">01 / FOUNDATION</span>
          <h3 class="text-[18px] font-extrabold text-ink m-0">Engineering Background</h3>
          <p class="text-[13px] leading-[1.55] text-ink/80 font-medium m-0">
            Contributes systems thinking, algorithmic logic, edge-case coverage, and deep respect for technical feasibility.
          </p>
        </div>

        <div class="p-6 border border-ink bg-paper space-y-2">
          <span class="text-[11px] font-extrabold uppercase tracking-wider text-ink/50 block">02 / CRAFT</span>
          <h3 class="text-[18px] font-extrabold text-ink m-0">Visual Design</h3>
          <p class="text-[13px] leading-[1.55] text-ink/80 font-medium m-0">
            Contributes typographic hierarchy, visual density control, brand sensitivity, and polished visual aesthetics.
          </p>
        </div>

        <div class="p-6 border border-ink bg-paper space-y-2">
          <span class="text-[11px] font-extrabold uppercase tracking-wider text-ink/50 block">03 / PRODUCT</span>
          <h3 class="text-[18px] font-extrabold text-ink m-0">Product &amp; UX Thinking</h3>
          <p class="text-[13px] leading-[1.55] text-ink/80 font-medium m-0">
            Contributes persona workflow mapping, user interview insights, decision trees, and problem-first design rationale.
          </p>
        </div>

        <div class="p-6 border border-ink bg-paper space-y-2">
          <span class="text-[11px] font-extrabold uppercase tracking-wider text-ink/50 block">04 / EXECUTION</span>
          <h3 class="text-[18px] font-extrabold text-ink m-0">Frontend Quality</h3>
          <p class="text-[13px] leading-[1.55] text-ink/80 font-medium m-0">
            Contributes Vue 3 component architecture, accessible HTML semantics, clean handoff specs, and dev collaboration.
          </p>
        </div>
      </div>
    </section>

    <!-- Reverse Chronological Timeline -->
    <section class="py-16 md:py-24 px-5 md:px-[7vw] grid grid-cols-1 md:grid-cols-[25%_1fr] gap-6 md:gap-10 border-b border-ink">
      <p class="font-sans font-bold text-[12px] tracking-[0.05em] uppercase m-0 text-ink/70">(02) EXPERIENCE TIMELINE</p>
      <div class="border-t border-ink">
        <article class="grid grid-cols-[70px_1fr] md:grid-cols-[18%_1fr] border-b border-ink py-6 gap-5">
          <b class="font-sans text-[12px] font-bold text-ink/80">2026</b>
          <span class="text-[15px] leading-[1.5] text-ink/90 font-medium">
            <strong class="text-[18px] block mb-1.5 font-extrabold text-ink">Lead UI/UX Designer · GolderaPharm CRM</strong>
            Architected and designed role-based pharma CRM (50+ high-fidelity screens) for Managers, Supervisors, and Medical Representatives with a modular Figma design system.
          </span>
        </article>
        <article class="grid grid-cols-[70px_1fr] md:grid-cols-[18%_1fr] border-b border-ink py-6 gap-5">
          <b class="font-sans text-[12px] font-bold text-ink/80">2025 - 2026</b>
          <span class="text-[15px] leading-[1.5] text-ink/90 font-medium">
            <strong class="text-[18px] block mb-1.5 font-extrabold text-ink">UI/UX Development Scholar · ITI (ITP Round 2)</strong>
            Six-month intensive professional diploma covering UX Research, Wireframing, System Architecture, Vue 3, Vite, Node.js, Express, MongoDB, and REST APIs.
          </span>
        </article>
        <article class="grid grid-cols-[70px_1fr] md:grid-cols-[18%_1fr] border-b border-ink py-6 gap-5">
          <b class="font-sans text-[12px] font-bold text-ink/80">2025</b>
          <span class="text-[15px] leading-[1.5] text-ink/90 font-medium">
            <strong class="text-[18px] block mb-1.5 font-extrabold text-ink">B.Sc. Computer and Control Engineering</strong>
            Suez Canal University · Final Grade: Very Good. Rigorous grounding in software architecture, logic design, and system feedback.
          </span>
        </article>
        <article class="grid grid-cols-[70px_1fr] md:grid-cols-[18%_1fr] border-b border-ink py-6 gap-5">
          <b class="font-sans text-[12px] font-bold text-ink/80">2024</b>
          <span class="text-[15px] leading-[1.5] text-ink/90 font-medium">
            <strong class="text-[18px] block mb-1.5 font-extrabold text-ink">Graphic &amp; Campaign Designer · Cela (Remote)</strong>
            Created visual identities, digital campaign assets, social media templates, and marketing collateral.
          </span>
        </article>
        <article class="grid grid-cols-[70px_1fr] md:grid-cols-[18%_1fr] border-b border-ink py-6 gap-5">
          <b class="font-sans text-[12px] font-bold text-ink/80">2023</b>
          <span class="text-[15px] leading-[1.5] text-ink/90 font-medium">
            <strong class="text-[18px] block mb-1.5 font-extrabold text-ink">UI/UX Design Intern · ITI</strong>
            Focused training on user research methods, interactive prototyping, Figma components, and basic front-end implementation.
          </span>
        </article>
      </div>
    </section>

    <!-- Grouped Skill Toolkit -->
    <section class="py-16 md:py-24 px-5 md:px-[7vw] grid grid-cols-1 md:grid-cols-[25%_1fr] gap-6 md:gap-10 bg-story-bg border-b border-ink">
      <p class="font-sans font-bold text-[12px] tracking-[0.05em] uppercase m-0 text-ink/80">(03) SKILL TAXONOMY</p>
      <div class="space-y-6">
        <div>
          <h3 class="font-sans text-[14px] font-extrabold text-ink mb-3 uppercase tracking-wider">Product Design &amp; UX</h3>
          <div class="flex flex-wrap gap-2">
            <span class="border border-ink bg-paper px-4 py-1.5 rounded-full font-sans text-[13px] font-bold">Figma Design Systems</span>
            <span class="border border-ink bg-paper px-4 py-1.5 rounded-full font-sans text-[13px] font-bold">User Research &amp; Interviews</span>
            <span class="border border-ink bg-paper px-4 py-1.5 rounded-full font-sans text-[13px] font-bold">User Flows &amp; Wireframing</span>
            <span class="border border-ink bg-paper px-4 py-1.5 rounded-full font-sans text-[13px] font-bold">Role-Based Persona Mapping</span>
            <span class="border border-ink bg-paper px-4 py-1.5 rounded-full font-sans text-[13px] font-bold">Interactive Prototyping</span>
          </div>
        </div>
        <div>
          <h3 class="font-sans text-[14px] font-extrabold text-ink mb-3 uppercase tracking-wider">Frontend &amp; Engineering</h3>
          <div class="flex flex-wrap gap-2">
            <span class="border border-ink bg-paper px-4 py-1.5 rounded-full font-sans text-[13px] font-bold">Vue 3 / Vue-Router</span>
            <span class="border border-ink bg-paper px-4 py-1.5 rounded-full font-sans text-[13px] font-bold">Vite</span>
            <span class="border border-ink bg-paper px-4 py-1.5 rounded-full font-sans text-[13px] font-bold">JavaScript (ES6+)</span>
            <span class="border border-ink bg-paper px-4 py-1.5 rounded-full font-sans text-[13px] font-bold">HTML5 &amp; Semantic Accessibility</span>
            <span class="border border-ink bg-paper px-4 py-1.5 rounded-full font-sans text-[13px] font-bold">TailwindCSS</span>
            <span class="border border-ink bg-paper px-4 py-1.5 rounded-full font-sans text-[13px] font-bold">Node.js / Express</span>
            <span class="border border-ink bg-paper px-4 py-1.5 rounded-full font-sans text-[13px] font-bold">REST API Integration</span>
          </div>
        </div>
        <div>
          <h3 class="font-sans text-[14px] font-extrabold text-ink mb-3 uppercase tracking-wider">Visual &amp; Brand Systems</h3>
          <div class="flex flex-wrap gap-2">
            <span class="border border-ink bg-paper px-4 py-1.5 rounded-full font-sans text-[13px] font-bold">Typography Hierarchy</span>
            <span class="border border-ink bg-paper px-4 py-1.5 rounded-full font-sans text-[13px] font-bold">Brand Guidelines</span>
            <span class="border border-ink bg-paper px-4 py-1.5 rounded-full font-sans text-[13px] font-bold">Photoshop</span>
            <span class="border border-ink bg-paper px-4 py-1.5 rounded-full font-sans text-[13px] font-bold">Illustrator</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Bottom Dual CTAs -->
    <section class="py-16 md:py-20 px-5 md:px-[7vw] bg-paper flex max-md:flex-col items-center justify-between gap-6">
      <div>
        <h3 class="text-[28px] md:text-[36px] font-extrabold tracking-[-0.03em] text-ink m-0">Ready to discuss a role?</h3>
        <p class="text-[15px] text-ink/75 font-medium m-0 mt-1">Review my résumé or get in touch directly.</p>
      </div>
      <div class="flex items-center gap-4">
        <a
          href="/Marwan-Ashraf-Product-Designer-CV.pdf"
          download="Marwan-Ashraf-Product-Designer-CV.pdf"
          class="px-6 py-3 border border-ink bg-paper text-ink font-sans text-[13px] font-bold rounded-full hover:bg-ink hover:text-paper transition-colors"
        >
          Download CV ↗
        </a>
        <RouterLink
          to="/contact"
          class="px-6 py-3 border border-ink bg-ink text-paper font-sans text-[13px] font-bold rounded-full hover:bg-paper hover:text-ink transition-colors"
        >
          Get in touch ↗
        </RouterLink>
      </div>
    </section>
  </main>
</template>

