<script setup>
import { computed } from 'vue';
import { RouterLink } from 'vue-router';
import { useProjectNavigation } from '@/composables/useProjectNavigation.js';
import { getPresentation } from '@/data/projectPresentation.js';
import ProjectArtwork from '@/components/shared/ProjectArtwork.vue';
const props = defineProps({ currentId: { type: String, required: true } });
const { getNextProject } = useProjectNavigation();
const nextProject = computed(() => getNextProject(props.currentId));
const look = computed(() => getPresentation(nextProject.value.id));
</script>
<template>
  <section class="next-case page-shell" data-reveal><RouterLink :to="`/projects/${nextProject.id}`" :aria-label="`Next project: ${nextProject.name}`"><div><p class="section-eyebrow">Keep exploring</p><h2>{{ nextProject.name }} <font-awesome-icon icon="fa-solid fa-arrow-right" /></h2><span>{{ look.type }} · {{ look.role }}</span></div><ProjectArtwork :project="nextProject" /></RouterLink></section>
</template>
