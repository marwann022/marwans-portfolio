<script setup>
import { computed, ref } from 'vue';
import { useProjectNavigation } from '@/composables/useProjectNavigation.js';
import { getPresentation } from '@/data/projectPresentation.js';
import CaseStudyHero from '@/components/case-study/CaseStudyHero.vue';
import ContentBlock from '@/components/case-study/ContentBlock.vue';
import NextCaseStudy from '@/components/case-study/NextCaseStudy.vue';
import ImageLightboxModal from '@/components/shared/ImageLightboxModal.vue';
import NotFoundView from '@/views/NotFoundView.vue';
const props = defineProps({ slug: { type: String, required: true } });
const { getProject } = useProjectNavigation();
const project = computed(() => getProject(props.slug));
const look = computed(() => getPresentation(props.slug));
const previewIndex = ref(0);
const previewOpen = ref(false);
const activeImage = computed(() => look.value?.screens[previewIndex.value]);
function openPreview(index) { previewIndex.value = index; previewOpen.value = true; }
</script>
<template>
  <main v-if="project" class="case-page" :class="`case-${project.id}`" :style="{ '--project-color': look.color, '--project-ink': look.ink }">
    <CaseStudyHero :project="project" @preview="openPreview" />
    <nav class="case-nav page-shell" aria-label="Case study sections"><a href="#project-screens">The screens</a><a href="#project-problem">The brief</a><a href="#project-decisions">Key decisions</a><a href="#project-contribution">My role</a></nav>
    <ContentBlock :project="project" @preview="openPreview" />
    <NextCaseStudy :current-id="project.id" />
    <ImageLightboxModal :is-open="previewOpen" :src="activeImage?.image || ''" :caption="activeImage?.caption || ''" :counter-text="`${previewIndex + 1} / ${look.screens.length}`" :has-prev="previewIndex > 0" :has-next="previewIndex < look.screens.length - 1" @prev="previewIndex--" @next="previewIndex++" @close="previewOpen = false" />
  </main><NotFoundView v-else />
</template>
