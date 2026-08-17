<script setup>
import HeroSection from "@/components/home/HeroSection.vue";
import WorkSection from "@/components/home/WorkSection.vue";
import AboutPreview from "@/components/home/AboutPreview.vue";
</script>

<template>
  <main class="w-full font-sans">
    <HeroSection />

    <!-- Product Thinking Manifesto Banner -->
    <section class="bg-ink text-paper min-h-[420px] py-16 md:py-24 px-5 md:px-[max(7vw,22px)] relative border-y border-ink">
      <p class="font-sans font-bold text-[12px] tracking-[0.05em] uppercase m-0 text-lime">
        PRODUCT DESIGN PHILOSOPHY
      </p>
      <h2 class="text-[clamp(36px,4.8vw,68px)] leading-[1.05] tracking-[-0.03em] my-8 max-w-[960px] font-extrabold">
        Make the complex feel <mark class="bg-lime text-ink px-2.5 py-0.5 rounded-sm font-serif italic font-normal inline-block tracking-normal">considered.</mark><br class="hidden md:inline" /> Not complicated.
      </h2>
      <p class="text-[17px] md:text-[18px] leading-[1.55] text-[#c9c7c0] max-w-[480px] ml-auto font-medium m-0">
        User research gives the work a reason. A system makes it coherent. Engineering logic makes it real.
      </p>
    </section>

    <!-- Exactly 3 Flagship Case Studies -->
    <WorkSection />

    <!-- Candidate Summary & Proof of Work -->
    <AboutPreview />
  </main>
</template>

