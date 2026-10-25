<script setup>
import { computed } from 'vue';
import { RouterLink } from 'vue-router';
import ProjectArtwork from './ProjectArtwork.vue';
import { getPresentation, archivePresentation } from '@/data/projectPresentation.js';
const props = defineProps({ project: { type: Object, required: true }, archive: Boolean, eager: Boolean });
const look = computed(() => props.archive ? archivePresentation[props.project.id] : getPresentation(props.project.id));
</script>
<template>
  <article class="work-card" data-reveal>
    <RouterLink :to="`${archive ? '/archive' : '/projects'}/${project.id}`" :aria-label="`View ${project.name} ${archive ? 'visual work' : 'case study'}`" class="work-card-link">
      <ProjectArtwork :project="project" :archive="archive" :eager="eager" />
      <div class="work-card-caption"><div><h3>{{ project.name }}</h3><p><strong>{{ look.role }}</strong> <span aria-hidden="true">·</span> {{ look.stage }}</p></div><span class="card-arrow" aria-hidden="true"><font-awesome-icon icon="fa-solid fa-arrow-right" /></span></div>
    </RouterLink>
  </article>
</template>
