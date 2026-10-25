<script setup>
import { computed } from 'vue';
import { RouterLink } from 'vue-router';
import { getPresentation } from '@/data/projectPresentation.js';
import ProjectArtwork from '@/components/shared/ProjectArtwork.vue';
defineEmits(['preview']);
const props = defineProps({ project: { type: Object, required: true } });
const look = computed(() => getPresentation(props.project.id));
</script>
<template>
  <section class="case-hero page-shell">
    <div class="case-breadcrumb"><RouterLink to="/projects"><font-awesome-icon icon="fa-solid fa-arrow-left" /> All work</RouterLink><span>{{ look.type }} / {{ project.meta.period }}</span></div>
    <div class="case-title-row"><div><h1>{{ project.name }}</h1><p>{{ look.tagline }}</p></div><a v-if="project.liveUrl" :href="project.liveUrl" target="_blank" rel="noopener noreferrer" class="pill-link">Visit live website <font-awesome-icon icon="fa-solid fa-arrow-up-right-from-square" /></a></div>
    <div class="case-quick-meta"><span>{{ project.meta.roleTitle }}</span><span>{{ look.stage }}</span><span>{{ project.meta.techStack }}</span></div>
    <button class="case-cover" type="button" :aria-label="`Open image: ${project.name} overview`" aria-haspopup="dialog" @click="$emit('preview', 0)"><ProjectArtwork :project="project" eager /><span class="case-cover-hint">Explore the screen <font-awesome-icon icon="fa-solid fa-plus" /></span></button>
  </section>
</template>
