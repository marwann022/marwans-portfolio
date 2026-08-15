<script setup>
import SectionHeader from "@/components/shared/SectionHeader.vue";
import ProjectCard from "./ProjectCard.vue";
import { projects } from "@/data/projects.js";
</script>

<template>
  <section class="py-16 md:py-28 px-5 md:px-[7vw] lg:px-[105px]" id="projects">
    <SectionHeader
      eyebrow="(02) PROJECTS"
      subtitle="Click any project to view its full case study."
    />
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
      <ProjectCard
        v-for="p in projects"
        :key="p.id"
        :project="p"
      />
    </div>
  </section>
</template>
