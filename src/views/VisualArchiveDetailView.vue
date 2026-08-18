<script setup>
import { ref, computed } from "vue";
import { RouterLink } from "vue-router";
import { archiveProjects, archiveKeys, gallery } from "@/data/gallery.js";
import ImageLightboxModal from "@/components/shared/ImageLightboxModal.vue";
import NotFoundView from "@/views/NotFoundView.vue";

const props = defineProps({
  slug: {
    type: String,
    required: true
  }
});

const project = computed(() => archiveProjects[props.slug]);

// Modal State
const lightboxOpen = ref(false);
const lightboxSrc = ref("");
const lightboxCaption = ref("");

function openLightbox(src, caption = "") {
  lightboxSrc.value = src;
  lightboxCaption.value = caption;
  lightboxOpen.value = true;
}

const prevProject = computed(() => {
  if (!project.value) return null;
  const index = archiveKeys.indexOf(props.slug);
  const prevIndex = (index - 1 + archiveKeys.length) % archiveKeys.length;
  return archiveProjects[archiveKeys[prevIndex]];
});

const nextProject = computed(() => {
  if (!project.value) return null;
  const index = archiveKeys.indexOf(props.slug);
  const nextIndex = (index + 1) % archiveKeys.length;
  return archiveProjects[archiveKeys[nextIndex]];
});
</script>

<template>
  <main v-if="project" class="bg-paper w-full min-h-[calc(100vh-82px)] font-sans text-ink">
    <!-- Top Breadcrumb & Quick Archive Jump Bar -->
    <div class="py-4 px-5 md:px-[7vw] border-b border-ink flex flex-wrap items-center justify-between gap-4 font-mono text-[12px] font-bold text-ink">
      <nav aria-label="Breadcrumb" class="flex items-center gap-2">
        <RouterLink to="/projects" class="hover:underline">Work</RouterLink>
        <span class="text-ink/40">/</span>
        <RouterLink to="/projects#creative-archive" class="hover:underline">Creative Archive</RouterLink>
        <span class="text-ink/40">/</span>
        <span class="text-ink font-black">{{ project.name }}</span>
      </nav>

      <!-- Understated Textual Index (01 IEEE · 02 Cela · 03 Moon) -->
      <div class="flex items-center gap-4 text-[11px] uppercase tracking-wider">
        <RouterLink
          v-for="item in gallery"
          :key="item.id"
          :to="`/archive/${item.id}`"
          :class="[
            'hover:underline transition-colors',
            item.id === project.id ? 'font-black text-ink underline' : 'text-ink/50'
          ]"
        >
          {{ item.num }} {{ item.name }}
        </RouterLink>
      </div>
    </div>

    <!-- Opening Identity & Leadership Header -->
    <section class="pt-8 md:pt-12 pb-8 px-5 md:px-[7vw] border-b border-ink bg-paper">
      <div class="max-w-[1240px] mx-auto space-y-6">
        <div class="flex flex-wrap items-center gap-3 font-mono text-[11px] font-bold">
          <span class="bg-ink text-paper px-2.5 py-0.5 rounded-sm uppercase tracking-widest font-black">
            {{ project.num }} / 03
          </span>
          <span class="border border-ink px-2.5 py-0.5 rounded-sm uppercase">
            {{ project.year }}
          </span>
          <span class="text-ink/60 uppercase tracking-wider">
            {{ project.category }}
          </span>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-8 items-end">
          <div>
            <h1 class="text-[clamp(36px,5.5vw,72px)] tracking-[-0.035em] leading-[1.05] font-extrabold text-ink m-0">
              {{ project.name }}
            </h1>
            <p class="text-[17px] md:text-[20px] leading-[1.5] text-ink/85 font-medium m-0 mt-3 max-w-[760px]">
              {{ project.summary }}
            </p>
          </div>

          <!-- Compact Leadership Context Box -->
          <div class="p-5 border border-ink bg-story-bg space-y-2 font-sans text-[13px]">
            <div>
              <span class="font-mono text-[10px] font-extrabold uppercase text-ink/50 block">ROLE &amp; LEADERSHIP</span>
              <strong class="text-ink font-extrabold text-[15px] block">{{ project.role }}</strong>
            </div>
            <div>
              <span class="font-mono text-[10px] font-extrabold uppercase text-ink/50 block">RESPONSIBILITIES</span>
              <p class="text-[12px] font-medium text-ink/80 m-0">{{ project.responsibilities }}</p>
            </div>
            <div class="pt-2 border-t border-ink/20 flex flex-wrap gap-1.5 font-mono text-[10px]">
              <span v-for="tool in project.tools" :key="tool" class="bg-paper border border-ink px-2 py-0.5 font-bold">
                {{ tool }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- IEEE SPECIALIZED: 4 COMPREHENSIVE VISUAL GROUPS -->
    <template v-if="project.id === 'ieee'">
      <section
        v-for="grp in project.groups"
        :key="grp.id"
        class="py-12 md:py-16 px-5 md:px-[7vw] border-b border-ink bg-paper"
      >
        <div class="max-w-[1240px] mx-auto space-y-8">
          <!-- Group Title & Editorial Context -->
          <div class="flex max-md:flex-col md:items-end justify-between gap-4 border-b border-ink pb-4">
            <div>
              <span class="font-mono text-[11px] font-extrabold uppercase tracking-widest text-[#1e3a8a] block mb-1">
                IEEE SCU MEDIA TRACK
              </span>
              <h2 class="text-[26px] md:text-[36px] font-extrabold text-ink m-0 tracking-[-0.03em]">
                {{ grp.title }}
              </h2>
            </div>
            <p class="text-[14px] text-ink/75 font-medium max-w-[480px] m-0">
              {{ grp.description }}
            </p>
          </div>

          <!-- Dynamic Editorial Image Grid (Wraps Content with Zero Trapped Empty Space) -->
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
            <div
              v-for="(item, idx) in grp.items"
              :key="idx"
              @click="openLightbox(item.image, item.title)"
              :class="[
                'border border-ink bg-paper p-3 space-y-2 shadow-sm group cursor-zoom-in relative self-start h-auto',
                item.span === 'full' ? 'sm:col-span-2 lg:col-span-3' : item.span === 'large' ? 'sm:col-span-2 lg:col-span-2' : ''
              ]"
            >
              <div class="overflow-hidden border border-ink/20 bg-ink/5 max-h-[560px]">
                <img
                  :src="item.image"
                  :alt="item.title"
                  class="w-full h-auto max-h-[560px] object-cover object-top block group-hover:scale-[1.015] transition-transform duration-500"
                  loading="lazy"
                />
              </div>

              <div class="flex items-center justify-between font-mono text-[11px] font-bold text-ink pt-1 border-t border-ink/10">
                <span class="truncate">{{ item.title }}</span>
                <span class="text-ink/40 text-[10px] uppercase shrink-0">🔍 ZOOM</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </template>

    <!-- CELA & MOON SPECIALIZED EDITORIAL VISUAL ARCHIVES -->
    <template v-else-if="project.items && project.items.length">
      <section class="py-12 md:py-16 px-5 md:px-[7vw] border-b border-ink bg-paper">
        <div class="max-w-[1240px] mx-auto space-y-8">
          <div class="flex items-center justify-between border-b border-ink pb-4">
            <div>
              <span class="font-mono text-[11px] font-extrabold uppercase tracking-widest text-ink/50 block mb-1">
                CURATED DELIVERABLES
              </span>
              <h2 class="text-[26px] md:text-[36px] font-extrabold text-ink m-0 tracking-[-0.03em]">
                Design Artifacts &amp; Visual Evidence
              </h2>
            </div>
            <span class="font-mono text-[11px] font-bold text-ink/60 uppercase hidden sm:inline-block">
              {{ project.items.length }} UNIQUE REAL ASSETS · CLICK TO ZOOM 🔍
            </span>
          </div>

          <!-- Dynamic Gallery Grid (Wraps Content with Zero Trapped Empty Space) -->
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
            <div
              v-for="(item, idx) in project.items"
              :key="idx"
              @click="openLightbox(item.image, item.title)"
              :class="[
                'border border-ink bg-paper p-3 space-y-2 shadow-sm group cursor-zoom-in relative self-start h-auto',
                item.span === 'full' ? 'sm:col-span-2 lg:col-span-3' : item.span === 'large' ? 'sm:col-span-2 lg:col-span-2' : ''
              ]"
            >
              <div class="overflow-hidden border border-ink/20 bg-ink/5 max-h-[560px]">
                <img
                  :src="item.image"
                  :alt="item.title"
                  class="w-full h-auto max-h-[560px] object-cover object-top block group-hover:scale-[1.015] transition-transform duration-500"
                  loading="lazy"
                />
              </div>

              <div class="flex items-center justify-between font-mono text-[11px] font-bold text-ink pt-1 border-t border-ink/10">
                <span class="truncate">{{ item.title }}</span>
                <span class="text-ink/40 text-[10px] uppercase shrink-0">🔍 ZOOM</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </template>

    <!-- Bottom Prev / Next Archive Loop -->
    <section class="py-10 px-5 md:px-[7vw] border-b border-ink bg-story-bg flex max-md:flex-col items-center justify-between gap-6 font-mono text-[12px] font-bold">
      <RouterLink
        v-if="prevProject"
        :to="`/archive/${prevProject.id}`"
        class="inline-flex items-center gap-3 hover:underline text-ink"
      >
        <span class="w-7 h-7 rounded-full border border-ink grid place-content-center bg-paper">←</span>
        <span>PREVIOUS: {{ prevProject.name }}</span>
      </RouterLink>

      <RouterLink
        to="/projects#creative-archive"
        class="px-5 py-2.5 border border-ink bg-paper text-ink font-bold hover:bg-ink hover:text-paper transition-colors"
      >
        View Full Archive Index ↗
      </RouterLink>

      <RouterLink
        v-if="nextProject"
        :to="`/archive/${nextProject.id}`"
        class="inline-flex items-center gap-3 hover:underline text-ink"
      >
        <span>NEXT: {{ nextProject.name }}</span>
        <span class="w-7 h-7 rounded-full border border-ink grid place-content-center bg-paper">→</span>
      </RouterLink>
    </section>

    <!-- Global Fullscreen Image Lightbox Modal -->
    <ImageLightboxModal
      :is-open="lightboxOpen"
      :src="lightboxSrc"
      :caption="lightboxCaption"
      @close="lightboxOpen = false"
    />
  </main>
  <NotFoundView v-else />
</template>
