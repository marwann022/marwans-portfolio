<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <main class="about-page min-h-[calc(100vh-82px)] font-sans">
    <!-- Hero Section -->
    <section class="py-16 md:py-24 px-5 md:px-[7vw] bg-ink text-paper">
      <p class="font-sans font-bold text-[12px] tracking-[0.05em] uppercase m-0 text-lime">ABOUT MARWAN</p>
      <h1 class="text-[clamp(44px,7vw,96px)] leading-[1.05] tracking-[-0.03em] my-8 font-extrabold">
        A designer who<br /><span class="font-serif italic font-normal text-paper/90">understands the build.</span>
      </h1>
      <p class="max-w-[540px] text-[18px] leading-[1.55] tracking-[-0.01em] text-paper/90 font-medium">
        Computer and Control Engineering graduate, UI/UX Designer, and UI/UX Developer trained at ITI.
      </p>
    </section>

    <!-- Compact Proof of Work Outcomes Section -->
    <section class="py-12 px-5 md:px-[7vw] bg-paper border-b border-ink">
      <p class="font-sans font-bold text-[12px] tracking-[0.05em] uppercase mb-6 text-ink/70">PROOFS OF WORK & IMPACT</p>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div class="p-5 border border-ink bg-paper shadow-[4px_4px_0_rgba(21,21,21,0.12)]">
          <span class="font-sans text-[36px] font-extrabold tracking-[-0.03em] block text-ink">50+</span>
          <span class="font-sans text-[12px] text-ink/80 font-bold leading-[1.4]">High-fidelity screens designed across CRM, mobile, and web applications</span>
        </div>
        <div class="p-5 border border-ink bg-paper shadow-[4px_4px_0_rgba(21,21,21,0.12)]">
          <span class="font-sans text-[36px] font-extrabold tracking-[-0.03em] block text-ink">3 User Roles</span>
          <span class="font-sans text-[12px] text-ink/80 font-bold leading-[1.4]">Mapped persona workflows for Managers, Supervisors, and Field Representatives</span>
        </div>
        <div class="p-5 border border-ink bg-paper shadow-[4px_4px_0_rgba(21,21,21,0.12)]">
          <span class="font-sans text-[36px] font-extrabold tracking-[-0.03em] block text-ink">Design Systems</span>
          <span class="font-sans text-[12px] text-ink/80 font-bold leading-[1.4]">Figma component libraries assembled for clean front-end developer handoffs</span>
        </div>
      </div>
    </section>

    <!-- Reverse Chronological Timeline -->
    <section class="py-16 md:py-24 px-5 md:px-[7vw] grid grid-cols-1 md:grid-cols-[25%_1fr] gap-6 md:gap-10 border-b border-ink">
      <p class="font-sans font-bold text-[12px] tracking-[0.05em] uppercase m-0 text-ink/70">(01) TIMELINE</p>
      <div class="border-t border-ink">
        <article class="grid grid-cols-[70px_1fr] md:grid-cols-[18%_1fr] border-b border-ink py-5 gap-5">
          <b class="font-sans text-[12px] font-bold text-ink/80">2026</b>
          <span class="text-[15px] leading-[1.5] text-ink/90 font-medium">
            <strong class="text-[18px] block mb-1.5 font-extrabold text-ink">UI/UX Designer · GolderaPharm</strong>
            Designed and implemented role-based pharma CRM, 50+ screens, dashboards, and a reusable design system.
          </span>
        </article>
        <article class="grid grid-cols-[70px_1fr] md:grid-cols-[18%_1fr] border-b border-ink py-5 gap-5">
          <b class="font-sans text-[12px] font-bold text-ink/80">2026</b>
          <span class="text-[15px] leading-[1.5] text-ink/90 font-medium">
            <strong class="text-[18px] block mb-1.5 font-extrabold text-ink">ITI · UI/UX Development, ITP Round 2</strong>
            Six-month intensive professional training covering UX, front end, back end, AI, Vue.js, Node.js, MongoDB, and REST APIs.
          </span>
        </article>
        <article class="grid grid-cols-[70px_1fr] md:grid-cols-[18%_1fr] border-b border-ink py-5 gap-5">
          <b class="font-sans text-[12px] font-bold text-ink/80">2025</b>
          <span class="text-[15px] leading-[1.5] text-ink/90 font-medium">
            <strong class="text-[18px] block mb-1.5 font-extrabold text-ink">B.Sc. Computer and Control Engineering</strong>
            Suez Canal University · Final Grade: Very Good.
          </span>
        </article>
        <article class="grid grid-cols-[70px_1fr] md:grid-cols-[18%_1fr] border-b border-ink py-5 gap-5">
          <b class="font-sans text-[12px] font-bold text-ink/80">2024</b>
          <span class="text-[15px] leading-[1.5] text-ink/90 font-medium">
            <strong class="text-[18px] block mb-1.5 font-extrabold text-ink">Graphic Designer · Cela</strong>
            Remote part-time work creating posters, logos, and advertising assets.
          </span>
        </article>
        <article class="grid grid-cols-[70px_1fr] md:grid-cols-[18%_1fr] border-b border-ink py-5 gap-5">
          <b class="font-sans text-[12px] font-bold text-ink/80">2023</b>
          <span class="text-[15px] leading-[1.5] text-ink/90 font-medium">
            <strong class="text-[18px] block mb-1.5 font-extrabold text-ink">ITI · UI/UX Design Internship</strong>
            UX research, Figma, wireframing, prototyping, visual design, and basic front end.
          </span>
        </article>
      </div>
    </section>

    <!-- Grouped Skill Toolkit -->
    <section class="py-16 md:py-24 px-5 md:px-[7vw] grid grid-cols-1 md:grid-cols-[25%_1fr] gap-6 md:gap-10 bg-lime">
      <p class="font-sans font-bold text-[12px] tracking-[0.05em] uppercase m-0 text-ink/80">(02) TOOLKIT</p>
      <div class="space-y-6">
        <div>
          <h3 class="font-sans text-[16px] font-extrabold text-ink mb-3 uppercase tracking-wider">Product Design</h3>
          <div class="flex flex-wrap gap-2">
            <span class="border border-ink bg-paper/70 px-4 py-1.5 rounded-full font-sans text-[13px] font-bold">Figma</span>
            <span class="border border-ink bg-paper/70 px-4 py-1.5 rounded-full font-sans text-[13px] font-bold">UX Research</span>
            <span class="border border-ink bg-paper/70 px-4 py-1.5 rounded-full font-sans text-[13px] font-bold">Design Systems</span>
            <span class="border border-ink bg-paper/70 px-4 py-1.5 rounded-full font-sans text-[13px] font-bold">Wireframing</span>
          </div>
        </div>
        <div>
          <h3 class="font-sans text-[16px] font-extrabold text-ink mb-3 uppercase tracking-wider">Frontend Development</h3>
          <div class="flex flex-wrap gap-2">
            <span class="border border-ink bg-paper/70 px-4 py-1.5 rounded-full font-sans text-[13px] font-bold">Vue.js</span>
            <span class="border border-ink bg-paper/70 px-4 py-1.5 rounded-full font-sans text-[13px] font-bold">Vite</span>
            <span class="border border-ink bg-paper/70 px-4 py-1.5 rounded-full font-sans text-[13px] font-bold">Node.js</span>
            <span class="border border-ink bg-paper/70 px-4 py-1.5 rounded-full font-sans text-[13px] font-bold">Express</span>
            <span class="border border-ink bg-paper/70 px-4 py-1.5 rounded-full font-sans text-[13px] font-bold">MongoDB</span>
            <span class="border border-ink bg-paper/70 px-4 py-1.5 rounded-full font-sans text-[13px] font-bold">REST APIs</span>
          </div>
        </div>
        <div>
          <h3 class="font-sans text-[16px] font-extrabold text-ink mb-3 uppercase tracking-wider">Visual Design</h3>
          <div class="flex flex-wrap gap-2">
            <span class="border border-ink bg-paper/70 px-4 py-1.5 rounded-full font-sans text-[13px] font-bold">Photoshop</span>
            <span class="border border-ink bg-paper/70 px-4 py-1.5 rounded-full font-sans text-[13px] font-bold">Illustrator</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Bottom Dual CTAs -->
    <section class="py-16 md:py-20 px-5 md:px-[7vw] bg-paper flex max-md:flex-col items-center justify-between gap-6 border-t border-ink">
      <div>
        <h3 class="text-[28px] md:text-[36px] font-extrabold tracking-[-0.03em] text-ink m-0">Ready to explore?</h3>
        <p class="text-[15px] text-ink/75 font-medium m-0 mt-1">Check out selected case studies or reach out directly.</p>
      </div>
      <div class="flex items-center gap-4">
        <RouterLink
          to="/"
          class="px-6 py-3 border border-ink bg-paper text-ink font-sans text-[13px] font-bold rounded-full hover:bg-ink hover:text-paper transition-colors"
        >
          View selected work ↗
        </RouterLink>
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
