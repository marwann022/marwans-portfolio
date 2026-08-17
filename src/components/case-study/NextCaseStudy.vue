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

const { getNextProject } = useProjectNavigation();
const nextProject = computed(() => getNextProject(props.currentId));
</script>

<template>
  <section v-if="nextProject" class="py-16 md:py-24 px-5 md:px-[7vw] border-t border-ink bg-paper font-sans">
    <div class="flex max-md:flex-col justify-between items-start md:items-center gap-6 mb-6">
      <p class="font-sans font-bold text-[12px] tracking-[0.05em] uppercase m-0 text-ink/70">
        NEXT CASE STUDY
      </p>
      <RouterLink
        to="/"
        class="text-[13px] font-bold border-b border-ink text-ink hover:opacity-80 transition-opacity"
      >
        ← Back to selected work
      </RouterLink>
    </div>

    <RouterLink
      :to="`/projects/${nextProject.id}`"
      class="group block text-[clamp(36px,6vw,96px)] tracking-[-0.035em] leading-[1.05] font-extrabold text-ink hover:underline decoration-2 underline-offset-8 transition-all focus-visible:ring-2 focus-visible:ring-ink focus-visible:outline-none"
    >
      <div class="flex items-center gap-4">
        <span>{{ nextProject.name }}</span>
        <span class="text-[0.65em] font-normal transition-transform group-hover:translate-x-2">↗</span>
      </div>
      <p class="text-[16px] md:text-[18px] text-ink/70 font-medium tracking-normal mt-2">
        {{ nextProject.kind }}
      </p>
    </RouterLink>
  </section>
</template>

