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
    <!-- Top Direct Navigation Bar -->
    <div class="flex flex-wrap items-center justify-between gap-4 pb-8 mb-8 border-b border-line text-[13px] font-bold text-ink">
      <div>
        <RouterLink
          v-if="prevProject && currentId !== 'smartmeet'"
          :to="`/projects/${prevProject.id}`"
          class="inline-flex items-center gap-2 hover:underline"
        >
          <span>← Previous: {{ prevProject.name }}</span>
        </RouterLink>
        <span v-else class="text-ink/50">01. FLAGSHIP START</span>
      </div>

      <RouterLink
        to="/"
        class="text-[13px] font-extrabold border-b-2 border-ink text-ink hover:opacity-80 transition-opacity"
      >
        ← Back to selected work
      </RouterLink>
    </div>

    <!-- Main Next Project Callout -->
    <div v-if="nextProject">
      <p class="font-sans font-extrabold text-[12px] tracking-[0.05em] uppercase m-0 text-ink/70 mb-3">
        NEXT CASE STUDY
      </p>

      <RouterLink
        :to="`/projects/${nextProject.id}`"
        class="group block text-[clamp(36px,6vw,84px)] tracking-[-0.035em] leading-[1.05] font-extrabold text-ink hover:underline decoration-2 underline-offset-8 transition-all focus-visible:ring-2 focus-visible:ring-ink focus-visible:outline-none"
      >
        <div class="flex items-center gap-4">
          <span>{{ nextProject.name }}</span>
          <span class="text-[0.65em] font-normal transition-transform group-hover:translate-x-2">↗</span>
        </div>
        <p class="text-[16px] md:text-[18px] text-ink/70 font-medium tracking-normal mt-2 m-0">
          {{ nextProject.kind }}
        </p>
      </RouterLink>
    </div>
  </section>
</template>


