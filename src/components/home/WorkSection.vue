<script setup>
import { RouterLink } from 'vue-router';
import { flagshipProjects } from '@/data/projects.js';
defineProps({ showHeading: { type: Boolean, default: true }, showArchiveLink: { type: Boolean, default: true } });
</script>
<template>
  <section id="projects" class="py-12 md:py-20 px-5 md:px-[7vw] border-t border-ink font-sans bg-paper">
    <div class="max-w-[1240px] mx-auto">
      <div v-if="showHeading" class="flex flex-wrap justify-between gap-4 border-b border-ink pb-5 mb-8">
        <h2 class="m-0 text-[28px] md:text-[38px] font-bold tracking-tight">Selected work</h2>
        <p class="m-0 self-end text-sm text-ink/75">Client work, a graduation project, and UX exploration</p>
      </div>
      <div class="space-y-10 md:space-y-14">
        <article v-for="(project, index) in flagshipProjects" :key="project.id" class="grid grid-cols-1 lg:grid-cols-2 border border-ink bg-paper overflow-hidden">
          <div class="p-6 md:p-9 flex flex-col justify-between">
            <div>
              <p class="text-xs uppercase tracking-wider font-bold text-ink/75">{{ project.meta.context }}</p>
              <h3 class="text-[32px] md:text-[44px] leading-tight font-extrabold tracking-tight my-4">{{ project.name }}</h3>
              <p class="text-[17px] leading-relaxed text-ink/85">{{ project.blurb }}</p>
              <dl class="text-sm leading-relaxed mt-6 mb-0 space-y-3">
                <div><dt class="font-bold inline">Role: </dt><dd class="inline m-0">{{ project.meta.roleTitle }}</dd></div>
                <div><dt class="font-bold inline">Stage: </dt><dd class="inline m-0">{{ project.meta.statusShort }}</dd></div>
                <div><dt class="font-bold inline">Period: </dt><dd class="inline m-0">{{ project.meta.period }}</dd></div>
              </dl>
            </div>
            <RouterLink :to="`/projects/${project.id}`" :aria-label="`Read ${project.name} case study`" class="inline-flex min-h-[44px] self-start items-center px-6 mt-6 bg-ink text-paper rounded-full text-sm font-bold">View case study <span aria-hidden="true" class="ml-2">→</span></RouterLink>
          </div>
          <RouterLink :to="`/projects/${project.id}`" :aria-label="`Preview ${project.name} case study`" class="block bg-story-bg border-t lg:border-t-0 lg:border-l border-ink overflow-hidden">
            <img :src="project.image" :alt="`${project.name} interface preview`" class="block w-full h-[240px] md:h-[380px] lg:h-full lg:max-h-[520px] object-cover object-top" loading="lazy" decoding="async" />
          </RouterLink>
        </article>
      </div>
      <RouterLink v-if="showArchiveLink" to="/projects" class="inline-flex min-h-[44px] items-center mt-8 font-bold underline underline-offset-4">More projects and creative archive <span aria-hidden="true" class="ml-2">→</span></RouterLink>
    </div>
  </section>
</template>
