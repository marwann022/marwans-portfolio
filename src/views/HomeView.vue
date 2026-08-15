<script setup>
import HeroSection from "@/components/home/HeroSection.vue";
import WorkSection from "@/components/home/WorkSection.vue";
import VisualArchive from "@/components/home/VisualArchive.vue";
import AboutPreview from "@/components/home/AboutPreview.vue";
</script>

<template>
  <main class="w-full font-sans">
    <HeroSection />

    <section class="bg-ink text-paper min-h-[480px] py-16 md:py-24 px-5 md:px-[max(7vw,22px)] relative">
      <p class="font-sans font-bold text-[12px] tracking-[0.05em] uppercase m-0 text-lime">
        (01) THE WAY I WORK
      </p>
      <h2 class="text-[clamp(36px,4.8vw,68px)] leading-[1.05] tracking-[-0.03em] my-8 max-w-[960px] font-extrabold">
        Make the complex feel <mark class="bg-lime text-ink px-2.5 py-0.5 rounded-sm font-serif italic font-normal inline-block tracking-normal">considered.</mark><br class="hidden md:inline" /> Not complicated.
      </h2>
      <p class="text-[17px] md:text-[18px] leading-[1.55] text-[#c9c7c0] max-w-[460px] ml-auto font-medium m-0">
        Research gives the work a reason. A system makes it coherent. A build-minded handoff makes it real.
      </p>
    </section>

    <WorkSection />
    <VisualArchive />
    <AboutPreview />
  </main>
</template>
