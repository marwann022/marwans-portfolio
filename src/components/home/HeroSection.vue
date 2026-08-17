<script setup>
import { ref } from "vue";
import { RouterLink } from "vue-router";

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
          <span class="block animate-rise-delay font-serif italic font-normal text-ink/90">shaped by engineering logic.</span>
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

    <!-- Bottom Dark Ticker (Provides depth layer underneath portrait) -->
    <div class="absolute bottom-0 left-0 w-full overflow-hidden bg-ink text-paper h-[40px] flex whitespace-nowrap items-center font-sans font-semibold text-[11px] tracking-[0.05em] z-20" aria-hidden="true">
      <span class="block animate-marquee">SYSTEMS THINKING · SaaS WORKFLOWS · FIGMA DESIGN SYSTEMS · VUE 3 FRONTEND · ACCESSIBLE UX · PRODUCT DESIGNER · UI/UX DESIGNER · UX Researcher · Engineering Background · </span>
      <span class="block animate-marquee">SYSTEMS THINKING · SaaS WORKFLOWS · FIGMA DESIGN SYSTEMS · VUE 3 FRONTEND · ACCESSIBLE UX · PRODUCT DESIGNER · UI/UX DESIGNER · UX Researcher · Engineering Background ·</span>
    </div>
  </section>
</template>
