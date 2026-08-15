<script setup>
import { computed } from "vue";
import { useRouter } from "vue-router";
import { useProjectNavigation } from "@/composables/useProjectNavigation.js";

const props = defineProps({
  currentId: {
    type: String,
    required: true
  }
});

const router = useRouter();
const { getNextProject } = useProjectNavigation();

const nextProject = computed(() => getNextProject(props.currentId));

function goToNext() {
  if (nextProject.value) {
    router.push(`/projects/${nextProject.value.id}`);
  }
}
</script>

<template>
  <section v-if="nextProject" class="py-16 md:py-24 px-5 md:px-[7vw] border-t border-ink bg-paper font-sans">
    <p class="font-sans font-bold text-[12px] tracking-[0.05em] uppercase m-0 text-ink/70">
      NEXT CASE STUDY
    </p>

    <button
      class="mt-6 bg-transparent border-0 text-[clamp(40px,7vw,110px)] tracking-[-0.03em] leading-[1.05] cursor-pointer p-0 font-sans font-extrabold text-ink inline-flex items-center gap-4 hover:underline decoration-2 underline-offset-8 transition-all"
      @click="goToNext"
    >
      <span>{{ nextProject.name }}</span>
      <font-awesome-icon icon="fa-solid fa-arrow-up-right-from-square" class="text-[0.6em]" />
    </button>
  </section>
</template>
