<script setup>
import { RouterLink } from "vue-router";
import { projects } from "@/data/projects.js";
import { useScrollReveal } from "@/composables/useScrollReveal.js";

const { smartmeet, wecare, goldera } = projects;
useScrollReveal();
</script>

<template>
  <section class="py-16 md:py-28 px-5 md:px-[7vw] lg:px-[90px] font-sans" id="projects">
    <!-- Section Header -->
    <div class="mb-16 md:mb-20">
      <div class="flex items-center justify-between border-b border-ink pb-4">
        <p class="font-sans font-extrabold text-[12px] tracking-[0.05em] uppercase m-0 text-ink/70">
          (01) FLAGSHIP PRODUCT WORK
        </p>
        <span class="text-[11px] font-extrabold uppercase tracking-wider text-ink/50">CURATED SELECTION · 3 CASE STUDIES</span>
      </div>
    </div>

    <!-- 01. SMARTMEET (Deep Blue Accents) -->
    <article class="mb-24 md:mb-32 border border-ink bg-paper overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 reveal-on-scroll group">
      <!-- Top Content & Description Header -->
      <div class="p-6 md:p-10 lg:p-12 border-b border-ink flex max-md:flex-col items-start md:items-end justify-between gap-6 bg-paper">
        <div class="space-y-3 max-w-[760px]">
          <div class="flex flex-wrap items-center gap-3">
            <span class="font-sans text-[13px] font-black uppercase tracking-wider bg-ink text-paper px-3 py-1 rounded-sm">01</span>
            <span class="font-sans text-[11px] font-black uppercase tracking-wider bg-[#1e3a8a]/10 text-[#1e3a8a] border border-[#1e3a8a]/30 px-2.5 py-0.5 rounded-full">AI PRODUCTIVITY</span>
            <span class="font-sans text-[11px] font-extrabold uppercase tracking-wider text-ink/60">PRODUCT DESIGN · VUE 3</span>
          </div>
          <h2 class="text-[clamp(32px,5vw,64px)] font-extrabold leading-[1.06] tracking-[-0.035em] text-ink m-0 group-hover:text-[#1e3a8a] transition-colors">
            SmartMeet
          </h2>
          <p class="text-[16px] md:text-[19px] leading-[1.5] text-ink/85 font-medium m-0">
            AI meeting intelligence and productivity platform transforming live conversations into structured transcripts, action items, decisions, and team knowledge.
          </p>
        </div>

        <RouterLink
          :to="`/projects/${smartmeet.id}`"
          class="inline-flex items-center gap-2 px-6 py-3.5 bg-ink text-paper rounded-full font-extrabold text-[13px] hover:bg-[#1e3a8a] focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-ink whitespace-nowrap group-hover:translate-x-1 transition-all"
        >
          View case study ↗
        </RouterLink>
      </div>

      <!-- Large Real Cover Image BELOW Content -->
      <RouterLink :to="`/projects/${smartmeet.id}`" class="block relative bg-[#edf4f8] border-b border-ink overflow-hidden">
        <img
          :src="smartmeet.image"
          :alt="smartmeet.name + ' AI meeting workspace interface'"
          class="w-full h-auto max-h-[640px] object-cover object-top block transition-transform duration-500 group-hover:scale-[1.02]"
          loading="eager"
        />
        <div class="absolute bottom-4 left-4 bg-ink/90 text-paper text-[11px] font-bold px-3 py-1.5 rounded backdrop-blur-sm">
          Vue 3 + Node.js + AI RAG Search
        </div>
      </RouterLink>

      <!-- Bottom Metadata Row -->
      <div class="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-ink font-sans text-[13px] font-bold text-ink bg-paper">
        <div class="p-4 md:p-5">
          <span class="block text-[#1e3a8a] text-[11px] uppercase mb-1 font-extrabold">Product Domain</span>
          <span>AI Meeting Workspace</span>
        </div>
        <div class="p-4 md:p-5">
          <span class="block text-ink/50 text-[11px] uppercase mb-1 font-extrabold">Technical Execution</span>
          <span>Vue 3, Vite, REST APIs</span>
        </div>
        <div class="p-4 md:p-5">
          <span class="block text-ink/50 text-[11px] uppercase mb-1 font-extrabold">Key Feature</span>
          <span>Split-Screen Live Transcript &amp; Task Extraction</span>
        </div>
      </div>
    </article>

    <!-- 02. WECARE (Dark Crimson Accents) -->
    <article class="mb-24 md:mb-32 border border-ink bg-paper overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 reveal-on-scroll group">
      <div class="grid grid-cols-1 lg:grid-cols-2">
        <!-- Left Column: Image Cover -->
        <RouterLink :to="`/projects/${wecare.id}`" class="block relative bg-[#e8f2f5] border-b lg:border-b-0 lg:border-r border-ink overflow-hidden min-h-[340px] lg:min-h-[500px]">
          <img
            :src="wecare.image"
            :alt="wecare.name + ' healthcare app UI'"
            class="w-full h-full object-cover object-top block transition-transform duration-500 group-hover:scale-[1.03]"
            loading="lazy"
          />
          <div class="absolute top-4 left-4 bg-ink/90 text-paper text-[11px] font-bold px-3 py-1.5 rounded backdrop-blur-sm">
            20+ Mobile Screens
          </div>
        </RouterLink>

        <!-- Right Column: Editorial Content -->
        <div class="p-6 md:p-10 lg:p-12 flex flex-col justify-between bg-paper">
          <div>
            <div class="flex flex-wrap items-center gap-3 mb-4">
              <span class="font-sans text-[13px] font-black uppercase tracking-wider bg-ink text-paper px-3 py-1 rounded-sm">02</span>
              <span class="font-sans text-[11px] font-black uppercase tracking-wider bg-[#1e8dc1]/10 text-[#1e8dc1] border border-[#1e8dc1]/30 px-2.5 py-0.5 rounded-full">HEALTHCARE APP</span>
              <span class="font-sans text-[11px] font-extrabold uppercase tracking-wider text-ink/60">UX PROCESS</span>
            </div>

            <h2 class="text-[clamp(30px,4.5vw,56px)] font-extrabold leading-[1.08] tracking-[-0.035em] text-ink m-0 group-hover:text-[#1e8dc1] transition-colors">
              WeCare
            </h2>

            <p class="mt-4 text-[16px] md:text-[18px] leading-[1.55] text-ink/85 font-medium m-0">
              End-to-end healthcare product experience covering doctor discovery, progressive 3-step scheduling, transparent pricing, and post-care support.
            </p>

            <div class="mt-8 space-y-3 font-sans text-[13px] font-bold text-ink">
              <div class="p-3.5 border-l-4 border-[#1e8dc1] border-t border-r border-b border-ink/20 bg-story-bg rounded-r">
                <span class="text-[#1e8dc1] text-[11px] uppercase block mb-0.5 font-extrabold">UX RESEARCH INSIGHT</span>
                <span>Anxiety-reducing workflows with transparent cost breakdowns before confirmation.</span>
              </div>
              <div class="p-3.5 border border-ink/30 bg-paper/60 rounded">
                <span class="text-ink/60 text-[11px] uppercase block mb-0.5 font-extrabold">KEY INNOVATION</span>
                <span>3-step progressive booking wizard replacing high-dropoff long forms.</span>
              </div>
            </div>
          </div>

          <div class="pt-8 mt-8 border-t border-ink flex items-center justify-between">
            <span class="font-sans text-[12px] font-bold text-ink/60">Mobile UX / Patient Journey</span>
            <RouterLink
              :to="`/projects/${wecare.id}`"
              class="inline-flex items-center gap-2 px-6 py-3 bg-ink text-paper rounded-full font-extrabold text-[13px] hover:bg-[#991b1b] transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-ink"
            >
              View case study ↗
            </RouterLink>
          </div>
        </div>
      </div>
    </article>

    <!-- 03. GOLDERAPHARM (Forest Green Accents) -->
    <article class="mb-20 md:mb-28 border border-ink bg-paper overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 reveal-on-scroll group">
      <div class="grid grid-cols-1 lg:grid-cols-2">
        <!-- Left Column: Editorial Content -->
        <div class="p-6 md:p-10 lg:p-12 flex flex-col justify-between bg-paper border-b lg:border-b-0 lg:border-r border-ink">
          <div>
            <div class="flex flex-wrap items-center gap-3 mb-4">
              <span class="font-sans text-[13px] font-black uppercase tracking-wider bg-ink text-paper px-3 py-1 rounded-sm">03</span>
              <span class="font-sans text-[11px] font-black uppercase tracking-wider bg-[#be9e1c]/10 text-[#be9e1c] border border-[#be9e1c]/30 px-2.5 py-0.5 rounded-full">ENTERPRISE SAAS</span>
              <span class="font-sans text-[11px] font-extrabold uppercase tracking-wider text-ink/60">CRM</span>
            </div>

            <h2 class="text-[clamp(30px,4.5vw,56px)] font-extrabold leading-[1.08] tracking-[-0.035em] text-ink m-0 group-hover:text-[#be9e1c] transition-colors">
              GolderaPharm
            </h2>

            <p class="mt-4 text-[16px] md:text-[18px] leading-[1.55] text-ink/85 font-medium m-0">
              Enterprise CRM for pharmaceutical field teams managing doctors, visits, planning, performance, and reporting across three operational roles.
            </p>

            <div class="mt-8 space-y-3 font-sans text-[13px] font-bold text-ink">
              <div class="p-3 border-l-4 border-[#be9e1c] border-t border-r border-b border-ink/20 bg-story-bg rounded-r">
                <span class="text-[#be9e1c] text-[11px] uppercase block mb-0.5 font-extrabold">PRIMARY PERSONA ROLES</span>
                <span>Manager, Supervisor, Medical Rep</span>
              </div>
              <div class="p-3 border border-ink/30 bg-paper/60 rounded">
                <span class="text-ink/50 text-[11px] uppercase block mb-0.5 font-extrabold">SCOPE &amp; DELIVERABLES</span>
                <span>50+ Screens, Figma Design System</span>
              </div>
            </div>
          </div>

          <div class="pt-8 mt-8 border-t border-ink flex items-center justify-between">
            <span class="font-sans text-[12px] font-bold text-ink/60">Enterprise SaaS / Field CRM</span>
            <RouterLink
              :to="`/projects/${goldera.id}`"
              class="inline-flex items-center gap-2 px-6 py-3 bg-ink text-paper rounded-full font-extrabold text-[13px] hover:bg-[#14532d] transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-ink"
            >
              View case study ↗
            </RouterLink>
          </div>
        </div>

        <!-- Right Column: Real Cover Image -->
        <RouterLink :to="`/projects/${goldera.id}`" class="block relative bg-[#f1ece4] overflow-hidden min-h-[340px] lg:min-h-[500px]">
          <img
            :src="goldera.image"
            :alt="goldera.name + ' 3-role CRM interface showcase'"
            class="w-full h-full object-cover object-left block transition-transform duration-500 group-hover:scale-[1.03]"
            loading="lazy"
          />
          <div class="absolute bottom-4 right-4 bg-ink/90 text-paper text-[11px] font-bold px-3 py-1.5 rounded backdrop-blur-sm">
            Three roles. One system.
          </div>
        </RouterLink>
      </div>
    </article>

    <!-- Deliberate Transition to Secondary Archive -->
    <div class="p-8 md:p-12 border border-ink bg-paper flex max-md:flex-col items-start md:items-center justify-between gap-6 shadow-md hover:shadow-lg transition-all duration-300">
      <div>
        <span class="font-sans text-[11px] font-extrabold uppercase tracking-widest text-ink/60 block mb-1">
          (02) EXTENDED ARCHIVE
        </span>
        <h3 class="text-[24px] md:text-[32px] font-extrabold text-ink m-0 tracking-[-0.03em]">
          More Product Work &amp; Creative Archive
        </h3>
        <p class="text-[14px] md:text-[16px] text-ink/75 font-medium m-0 mt-1 max-w-[620px]">
          Explore secondary UX/UI case studies (HMZ E-Learning, 212° Franchise, IMDb Redesign) alongside brand identities and campaign systems.
        </p>
      </div>

      <RouterLink
        to="/projects"
        class="px-7 py-4 bg-ink text-paper rounded-full font-extrabold text-[13px] hover:bg-ink/85 transition-colors whitespace-nowrap focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-ink"
      >
        View all projects ↗
      </RouterLink>
    </div>
  </section>
</template>
