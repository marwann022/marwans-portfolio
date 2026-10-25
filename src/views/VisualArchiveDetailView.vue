<script setup>
import { computed, ref } from 'vue';
import { RouterLink } from 'vue-router';
import { archiveProjects, archiveKeys } from '@/data/gallery.js';
import { archivePresentation } from '@/data/projectPresentation.js';
import archivePreviews from '@/data/archivePreviews.json';
import ImageLightboxModal from '@/components/shared/ImageLightboxModal.vue';
import NotFoundView from '@/views/NotFoundView.vue';
const props = defineProps({ slug: { type: String, required: true } });
const project = computed(() => Object.hasOwn(archiveProjects, props.slug) ? archiveProjects[props.slug] : null);
const expanded = ref(false);
const activeGroup = ref('all');
const groups = computed(() => {
  if (!project.value) return [];
  return (project.value.groups || [project.value]).map((group, index) => {
    const unique = new Map();
    [group.hero, ...(group.rows || []).flatMap(row => row.items)].filter(Boolean).forEach(item => unique.set(item.image, item));
    return { id: group.id || 'collection', title: group.title?.replace(/^\d+\s*\/\s*/, '') || 'The collection', items: [...unique.values()], index };
  });
});
const allImages = computed(() => groups.value.flatMap(group => group.items));
const filteredImages = computed(() => activeGroup.value === 'all' ? allImages.value : groups.value.find(group => group.id === activeGroup.value)?.items || []);
const visibleImages = computed(() => expanded.value ? filteredImages.value : filteredImages.value.slice(0, 9));
const selectedIndex = ref(0);
const lightboxOpen = ref(false);
const selectedImage = computed(() => filteredImages.value[selectedIndex.value]);
function showImage(index) { selectedIndex.value = index; lightboxOpen.value = true; }
function filterGroup(id) { activeGroup.value = id; expanded.value = false; }
const nextProject = computed(() => archiveProjects[archiveKeys[(archiveKeys.indexOf(props.slug) + 1) % archiveKeys.length]]);
</script>
<template>
  <main v-if="project" class="archive-page page-shell" :style="{ '--project-color': archivePresentation[project.id].color }">
    <div class="case-breadcrumb"><RouterLink to="/projects?type=visual"><font-awesome-icon icon="fa-solid fa-arrow-left" /> Brand &amp; visual</RouterLink><span>{{ project.year }}</span></div>
    <header class="archive-heading"><p class="section-eyebrow">{{ archivePresentation[project.id].type }}</p><h1>{{ project.name }}</h1><p>{{ project.role }} <span>·</span> {{ project.tools.join(' / ') }}</p></header>
    <nav v-if="groups.length > 1" class="archive-filters" aria-label="Filter visual collection"><button type="button" :aria-pressed="activeGroup === 'all'" @click="filterGroup('all')">All artwork</button><button v-for="group in groups" :key="group.id" type="button" :aria-pressed="activeGroup === group.id" @click="filterGroup(group.id)">{{ group.title }}</button></nav>
    <section class="archive-art-grid" aria-label="Visual artwork collection"><figure v-for="(item, index) in visibleImages" :key="item.image" data-reveal><button type="button" :aria-label="`Open image: ${item.title}`" aria-haspopup="dialog" @click="showImage(index)"><img :src="archivePreviews[item.image] || item.image" :alt="item.title" :loading="index < 3 ? 'eager' : 'lazy'" decoding="async" /><span class="archive-art-open"><font-awesome-icon icon="fa-solid fa-plus" /></span></button><figcaption>{{ item.title }}</figcaption></figure></section>
    <button v-if="filteredImages.length > 9" type="button" class="archive-show-more pill-link" :aria-expanded="expanded" @click="expanded = !expanded">{{ expanded ? 'Show selected artwork' : `View all ${filteredImages.length} artworks` }} <font-awesome-icon :icon="expanded ? 'fa-solid fa-arrow-up-right-from-square' : 'fa-solid fa-plus'" /></button>
    <details class="archive-context process-details"><summary>The brief &amp; my role <font-awesome-icon icon="fa-solid fa-plus" /></summary><div><p>{{ project.summary }}</p><p>{{ project.responsibilities }}</p><p>{{ project.scope }}</p></div></details>
    <div class="archive-next"><RouterLink to="/projects?type=visual" class="text-link">All visual work <font-awesome-icon icon="fa-solid fa-arrow-left" /></RouterLink><RouterLink :to="`/archive/${nextProject.id}`" class="text-link">Next: {{ nextProject.name }} <font-awesome-icon icon="fa-solid fa-arrow-right" /></RouterLink></div>
    <ImageLightboxModal :is-open="lightboxOpen" :src="selectedImage?.image || ''" :caption="selectedImage?.title || ''" :counter-text="`${selectedIndex + 1} / ${filteredImages.length}`" :has-prev="selectedIndex > 0" :has-next="selectedIndex < filteredImages.length - 1" @prev="selectedIndex--" @next="selectedIndex++" @close="lightboxOpen = false" />
  </main><NotFoundView v-else />
</template>
