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

</script>

<template>
  <section
    class="lg:min-h-[640px] pt-8 md:pt-14 pb-10 md:pb-16 px-5 md:px-[7vw] lg:px-[90px] relative font-sans overflow-hidden bg-paper"
    @mousemove="handleMouseMove"
    @mouseleave="handleMouseLeave"
  >
    <div class="flex flex-wrap items-center justify-between gap-3 mb-8 md:mb-12">
      <p class="m-0 text-[17px] font-extrabold">Marwan Ashraf Elgammal</p>
      <p class="m-0 text-[12px] font-semibold text-ink/75">Cairo, Egypt · Remote &amp; relocation</p>
    </div>

    <!-- Main Editorial Layout: Grid ratio ~58% content / 42% portrait on desktop -->
    <div class="grid grid-cols-1 lg:grid-cols-[58%_42%] items-end gap-10 lg:gap-0 lg:min-h-[460px]">
      <!-- Left Column: Primary Content & Actions -->
      <div class="z-10 relative space-y-6">

        <h1 class="text-[clamp(40px,6vw,84px)] tracking-[-0.035em] leading-[1.05] max-w-[800px] font-extrabold text-ink m-0">
          <span class="block animate-rise">Product Designer</span>
          <span class="block animate-rise-delay font-serif italic font-normal text-red-900">turning complexity into clarity.</span>
        </h1>

        <p class="text-[17px] md:text-[20px] leading-[1.55] max-w-[540px] tracking-[-0.01em] text-ink/85 font-medium m-0 animate-fade">
          I design clear workflows for SaaS and enterprise products, with frontend skills to take ideas from Figma to working interfaces.
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
            class="px-5 py-3.5 border border-ink text-ink rounded-full font-bold text-[13px] hover:bg-ink hover:text-paper active:scale-[0.98] transition-all inline-flex items-center gap-1.5"
          >
            <span>Download CV</span>
            <font-awesome-icon icon="fa-solid fa-arrow-up-right-from-square" class="text-[0.8em]" />
          </a>
        </div>
      </div>

      <!-- Right Column: Editorial Integrated Portrait Composition -->
      <div class="relative flex flex-col justify-end items-center lg:items-end h-full min-h-[220px] md:min-h-[340px] lg:min-h-[460px]">
        <!-- Subtle Editorial Typographic Watermark (MA) -->
        <div
          class="absolute -top-6 lg:top-4 right-1/2 translate-x-1/2 lg:translate-x-0 lg:right-4 text-[clamp(140px,20vw,280px)] leading-none font-serif italic text-ink/[0.06] select-none pointer-events-none font-extrabold z-0"
          aria-hidden="true"
        >
          MA
        </div>

        <!-- Main Real Portrait Cutout (Clean display on warm paper) -->
        <div
          class="relative z-10 w-full max-w-[380px] sm:max-w-[440px] md:max-w-[480px] lg:max-w-[520px] flex justify-center lg:justify-end animate-fade transition-transform duration-300 ease-out"
          :style="{ transform: `translate3d(${tiltX}px, ${tiltY}px, 0)` }"
        >
          <img
            src="/assets/marwan-portrait.png"
            alt="Marwan Ashraf portrait illustration"
            class="w-full h-auto object-contain object-bottom max-h-[240px] sm:max-h-[360px] lg:max-h-[480px] -mb-10 md:-mb-12 pointer-events-none select-none drop-shadow-[0_12px_24px_rgba(21,21,21,0.08)]"
            loading="eager"
          />
        </div>
      </div>
    </div>

    <p class="mt-12 mb-0 border-t border-ink/20 pt-4 text-[12px] font-semibold text-ink/75">Product design · Design systems · Vue implementation</p>
  </section>
</template>
