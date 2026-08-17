<script setup>
import { RouterLink } from "vue-router";
import HeroSection from "@/components/home/HeroSection.vue";
import WorkSection from "@/components/home/WorkSection.vue";
import AboutPreview from "@/components/home/AboutPreview.vue";
import { useScrollReveal } from "@/composables/useScrollReveal.js";

useScrollReveal();
</script>

<template>
  <main class="w-full font-sans text-ink bg-paper">
    <HeroSection />

    <!-- Product Thinking Manifesto Banner with Rich Accent Colors -->
    <section class="bg-paper text-ink min-h-[380px] py-16 md:py-24 px-5 md:px-[7vw] relative border-y border-ink">
      <div class="max-w-[1240px] mx-auto space-y-6">
        <div class="flex items-center gap-3">
          <span class="font-mono text-[11px] font-black uppercase tracking-widest bg-[#11427e] text-paper px-2.5 py-0.5 rounded-sm">
            PHILOSOPHY
          </span>
          <span class="text-[12px] font-bold text-ink/60 uppercase tracking-wider">
            PRODUCT &amp; SYSTEMS THINKING
          </span>
        </div>
        
        <h2 class="text-[clamp(34px,4.8vw,68px)] leading-[1.05] tracking-[-0.03em] my-6 max-w-[960px] font-extrabold text-ink">
          Make the complex feel <span class="bg-[#1b6099] text-paper px-3 py-1 rounded-sm font-serif italic font-normal inline-block tracking-normal">considered.</span> Not complicated.
        </h2>

        <p class="text-[17px] md:text-[19px] leading-[1.55] text-ink/85 max-w-[540px] ml-auto font-medium m-0">
          User research gives the work a reason. A component system makes it coherent. Engineering logic makes it real.
        </p>
      </div>
    </section>

    <!-- Exactly 3 Flagship Case Studies -->
    <WorkSection />

    <!-- Career Trajectory & Progression Timeline Section (Integrated directly into Home) -->
    <section id="about" class="py-16 md:py-28 px-5 md:px-[7vw] lg:px-[90px] border-y border-ink bg-story-bg reveal-on-scroll">
      <div class="max-w-[1240px] mx-auto space-y-12">
        <div class="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 border-b border-ink pb-4">
          <div>
            <div class="flex items-center gap-2 mb-2">
              <span class="font-mono text-[11px] font-black uppercase tracking-widest bg-[#1e3a8a] text-paper px-2.5 py-0.5 rounded-sm">
                TRAJECTORY
              </span>
              <span class="font-mono text-[11px] font-bold text-ink/60 uppercase">CAREER EVOLUTION</span>
            </div>
            <h2 class="text-[28px] md:text-[40px] font-extrabold text-ink m-0 tracking-[-0.03em]">
              Professional Progression &amp; Capability Growth
            </h2>
          </div>
          <p class="text-[14px] text-ink/75 font-medium max-w-[420px] m-0">
            How an engineering degree transformed into specialized UI/UX design and Vue 3 frontend implementation.
          </p>
        </div>

        <!-- 4-Stage Career Trajectory Cards with Interactive Hover Lift -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <!-- Stage 1 -->
          <div class="p-6 border border-ink bg-paper space-y-4 rounded-sm hover:-translate-y-1.5 hover:shadow-xl transition-all duration-300 group">
            <div class="flex items-center justify-between border-b border-ink/20 pb-3">
              <span class="font-mono text-[11px] font-black uppercase text-[#1e3a8a] bg-[#1e3a8a]/10 px-2 py-0.5 rounded-sm">ENGINEERING</span>
              <span class="text-[11px] font-bold text-ink/50">2021 — 2025</span>
            </div>
            <h3 class="text-[19px] font-extrabold text-ink m-0 group-hover:text-[#1e3a8a] transition-colors">B.Sc. Control Engineering</h3>
            <p class="text-[13px] text-ink/80 font-medium m-0 leading-[1.55]">
              Suez Canal University. Systems theory, state machines, logic abstraction, and technical feasibility.
            </p>
            <div class="text-[12px] font-extrabold text-[#1e3a8a] pt-2 flex items-center gap-1.5 group-hover:translate-x-1 transition-transform">
              <span>Foundation</span>
              <span>→</span>
            </div>
          </div>

          <!-- Stage 2 -->
          <div class="p-6 border border-ink bg-paper space-y-4 rounded-sm hover:-translate-y-1.5 hover:shadow-xl transition-all duration-300 group">
            <div class="flex items-center justify-between border-b border-ink/20 pb-3">
              <span class="font-mono text-[11px] font-black uppercase text-[#991b1b] bg-[#991b1b]/10 px-2 py-0.5 rounded-sm">VISUAL BRAND</span>
              <span class="text-[11px] font-bold text-ink/50">2023 — 2024</span>
            </div>
            <h3 class="text-[19px] font-extrabold text-ink m-0 group-hover:text-[#991b1b] transition-colors">Visual Systems Lead</h3>
            <p class="text-[13px] text-ink/80 font-medium m-0 leading-[1.55]">
              IEEE Branch &amp; Cela. Directed brand identity systems, typography scale, and recruitment campaign design.
            </p>
            <div class="text-[12px] font-extrabold text-[#991b1b] pt-2 flex items-center gap-1.5 group-hover:translate-x-1 transition-transform">
              <span>Composition</span>
              <span>→</span>
            </div>
          </div>

          <!-- Stage 3 -->
          <div class="p-6 border border-ink bg-paper space-y-4 rounded-sm hover:-translate-y-1.5 hover:shadow-xl transition-all duration-300 group">
            <div class="flex items-center justify-between border-b border-ink/20 pb-3">
              <span class="font-mono text-[11px] font-black uppercase text-[#14532d] bg-[#14532d]/10 px-2 py-0.5 rounded-sm">ITI SCHOLARSHIP</span>
              <span class="text-[11px] font-bold text-ink/50">2025 — 2026</span>
            </div>
            <h3 class="text-[19px] font-extrabold text-ink m-0 group-hover:text-[#14532d] transition-colors">UI/UX Development</h3>
            <p class="text-[13px] text-ink/80 font-medium m-0 leading-[1.55]">
              6-month diploma. User research, interaction prototyping, accessibility, Vue 3, Vite, and REST APIs.
            </p>
            <div class="text-[12px] font-extrabold text-[#14532d] pt-2 flex items-center gap-1.5 group-hover:translate-x-1 transition-transform">
              <span>Code Craft</span>
              <span>→</span>
            </div>
          </div>

          <!-- Stage 4 -->
          <div class="p-6 border-2 border-ink bg-paper space-y-4 rounded-sm hover:-translate-y-1.5 hover:shadow-xl transition-all duration-300 group">
            <div class="flex items-center justify-between border-b border-ink/30 pb-3">
              <span class="font-mono text-[11px] font-black uppercase bg-ink text-paper px-2 py-0.5 rounded-sm">CURRENT</span>
              <span class="text-[11px] font-bold text-ink">2026+</span>
            </div>
            <h3 class="text-[19px] font-extrabold text-ink m-0">Product Designer</h3>
            <p class="text-[13px] text-ink/90 font-medium m-0 leading-[1.55]">
              Designing complex SaaS workflows &amp; building production interfaces (GolderaPharm, WeCare, SmartMeet).
            </p>
            <div class="text-[12px] font-extrabold text-ink pt-2 flex items-center gap-1.5 group-hover:translate-x-1 transition-transform">
              <span>Active Focus</span>
              <span>●</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 4 Core Design Principles Section -->
    <section class="py-16 md:py-24 px-5 md:px-[7vw] border-b border-ink bg-paper reveal-on-scroll">
      <div class="max-w-[1240px] mx-auto space-y-12">
        <div class="flex items-center justify-between border-b border-ink pb-4">
          <div>
            <span class="font-sans font-extrabold text-[12px] tracking-[0.05em] uppercase text-ink/70 block mb-1">
              SYSTEMATIC PRACTICE
            </span>
            <h2 class="text-[28px] md:text-[38px] font-extrabold text-ink m-0 tracking-[-0.03em]">
              How My Engineering Background Shapes My Work
            </h2>
          </div>
          <span class="hidden sm:inline-block text-[12px] font-mono font-extrabold uppercase text-ink/50">4 CORE PRINCIPLES</span>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div class="p-8 border border-ink bg-paper space-y-3 shadow-sm hover:-translate-y-1 hover:shadow-lg transition-all duration-300 group">
            <span class="font-mono text-[11px] font-black uppercase text-[#1e3a8a] bg-[#1e3a8a]/10 px-2.5 py-0.5 rounded-sm">01 / ARCHITECTURE</span>
            <h3 class="text-[22px] font-extrabold text-ink m-0 group-hover:text-[#1e3a8a] transition-colors">Tokenized Component Systems</h3>
            <p class="text-[15px] leading-[1.6] text-ink/80 font-medium m-0">
              I construct Figma component libraries using auto-layout variables and semantic color tokens that map directly to TailwindCSS and CSS custom properties in code repositories.
            </p>
          </div>

          <div class="p-8 border border-ink bg-paper space-y-3 shadow-sm hover:-translate-y-1 hover:shadow-lg transition-all duration-300 group">
            <span class="font-mono text-[11px] font-black uppercase text-[#991b1b] bg-[#991b1b]/10 px-2.5 py-0.5 rounded-sm">02 / COMPREHENSION</span>
            <h3 class="text-[22px] font-extrabold text-ink m-0 group-hover:text-[#991b1b] transition-colors">State Machine Edge Cases</h3>
            <p class="text-[15px] leading-[1.6] text-ink/80 font-medium m-0">
              I design for loading states, empty states, error fallbacks, and permission variants upfront — eliminating guesswork during frontend development.
            </p>
          </div>

          <div class="p-8 border border-ink bg-paper space-y-3 shadow-sm hover:-translate-y-1 hover:shadow-lg transition-all duration-300 group">
            <span class="font-mono text-[11px] font-black uppercase text-[#1e8dc1] bg-[#1e8dc1]/10 px-2.5 py-0.5 rounded-sm">03 / DISCOVERY</span>
            <h3 class="text-[22px] font-extrabold text-ink m-0 group-hover:text-[#1e8dc1] transition-colors">Behavioral Workflow Mapping</h3>
            <p class="text-[15px] leading-[1.6] text-ink/80 font-medium m-0">
              Observing user tasks under real operational stress reveals hidden friction points. I streamline complex multi-step forms into progressive wizards with inline validation.
            </p>
          </div>

          <div class="p-8 border border-ink bg-paper space-y-3 shadow-sm hover:-translate-y-1 hover:shadow-lg transition-all duration-300 group">
            <span class="font-mono text-[11px] font-black uppercase text-[#be9e1c] bg-[#be9e1c]/10 px-2.5 py-0.5 rounded-sm">04 / IMPLEMENTATION</span>
            <h3 class="text-[22px] font-extrabold text-ink m-0 group-hover:text-[#be9e1c] transition-colors">Production Frontend Handoff</h3>
            <p class="text-[15px] leading-[1.6] text-ink/80 font-medium m-0">
              By writing clean Vue 3 and JavaScript, I eliminate communication friction between design deliverables and engineering implementation teams.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Candidate Summary & Proof of Work -->
    <AboutPreview />
  </main>
</template>
