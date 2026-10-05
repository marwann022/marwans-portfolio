<script setup>
import { RouterLink } from "vue-router";
</script>
<template>
  <section id="about" class="py-14 md:py-20 px-5 md:px-[7vw] border-t border-ink bg-story-bg font-sans">
    <div class="max-w-[1240px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
      <div>
        <p class="text-[12px] font-bold uppercase tracking-wider text-ink/75">About Marwan</p>
        <h2 class="text-[clamp(32px,4vw,52px)] leading-tight font-bold tracking-tight">Design shaped by<br /><span class="font-serif italic font-normal">an engineering background.</span></h2>
        <p class="text-[17px] leading-relaxed text-ink/85 max-w-[520px]">I studied Computer and Control Engineering at Suez Canal University, then completed ITI’s UI/UX Development program. My work brings together interface design, reusable components, and frontend implementation.</p>
        <RouterLink to="/contact" class="inline-flex min-h-[44px] items-center px-6 mt-4 bg-ink text-paper rounded-full font-bold">Contact me</RouterLink>
      </div>
      <dl class="m-0 divide-y divide-ink/20">
        <div class="py-5"><dt class="text-xs uppercase font-bold text-ink/70">Client experience</dt><dd class="m-0 mt-2 font-bold">UI/UX Designer · GolderaPharm</dd><dd class="m-0 mt-1 text-sm text-ink/80">Jan–May 2026 · CRM workflows, components, and developer handoff</dd></div>
        <div class="py-5"><dt class="text-xs uppercase font-bold text-ink/70">Training &amp; education</dt><dd class="m-0 mt-2">ITI UI/UX Development · Completed July 2026</dd><dd class="m-0 mt-1">B.Sc. Computer and Control Engineering · July 2025</dd></div>
        <div class="py-5"><dt class="text-xs uppercase font-bold text-ink/70">Earlier visual work</dt><dd class="m-0 mt-2">Graphic design at Cela, and media direction for IEEE SCU.</dd><dd class="m-0 mt-2"><RouterLink to="/projects#creative-archive" class="underline underline-offset-4">Explore the creative archive</RouterLink></dd></div>
      </dl>
    </div>
  </section>
</template>
