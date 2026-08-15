<script setup>
import { RouterLink } from "vue-router";

defineProps({
  project: {
    type: Object,
    required: true
  }
});

const accentBgMap = {
  lime: "bg-lime",
  blue: "bg-blue",
  coral: "bg-coral",
  sand: "bg-sand"
};
</script>

<template>
  <section class="pt-8 md:pt-12 px-5 md:px-[7vw] relative min-h-[680px] md:min-h-[820px] font-sans">
    <RouterLink
      to="/"
      class="font-sans text-[12px] font-bold border-b border-ink inline-flex items-center gap-1.5 hover:opacity-80 transition-opacity text-ink/80"
    >
      <font-awesome-icon icon="fa-solid fa-arrow-left" class="text-[10px]" />
      ALL WORK
    </RouterLink>

    <div class="absolute right-[7%] top-[48px] font-sans text-[13px] text-ink/70 font-bold">
      {{ project.num }}
    </div>

    <p class="font-sans font-bold text-[12px] tracking-[0.05em] uppercase mt-12 md:mt-16 m-0 text-ink/70">
      {{ project.kind }}
    </p>

    <h1
      class="text-[clamp(44px,7vw,96px)] tracking-[-0.03em] leading-[1.05] my-6 md:my-8 max-w-[1000px] font-extrabold text-ink [&_em]:font-serif [&_em]:italic [&_em]:font-normal [&_em]:tracking-normal"
      v-html="project.headline"
    ></h1>

    <p class="text-[18px] md:text-[20px] leading-[1.55] max-w-[560px] tracking-[-0.01em] text-ink/85 font-medium">
      {{ project.blurb }}
    </p>

    <div
      :class="[
        'h-[300px] md:h-[420px] absolute max-md:left-5 max-md:right-[auto] max-md:w-[calc(100%-40px)] md:right-[7%] bottom-0 md:w-[min(52vw,720px)] border border-ink overflow-hidden',
        project.image ? 'p-0' : 'p-4',
        accentBgMap[project.accent] || 'bg-paper'
      ]"
    >
      <img
        v-if="project.image"
        :src="project.image"
        :alt="project.name + ' main interface screen'"
        class="w-full h-full object-cover object-top block animate-fade"
      />
      <template v-else>
        <span class="font-sans font-bold text-[11px] uppercase tracking-wider text-ink/70">HERO MOCKUP / PRODUCT SCREEN</span>
        <div class="bg-skeleton-bg border border-ink h-[82%] mt-4 p-6 shadow-[10px_10px_0_rgba(21,21,21,0.12)]">
          <b class="text-[24px] font-extrabold block text-ink">{{ project.name }}</b>
          <i class="block h-[8px] bg-[#cac8c0] rounded-full mt-4 not-italic"></i>
          <i class="block h-[36px] bg-ink rounded-full mt-16 w-[40%] not-italic"></i>
        </div>
      </template>
    </div>
  </section>
</template>
