<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { RouterLink } from "vue-router";
import { secondaryProjects } from "@/data/projects.js";
import WorkSection from "@/components/home/WorkSection.vue";
import { gallery } from "@/data/gallery.js";

const activeSection = ref("selected-work");

function handleScroll() {
  const selectedEl = document.getElementById("selected-work");
  const moreEl = document.getElementById("more-work");
  const archiveEl = document.getElementById("creative-archive");

  const scrollY = window.scrollY + 200;

  if (archiveEl && scrollY >= archiveEl.offsetTop) {
    activeSection.value = "creative-archive";
  } else if (moreEl && scrollY >= moreEl.offsetTop) {
    activeSection.value = "more-work";
  } else if (selectedEl) {
    activeSection.value = "selected-work";
  }
}

function scrollToSection(id) {
  activeSection.value = id;
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth" });
  }
}

onMounted(() => {
  window.addEventListener("scroll", handleScroll, { passive: true });
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<template>
  <main class="projects-page min-h-[calc(100vh-82px)] font-sans text-ink bg-paper">
    <!-- Compact Opening Header (Product-First Viewport) -->
    <header class="pt-8 pb-6 px-5 md:px-[7vw] bg-paper text-ink border-b border-ink">
      <div class="max-w-[1240px] mx-auto">
        <!-- Compact Top Line -->
        <div class="flex max-sm:flex-col items-start sm:items-center justify-between gap-4 border-b border-ink/20 pb-4 mb-6">
          <div class="flex items-center gap-3">
            <span class="font-mono text-[11px] font-black uppercase tracking-widest bg-ink text-paper px-2.5 py-0.5 rounded-sm">
              WORK
            </span>
            <span class="font-mono text-[12px] font-bold text-ink/70 uppercase tracking-wider">
              2026 INDEX
            </span>
          </div>
          <span class="text-[12px] font-mono font-bold text-ink/60 uppercase">
            03 SELECTED CASE STUDIES · SAAS &amp; HEALTHCARE
          </span>
        </div>

        <div class="flex max-md:flex-col md:items-end justify-between gap-6 pb-2">
          <div>
            <h1 class="text-[28px] md:text-[42px] leading-[1.08] tracking-[-0.035em] font-extrabold m-0 text-ink">
              Selected Product Work
            </h1>
            <p class="mt-2 text-[15px] md:text-[17px] leading-[1.5] text-ink/75 font-medium m-0 max-w-[620px]">
              Client design work, an ITI graduation prototype, and independent UX exploration — each with its role, stage, and scope.
            </p>
          </div>

          <!-- Horizontal Spatial Navigation Index -->
          <nav class="flex flex-wrap items-center gap-4 font-mono text-[12px] font-bold border-t md:border-t-0 pt-4 md:pt-0 border-ink/20 w-full md:w-auto" aria-label="Page Sections">
            <button
              @click="scrollToSection('selected-work')"
              :class="[
                'min-h-[44px] py-2 border-b-2 transition-all cursor-pointer whitespace-nowrap',
                activeSection === 'selected-work' ? 'border-ink text-ink font-black' : 'border-transparent text-ink/70 hover:text-ink'
              ]"
            >
              01 Selected Work
            </button>

            <button
              @click="scrollToSection('more-work')"
              :class="[
                'min-h-[44px] py-2 border-b-2 transition-all cursor-pointer whitespace-nowrap',
                activeSection === 'more-work' ? 'border-ink text-ink font-black' : 'border-transparent text-ink/70 hover:text-ink'
              ]"
            >
              02 More Products
            </button>

            <button
              @click="scrollToSection('creative-archive')"
              :class="[
                'min-h-[44px] py-2 border-b-2 transition-all cursor-pointer whitespace-nowrap',
                activeSection === 'creative-archive' ? 'border-ink text-ink font-black' : 'border-transparent text-ink/70 hover:text-ink'
              ]"
            >
              03 Creative Archive
            </button>
          </nav>
        </div>
      </div>
    </header>

    <div id="selected-work"><WorkSection :show-heading="false" :show-archive-link="false" /></div>

    <!-- SECTION 02: MORE PRODUCT WORK & SECONDARY CASE STUDIES -->
    <section id="more-work" class="py-16 md:py-24 px-5 md:px-[7vw] border-b border-ink bg-story-bg">
      <div class="max-w-[1240px] mx-auto space-y-12">
        <div class="flex items-center justify-between border-b border-ink pb-4">
          <div>
            <span class="font-mono text-[11px] font-extrabold uppercase text-ink/60 block mb-1">
              02 / ADDITIONAL WORK
            </span>
            <h2 class="text-[28px] md:text-[38px] font-extrabold text-ink m-0 tracking-[-0.03em]">
              More Product &amp; UI Work
            </h2>
          </div>
          <span class="hidden sm:inline-block text-[12px] font-mono font-extrabold uppercase text-ink/70">SECONDARY PROJECTS</span>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          <article
            v-for="project in secondaryProjects"
            :key="project.id"
            class="border border-ink bg-paper p-6 flex flex-col justify-between h-full shadow-sm hover:-translate-y-1 transition-all duration-300 group"
          >
            <div class="space-y-4">
              <div class="flex items-center justify-between border-b border-ink/20 pb-3">
                <span class="font-mono text-[11px] font-extrabold uppercase text-ink/60">
                  {{ project.kind }}
                </span>
                <span class="font-mono text-[11px] font-bold text-ink/70">{{ project.num }}</span>
              </div>

              <div class="aspect-[16/10] border border-ink overflow-hidden bg-ink/5">
                <img
                  :src="project.image"
                  :alt="project.name"
                  class="w-full h-full object-cover object-top group-hover:scale-[1.02] transition-transform duration-500"
                  loading="lazy"
                />
              </div>

              <h3 class="text-[22px] font-extrabold text-ink m-0 group-hover:underline underline-offset-4">
                {{ project.name }}
              </h3>

              <p class="text-[14px] text-ink/80 font-medium m-0 leading-[1.55]">
                {{ project.blurb }}
              </p>
            </div>

            <div class="pt-4 mt-6 border-t border-ink/20 flex items-center justify-between">
              <span class="text-[12px] font-bold text-ink/60">{{ project.meta?.statusShort || project.meta?.status || 'Case Study' }}</span>
              <RouterLink
                :to="`/projects/${project.id}`"
                class="text-[12px] font-extrabold text-ink hover:underline inline-flex items-center gap-1.5"
              >
                <span>View project</span>
                <font-awesome-icon icon="fa-solid fa-arrow-up-right-from-square" class="text-[0.8em]" />
              </RouterLink>
            </div>
          </article>
        </div>
      </div>
    </section>

    <!-- SECTION 03: CREATIVE BRAND ARCHIVE -->
    <section id="creative-archive" class="py-16 md:py-24 px-5 md:px-[7vw] border-b border-ink bg-paper">
      <div class="max-w-[1240px] mx-auto space-y-12">
        <div class="flex items-center justify-between border-b border-ink pb-4">
          <div>
            <span class="font-mono text-[11px] font-extrabold uppercase text-ink/60 block mb-1">
              03 / VISUAL IDENTITY
            </span>
            <h2 class="text-[28px] md:text-[38px] font-extrabold text-ink m-0 tracking-[-0.03em]">
              Creative Brand Archive
            </h2>
          </div>
          <span class="hidden sm:inline-block text-[12px] font-mono font-extrabold uppercase text-ink/70">BRAND SYSTEMS &amp; GRAPHICS</span>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 items-stretch">
          <article
            v-for="item in gallery"
            :key="item.id"
            class="border border-ink bg-paper p-5 flex flex-col justify-between h-full shadow-sm hover:border-[#1e3a8a] transition-all duration-300 group"
          >
            <!-- Graphic Design Containment Box -->
            <div class="aspect-[4/3] border border-ink overflow-hidden bg-story-bg p-1 md:p-1.5 flex items-center justify-center relative">
              <img
                :src="item.image"
                :alt="item.name + ' visual identity artwork preview'"
                class="w-full h-full object-contain object-center group-hover:scale-[1.02] transition-transform duration-500"
                loading="lazy"
              />
            </div>

            <!-- Content Area (Structured height + mt-auto CTA pin) -->
            <div class="flex-grow flex flex-col justify-between pt-4">
              <div>
                <span class="font-mono text-[10px] font-extrabold uppercase text-ink/70 block mb-1">
                  {{ item.category }}
                </span>
                <h3 class="text-[20px] font-extrabold text-ink m-0 group-hover:text-[#1e3a8a] transition-colors">
                  {{ item.name }}
                </h3>
                <p class="text-[13px] text-ink/75 font-medium m-0 mt-2 leading-[1.5] line-clamp-3">
                  {{ item.summary }}
                </p>
              </div>

              <div class="mt-5 pt-3.5 border-t border-ink/20 flex items-center justify-between">
                <span class="font-mono text-[11px] font-bold text-ink/70">{{ item.year }}</span>
                <RouterLink
                  :to="`/archive/${item.id}`"
                  class="text-[12px] font-extrabold text-ink group-hover:text-[#1e3a8a] hover:underline inline-flex items-center gap-1.5"
                >
                  <span>View Identity System</span>
                  <font-awesome-icon icon="fa-solid fa-arrow-up-right-from-square" class="text-[0.8em]" />
                </RouterLink>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  </main>
</template>
