<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <main class="min-h-[calc(100vh-82px)] p-5 md:px-[7vw] py-24 flex flex-col justify-center bg-paper font-sans">
    <p class="font-sans font-bold text-[12px] tracking-[0.05em] uppercase m-0 text-ink/70">404 — PAGE NOT FOUND</p>
    <h1 class="text-[clamp(44px,7vw,96px)] leading-[1.05] tracking-[-0.03em] my-6 font-extrabold text-ink">
      This page doesn't<br /><span class="font-serif italic font-normal text-ink/85">exist.</span>
    </h1>
    <p class="text-[18px] md:text-[20px] max-w-[480px] mb-8 leading-[1.55] tracking-[-0.01em] text-ink/80 font-medium m-0">
      The link might be broken or the case study has been moved.
    </p>
    <RouterLink
      to="/"
      class="border-b border-ink pb-1 font-sans text-[14px] font-bold inline-flex items-center gap-2 self-start hover:opacity-80 transition-opacity text-ink"
    >
      <font-awesome-icon icon="fa-solid fa-arrow-left" class="text-[12px]" />
      <span>Return to Index</span>
    </RouterLink>
  </main>
</template>
