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
  <RouterLink
    :to="`/projects/${project.id}`"
    class="border border-ink p-5 md:p-6 bg-paper flex flex-col justify-between group transition-colors duration-200 hover:border-ink focus-visible:ring-2 focus-visible:ring-ink focus-visible:outline-none relative font-sans rounded-none"
  >
    <!-- Top Metadata Header -->
    <div class="flex items-center justify-between font-sans text-[12px] mb-4">
      <span class="px-3 py-1 bg-ink text-paper rounded-full uppercase font-bold tracking-[0.05em]">
        {{ project.num }}
      </span>
      <span class="text-ink/80 font-bold uppercase tracking-wider text-[11px]">
        {{ project.kind }}
      </span>
    </div>

    <!-- Image / Cover Frame -->
    <div
      :class="[
        'w-full h-[240px] md:h-[280px] p-3 mb-5 border border-ink overflow-hidden flex flex-col justify-between transition-opacity duration-200 group-hover:opacity-95',
        accentBgMap[project.accent] || 'bg-paper'
      ]"
    >
      <img
        v-if="project.image"
        :src="project.image"
        :alt="project.name + ' case study interface preview'"
        class="w-full h-full object-cover object-top border border-ink shadow-[4px_4px_0_rgba(21,21,21,0.1)]"
        loading="lazy"
      />
      <template v-else>
        <span class="font-sans font-bold text-[11px] uppercase tracking-wider text-ink/70">INTERFACE SYSTEM</span>
        <div class="bg-paper border border-ink p-5 shadow-[4px_4px_0_rgba(21,21,21,0.1)] my-auto">
          <b class="text-[22px] font-extrabold tracking-[-0.02em] block text-ink">
            {{ project.name }}
          </b>
        </div>
      </template>
    </div>

    <!-- Card Content & Action CTA -->
    <div>
      <h3 class="text-[26px] md:text-[32px] font-extrabold tracking-[-0.03em] leading-[1.08] text-ink m-0 group-hover:underline decoration-2 underline-offset-4">
        {{ project.name }}
      </h3>
      <p class="text-[15px] leading-[1.5] text-ink/80 my-3 font-medium line-clamp-2">
        {{ project.blurb }}
      </p>
    </div>

    <div class="pt-4 mt-2 border-t border-line flex items-center justify-between font-sans text-[13px] font-bold text-ink">
      <span>Read Case Study</span>
      <span class="w-8 h-8 rounded-full border border-ink grid place-content-center transition-colors duration-200 group-hover:bg-ink group-hover:text-paper">
        <font-awesome-icon icon="fa-solid fa-arrow-right" class="text-[11px]" />
      </span>
    </div>
  </RouterLink>
</template>

