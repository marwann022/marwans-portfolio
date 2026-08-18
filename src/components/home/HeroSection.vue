<script setup>
import { ref } from "vue";

const tiltX = ref(0);
const tiltY = ref(0);

function handleMouseMove(e) {
  if (window.innerWidth < 1024) return;
  const rect = e.currentTarget.getBoundingClientRect();
  const x = (e.clientX - rect.left) / rect.width - 0.5;
  const y = (e.clientY - rect.top) / rect.height - 0.5;
  tiltX.value = x * 6; // max 3px shift
  tiltY.value = y * 4; // max 2px shift
}

function handleMouseLeave() {
  tiltX.value = 0;
  tiltY.value = 0;
}

// Easily expandable tools array for the continuous ticker
const toolsList = ref([
  "Figma",
  "Photoshop",
  "Antigravity",
  "Visual Studio",
  "Anghami",
  "Vue.js",
  "TailwindCSS",
  "Git",
  "Illustrator",
  "Figma",
  "Photoshop",
  "Antigravity",
  "Visual Studio",
  "Anghami"
]);
</script>

<template>
  <section
    class="min-h-[620px] lg:min-h-[700px] pt-8 md:pt-14 pb-20 md:pb-24 px-5 md:px-[7vw] lg:px-[90px] relative font-sans overflow-hidden bg-paper"
    @mousemove="handleMouseMove"
    @mouseleave="handleMouseLeave"
  >
    <!-- Top Metadata Bar -->
    <div class="flex items-center justify-between font-sans font-bold text-[12px] uppercase tracking-[0.05em] animate-fade text-ink/70 mb-8 md:mb-12">
      <p class="m-0 flex items-center gap-2">
        <span>Cairo, Egypt</span>
        <span class="text-ink/40">—</span>
        <span>Open to relocate &amp; remote</span>
      </p>
      <div class="font-sans text-[11px] font-extrabold tracking-widest uppercase text-ink/60">
        PRODUCT DESIGNER &amp; FRONTEND BUILDER
      </div>
    </div>

    <!-- Main Editorial Layout: Grid ratio ~58% content / 42% portrait on desktop -->
    <div class="grid grid-cols-1 lg:grid-cols-[58%_42%] items-end gap-10 lg:gap-0 min-h-[460px]">
      <!-- Left Column: Primary Content & Actions -->
      <div class="z-10 relative space-y-6">

        <h1 class="text-[clamp(40px,6vw,84px)] tracking-[-0.035em] leading-[1.05] max-w-[800px] font-extrabold text-ink m-0">
          <span class="block animate-rise">Product Designer</span>
          <span class="block animate-rise-delay font-serif italic font-normal text-red-900">shaped by engineering logic.</span>
        </h1>

        <p class="text-[17px] md:text-[20px] leading-[1.55] max-w-[540px] tracking-[-0.01em] text-ink/85 font-medium m-0 animate-fade">
          Designing complex SaaS workflows, role-based enterprise software, and tokenized design systems — implemented with Vue 3 production craft.
        </p>

        <!-- Primary & Secondary Action CTAs -->
        <div class="pt-4 flex flex-wrap items-center gap-3.5 animate-fade">
          <a
            href="#projects"
            class="px-6 py-3.5 bg-ink text-paper rounded-full font-bold text-[13px] hover:bg-ink/85 active:scale-[0.98] transition-all focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-ink"
          >
            View selected work ↓
          </a>
          <a
            href="/Marwan-Ashraf-uiux%20design-CV.pdf"
            download="Marwan-Ashraf-uiux design-CV.pdf"
            class="px-5 py-3.5 border border-ink text-ink rounded-full font-bold text-[13px] hover:bg-ink hover:text-paper active:scale-[0.98] transition-all"
          >
            Download CV ↗
          </a>
        </div>
      </div>

      <!-- Right Column: Editorial Integrated Portrait Composition -->
      <div class="relative flex flex-col justify-end items-center lg:items-end h-full min-h-[340px] md:min-h-[440px] lg:min-h-[520px]">
        <!-- Subtle Editorial Typographic Watermark (MA) -->
        <div
          class="absolute -top-6 lg:top-4 right-1/2 translate-x-1/2 lg:translate-x-0 lg:right-4 text-[clamp(140px,20vw,280px)] leading-none font-serif italic text-ink/[0.06] select-none pointer-events-none font-extrabold z-0"
          aria-hidden="true"
        >
          MA
        </div>

        <!-- Restrained Side Editorial Metadata (Desktop) -->
        <div class="hidden xl:block absolute top-12 left-0 z-20 font-sans text-[11px] font-extrabold uppercase tracking-widest text-ink/50 border-l border-ink/30 pl-3">
          <p class="m-0 text-ink font-extrabold text-[12px]">MARWAN ASHRAF</p>
          <p class="m-0 text-ink/60 text-[10px] mt-0.5">PRODUCT DESIGN · UX · FRONTEND</p>
          <p class="m-0 text-ink/40 text-[10px] mt-1 font-mono">01 — HERO</p>
        </div>

        <!-- Main Real Portrait Cutout (Clean display on warm paper) -->
        <div
          class="relative z-10 w-full max-w-[380px] sm:max-w-[440px] md:max-w-[480px] lg:max-w-[520px] flex justify-center lg:justify-end animate-fade transition-transform duration-300 ease-out"
          :style="{ transform: `translate3d(${tiltX}px, ${tiltY}px, 0)` }"
        >
          <img
            src="/assets/marwan-portrait.png"
            alt="Marwan Ashraf portrait illustration"
            class="w-full h-auto object-contain object-bottom max-h-[420px] sm:max-h-[500px] lg:max-h-[580px] -mb-10 md:-mb-12 pointer-events-none select-none drop-shadow-[0_12px_24px_rgba(21,21,21,0.08)]"
            loading="eager"
          />
        </div>
      </div>
    </div>

    <!-- Sleek & Editorial Dark Tools Marquee Ticker -->
    <div class="absolute bottom-0 left-0 w-full h-[44px] bg-ink text-paper flex items-center z-20 overflow-hidden border-t border-ink font-mono text-[12px] select-none shadow-lg">
      <!-- Sleek Integrated Left Badge -->
      <div class="h-full bg-[#161616] text-paper px-4 flex items-center gap-2.5 font-mono font-extrabold uppercase tracking-widest shrink-0 z-30 border-r border-paper/20 text-[11px]">
        <span class="w-2 h-2 rounded-full bg-[#27c93f] animate-pulse block"></span>
        <span class="text-paper/90">TOOLS &amp; STACK</span>
        <span class="text-paper/40 font-normal">//</span>
      </div>

      <!-- Continuous Marquee Loop -->
      <div class="relative w-full overflow-hidden flex items-center h-full">
        <div class="flex whitespace-nowrap animate-marquee items-center">
          <template v-for="(tool, idx) in toolsList" :key="'a-' + idx">
            <span class="px-3 py-0.5 rounded border border-paper/20 bg-paper/5 text-paper/90 hover:bg-paper hover:text-ink hover:scale-105 transition-all cursor-default font-extrabold uppercase tracking-widest text-[11px] mx-1.5 shadow-sm">
              {{ tool }}
            </span>
            <span class="text-paper/30 font-sans font-bold text-[10px] mx-1">✦</span>
          </template>
        </div>

        <div class="flex whitespace-nowrap animate-marquee items-center" aria-hidden="true">
          <template v-for="(tool, idx) in toolsList" :key="'b-' + idx">
            <span class="px-3 py-0.5 rounded border border-paper/20 bg-paper/5 text-paper/90 hover:bg-paper hover:text-ink hover:scale-105 transition-all cursor-default font-extrabold uppercase tracking-widest text-[11px] mx-1.5 shadow-sm">
              {{ tool }}
            </span>
            <span class="text-paper/30 font-sans font-bold text-[10px] mx-1">✦</span>
          </template>
        </div>
      </div>
    </div>
  </section>
</template>
