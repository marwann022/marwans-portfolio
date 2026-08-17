<script setup>
import { computed } from "vue";
import { RouterLink } from "vue-router";
import { useProjectNavigation } from "@/composables/useProjectNavigation.js";

const props = defineProps({
  currentId: {
    type: String,
    required: true
  }
});

const { getNextProject, getPrevProject } = useProjectNavigation();
const nextProject = computed(() => getNextProject(props.currentId));
const prevProject = computed(() => getPrevProject(props.currentId));
</script>

<template>
  <section class="py-16 md:py-24 px-5 md:px-[7vw] border-t border-ink bg-paper font-sans">
    <div class="max-w-[1240px] mx-auto space-y-10">

      <!-- Navigation Control Header -->
      <div class="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-ink text-[13px] font-bold text-ink">
        <div>
          <RouterLink
            v-if="prevProject && currentId !== 'smartmeet'"
            :to="`/projects/${prevProject.id}`"
            class="inline-flex items-center gap-2 hover:underline"
          >
            <span>← Previous: {{ prevProject.name }}</span>
          </RouterLink>
          <span v-else class="font-mono text-[11px] uppercase text-ink/50 tracking-wider">
            01 / FLAGSHIP START
          </span>
        </div>

        <RouterLink
          to="/projects"
          class="font-mono text-[12px] uppercase tracking-wider font-extrabold text-ink hover:underline"
        >
          Work Index ↑
        </RouterLink>
      </div>

      <!-- Main Next Flagship Transition Card -->
      <div v-if="nextProject">
        <span class="font-mono text-[11px] font-black uppercase tracking-widest text-ink/50 block mb-3">
          UP NEXT — FLAGSHIP {{ nextProject.num }}
        </span>

        <RouterLink
          :to="`/projects/${nextProject.id}`"
          class="group grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-8 border border-ink bg-story-bg p-6 md:p-10 hover:bg-paper transition-all duration-300 shadow-[8px_8px_0_rgba(21,21,21,0.08)] focus-visible:ring-2 focus-visible:ring-ink"
        >
          <div class="flex flex-col justify-between space-y-6">
            <div class="space-y-3">
              <span class="font-mono text-[12px] font-extrabold uppercase text-[#0d244a] block">
                {{ nextProject.kind }}
              </span>
              <h2 class="text-[clamp(36px,5vw,72px)] leading-[1.02] tracking-[-0.04em] font-extrabold text-ink group-hover:underline underline-offset-8 transition-all m-0">
                {{ nextProject.name }} ↗
              </h2>
              <p class="text-[17px] md:text-[19px] leading-[1.5] text-ink/80 font-medium m-0 max-w-[540px]">
                {{ nextProject.thesis || nextProject.blurb }}
              </p>
            </div>

            <div class="inline-flex items-center gap-2 font-mono text-[12px] font-extrabold uppercase text-ink">
              <span>Read {{ nextProject.name }} case study</span>
              <span>→</span>
            </div>
          </div>

          <div v-if="nextProject.image" class="aspect-[16/10] overflow-hidden border border-ink bg-ink">
            <img
              :src="nextProject.image"
              :alt="'Next case study: ' + nextProject.name"
              class="w-full h-full object-cover object-top group-hover:scale-[1.03] transition-transform duration-500"
              loading="lazy"
            />
          </div>
        </RouterLink>
      </div>

    </div>
  </section>
</template>
