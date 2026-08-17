<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <section class="min-h-[620px] lg:min-h-[680px] pt-8 md:pt-14 pb-20 md:pb-24 px-5 md:px-[7vw] lg:px-[90px] relative font-sans overflow-hidden">
    <!-- Top Metadata Bar -->
    <div class="flex items-center justify-between font-sans font-bold text-[12px] uppercase tracking-[0.05em] animate-fade text-ink/70 mb-8 md:mb-12">
      <p class="m-0 flex items-center gap-2">
        <span>Cairo, Egypt</span>
        <span class="text-ink/40">—</span>
        <span>Open to relocate</span>
      </p>
      <div class="font-sans text-[11px] font-extrabold tracking-widest uppercase text-ink/60">
        MARWAN ASHRAF / PORTFOLIO '26
      </div>
    </div>

    <!-- Main Editorial Layout: Grid ratio ~58% content / 42% portrait on desktop -->
    <div class="grid grid-cols-1 lg:grid-cols-[58%_42%] items-end gap-10 lg:gap-0 min-h-[440px]">
      <!-- Left Column: Primary Content & Actions -->
      <div class="z-10 relative">
        <h1 class="text-[clamp(40px,6.2vw,88px)] tracking-[-0.035em] leading-[1.04] max-w-[780px] font-extrabold text-ink">
          <span class="block animate-rise">Product Designer &amp;</span>
          <span class="block animate-rise-delay font-serif italic font-normal tracking-normal text-ink/90">UI/UX Developer.</span>
        </h1>

        <p class="mt-6 md:mt-8 text-[17px] md:text-[19px] leading-[1.55] max-w-[500px] tracking-[-0.01em] text-ink/85 font-medium m-0 animate-fade">
          Shaping complex SaaS platforms, role-based CRMs, and design systems into intuitive interfaces backed by engineering rigor and frontend quality.
        </p>

        <!-- Primary & Secondary Action CTAs -->
        <div class="mt-8 md:mt-10 flex flex-wrap items-center gap-3.5 animate-fade">
          <a
            href="#projects"
            class="px-6 py-3.5 bg-ink text-paper rounded-full font-bold text-[13px] hover:bg-ink/85 transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-ink"
          >
            View selected work ↓
          </a>
          <a
            href="/Marwan-Ashraf-Product-Designer-CV.pdf"
            download="Marwan-Ashraf-Product-Designer-CV.pdf"
            class="px-5 py-3.5 border border-ink text-ink rounded-full font-bold text-[13px] hover:bg-ink hover:text-paper transition-colors"
          >
            Download CV ↗
          </a>
        </div>
      </div>

      <!-- Right Column: Editorial Portrait Composition -->
      <div class="relative flex flex-col justify-end items-center lg:items-end h-full min-h-[320px] md:min-h-[420px] lg:min-h-[500px]">
        <!-- Subtle Editorial Typographic Watermark (MA) -->
        <div
          class="absolute -top-6 lg:top-4 right-1/2 translate-x-1/2 lg:translate-x-0 lg:right-4 text-[clamp(120px,18vw,260px)] leading-none font-serif italic text-ink/[0.04] select-none pointer-events-none font-extrabold z-0"
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

        <!-- Main Black & White Portrait Cutout (Disappears into bottom ticker for depth) -->
        <div class="relative z-10 w-full max-w-[340px] sm:max-w-[400px] md:max-w-[440px] lg:max-w-[480px] flex justify-center lg:justify-end animate-fade">
          <img
            src="/assets/marwan-portrait.png"
            alt="Marwan Ashraf black and white portrait illustration"
            class="w-full h-auto object-contain object-bottom max-h-[380px] sm:max-h-[460px] lg:max-h-[540px] -mb-10 md:-mb-12 pointer-events-none select-none drop-shadow-[0_10px_25px_rgba(21,21,21,0.06)]"
            loading="eager"
          />
        </div>
      </div>
    </div>

    <!-- Bottom Dark Ticker (Provides depth layer underneath portrait) -->
    <div class="absolute bottom-0 left-0 w-full overflow-hidden bg-ink text-paper h-[40px] flex whitespace-nowrap items-center font-sans font-semibold text-[11px] tracking-[0.05em] z-20" aria-hidden="true">
      <span class="block animate-marquee">SYSTEMS THINKING · SaaS WORKFLOWS · FIGMA DESIGN SYSTEMS · VUE 3 FRONTEND · ACCESSIBLE UX · </span>
      <span class="block animate-marquee">SYSTEMS THINKING · SaaS WORKFLOWS · FIGMA DESIGN SYSTEMS · VUE 3 FRONTEND · ACCESSIBLE UX · </span>
    </div>
  </section>
</template>


