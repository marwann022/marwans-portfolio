<script setup>
import { computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { projects, projectKeys } from '@/data/projects.js';
import { gallery } from '@/data/gallery.js';
import { getPresentation, workFilters } from '@/data/projectPresentation.js';
import ProjectCard from '@/components/shared/ProjectCard.vue';
const route = useRoute();
const router = useRouter();
const activeFilter = computed(() => workFilters.some(filter => filter.id === route.query.type) ? route.query.type : route.hash === '#creative-archive' ? 'visual' : 'all');
const entries = computed(() => [
  ...projectKeys.map(id => ({ project: projects[id], category: getPresentation(id).category, archive: false })),
  ...gallery.map(project => ({ project, category: 'visual', archive: true }))
]);
const visibleEntries = computed(() => entries.value.filter(item => activeFilter.value === 'all' || item.category === activeFilter.value));
function selectFilter(id) { router.replace({ path: '/projects', query: id === 'all' ? {} : { type: id }, hash: '' }); }
</script>
<template>
  <main class="work-index page-shell">
    <header class="work-index-heading">
      <p class="section-eyebrow">The portfolio / {{ new Date().getFullYear() }}</p>
      <div class="work-index-title"><h1 class="display-heading">Selected work<span>.</span></h1><p class="editorial-note">Built to be used.</p></div>
    </header>
    <nav class="work-filters" aria-label="Filter projects">
      <button v-for="filter in workFilters" :key="filter.id" type="button" :aria-pressed="activeFilter === filter.id" @click="selectFilter(filter.id)">{{ filter.label }}<span>{{ filter.id === 'all' ? entries.length : entries.filter(item => item.category === filter.id).length }}</span></button>
    </nav>
    <p class="sr-only" role="status">{{ visibleEntries.length }} projects shown</p>
    <div class="work-grid" id="selected-work"><ProjectCard v-for="(entry, index) in visibleEntries" :key="entry.project.id" :project="entry.project" :archive="entry.archive" :eager="index < 2" /></div>
    <div class="work-bottom-note"><span>Different briefs. The same attention to detail.</span><a href="mailto:marwanelgammal0@gmail.com" class="text-link">Have something in mind? <font-awesome-icon icon="fa-solid fa-arrow-up-right-from-square" /></a></div>
  </main>
</template>
