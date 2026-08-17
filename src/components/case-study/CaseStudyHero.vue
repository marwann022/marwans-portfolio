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
  <section class="pt-8 md:pt-12 px-5 md:px-[7vw] font-sans">
    <!-- Breadcrumb & Navigation -->
    <div class="flex items-center justify-between border-b border-line pb-4 mb-8 text-[12px] font-bold text-ink/80">
      <RouterLink
        to="/"
        class="inline-flex items-center gap-1.5 hover:underline focus-visible:ring-2 focus-visible:ring-ink"
      >
        <font-awesome-icon icon="fa-solid fa-arrow-left" class="text-[10px]" />
        Back to selected work
      </RouterLink>
      <span>PROJECT {{ project.num }}</span>
    </div>

    <!-- Title & Subtitle -->
    <p class="font-sans font-bold text-[12px] tracking-[0.05em] uppercase m-0 text-ink/70">
      {{ project.kind }}
    </p>

    <h1
      class="text-[clamp(40px,6.5vw,92px)] tracking-[-0.035em] leading-[1.04] my-4 md:my-6 max-w-[1000px] font-extrabold text-ink"
      v-html="project.headline"
    ></h1>

    <p class="text-[18px] md:text-[20px] leading-[1.55] max-w-[680px] tracking-[-0.01em] text-ink/85 font-medium mb-10">
      {{ project.blurb }}
    </p>

    <!-- Project Overview Meta Grid (Overview facts for recruiters) -->
    <div v-if="project.overview" class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 p-6 border border-ink bg-paper mb-10 text-[13px] font-sans">
      <div>
        <span class="block text-ink/50 text-[11px] font-extrabold uppercase mb-1">CLIENT / CONTEXT</span>
        <span class="font-extrabold text-ink block">{{ project.overview.client }}</span>
        <span class="text-[12px] text-ink/70 font-medium">{{ project.overview.timeframe }}</span>
      </div>

      <div>
        <span class="block text-ink/50 text-[11px] font-extrabold uppercase mb-1">PERSONAL ROLE</span>
        <span class="font-extrabold text-ink block">{{ project.overview.role }}</span>
        <span class="text-[12px] text-ink/70 font-medium">{{ project.overview.team }}</span>
      </div>

      <div>
        <span class="block text-ink/50 text-[11px] font-extrabold uppercase mb-1">PLATFORMS</span>
        <span class="font-extrabold text-ink block">{{ project.overview.platforms }}</span>
      </div>

      <div>
        <span class="block text-ink/50 text-[11px] font-extrabold uppercase mb-1">KEY TOOLS</span>
        <span class="font-extrabold text-ink block">{{ project.overview.tools }}</span>
      </div>
    </div>

    <!-- Main Showcase Screenshot Frame -->
    <div
      :class="[
        'w-full max-h-[580px] border border-ink overflow-hidden shadow-[8px_8px_0_rgba(21,21,21,0.12)]',
        accentBgMap[project.accent] || 'bg-paper'
      ]"
    >
      <img
        v-if="project.image"
        :src="project.image"
        :alt="project.name + ' primary product interface screen'"
        class="w-full h-full object-cover object-top block"
      />
    </div>
  </section>
</template>

