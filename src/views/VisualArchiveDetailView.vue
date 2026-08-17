<script setup>
import { computed } from "vue";
import { RouterLink, useRouter } from "vue-router";
import { archiveProjects, archiveKeys } from "@/data/gallery.js";
import NotFoundView from "@/views/NotFoundView.vue";

const props = defineProps({
  slug: {
    type: String,
    required: true
  }
});

const router = useRouter();
const project = computed(() => archiveProjects[props.slug]);

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
  <main v-if="project" class="bg-paper w-full min-h-[calc(100vh-82px)] font-sans">
    <!-- Breadcrumb & Top Controls Bar -->
    <div class="py-6 px-5 md:px-[7vw] border-b border-line flex flex-wrap items-center justify-between gap-4 font-sans text-[12px] font-medium text-ink/80">
      <nav aria-label="Breadcrumb" class="flex items-center gap-2">
        <RouterLink to="/" class="hover:underline">Home</RouterLink>
        <span class="text-ink/40">/</span>
        <RouterLink to="/" class="hover:underline">Visual Archive</RouterLink>
        <span class="text-ink/40">/</span>
        <span class="text-ink font-bold">{{ project.name }}</span>
      </nav>
      <RouterLink
        to="/"
        class="border-b border-ink inline-flex items-center gap-1.5 hover:opacity-80 transition-opacity font-bold"
      >
        <font-awesome-icon icon="fa-solid fa-arrow-left" class="text-[10px]" />
        Back to Visual Archive
      </RouterLink>
    </div>

    <!-- Hero Header -->
    <section class="pt-12 md:pt-16 pb-10 px-5 md:px-[7vw]">
      <div class="flex items-center gap-3 font-sans text-[12px] mb-4 font-bold">
        <span class="bg-ink text-paper px-3 py-1 rounded-full uppercase tracking-wider">
          {{ project.num }}
        </span>
        <span class="border border-ink px-3 py-1 rounded-full text-ink">
          {{ project.year }}
        </span>
        <span class="text-ink/70 uppercase tracking-wider">
          {{ project.category }}
        </span>
      </div>

      <h1 class="text-[clamp(44px,7vw,96px)] tracking-[-0.03em] leading-[1.05] my-6 font-extrabold text-ink">
        {{ project.name }}
      </h1>

      <p class="text-[18px] md:text-[20px] leading-[1.55] max-w-[680px] tracking-[-0.01em] text-ink/90 font-medium m-0 mb-10">
        {{ project.summary }}
      </p>

      <!-- Structured Metadata Grid -->
      <div class="grid grid-cols-1 md:grid-cols-4 gap-6 pt-8 border-t border-ink font-sans text-[13px]">
        <div>
          <span class="block text-ink/60 text-[11px] uppercase mb-1 font-bold">Role</span>
          <span class="font-sans font-extrabold text-ink text-[16px]">{{ project.role }}</span>
        </div>

        <div>
          <span class="block text-ink/60 text-[11px] uppercase mb-2 font-bold">Deliverables</span>
          <div class="flex flex-wrap gap-1.5">
            <span
              v-for="item in project.deliverables"
              :key="item"
              class="border border-ink bg-paper px-3 py-1 rounded-full text-[12px] font-bold"
            >
              {{ item }}
            </span>
          </div>
        </div>

        <div>
          <span class="block text-ink/60 text-[11px] uppercase mb-2 font-bold">Tools Used</span>
          <div class="flex flex-wrap gap-1.5">
            <span
              v-for="tool in project.tools"
              :key="tool"
              class="border border-ink bg-lime px-3 py-1 rounded-full text-[12px] font-bold text-ink"
            >
              {{ tool }}
            </span>
          </div>
        </div>

        <div>
          <span class="block text-ink/60 text-[11px] uppercase mb-1 font-bold">Design Direction</span>
          <p class="font-sans text-[14px] leading-[1.5] text-ink/85 m-0 font-medium">
            {{ project.designDirection }}
          </p>
        </div>
      </div>
    </section>

    <!-- Main Showcase Image Frame -->
    <section class="px-5 md:px-[7vw] pb-12">
      <div class="border border-ink bg-gallery-bg rounded-lg overflow-hidden shadow-[12px_12px_0_rgba(21,21,21,0.14)]">
        <img
          :src="project.image"
          :alt="project.name + ' primary artwork showcase'"
          class="w-full max-h-[620px] object-cover object-center block"
        />
        <div class="p-4 bg-paper border-t border-ink font-sans text-[12px] font-bold text-ink/80 flex items-center justify-between">
          <span>01 — Primary Showcase Artwork</span>
          <span>{{ project.name }} / {{ project.category }}</span>
        </div>
      </div>
    </section>

    <!-- Responsive Work Gallery -->
    <section class="py-12 px-5 md:px-[7vw] border-t border-ink bg-story-bg">
      <div class="flex items-center justify-between mb-8">
        <div>
          <p class="font-sans font-bold text-[12px] tracking-[0.05em] uppercase m-0 text-ink/70">WORK GALLERY</p>
          <h2 class="text-[24px] md:text-[32px] font-extrabold tracking-[-0.03em] text-ink m-0 mt-1">
            Exploration, assets & collateral.
          </h2>
        </div>
        <span class="font-sans text-[12px] font-bold border border-ink bg-paper px-3.5 py-1 rounded-full">
          {{ project.gallery.length }} ASSETS
        </span>
      </div>

      <!-- Gallery Grid supporting landscape, portrait, and square cards -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        <div
          v-for="(item, idx) in project.gallery"
          :key="idx"
          class="border border-ink bg-paper rounded-none overflow-hidden flex flex-col justify-between md:col-span-2"
        >
          <!-- Real image showcase -->
          <div
            v-if="item.image"
            class="relative w-full overflow-hidden bg-gallery-bg border-b border-ink"
          >
            <img
              :src="item.image"
              :alt="item.caption || project.name + ' detail visual showcase'"
              class="w-full h-full max-h-[560px] object-cover object-center block"
              loading="lazy"
            />
          </div>

          <!-- Caption Footer -->
          <div class="p-4 font-sans text-[12px] font-bold text-ink/80 bg-paper flex items-center justify-between border-t border-line">
            <span>0{{ idx + 1 }} — {{ item.caption }}</span>
            <span class="uppercase text-ink/50 text-[11px] font-extrabold">{{ project.name }}</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Bottom Archive Navigation (Prev / Next) -->
    <section class="py-12 px-5 md:px-[7vw] border-t border-ink bg-paper flex max-md:flex-col items-center justify-between gap-6">
      <RouterLink
        v-if="prevProject"
        :to="`/archive/${prevProject.id}`"
        class="group inline-flex items-center gap-3 font-sans text-[13px] font-bold text-ink hover:underline"
      >
        <span class="w-8 h-8 rounded-full border border-ink grid place-content-center group-hover:bg-ink group-hover:text-paper transition-colors">
          <font-awesome-icon icon="fa-solid fa-arrow-left" class="text-[11px]" />
        </span>
        <div>
          <span class="block text-[11px] text-ink/50 uppercase font-bold">PREVIOUS PIECE</span>
          <span>{{ prevProject.name }} / {{ prevProject.category }}</span>
        </div>
      </RouterLink>

      <RouterLink
        to="/"
        class="px-6 py-2.5 border border-ink bg-paper text-ink font-sans text-[13px] font-bold rounded-full hover:bg-ink hover:text-paper transition-colors"
      >
        All Archive Pieces ↗
      </RouterLink>

      <RouterLink
        v-if="nextProject"
        :to="`/archive/${nextProject.id}`"
        class="group inline-flex items-center gap-3 font-sans text-[13px] font-bold text-ink hover:underline text-right"
      >
        <div>
          <span class="block text-[11px] text-ink/50 uppercase font-bold">NEXT PIECE</span>
          <span>{{ nextProject.name }} / {{ nextProject.category }}</span>
        </div>
        <span class="w-8 h-8 rounded-full border border-ink grid place-content-center group-hover:bg-ink group-hover:text-paper transition-colors">
          <font-awesome-icon icon="fa-solid fa-arrow-right" class="text-[11px]" />
        </span>
      </RouterLink>
    </section>
  </main>
  <NotFoundView v-else />
</template>
