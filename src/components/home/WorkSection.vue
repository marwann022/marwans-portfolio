<script setup>
import { RouterLink } from 'vue-router';
import { flagshipProjects } from '@/data/projects.js';
import ProjectCard from '@/components/shared/ProjectCard.vue';
defineProps({ showHeading: { type: Boolean, default: true }, showArchiveLink: { type: Boolean, default: true } });
</script>
<template>
  <section id="projects" class="work-section page-shell">
    <div v-if="showHeading" class="section-intro" data-reveal>
      <div><p class="section-eyebrow">From idea to interface</p><h2 class="section-heading">Selected <em>work.</em></h2></div>
      <RouterLink to="/projects" class="text-link">All work <font-awesome-icon icon="fa-solid fa-arrow-right" /></RouterLink>
    </div>
    <div class="work-grid"><ProjectCard v-for="project in flagshipProjects" :key="project.id" :project="project" /></div>
    <RouterLink v-if="showArchiveLink" to="/projects" class="collection-link" data-reveal>Explore the full collection <span>Products, websites &amp; visual identities</span><font-awesome-icon icon="fa-solid fa-arrow-right" /></RouterLink>
  </section>
</template>
