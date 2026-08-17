<script setup>
import { RouterLink } from "vue-router";
import { flagshipProjects, secondaryProjects } from "@/data/projects.js";
import { gallery } from "@/data/gallery.js";
</script>

<template>
  <main class="projects-archive-page min-h-[calc(100vh-82px)] font-sans text-ink bg-paper">
    <!-- Header Section -->
    <header class="py-16 md:py-24 px-5 md:px-[7vw] lg:px-[90px] bg-ink text-paper border-b border-ink">
      <div class="flex items-center gap-3 mb-4">
        <span class="font-sans text-[11px] font-extrabold uppercase tracking-widest bg-lime text-ink px-3 py-1 rounded-sm">
          PORTFOLIO ARCHIVE
        </span>
        <span class="text-[12px] font-bold text-paper/60 uppercase tracking-wider">ALL PROJECTS &amp; CREATIVE WORK</span>
      </div>

      <h1 class="text-[clamp(38px,6vw,84px)] leading-[1.04] tracking-[-0.035em] font-extrabold m-0">
        Product case studies &amp;<br />
        <span class="font-serif italic font-normal text-paper/90">creative visual systems.</span>
      </h1>

      <p class="mt-6 text-[17px] md:text-[19px] leading-[1.55] max-w-[640px] text-paper/80 font-medium m-0">
        A complete index categorizing primary product design case studies, secondary product work, brand identities, and visual campaign systems.
      </p>

      <!-- Quick Jump Navigation Tabs -->
      <nav class="mt-10 flex flex-wrap gap-3 font-sans text-[12px] font-bold text-paper" aria-label="Archive Categories">
        <a href="#flagship-work" class="px-4 py-2 border border-paper/30 rounded-full hover:bg-paper hover:text-ink transition-colors">
          01. Flagship Product Work
        </a>
        <a href="#secondary-work" class="px-4 py-2 border border-paper/30 rounded-full hover:bg-paper hover:text-ink transition-colors">
          02. More Product Work
        </a>
        <a href="#creative-archive" class="px-4 py-2 border border-paper/30 rounded-full hover:bg-paper hover:text-ink transition-colors">
          03. Creative Archive (Brand &amp; Campaign)
        </a>
      </nav>
    </header>

    <!-- Section 01: Flagship Product Work -->
    <section id="flagship-work" class="py-16 md:py-24 px-5 md:px-[7vw] lg:px-[90px] border-b border-ink">
      <div class="flex items-center justify-between border-b border-ink pb-4 mb-12">
        <div>
          <span class="font-sans font-extrabold text-[12px] tracking-[0.05em] uppercase text-ink/70 block">
            SECTION 01
          </span>
          <h2 class="text-[28px] md:text-[36px] font-extrabold text-ink m-0 tracking-[-0.03em]">
            Flagship Product Case Studies
          </h2>
        </div>
        <span class="hidden sm:inline-block text-[12px] font-extrabold uppercase text-ink/50">PRIMARY POSITIONING</span>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <article
          v-for="p in flagshipProjects"
          :key="p.id"
          class="border border-ink bg-paper p-6 flex flex-col justify-between shadow-[6px_6px_0_rgba(21,21,21,0.06)] hover:border-ink/80 transition-colors"
        >
          <div>
            <div class="flex items-center justify-between border-b border-ink pb-3 mb-4">
              <span class="font-sans text-[12px] font-black uppercase bg-ink text-paper px-2.5 py-0.5 rounded-sm">{{ p.num }}</span>
              <span class="font-sans text-[11px] font-extrabold uppercase text-ink/60">{{ p.kind }}</span>
            </div>

            <h3 class="text-[24px] font-extrabold text-ink m-0 tracking-[-0.02em]">{{ p.name }}</h3>
            <p class="text-[14px] leading-[1.5] text-ink/80 font-medium mt-2 m-0">{{ p.blurb }}</p>
          </div>

          <div class="pt-6 mt-6 border-t border-line flex items-center justify-between">
            <span class="text-[11px] font-bold text-ink/50 uppercase">{{ p.overview.timeframe }}</span>
            <RouterLink
              :to="`/projects/${p.id}`"
              class="font-sans text-[12px] font-extrabold text-ink hover:underline inline-flex items-center gap-1"
            >
              View case study ↗
            </RouterLink>
          </div>
        </article>
      </div>
    </section>

    <!-- Section 02: More Product Work -->
    <section id="secondary-work" class="py-16 md:py-24 px-5 md:px-[7vw] lg:px-[90px] border-b border-ink bg-story-bg">
      <div class="flex items-center justify-between border-b border-ink pb-4 mb-12">
        <div>
          <span class="font-sans font-extrabold text-[12px] tracking-[0.05em] uppercase text-ink/70 block">
            SECTION 02
          </span>
          <h2 class="text-[28px] md:text-[36px] font-extrabold text-ink m-0 tracking-[-0.03em]">
            More Product Work
          </h2>
        </div>
        <span class="hidden sm:inline-block text-[12px] font-extrabold uppercase text-ink/50">EXTENDED PRODUCT CATALOG</span>
      </div>

      <!-- Denser Editorial List Layout -->
      <div class="divide-y divide-ink border-t border-b border-ink">
        <article
          v-for="p in secondaryProjects"
          :key="p.id"
          class="py-8 grid grid-cols-1 md:grid-cols-[80px_1fr_200px] gap-6 items-center bg-paper px-6"
        >
          <div class="font-sans text-[18px] font-black text-ink/50">
            {{ p.num }}
          </div>

          <div>
            <div class="flex items-center gap-3">
              <h3 class="text-[22px] font-extrabold text-ink m-0 tracking-[-0.02em]">{{ p.name }}</h3>
              <span class="text-[11px] font-extrabold uppercase tracking-wider bg-ink/10 text-ink px-2.5 py-0.5 rounded-full">
                {{ p.kind }}
              </span>
            </div>
            <p class="text-[14px] text-ink/80 font-medium m-0 mt-1 max-w-[680px]">
              {{ p.blurb }}
            </p>
            <div class="flex items-center gap-4 mt-2 font-sans text-[12px] font-bold text-ink/60">
              <span>Role: {{ p.overview.role }}</span>
              <span>•</span>
              <span>Timeframe: {{ p.overview.timeframe }}</span>
            </div>
          </div>

          <div class="flex max-md:justify-start justify-end">
            <RouterLink
              :to="`/projects/${p.id}`"
              class="px-5 py-2.5 border border-ink bg-paper text-ink rounded-full font-bold text-[12px] hover:bg-ink hover:text-paper transition-colors"
            >
              View project ↗
            </RouterLink>
          </div>
        </article>
      </div>
    </section>

    <!-- Section 03: Creative Archive (Clearly Separated from Product Design) -->
    <section id="creative-archive" class="py-16 md:py-24 px-5 md:px-[7vw] lg:px-[90px]">
      <div class="flex items-center justify-between border-b border-ink pb-4 mb-12">
        <div>
          <span class="font-sans font-extrabold text-[12px] tracking-[0.05em] uppercase text-ink/70 block">
            SECTION 03
          </span>
          <h2 class="text-[28px] md:text-[36px] font-extrabold text-ink m-0 tracking-[-0.03em]">
            Creative Archive
          </h2>
          <p class="text-[14px] text-ink/75 font-medium m-0 mt-1">
            Brand identity systems, visual campaign graphics, and promotional media.
          </p>
        </div>
        <span class="hidden sm:inline-block text-[12px] font-extrabold uppercase text-ink/50">BRAND &amp; CAMPAIGN WORK</span>
      </div>

      <!-- Creative Categories -->
      <div class="space-y-16">
        <!-- Category A: Brand Identity -->
        <div>
          <h3 class="text-[18px] font-extrabold uppercase tracking-wider text-ink border-b border-ink/40 pb-2 mb-6">
            Category 01 — Brand Identity
          </h3>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <article
              v-for="item in gallery.filter(g => g.id === 'moon' || g.id === 'cela')"
              :key="item.id"
              class="border border-ink bg-paper p-6 space-y-4"
            >
              <div class="aspect-[16/9] overflow-hidden border border-ink bg-[#f5f1e8]">
                <img :src="item.image" :alt="item.name + ' brand visual'" class="w-full h-full object-cover" loading="lazy" />
              </div>
              <div>
                <div class="flex items-center justify-between text-[12px] font-bold text-ink/60 mb-1">
                  <span class="uppercase tracking-wider font-extrabold">{{ item.category }}</span>
                  <span>{{ item.year }}</span>
                </div>
                <h4 class="text-[22px] font-extrabold text-ink m-0">{{ item.name }}</h4>
                <p class="text-[13px] text-ink/80 font-medium m-0 mt-1">{{ item.summary }}</p>
                <div class="mt-3 flex flex-wrap gap-1.5">
                  <span
                    v-for="(d, i) in item.deliverables"
                    :key="i"
                    class="text-[11px] font-bold border border-ink/20 px-2 py-0.5 rounded-full text-ink/70"
                  >
                    {{ d }}
                  </span>
                </div>
              </div>
              <div class="pt-4 border-t border-line flex justify-end">
                <RouterLink :to="`/archive/${item.id}`" class="text-[12px] font-extrabold text-ink hover:underline">
                  View identity system ↗
                </RouterLink>
              </div>
            </article>
          </div>
        </div>

        <!-- Category B: Campaign & Social -->
        <div>
          <h3 class="text-[18px] font-extrabold uppercase tracking-wider text-ink border-b border-ink/40 pb-2 mb-6">
            Category 02 — Campaign &amp; Social Systems
          </h3>

          <article class="border border-ink bg-paper p-6 md:p-8 grid grid-cols-1 md:grid-cols-[40%_1fr] gap-8 items-center">
            <div class="aspect-[4/3] overflow-hidden border border-ink bg-[#151515]">
              <img
                src="https://drive.google.com/thumbnail?id=396702188_702184045263495_3409533937639513646_n&amp;sz=w1000"
                alt="IEEE Recruitment Campaign visual asset system"
                class="w-full h-full object-cover"
                loading="lazy"
              />
            </div>

            <div class="space-y-4">
              <div class="flex items-center gap-3">
                <span class="text-[11px] font-extrabold uppercase bg-ink text-paper px-2.5 py-0.5 rounded-sm">IEEE CAMPAIGN</span>
                <span class="text-[12px] font-bold text-ink/60">2023 - 2024</span>
              </div>

              <h4 class="text-[26px] font-extrabold text-ink m-0 tracking-[-0.02em]">
                IEEE Recruitment Campaign &amp; Event Media System
              </h4>

              <p class="text-[14px] leading-[1.55] text-ink/80 font-medium m-0">
                Developed the visual direction and social asset system for the campaign across recruitment announcements, event promotion, stage signage, and short-form digital content.
              </p>

              <div class="flex flex-wrap gap-2 pt-2">
                <span class="text-[11px] font-extrabold border border-ink/30 px-3 py-1 rounded-full text-ink">Recruitment Announcements</span>
                <span class="text-[11px] font-extrabold border border-ink/30 px-3 py-1 rounded-full text-ink">Summit Stage Banners</span>
                <span class="text-[11px] font-extrabold border border-ink/30 px-3 py-1 rounded-full text-ink">Social Asset Templates</span>
              </div>

              <div class="pt-4 border-t border-line">
                <RouterLink to="/archive/ieee" class="font-sans text-[13px] font-extrabold text-ink hover:underline">
                  View full campaign system ↗
                </RouterLink>
              </div>
            </div>
          </article>
        </div>
      </div>

      <!-- Navigation Footnotes -->
      <div class="mt-20 pt-8 border-t border-ink flex max-sm:flex-col items-center justify-between gap-4 font-sans text-[13px] font-bold text-ink">
        <RouterLink to="/" class="hover:underline">
          ← Back to flagship work
        </RouterLink>
        <RouterLink to="/contact" class="hover:underline">
          Contact Marwan ↗
        </RouterLink>
      </div>
    </section>
  </main>
</template>
