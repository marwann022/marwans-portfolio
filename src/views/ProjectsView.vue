<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { RouterLink } from "vue-router";
import { secondaryProjects } from "@/data/projects.js";
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
            <span class="font-mono text-[12px] font-bold text-ink/50 uppercase tracking-wider">
              2026 INDEX
            </span>
          </div>
          <span class="text-[12px] font-mono font-bold text-ink/60 uppercase">
            03 FLAGSHIP SYSTEMS · SAAS &amp; HEALTHCARE
          </span>
        </div>

        <div class="flex max-md:flex-col md:items-end justify-between gap-6 pb-2">
          <div>
            <h1 class="text-[28px] md:text-[42px] leading-[1.08] tracking-[-0.035em] font-extrabold m-0 text-ink">
              Selected Product Work
            </h1>
            <p class="mt-2 text-[15px] md:text-[17px] leading-[1.5] text-ink/75 font-medium m-0 max-w-[620px]">
              Three production systems showing how I approach complex workflows, user research, and Vue 3 frontend implementation.
            </p>
          </div>

          <!-- Horizontal Spatial Navigation Index -->
          <nav class="flex items-center gap-6 font-mono text-[12px] font-bold border-t md:border-t-0 pt-4 md:pt-0 border-ink/20 w-full md:w-auto" aria-label="Page Sections">
            <button
              @click="scrollToSection('selected-work')"
              :class="[
                'py-1 border-b-2 transition-all cursor-pointer whitespace-nowrap',
                activeSection === 'selected-work' ? 'border-ink text-ink font-black' : 'border-transparent text-ink/50 hover:text-ink'
              ]"
            >
              01 Selected Work
            </button>

            <button
              @click="scrollToSection('more-work')"
              :class="[
                'py-1 border-b-2 transition-all cursor-pointer whitespace-nowrap',
                activeSection === 'more-work' ? 'border-ink text-ink font-black' : 'border-transparent text-ink/50 hover:text-ink'
              ]"
            >
              02 More Products
            </button>

            <button
              @click="scrollToSection('creative-archive')"
              :class="[
                'py-1 border-b-2 transition-all cursor-pointer whitespace-nowrap',
                activeSection === 'creative-archive' ? 'border-ink text-ink font-black' : 'border-transparent text-ink/50 hover:text-ink'
              ]"
            >
              03 Creative Archive
            </button>
          </nav>
        </div>
      </div>
    </header>

    <!-- SECTION 01: SELECTED WORK (CINEMATIC & ASYMMETRICAL CHAPTERS) -->
    <section id="selected-work" class="py-12 md:py-20 px-5 md:px-[7vw] border-b border-ink bg-paper">
      <div class="max-w-[1240px] mx-auto space-y-24 md:space-y-32">

        <!-- CHAPTER 01: SmartMeet (Cinematic: Text Above + Full-Width Media) -->
        <article class="space-y-6 group">
          <!-- Metadata Bar -->
          <div class="flex items-center justify-between border-b border-[#1e3a8a]/30 pb-3">
            <div class="flex items-center gap-3">
              <span class="font-mono text-[11px] font-black uppercase bg-[#1e3a8a] text-paper px-2.5 py-0.5 rounded-sm">
                01
              </span>
              <span class="font-mono text-[12px] font-bold text-[#1e3a8a] uppercase tracking-wider">
                AI MEETING INTELLIGENCE &amp; WORKSPACE
              </span>
            </div>
            <span class="text-[12px] font-mono font-bold text-ink/50 hidden sm:inline-block">Vue 3 · Node.js · RAG Search</span>
          </div>

          <!-- Content Top -->
          <div class="grid grid-cols-1 md:grid-cols-[1fr_340px] gap-6 items-end">
            <div>
              <h2 class="text-[34px] md:text-[52px] font-extrabold text-ink m-0 tracking-[-0.035em] group-hover:text-[#1e3a8a] transition-colors">
                SmartMeet
              </h2>
              <p class="mt-2 text-[16px] md:text-[18px] leading-[1.5] text-ink/85 font-medium m-0 max-w-[720px]">
                AI meeting intelligence platform transforming live conversations into structured transcripts, action items, decisions, and searchable team knowledge.
              </p>
            </div>

            <div class="flex flex-col md:items-end justify-between gap-3">
              <div class="text-[12px] font-mono font-bold text-ink/60 space-y-1 text-left md:text-right">
                <p class="m-0">Role: Lead Product Designer &amp; Frontend Engineer</p>
                <p class="m-0 text-[#1e3a8a]">Outcome: Top Capstone Score at ITI</p>
              </div>
              <RouterLink
                to="/projects/smartmeet"
                class="inline-flex items-center gap-2 px-6 py-3 bg-ink text-paper rounded-full font-extrabold text-[13px] hover:bg-[#1e3a8a] transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-ink whitespace-nowrap"
              >
                View case study ↗
              </RouterLink>
            </div>
          </div>

          <!-- Cinematic Full-Width Image Viewport -->
          <RouterLink to="/projects/smartmeet" class="block border border-ink bg-[#edf4f8] overflow-hidden relative group/img">
            <img
              src="/Thumbnail.png"
              alt="SmartMeet AI Meeting Intelligence Workspace interface"
              class="w-full h-auto max-h-[640px] object-cover object-left block transition-transform duration-700 ease-out group-hover/img:scale-[1.015]"
              loading="eager"
            />
            <div class="absolute bottom-4 left-4 bg-ink/90 text-paper text-[11px] font-mono font-bold px-3 py-1.5 rounded backdrop-blur-sm">
              Vue 3 + Node.js + RAG Knowledge Search
            </div>
          </RouterLink>
        </article>

        <!-- CHAPTER 02: WeCare (Asymmetrical: Image Left + Content Right) -->
        <article class="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-10 lg:gap-14 items-center pt-8 border-t border-ink/20 group">
          <!-- Image Left (Mobile Dominant Visual) -->
          <RouterLink to="/projects/wecare" class="block border border-ink bg-[#eef7fc] overflow-hidden relative group/img order-2 lg:order-1">
            <img
              src="/WeCare/Behance/WeCare Thumbnail .jpg"
              alt="WeCare Healthcare mobile patient booking journey screens"
              class="w-full h-auto max-h-[560px] object-cover object-center block transition-transform duration-700 ease-out group-hover/img:scale-[1.015]"
              loading="lazy"
            />
            <div class="absolute bottom-4 left-4 bg-ink/90 text-paper text-[11px] font-mono font-bold px-3 py-1.5 rounded backdrop-blur-sm">
              20+ Mobile Native Patient Screens
            </div>
          </RouterLink>

          <!-- Content Right -->
          <div class="space-y-6 order-1 lg:order-2">
            <div class="flex items-center gap-3 border-b border-[#1e8dc1]/30 pb-3">
              <span class="font-mono text-[11px] font-black uppercase bg-[#1e8dc1] text-paper px-2.5 py-0.5 rounded-sm">
                02
              </span>
              <span class="font-mono text-[12px] font-bold text-[#1e8dc1] uppercase tracking-wider">
                HEALTHCARE APPOINTMENT EXPERIENCE
              </span>
            </div>

            <div>
              <h2 class="text-[34px] md:text-[46px] font-extrabold text-ink m-0 tracking-[-0.035em] group-hover:text-[#1e8dc1] transition-colors">
                WeCare
              </h2>
              <p class="mt-3 text-[16px] md:text-[18px] leading-[1.55] text-ink/85 font-medium m-0">
                End-to-end healthcare booking experience covering doctor discovery, progressive 3-step scheduling, transparent pricing, and post-care support.
              </p>
            </div>

            <div class="space-y-3 font-sans text-[13px] font-bold text-ink">
              <div class="p-4 border-l-4 border-[#1e8dc1] border-t border-r border-b border-ink/20 bg-story-bg rounded-r">
                <span class="text-[#1e8dc1] font-mono text-[11px] uppercase block mb-1 font-extrabold">PATIENT UX &amp; TRUST</span>
                <span>Anxiety-reducing appointment workflows with transparent cost breakdowns before confirmation.</span>
              </div>

              <div class="p-4 border border-ink/20 bg-paper rounded">
                <span class="text-ink/50 font-mono text-[11px] uppercase block mb-1 font-extrabold">KEY DELIVERABLE</span>
                <span>Progressive 3-step appointment wizard (Doctor → Schedule → Confirmation).</span>
              </div>
            </div>

            <div class="pt-2">
              <RouterLink
                to="/projects/wecare"
                class="inline-flex items-center gap-2 px-6 py-3.5 bg-ink text-paper rounded-full font-extrabold text-[13px] hover:bg-[#1e8dc1] transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-ink"
              >
                View case study ↗
              </RouterLink>
            </div>
          </div>
        </article>

        <!-- CHAPTER 03: GolderaPharm (Asymmetrical: Content Left + Image Right) -->
        <article class="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-10 lg:gap-14 items-center pt-8 border-t border-ink/20 group">
          <!-- Content Left -->
          <div class="space-y-6">
            <div class="flex items-center gap-3 border-b border-[#be9e1c]/40 pb-3">
              <span class="font-mono text-[11px] font-black uppercase bg-[#be9e1c] text-paper px-2.5 py-0.5 rounded-sm">
                03
              </span>
              <span class="font-mono text-[12px] font-bold text-[#be9e1c] uppercase tracking-wider">
                ENTERPRISE PHARMACEUTICAL SAAS CRM
              </span>
            </div>

            <div>
              <h2 class="text-[34px] md:text-[46px] font-extrabold text-ink m-0 tracking-[-0.035em] group-hover:text-[#be9e1c] transition-colors">
                GolderaPharm
              </h2>
              <p class="mt-3 text-[16px] md:text-[18px] leading-[1.55] text-ink/85 font-medium m-0">
                Enterprise CRM for pharmaceutical field teams managing doctors, visits, planning, performance, and reporting across three operational roles.
              </p>
            </div>

            <!-- Role Adaptation Highlight -->
            <div class="p-4 border-l-4 border-[#be9e1c] border-t border-r border-b border-ink/20 bg-story-bg rounded-r font-sans text-[13px] font-bold text-ink space-y-1">
              <span class="text-[#be9e1c] font-mono text-[11px] uppercase block font-extrabold">MULTI-PERSONA ADAPTATION</span>
              <p class="m-0">One core system adapted across three distinct roles: <strong>Manager, Supervisor, and Medical Rep</strong>.</p>
            </div>

            <div class="p-4 border border-ink/20 bg-paper rounded text-[13px] font-bold text-ink">
              <span class="text-ink/50 font-mono text-[11px] uppercase block mb-1 font-extrabold">SCOPE &amp; SYSTEM</span>
              <span>50+ Complex CRM screens + Figma Design Token System</span>
            </div>

            <div class="pt-2">
              <RouterLink
                to="/projects/goldera"
                class="inline-flex items-center gap-2 px-6 py-3.5 bg-ink text-paper rounded-full font-extrabold text-[13px] hover:bg-[#be9e1c] hover:text-paper transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-ink"
              >
                View case study ↗
              </RouterLink>
            </div>
          </div>

          <!-- Image Right (3-Role CRM Visual) -->
          <RouterLink to="/projects/goldera" class="block border border-ink bg-[#fbf9f1] overflow-hidden relative group/img">
            <img
              src="/assets/golderapharm-cover.png"
              alt="GolderaPharm multi-role CRM interface design"
              class="w-full h-auto max-h-[560px] object-cover object-top block transition-transform duration-700 ease-out group-hover/img:scale-[1.015]"
              loading="lazy"
            />
            <div class="absolute bottom-4 left-4 bg-ink/90 text-paper text-[11px] font-mono font-bold px-3 py-1.5 rounded backdrop-blur-sm">
              Role-Based CRM Dashboard System
            </div>
          </RouterLink>
        </article>

      </div>
    </section>

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
          <span class="hidden sm:inline-block text-[12px] font-mono font-extrabold uppercase text-ink/50">SECONDARY PROJECTS</span>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <article
            v-for="project in secondaryProjects"
            :key="project.id"
            class="border border-ink bg-paper p-6 space-y-5 flex flex-col justify-between shadow-sm hover:-translate-y-1 transition-all duration-300 group"
          >
            <div class="space-y-4">
              <div class="flex items-center justify-between border-b border-ink/20 pb-3">
                <span class="font-mono text-[11px] font-extrabold uppercase text-ink/60">
                  {{ project.kind }}
                </span>
                <span class="font-mono text-[11px] font-bold text-ink/40">{{ project.num }}</span>
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

            <div class="pt-4 border-t border-ink/20 flex items-center justify-between">
              <span class="text-[12px] font-bold text-ink/60">{{ project.meta?.statusShort || project.meta?.status || 'Case Study' }}</span>
              <RouterLink
                :to="`/projects/${project.id}`"
                class="text-[12px] font-extrabold text-ink hover:underline inline-flex items-center gap-1"
              >
                View project ↗
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
          <span class="hidden sm:inline-block text-[12px] font-mono font-extrabold uppercase text-ink/50">BRAND SYSTEMS &amp; GRAPHICS</span>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <article
            v-for="item in gallery"
            :key="item.id"
            class="border border-ink bg-paper p-5 space-y-4 shadow-sm hover:border-[#1e3a8a] transition-colors group"
          >
            <div class="aspect-[4/3] border border-ink overflow-hidden bg-ink/5">
              <img
                :src="item.image"
                :alt="item.name"
                class="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
                loading="lazy"
              />
            </div>
            <div>
              <span class="font-mono text-[10px] font-extrabold uppercase text-ink/50 block mb-0.5">{{ item.category }}</span>
              <h3 class="text-[18px] font-extrabold text-ink m-0">{{ item.name }}</h3>
              <p class="text-[13px] text-ink/75 font-medium m-0 mt-1">{{ item.summary }}</p>
            </div>
            <div class="pt-3 border-t border-ink/20 flex justify-end">
              <RouterLink :to="`/archive/${item.id}`" class="text-[12px] font-extrabold text-ink hover:underline">
                View Identity System ↗
              </RouterLink>
            </div>
          </article>
        </div>
      </div>
    </section>
  </main>
</template>
