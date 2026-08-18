<script setup>
import { ref } from "vue";
import ImageLightboxModal from "@/components/shared/ImageLightboxModal.vue";

const props = defineProps({
  project: {
    type: Object,
    required: true
  }
});

// Modal state
const lightboxOpen = ref(false);
const lightboxSrc = ref("");
const lightboxCaption = ref("");

function openLightbox(src, caption = "") {
  lightboxSrc.value = src;
  lightboxCaption.value = caption;
  lightboxOpen.value = true;
}

// Story-driven problem/solution definitions (2-3 sentences max)
const storyMap = {
  smartmeet: {
    headline: "MEETINGS CREATE INFORMATION. TEAMS NEED ACTION.",
    problem: "Engineering and product teams spend hours in recurring meetings, but follow-up is fragmented across disorganized notes and lost decisions.",
    solution: "SmartMeet converts live audio into structured transcripts with speaker identification, automatically extracting accountable tasks and verified decision logs."
  },
  wecare: {
    headline: "FINDING A DOCTOR IS EASY. CHOOSING ONE REQUIRES TRUST.",
    problem: "Patients experience high anxiety when booking healthcare through opaque forms with hidden consultation fees and uncertain scheduling.",
    solution: "WeCare builds a calm, transparent 3-step mobile booking journey with upfront pricing, doctor verification badges, and immediate appointment confirmation."
  },
  goldera: {
    headline: "ONE CRM. THREE DIFFERENT RESPONSIBILITIES.",
    problem: "Monolithic enterprise software overwhelms field representatives with irrelevant macro analytics, slowing down daily doctor visit logging.",
    solution: "GolderaPharm customizes one design system into three role-scoped view templates tailored specifically for Managers, Supervisors, and Medical Reps."
  },
  hmz: {
    headline: "CURRICULUM LISTS CAUSE OVERWHELM. VISUAL MILESTONES DRIVE MOMENTUM.",
    problem: "Long, flat lists of course videos create cognitive fatigue and lead to high drop-off rates in online learning.",
    solution: "HMZ transforms courses into visual milestone timelines with tangible streak tracking and interactive video module views."
  },
  imdb: {
    headline: "CLUTTERED ENTERTAINMENT DATABASES NEED CINEMATIC DARK HIERARCHY.",
    problem: "Legacy entertainment databases fight for attention with dense text tables, visual noise, and fragmented cast data.",
    solution: "A modern modular dark UI that lets film artwork and ratings shine while organizing metadata into clean, scannable cards."
  },
  franchise212: {
    headline: "INVESTOR TRUST IS BUILT BEFORE ASKING FOR A DECISION.",
    problem: "Prospective franchisees and commercial partners experienced friction navigating deep multi-level menus with hidden capital requirements.",
    solution: "A streamlined 4-destination responsive architecture establishing brand credibility, commercial viability, and direct inquiry actions across desktop and mobile."
  }
};
</script>

<template>
  <section class="py-10 md:py-16 px-5 md:px-[7vw] font-sans bg-paper space-y-16">
    <div class="max-w-[1240px] mx-auto space-y-16">

      <!-- 1. PROBLEM & SOLUTION STORY MOMENT (2-3 Sentences Max) -->
      <div v-if="storyMap[project.id]" class="border-t border-ink pt-8 space-y-6">
        <div class="flex items-center justify-between border-b border-ink/20 pb-3">
          <span class="font-mono text-[11px] font-extrabold uppercase tracking-widest text-ink/50">
            01 / PROBLEM &amp; PRODUCT THESIS
          </span>
          <span class="font-mono text-[11px] font-bold text-ink/50 uppercase hidden sm:inline-block">EXPLAIN LESS · SHOW MORE</span>
        </div>

        <h2 class="text-[clamp(24px,3.8vw,44px)] leading-[1.1] font-extrabold text-ink m-0 tracking-[-0.03em] max-w-[1020px]">
          {{ storyMap[project.id].headline }}
        </h2>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 text-[14px] leading-[1.55] items-start">
          <div class="p-5 border-l-4 border-ink bg-story-bg border-t border-r border-b border-ink/20 space-y-1.5 self-start h-auto">
            <span class="font-mono text-[11px] font-extrabold uppercase text-ink/60 block">THE PROBLEM</span>
            <p class="font-medium text-ink/90 m-0">{{ storyMap[project.id].problem }}</p>
          </div>

          <div class="p-5 border-l-4 border-ink bg-paper border-t border-r border-b border-ink/20 space-y-1.5 shadow-sm self-start h-auto">
            <span class="font-mono text-[11px] font-extrabold uppercase text-ink block">THE DESIGN SOLUTION</span>
            <p class="font-bold text-ink m-0">{{ storyMap[project.id].solution }}</p>
          </div>
        </div>
      </div>

      <!-- 2. SMARTMEET SPECIALIZED: VISUAL WORKFLOW SEQUENCE (Meeting → AI → Tasks) -->
      <div v-if="project.id === 'smartmeet'" class="space-y-8 border-t border-ink pt-10">
        <div class="flex items-center justify-between border-b border-ink pb-4">
          <div>
            <span class="font-mono text-[11px] font-extrabold uppercase tracking-widest text-[#1e3a8a] block mb-1">
              02 / VISUAL PRODUCT LIFECYCLE
            </span>
            <h3 class="text-[24px] font-extrabold text-ink m-0">
              From Live Conversation to Searchable Team Knowledge
            </h3>
          </div>
          <span class="font-mono text-[11px] font-bold text-ink/50 uppercase hidden sm:inline-block">CLICK SCREENS TO ZOOM 🔍</span>
        </div>

        <!-- 4-Stage Visual Product Flow (Tight Content-Wrapped Cards) -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-start">
          <div
            @click="openLightbox('/smartmeet-pages/live-meeting.jpg', '01 Live Meeting: Real-time audio stream & speaker tagging')"
            class="border border-ink bg-paper p-3 space-y-2 shadow-sm group cursor-zoom-in relative self-start h-auto"
          >
            <span class="font-mono text-[10px] font-extrabold bg-[#1e3a8a] text-paper px-2 py-0.5 rounded-sm block w-fit">
              01 LIVE MEETING
            </span>
            <div class="overflow-hidden border border-ink/20 bg-ink">
              <img src="/smartmeet-pages/live-meeting.jpg" alt="SmartMeet Live Meeting screen" class="w-full h-auto max-h-[360px] object-cover object-top block group-hover:scale-[1.03] transition-transform" />
            </div>
            <p class="text-[12px] font-bold text-ink m-0">Real-time audio stream &amp; speaker tagging.</p>
          </div>

          <div
            @click="openLightbox('/Thumbnail.png', '02 AI Transcript: Automated summary & timestamped notes')"
            class="border border-ink bg-paper p-3 space-y-2 shadow-sm group cursor-zoom-in relative self-start h-auto"
          >
            <span class="font-mono text-[10px] font-extrabold bg-[#1e3a8a] text-paper px-2 py-0.5 rounded-sm block w-fit">
              02 AI TRANSCRIPT
            </span>
            <div class="overflow-hidden border border-ink/20 bg-ink">
              <img src="/Thumbnail.png" alt="SmartMeet Transcript &amp; Summary view" class="w-full h-auto max-h-[360px] object-cover object-top block group-hover:scale-[1.03] transition-transform" />
            </div>
            <p class="text-[12px] font-bold text-ink m-0">Automated summary &amp; timestamped notes.</p>
          </div>

          <div
            @click="openLightbox('/smartmeet-pages/tasks.jpg', '03 Action Items & Tasks: Human verification before board sync')"
            class="border border-ink bg-paper p-3 space-y-2 shadow-sm group cursor-zoom-in relative self-start h-auto"
          >
            <span class="font-mono text-[10px] font-extrabold bg-[#1e3a8a] text-paper px-2 py-0.5 rounded-sm block w-fit">
              03 DECISIONS &amp; TASKS
            </span>
            <div class="overflow-hidden border border-ink/20 bg-ink">
              <img src="/smartmeet-pages/tasks.jpg" alt="SmartMeet Action Items &amp; Tasks screen" class="w-full h-auto max-h-[360px] object-cover object-top block group-hover:scale-[1.03] transition-transform" />
            </div>
            <p class="text-[12px] font-bold text-ink m-0">Human verification before board sync.</p>
          </div>

          <div
            @click="openLightbox('/smartmeet-pages/knowledge-ai.jpg', '04 RAG Search: Semantic search across past transcripts')"
            class="border border-ink bg-paper p-3 space-y-2 shadow-sm group cursor-zoom-in relative self-start h-auto"
          >
            <span class="font-mono text-[10px] font-extrabold bg-[#1e3a8a] text-paper px-2 py-0.5 rounded-sm block w-fit">
              04 RAG SEARCH
            </span>
            <div class="overflow-hidden border border-ink/20 bg-ink">
              <img src="/smartmeet-pages/knowledge-ai.jpg" alt="SmartMeet Knowledge AI vector search" class="w-full h-auto max-h-[360px] object-cover object-top block group-hover:scale-[1.03] transition-transform" />
            </div>
            <p class="text-[12px] font-bold text-ink m-0">Semantic search across past transcripts.</p>
          </div>
        </div>

        <!-- 4 Annotated Callouts -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 font-sans text-ink items-start">
          <div class="p-4 border-l-4 border-[#1e3a8a] bg-story-bg border-t border-r border-b border-ink/20 space-y-1 self-start h-auto">
            <span class="font-mono text-[11px] font-extrabold text-[#1e3a8a] block">01 EXECUTIVE SUMMARY</span>
            <p class="text-[13px] font-bold text-ink m-0">Quick understanding of what happened.</p>
          </div>

          <div class="p-4 border-l-4 border-[#1e3a8a] bg-story-bg border-t border-r border-b border-ink/20 space-y-1 self-start h-auto">
            <span class="font-mono text-[11px] font-extrabold text-[#1e3a8a] block">02 DECISION TRACKER</span>
            <p class="text-[13px] font-bold text-ink m-0">Separates commitments from conversation.</p>
          </div>

          <div class="p-4 border-l-4 border-[#1e3a8a] bg-story-bg border-t border-r border-b border-ink/20 space-y-1 self-start h-auto">
            <span class="font-mono text-[11px] font-extrabold text-[#1e3a8a] block">03 ACTION ITEMS</span>
            <p class="text-[13px] font-bold text-ink m-0">Turns discussion into assigned work.</p>
          </div>

          <div class="p-4 border-l-4 border-[#1e3a8a] bg-story-bg border-t border-r border-b border-ink/20 space-y-1 self-start h-auto">
            <span class="font-mono text-[11px] font-extrabold text-[#1e3a8a] block">04 SMART TRANSCRIPT</span>
            <p class="text-[13px] font-bold text-ink m-0">Keeps original context available for verification.</p>
          </div>
        </div>

        <!-- AI Control Matrix Table -->
        <div v-if="project.aiDesign" class="space-y-4 pt-4 border-t border-ink/20">
          <span class="font-mono text-[11px] font-extrabold uppercase tracking-widest text-[#1e3a8a]">
            AUTOMATION VS. HUMAN CONTROL MATRIX
          </span>
          <div class="border border-ink overflow-x-auto">
            <table class="w-full text-left border-collapse text-[13px]">
              <thead>
                <tr class="bg-ink text-paper font-mono text-[11px] uppercase tracking-wider">
                  <th class="p-3 border-r border-paper/20">Feature</th>
                  <th class="p-3 border-r border-paper/20">AI Automated Action</th>
                  <th class="p-3 border-r border-paper/20">Human Control</th>
                  <th class="p-3">UX Rationale</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-ink/20 font-sans">
                <tr v-for="(row, idx) in project.aiDesign.matrix" :key="idx" class="bg-paper hover:bg-story-bg">
                  <td class="p-3 font-extrabold text-ink border-r border-ink/20">{{ row.feature }}</td>
                  <td class="p-3 text-ink/80 border-r border-ink/20 font-medium">{{ row.aiAction }}</td>
                  <td class="p-3 text-[#1e3a8a] font-bold border-r border-ink/20">{{ row.userControl }}</td>
                  <td class="p-3 text-ink/75 font-medium italic">{{ row.rationale }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <!-- 3. HMZ E-LEARNING SPECIALIZED: VISUAL COURSE PROGRESSION -->
      <div v-else-if="project.id === 'hmz'" class="space-y-8 border-t border-ink pt-10">
        <div class="flex items-center justify-between border-b border-ink pb-4">
          <div>
            <span class="font-mono text-[11px] font-extrabold uppercase tracking-widest text-coral block mb-1">
              02 / LEARNING RHYTHM &amp; INTERFACE SYSTEM
            </span>
            <h3 class="text-[24px] font-extrabold text-ink m-0">
              Structured Curriculum &amp; Student Dashboard
            </h3>
          </div>
          <span class="font-mono text-[11px] font-bold text-ink/50 uppercase hidden sm:inline-block">CLICK SCREENS TO ZOOM 🔍</span>
        </div>

        <!-- 3-Step Visual Progression -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          <div
            @click="openLightbox('/HMZ/Courses.png', 'HMZ 01 Course Discovery Catalog')"
            class="border border-ink bg-paper p-3 space-y-2 group shadow-sm cursor-zoom-in relative self-start h-auto"
          >
            <span class="font-mono text-[10px] font-extrabold bg-ink text-paper px-2 py-0.5 rounded-sm block w-fit">
              01 COURSE DISCOVERY
            </span>
            <div class="overflow-hidden border border-ink/20 bg-ink/5">
              <img src="/HMZ/Courses.png" alt="HMZ Course Discovery screen" class="w-full h-auto max-h-[380px] object-cover object-top block group-hover:scale-[1.02] transition-transform" />
            </div>
            <p class="text-[13px] font-bold text-ink m-0 pt-1">Catalog with filtering by skill level &amp; estimated hours.</p>
          </div>

          <div
            @click="openLightbox('/HMZ/Course Info.png', 'HMZ 02 Course Info & Module View')"
            class="border border-ink bg-paper p-3 space-y-2 group shadow-sm cursor-zoom-in relative self-start h-auto"
          >
            <span class="font-mono text-[10px] font-extrabold bg-ink text-paper px-2 py-0.5 rounded-sm block w-fit">
              02 MODULE VIEW
            </span>
            <div class="overflow-hidden border border-ink/20 bg-ink/5">
              <img src="/HMZ/Course Info.png" alt="HMZ Course Info module view" class="w-full h-auto max-h-[380px] object-cover object-top block group-hover:scale-[1.02] transition-transform" />
            </div>
            <p class="text-[13px] font-bold text-ink m-0 pt-1">Structured unit timeline &amp; video player integration.</p>
          </div>

          <div
            @click="openLightbox('/HMZ/Dashboard.png', 'HMZ 03 Student Progress Dashboard')"
            class="border border-ink bg-paper p-3 space-y-2 group shadow-sm cursor-zoom-in relative self-start h-auto"
          >
            <span class="font-mono text-[10px] font-extrabold bg-ink text-paper px-2 py-0.5 rounded-sm block w-fit">
              03 STUDENT DASHBOARD
            </span>
            <div class="overflow-hidden border border-ink/20 bg-ink/5">
              <img src="/HMZ/Dashboard.png" alt="HMZ Student Dashboard screen" class="w-full h-auto max-h-[380px] object-cover object-top block group-hover:scale-[1.02] transition-transform" />
            </div>
            <p class="text-[13px] font-bold text-ink m-0 pt-1">Visual streak tracking, certificates &amp; active units.</p>
          </div>
        </div>

        <!-- Full Width Showcase Screen -->
        <div
          @click="openLightbox('/HMZ/Home.png', 'HMZ Learning Hub — Home Landing & AI Roadmap')"
          class="border border-ink bg-paper p-4 space-y-2 shadow-md overflow-hidden cursor-zoom-in relative group"
        >
          <span class="font-mono text-[11px] font-bold uppercase text-ink/60 block">HMZ LEARNING HUB — HOME LANDING &amp; AI ROADMAP</span>
          <img src="/HMZ/Home.png" alt="HMZ Home Landing page" class="w-full h-auto max-h-[540px] object-cover object-top border border-paper/20 block group-hover:scale-[1.005] transition-transform" />
        </div>
      </div>

      <!-- 4. IMDB REDESIGN SPECIALIZED: RICH MULTI-SCREEN DARK MODE SYSTEM -->
      <div v-else-if="project.id === 'imdb'" class="space-y-12 border-t border-ink pt-10">
        <div class="flex items-center justify-between border-b border-ink pb-4">
          <div>
            <span class="font-mono text-[11px] font-extrabold uppercase tracking-widest text-coral block mb-1">
              02 / CINEMATIC DARK INTERFACE WORKFLOW
            </span>
            <h3 class="text-[24px] font-extrabold text-ink m-0">
              Reconsidering Legacy Database Clutter Across Core User Journeys
            </h3>
          </div>
          <span class="font-mono text-[11px] font-bold text-ink/50 uppercase hidden sm:inline-block">CLICK SCREENS TO ZOOM 🔍</span>
        </div>

        <!-- Flow 01: Movie Detail Page & Annotations -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <div
            @click="openLightbox('/IMDB Redesign/IMDB 2Redesign.jpg', 'IMDb Redesign Primary Movie Detail Page')"
            class="border border-ink bg-ink p-3 space-y-2 group cursor-zoom-in relative self-start h-auto"
          >
            <span class="font-mono text-[10px] font-extrabold bg-paper text-ink px-2 py-0.5 rounded-sm block w-fit">
              01 MOVIE DETAIL &amp; RATINGS VIEW
            </span>
            <div class="overflow-hidden border border-paper/20">
              <img src="/IMDB Redesign/IMDB 2Redesign.jpg" alt="IMDb Redesign Movie detail page" class="w-full h-auto max-h-[480px] object-cover object-top block group-hover:scale-[1.01] transition-transform" />
            </div>
            <p class="font-mono text-[11px] text-paper/80 font-bold m-0 pt-1">Cinematic movie backdrop &amp; modular metadata cards.</p>
          </div>

          <div class="space-y-4 font-sans text-ink">
            <div class="p-4 border-l-4 border-ink bg-story-bg border-t border-r border-b border-ink/20 space-y-1">
              <span class="font-mono text-[11px] font-bold uppercase text-ink/60">01 / CINEMATIC BACKDROP</span>
              <p class="text-[13px] font-bold text-ink m-0">Full-bleed movie backdrop graphics establish immediate visual context without crowding cast details.</p>
            </div>

            <div class="p-4 border-l-4 border-ink bg-story-bg border-t border-r border-b border-ink/20 space-y-1">
              <span class="font-mono text-[11px] font-bold uppercase text-ink/60">02 / MODULAR METADATA CARDS</span>
              <p class="text-[13px] font-bold text-ink m-0">Replaced legacy text tables with high-contrast modular cards for ratings, cast, trivia, and streaming options.</p>
            </div>

            <div class="p-4 border-l-4 border-ink bg-story-bg border-t border-r border-b border-ink/20 space-y-1">
              <span class="font-mono text-[11px] font-bold uppercase text-ink/60">03 / STREAMING &amp; WATCHLIST</span>
              <p class="text-[13px] font-bold text-ink m-0">Direct 1-click watchlist bookmarking and streaming provider availability badges.</p>
            </div>
          </div>
        </div>

        <!-- Flow 02: Discovery Feed & Watchlist Stream (2 Real Assets) -->
        <div class="space-y-4 pt-4 border-t border-ink/20">
          <span class="font-mono text-[11px] font-extrabold uppercase text-coral block">
            HOME FEED &amp; WATCHLIST USER JOURNEYS
          </span>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
            <div
              @click="openLightbox('/IMDB Redesign/S6.png', 'IMDb Redesign 02 Home Discovery Feed & Personalized Picks')"
              class="border border-ink bg-ink p-3 space-y-2 group cursor-zoom-in relative self-start h-auto"
            >
              <span class="font-mono text-[10px] font-extrabold bg-coral text-paper px-2 py-0.5 rounded-sm block w-fit">
                02 HOME FEED &amp; EDITORIAL PICKS
              </span>
              <div class="overflow-hidden border border-paper/20 bg-ink/50">
                <img src="/IMDB Redesign/S6.png" alt="IMDb Redesign Home Discovery Feed" class="w-full h-auto max-h-[440px] object-cover object-top block group-hover:scale-[1.01] transition-transform" />
              </div>
              <p class="font-mono text-[11px] text-paper/80 font-bold m-0 pt-1">Trending trailers, box office rankings &amp; curated staff lists.</p>
            </div>

            <div
              @click="openLightbox('/IMDB Redesign/S7.png', 'IMDb Redesign 03 Watchlist & Media Stream')"
              class="border border-ink bg-ink p-3 space-y-2 group cursor-zoom-in relative self-start h-auto"
            >
              <span class="font-mono text-[10px] font-extrabold bg-coral text-paper px-2 py-0.5 rounded-sm block w-fit">
                03 WATCHLIST &amp; USER MEDIA
              </span>
              <div class="overflow-hidden border border-paper/20 bg-ink/50">
                <img src="/IMDB Redesign/S7.png" alt="IMDb Redesign Watchlist &amp; Media View" class="w-full h-auto max-h-[440px] object-cover object-top block group-hover:scale-[1.01] transition-transform" />
              </div>
              <p class="font-mono text-[11px] text-paper/80 font-bold m-0 pt-1">Custom collection tracking, user ratings &amp; photo stream.</p>
            </div>
          </div>
        </div>

        <!-- Flow 03: Search & Deep-Dive Modals (2 Real Assets) -->
        <div class="space-y-4 pt-4 border-t border-ink/20">
          <span class="font-mono text-[11px] font-extrabold uppercase text-coral block">
            SEARCH, FILTERING &amp; CELEBRITY PROFILES
          </span>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
            <div
              @click="openLightbox('/IMDB Redesign/S8.png', 'IMDb Redesign 04 Advanced Search & Filtering Modal')"
              class="border border-ink bg-ink p-3 space-y-2 group cursor-zoom-in relative self-start h-auto"
            >
              <span class="font-mono text-[10px] font-extrabold bg-paper text-ink px-2 py-0.5 rounded-sm block w-fit">
                04 ADVANCED SEARCH &amp; FILTERS
              </span>
              <div class="overflow-hidden border border-paper/20 bg-ink/50">
                <img src="/IMDB Redesign/S8.png" alt="IMDb Search &amp; Filter screen" class="w-full h-auto max-h-[440px] object-cover object-top block group-hover:scale-[1.01] transition-transform" />
              </div>
              <p class="font-mono text-[11px] text-paper/80 font-bold m-0 pt-1">Real-time faceted genre, release year &amp; streaming provider filters.</p>
            </div>

            <div
              @click="openLightbox('/IMDB Redesign/S9.png', 'IMDb Redesign 05 Cast Filmography & Awards Breakdown')"
              class="border border-ink bg-ink p-3 space-y-2 group cursor-zoom-in relative self-start h-auto"
            >
              <span class="font-mono text-[10px] font-extrabold bg-paper text-ink px-2 py-0.5 rounded-sm block w-fit">
                05 CAST PROFILES &amp; AWARDS
              </span>
              <div class="overflow-hidden border border-paper/20 bg-ink/50">
                <img src="/IMDB Redesign/S9.png" alt="IMDb Cast Filmography breakdown" class="w-full h-auto max-h-[440px] object-cover object-top block group-hover:scale-[1.01] transition-transform" />
              </div>
              <p class="font-mono text-[11px] text-paper/80 font-bold m-0 pt-1">Structured career filmography, biography highlights &amp; trivia.</p>
            </div>
          </div>
        </div>

        <!-- Full Width Design System Frame -->
        <div
          @click="openLightbox('/IMDB Redesign/Frame 1948755426.png', 'IMDb Redesign Complete Multi-Screen System Architecture')"
          class="border border-ink bg-ink p-4 space-y-2 shadow-md overflow-hidden cursor-zoom-in relative group"
        >
          <span class="font-mono text-[11px] font-bold uppercase text-paper/70 block">COMPLETE MULTI-SCREEN SYSTEM ARCHITECTURE (CLICK TO ZOOM)</span>
          <img src="/IMDB Redesign/Frame 1948755426.png" alt="IMDb Redesign Full Multi-Screen Architecture Frame" class="w-full h-auto max-h-[540px] object-cover object-top border border-paper/20 block group-hover:scale-[1.005] transition-transform" />
        </div>
      </div>

      <!-- 5. 212° FRANCHISE SPECIALIZED: DESKTOP & MOBILE RESPONSIVE PLATFORM -->
      <div v-else-if="project.id === 'franchise212'" class="space-y-14 border-t border-ink pt-10">
        
        <!-- 02 / 4-Destination Desktop Journey -->
        <div class="space-y-6">
          <div class="flex items-center justify-between border-b border-ink pb-4">
            <div>
              <span class="font-mono text-[11px] font-extrabold uppercase tracking-widest text-[#be9e1c] block mb-1">
                02 / CORE DESKTOP EXPERIENCE
              </span>
              <h3 class="text-[24px] font-extrabold text-ink m-0">
                Direct 4-Destination Commercial Journey
              </h3>
            </div>
            <span class="font-mono text-[11px] font-bold text-ink/50 uppercase hidden sm:inline-block">CLICK SCREENS TO ZOOM 🔍</span>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 items-start">
            <div
              @click="openLightbox('/212/Home.jpg', '212° Franchise 01 Home Landing: Commercial brand intro & concept portal')"
              class="border border-ink bg-paper p-3 space-y-2 shadow-sm cursor-zoom-in relative group self-start h-auto"
            >
              <span class="font-mono text-[10px] font-extrabold bg-ink text-paper px-2 py-0.5 rounded-sm block w-fit">01 HOME LANDING</span>
              <div class="overflow-hidden border border-ink/20 bg-ink/5">
                <img src="/212/Home.jpg" alt="212 Franchise Home Landing page" class="w-full h-auto max-h-[360px] object-cover object-top block group-hover:scale-[1.02] transition-transform" />
              </div>
              <p class="font-mono text-[11px] font-bold text-ink m-0 pt-1">Commercial value proposition &amp; franchise concept overview.</p>
            </div>

            <div
              @click="openLightbox('/212/About us.jpg', '212° Franchise 02 About Us: Origin story & commercial philosophy')"
              class="border border-ink bg-paper p-3 space-y-2 shadow-sm cursor-zoom-in relative group self-start h-auto"
            >
              <span class="font-mono text-[10px] font-extrabold bg-ink text-paper px-2 py-0.5 rounded-sm block w-fit">02 ABOUT &amp; ORIGIN</span>
              <div class="overflow-hidden border border-ink/20 bg-ink/5">
                <img src="/212/About us.jpg" alt="212 Franchise About us page" class="w-full h-auto max-h-[360px] object-cover object-top block group-hover:scale-[1.02] transition-transform" />
              </div>
              <p class="font-mono text-[11px] font-bold text-ink m-0 pt-1">Brand origin, leadership philosophy &amp; trust credentials.</p>
            </div>

            <div
              @click="openLightbox('/212/Products.jpg', '212° Franchise 03 Products: Multi-category commercial franchise catalog')"
              class="border border-ink bg-paper p-3 space-y-2 shadow-sm cursor-zoom-in relative group self-start h-auto"
            >
              <span class="font-mono text-[10px] font-extrabold bg-ink text-paper px-2 py-0.5 rounded-sm block w-fit">03 PRODUCTS CATALOG</span>
              <div class="overflow-hidden border border-ink/20 bg-ink/5">
                <img src="/212/Products.jpg" alt="212 Franchise Products catalog" class="w-full h-auto max-h-[360px] object-cover object-top block group-hover:scale-[1.02] transition-transform" />
              </div>
              <p class="font-mono text-[11px] font-bold text-ink m-0 pt-1">Multi-category franchise concepts with financial requirements.</p>
            </div>

            <div
              @click="openLightbox('/212/Contact us.jpg', '212° Franchise 04 Contact: Direct investor inquiry & qualification form')"
              class="border border-ink bg-paper p-3 space-y-2 shadow-sm cursor-zoom-in relative group self-start h-auto"
            >
              <span class="font-mono text-[10px] font-extrabold bg-ink text-paper px-2 py-0.5 rounded-sm block w-fit">04 INVESTOR INQUIRY</span>
              <div class="overflow-hidden border border-ink/20 bg-ink/5">
                <img src="/212/Contact us.jpg" alt="212 Franchise Contact page" class="w-full h-auto max-h-[360px] object-cover object-top block group-hover:scale-[1.02] transition-transform" />
              </div>
              <p class="font-mono text-[11px] font-bold text-ink m-0 pt-1">Direct 1-step partner qualification &amp; consultation request.</p>
            </div>
          </div>
        </div>

        <!-- 03 / Mobile-First Responsive System (Real Phone Screens) -->
        <div class="space-y-6 pt-6 border-t border-ink/20">
          <div class="flex items-center justify-between border-b border-ink pb-4">
            <div>
              <span class="font-mono text-[11px] font-extrabold uppercase tracking-widest text-[#be9e1c] block mb-1">
                03 / MOBILE-FIRST RESPONSIVE ADAPTATION
              </span>
              <h3 class="text-[24px] font-extrabold text-ink m-0">
                Native Mobile Navigation &amp; Touch-Optimized Layouts
              </h3>
            </div>
            <span class="font-mono text-[11px] font-bold text-ink/50 uppercase hidden sm:inline-block">10+ REAL MOBILE SCREENS 🔍</span>
          </div>

          <div class="grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-6 items-start">
            <div
              @click="openLightbox('/212/mob home.jpg', '212° Mobile 01 Home: Touch-friendly vertical scroll & concept overview')"
              class="border border-ink bg-paper p-2.5 space-y-2 text-center group cursor-zoom-in relative self-start h-auto shadow-sm"
            >
              <span class="font-mono text-[10px] font-extrabold bg-ink text-paper px-2 py-0.5 rounded-sm block mx-auto w-fit">01 MOB HOME</span>
              <div class="overflow-hidden border border-ink bg-[#fbf9f1] max-h-[460px]">
                <img src="/212/mob home.jpg" alt="212 Mobile Home screen" class="w-full h-auto max-h-[460px] object-cover object-top block group-hover:scale-[1.02] transition-transform" />
              </div>
              <p class="font-mono text-[10px] font-bold text-ink m-0 pt-1 text-left">Mobile vertical hero.</p>
            </div>

            <div
              @click="openLightbox('/212/Burger menu.jpg', '212° Mobile 02 Navigation: Accessible full-height drawer with instant section jumps')"
              class="border border-ink bg-paper p-2.5 space-y-2 text-center group cursor-zoom-in relative self-start h-auto shadow-sm"
            >
              <span class="font-mono text-[10px] font-extrabold bg-ink text-paper px-2 py-0.5 rounded-sm block mx-auto w-fit">02 MOB MENU</span>
              <div class="overflow-hidden border border-ink bg-[#fbf9f1] max-h-[460px]">
                <img src="/212/Burger menu.jpg" alt="212 Mobile Navigation drawer" class="w-full h-auto max-h-[460px] object-cover object-top block group-hover:scale-[1.02] transition-transform" />
              </div>
              <p class="font-mono text-[10px] font-bold text-ink m-0 pt-1 text-left">Navigation drawer.</p>
            </div>

            <div
              @click="openLightbox('/212/mob prod.jpg', '212° Mobile 03 Products: Stacked specification sheets & instant inquiry CTA')"
              class="border border-ink bg-paper p-2.5 space-y-2 text-center group cursor-zoom-in relative self-start h-auto shadow-sm"
            >
              <span class="font-mono text-[10px] font-extrabold bg-ink text-paper px-2 py-0.5 rounded-sm block mx-auto w-fit">03 MOB PRODUCTS</span>
              <div class="overflow-hidden border border-ink bg-[#fbf9f1] max-h-[460px]">
                <img src="/212/mob prod.jpg" alt="212 Mobile Products catalog" class="w-full h-auto max-h-[460px] object-cover object-top block group-hover:scale-[1.02] transition-transform" />
              </div>
              <p class="font-mono text-[10px] font-bold text-ink m-0 pt-1 text-left">Stacked product sheets.</p>
            </div>

            <div
              @click="openLightbox('/212/mob contact.jpg', '212° Mobile 04 Contact: Low-friction mobile partner qualification form')"
              class="border border-ink bg-paper p-2.5 space-y-2 text-center group cursor-zoom-in relative self-start h-auto shadow-sm"
            >
              <span class="font-mono text-[10px] font-extrabold bg-ink text-paper px-2 py-0.5 rounded-sm block mx-auto w-fit">04 MOB INQUIRY</span>
              <div class="overflow-hidden border border-ink bg-[#fbf9f1] max-h-[460px]">
                <img src="/212/mob contact.jpg" alt="212 Mobile Contact form" class="w-full h-auto max-h-[460px] object-cover object-top block group-hover:scale-[1.02] transition-transform" />
              </div>
              <p class="font-mono text-[10px] font-bold text-ink m-0 pt-1 text-left">1-tap inquiry action.</p>
            </div>
          </div>
        </div>

        <!-- 04 / Desktop ↔ Mobile Side-by-Side Responsive Comparison -->
        <div class="space-y-6 pt-6 border-t border-ink/20">
          <div class="flex items-center justify-between border-b border-ink pb-4">
            <div>
              <span class="font-mono text-[11px] font-extrabold uppercase tracking-widest text-[#be9e1c] block mb-1">
                04 / RESPONSIVE SYSTEM COMPARISON
              </span>
              <h3 class="text-[24px] font-extrabold text-ink m-0">
                Desktop Architecture Reflowing to Mobile Focus
              </h3>
            </div>
            <span class="font-mono text-[11px] font-bold text-ink/50 uppercase hidden sm:inline-block">SIDE-BY-SIDE PROOF</span>
          </div>

          <div class="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-8 items-start">
            <!-- Desktop Screen -->
            <div
              @click="openLightbox('/212/Products.jpg', 'Desktop Multi-Column Grid View')"
              class="border border-ink bg-paper p-3 space-y-2 group cursor-zoom-in relative self-start h-auto shadow-sm"
            >
              <span class="font-mono text-[10px] font-extrabold uppercase bg-ink text-paper px-2 py-0.5 rounded-sm block w-fit">DESKTOP EXPERIENCE</span>
              <div class="overflow-hidden border border-ink/20 bg-ink/5">
                <img src="/212/Products.jpg" alt="Desktop Products screen" class="w-full h-auto max-h-[460px] object-cover object-top block group-hover:scale-[1.01] transition-transform" />
              </div>
              <p class="font-mono text-[11px] text-ink/80 font-bold m-0 pt-1">Multi-column layout with horizontal exploration and persistent top navigation.</p>
            </div>

            <!-- Mobile Screen & Annotations -->
            <div class="space-y-4">
              <div
                @click="openLightbox('/212/mob prod.jpg', 'Mobile Stacked Touch View')"
                class="border border-ink bg-paper p-3 space-y-2 group cursor-zoom-in relative self-start h-auto shadow-sm"
              >
                <span class="font-mono text-[10px] font-extrabold uppercase bg-ink text-paper px-2 py-0.5 rounded-sm block w-fit">MOBILE EXPERIENCE</span>
                <div class="overflow-hidden border border-ink/20 bg-ink/5 max-h-[320px]">
                  <img src="/212/mob prod.jpg" alt="Mobile Products screen" class="w-full h-auto max-h-[320px] object-cover object-top block group-hover:scale-[1.01] transition-transform" />
                </div>
              </div>

              <div class="space-y-3 font-sans text-ink text-[13px]">
                <div class="p-3.5 border-l-4 border-[#be9e1c] bg-story-bg border-t border-r border-b border-ink/20 space-y-0.5">
                  <span class="font-mono text-[10px] font-extrabold uppercase text-[#be9e1c] block">01 / NAVIGATION DRAWER</span>
                  <p class="font-bold text-ink m-0">Desktop navbar collapses into an accessible, thumb-friendly burger drawer with 1-tap category jumps.</p>
                </div>

                <div class="p-3.5 border-l-4 border-[#be9e1c] bg-story-bg border-t border-r border-b border-ink/20 space-y-0.5">
                  <span class="font-mono text-[10px] font-extrabold uppercase text-[#be9e1c] block">02 / CONTENT STACKING</span>
                  <p class="font-bold text-ink m-0">Multi-column cards reflow into full-width vertical units with high-contrast investment summaries.</p>
                </div>

                <div class="p-3.5 border-l-4 border-[#be9e1c] bg-story-bg border-t border-r border-b border-ink/20 space-y-0.5">
                  <span class="font-mono text-[10px] font-extrabold uppercase text-[#be9e1c] block">03 / PERSISTENT ACTION CTA</span>
                  <p class="font-bold text-ink m-0">Direct partner inquiry button remains anchored to the bottom of the screen on mobile.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- 05 / Multi-Category Franchise Concepts (Desktop + Mobile Pairs) -->
        <div class="space-y-6 pt-6 border-t border-ink/20">
          <span class="font-mono text-[11px] font-extrabold uppercase text-[#be9e1c] block">
            05 / COMMERCIAL FRANCHISE VERTICALS (DESKTOP &amp; MOBILE PAIRS)
          </span>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
            <!-- Solar Pair -->
            <div
              @click="openLightbox('/212/solar.jpg', '212° Clean Energy / Solar Franchise Concept')"
              class="border border-ink bg-paper p-3 space-y-2 group cursor-zoom-in relative self-start h-auto shadow-sm"
            >
              <span class="font-mono text-[10px] font-extrabold uppercase bg-ink text-paper px-2 py-0.5 rounded-sm block w-fit">CLEAN ENERGY CONCEPT</span>
              <div class="overflow-hidden border border-ink/20 bg-ink/5 max-h-[320px]">
                <img src="/212/solar.jpg" alt="212 Solar concept" class="w-full h-auto max-h-[320px] object-cover object-top block group-hover:scale-[1.02] transition-transform" />
              </div>
              <span class="font-mono text-[11px] font-bold text-ink block border-t border-ink/10 pt-2">Solar Commercial Vertical</span>
            </div>

            <!-- Robo Pair -->
            <div
              @click="openLightbox('/212/Robo.jpg', '212° Robotics & Automation Concept')"
              class="border border-ink bg-paper p-3 space-y-2 group cursor-zoom-in relative self-start h-auto shadow-sm"
            >
              <span class="font-mono text-[10px] font-extrabold uppercase bg-ink text-paper px-2 py-0.5 rounded-sm block w-fit">ROBOTICS CONCEPT</span>
              <div class="overflow-hidden border border-ink/20 bg-ink/5 max-h-[320px]">
                <img src="/212/Robo.jpg" alt="212 Robotics concept" class="w-full h-auto max-h-[320px] object-cover object-top block group-hover:scale-[1.02] transition-transform" />
              </div>
              <span class="font-mono text-[11px] font-bold text-ink block border-t border-ink/10 pt-2">Automation &amp; Robotics Vertical</span>
            </div>

            <!-- Yacht Pair -->
            <div
              @click="openLightbox('/212/Yacht.jpg', '212° Marine & Yacht Concept')"
              class="border border-ink bg-paper p-3 space-y-2 group cursor-zoom-in relative self-start h-auto shadow-sm"
            >
              <span class="font-mono text-[10px] font-extrabold uppercase bg-ink text-paper px-2 py-0.5 rounded-sm block w-fit">MARINE CONCEPT</span>
              <div class="overflow-hidden border border-ink/20 bg-ink/5 max-h-[320px]">
                <img src="/212/Yacht.jpg" alt="212 Yacht concept" class="w-full h-auto max-h-[320px] object-cover object-top block group-hover:scale-[1.02] transition-transform" />
              </div>
              <span class="font-mono text-[11px] font-bold text-ink block border-t border-ink/10 pt-2">Marine &amp; Yachting Vertical</span>
            </div>
          </div>
        </div>
      </div>

      <!-- 6. WECARE SPECIALIZED: TRUST HIERARCHY & 3 EQUAL JOURNEY SCREENS -->
      <div v-else-if="project.id === 'wecare'" class="space-y-12 border-t border-ink pt-10">
        <!-- Trust Hierarchy -->
        <div class="grid grid-cols-1 md:grid-cols-[260px_1fr] gap-6 md:gap-10 items-start">
          <div>
            <span class="font-mono text-[11px] font-extrabold uppercase tracking-widest text-[#1e8dc1] bg-[#1e8dc1]/10 px-2 py-0.5 rounded-sm block mb-2 w-fit">
              02 / PATIENT UX &amp; TRUST
            </span>
            <h3 class="text-[20px] font-extrabold text-ink m-0 tracking-[-0.02em]">
              Trust &amp; Information Hierarchy
            </h3>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-[840px] items-start">
            <div v-for="item in project.trustHierarchy.hierarchyOrder" :key="item.rank" class="p-4 border border-ink bg-paper space-y-1 self-start h-auto">
              <span class="font-mono text-[11px] font-black text-[#1e8dc1] uppercase block">PRIORITY {{ item.rank }}</span>
              <strong class="text-[14px] font-bold text-ink block">{{ item.element }}</strong>
              <p class="text-[13px] text-ink/80 font-medium m-0 leading-[1.5]">{{ item.why }}</p>
            </div>
          </div>
        </div>

        <!-- 3 Equal Journey Screens (Fixed 829px Outer Height Viewport with Internal Scroll) -->
        <div v-if="project.journeyFlow && project.journeyFlow.length" class="space-y-6 pt-6 border-t border-ink/20">
          <div class="flex max-sm:flex-col items-start sm:items-center justify-between gap-3 border-b border-ink pb-4">
            <div>
              <h3 class="text-[24px] font-extrabold text-ink m-0">
                01 Discover → 02 Schedule → 03 Confirm
              </h3>
              <p class="text-[13px] text-ink/70 font-mono m-0 mt-1">
                Equal 829px phone viewports with scrollable internal screens for long UI inspection.
              </p>
            </div>
            <span class="font-mono text-[11px] font-bold text-ink/50 uppercase">SCROLL INSIDE PHONES / CLICK TO ZOOM 🔍</span>
          </div>

          <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            <div
              v-for="j in project.journeyFlow"
              :key="j.step"
              class="border-2 border-ink bg-[#0f172a] p-3 rounded-[36px] shadow-xl space-y-3 relative flex flex-col mx-auto w-full max-w-[380px]"
            >
              <!-- Phone Header Bar -->
              <div class="flex items-center justify-between border-b border-white/10 pb-2 px-3 font-mono text-[11px] font-bold text-white shrink-0">
                <span class="bg-[#1e8dc1] text-paper px-2 py-0.5 rounded-sm text-[10px] uppercase">STEP {{ j.step }}</span>
                <span class="text-white/90 uppercase text-[12px] tracking-wider">{{ j.label }}</span>
                <span class="text-white/50 text-[10px]">9:41 AM</span>
              </div>

              <!-- Fixed 829px Visible Height Screen Viewport (Scrollable Internal UI) -->
              <div
                @click="openLightbox(j.screen, 'WeCare Step ' + j.step + ': ' + j.label)"
                class="w-full h-[829px] overflow-y-auto overflow-x-hidden bg-paper rounded-[20px] cursor-zoom-in relative group/scroll scrollbar-thin scroll-smooth"
              >
                <img
                  :src="j.screen"
                  :alt="j.label"
                  class="w-full h-auto block"
                  loading="lazy"
                />

                <!-- Subtle Scroll Affordance Overlay -->
                <div class="pointer-events-none sticky bottom-0 left-0 right-0 h-14 bg-gradient-to-t from-black/40 via-black/10 to-transparent flex items-end justify-center pb-2 opacity-90 group-hover/scroll:opacity-100 transition-opacity">
                  <span class="bg-ink/90 text-paper text-[10px] font-mono px-3 py-1 rounded-full backdrop-blur-md shadow-md border border-paper/20">
                    ↕ Scroll screen
                  </span>
                </div>
              </div>

              <!-- Caption Footer -->
              <div class="bg-paper border border-ink/20 p-3.5 rounded-xl space-y-1 text-left shrink-0">
                <span class="font-mono text-[10px] font-extrabold text-[#1e8dc1] uppercase block">
                  FLOW STAGE {{ j.step }}: {{ j.label }}
                </span>
                <p class="text-[13px] leading-[1.5] text-ink/85 font-medium m-0">{{ j.caption }}</p>
              </div>
            </div>
          </div>
        </div>

        <!-- WeCare Ecosystem Gallery -->
        <div v-if="project.galleryScreens && project.galleryScreens.length" class="space-y-6 pt-8 border-t border-ink/20">
          <div class="flex items-center justify-between border-b border-ink/20 pb-3">
            <span class="font-mono text-[12px] font-extrabold uppercase text-[#1e8dc1]">
              PATIENT ECOSYSTEM GALLERY (10 MOBILE SCREENS)
            </span>
            <span class="font-mono text-[10px] text-ink/50 uppercase">SCROLL OR CLICK TO LIGHTBOX</span>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 items-start">
            <div
              v-for="s in project.galleryScreens"
              :key="s.name"
              class="border-2 border-ink bg-[#0f172a] p-2.5 rounded-[28px] shadow-md space-y-2 group relative flex flex-col"
            >
              <div class="flex items-center justify-between font-mono text-[9px] text-white/70 px-2 pb-1 border-b border-white/10 shrink-0">
                <span class="truncate pr-1 text-[#38bdf8] font-bold">{{ s.name }}</span>
                <span>9:41</span>
              </div>
              <div
                @click="openLightbox(s.path, 'WeCare Screen: ' + s.name)"
                class="w-full h-[460px] overflow-y-auto overflow-x-hidden bg-paper rounded-[16px] cursor-zoom-in relative scrollbar-thin scroll-smooth"
              >
                <img :src="s.path" :alt="s.name" class="w-full h-auto block" loading="lazy" />
              </div>
              <span class="font-mono text-[10px] font-bold text-white/90 block text-center truncate px-1 pt-1">{{ s.name }}</span>
            </div>
          </div>
        </div>
      </div>

      <!-- 7. GOLDERAPHARM SPECIALIZED: 3-ROLE CRM DECK & SYSTEM GALLERY -->
      <div v-else-if="project.id === 'goldera'" class="space-y-12 border-t border-ink pt-10">
        <!-- 3 Role Architecture -->
        <div v-if="project.roleArchitecture" class="space-y-6">
          <div class="flex items-center justify-between border-b border-ink pb-4">
            <h3 class="text-[24px] font-extrabold text-ink m-0">One Operating System, Three Persona Views</h3>
            <span class="font-mono text-[11px] font-bold text-ink/50 uppercase hidden sm:inline-block">CLICK SCREENS TO ZOOM 🔍</span>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
            <div
              v-for="r in project.roleArchitecture.roles"
              :key="r.name"
              @click="openLightbox(r.screen, 'GolderaPharm Role: ' + r.name)"
              class="border border-ink bg-paper p-5 space-y-3 shadow-sm cursor-zoom-in relative group self-start h-auto"
            >
              <span class="font-mono text-[11px] font-extrabold uppercase bg-ink text-paper px-2 py-0.5 rounded-sm block w-fit">{{ r.name }}</span>
              <h4 class="text-[16px] font-extrabold text-ink m-0">{{ r.focus }}</h4>
              <p class="text-[13px] leading-[1.5] text-ink/80 font-medium m-0">{{ r.duties }}</p>
              <div v-if="r.screen" class="border border-ink overflow-hidden bg-ink/5 max-h-[340px]">
                <img :src="r.screen" :alt="r.name" class="w-full h-auto max-h-[340px] object-cover object-top block group-hover:scale-[1.02] transition-transform" />
              </div>
            </div>
          </div>
        </div>

        <!-- System Gallery -->
        <div v-if="project.systemGallery && project.systemGallery.length" class="space-y-6 pt-6 border-t border-ink/20">
          <span class="font-mono text-[11px] font-extrabold uppercase text-[#be9e1c] block">OPERATIONAL CRM MODULES (CLICK TO ZOOM)</span>
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
            <div
              v-for="mod in project.systemGallery"
              :key="mod.title"
              @click="openLightbox(mod.screen, 'GolderaPharm Module: ' + mod.title)"
              class="border border-ink bg-paper p-3 space-y-2 group cursor-zoom-in relative self-start h-auto"
            >
              <div class="overflow-hidden border border-ink/20 bg-ink/5 max-h-[340px]">
                <img :src="mod.screen" :alt="mod.title" class="w-full h-auto max-h-[340px] object-cover object-top block group-hover:scale-[1.02] transition-transform" />
              </div>
              <span class="font-mono text-[11px] font-extrabold text-ink block border-t border-ink/10 pt-2">{{ mod.title }}</span>
            </div>
          </div>
        </div>
      </div>

      <!-- 03 / KEY DESIGN DECISIONS & STRATEGIC TRADEOFFS (Mini-Story Flow) -->
      <div v-if="project.decisions && project.decisions.length" class="space-y-8 border-t border-ink pt-12">
        <div class="flex flex-col sm:flex-row sm:items-end justify-between border-b border-ink pb-4 gap-2">
          <div>
            <span class="font-mono text-[11px] font-extrabold uppercase tracking-widest text-ink/60 block mb-1">
              03 / DECISIONS &amp; TRADEOFFS
            </span>
            <h3 class="text-[24px] md:text-[28px] font-extrabold text-ink m-0 tracking-[-0.02em]">
              Key Product &amp; Design Decisions
            </h3>
            <p class="text-[13px] text-ink/75 font-medium m-0 mt-1">
              The critical architectural and UX tradeoffs that shaped the final experience.
            </p>
          </div>
          <span class="font-mono text-[11px] font-bold text-ink/50 uppercase whitespace-nowrap">
            {{ project.decisions.length === 1 ? '01 DECISION' : (project.decisions.length < 10 ? '0' + project.decisions.length : project.decisions.length) + ' DECISIONS' }}
          </span>
        </div>

        <!-- Decision Cards formatted as sequential mini-stories -->
        <div class="space-y-8">
          <div
            v-for="(item, idx) in project.decisions"
            :key="idx"
            class="border border-ink bg-paper p-6 md:p-8 space-y-6 shadow-sm"
          >
            <!-- Decision Header -->
            <div class="flex items-center justify-between border-b border-ink/20 pb-3">
              <h4 class="text-[20px] md:text-[22px] font-extrabold text-ink m-0 tracking-[-0.02em]">
                {{ item.title }}
              </h4>
              <span class="font-mono text-[11px] font-black uppercase bg-ink text-paper px-2.5 py-0.5 rounded-sm">
                DECISION 0{{ idx + 1 }}
              </span>
            </div>

            <!-- Flow Step Sequence with semantic visual markers -->
            <div class="space-y-4 font-sans">
              <!-- 01 Problem & 02 Options Grid -->
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4 items-start">
                <!-- Problem Card -->
                <div class="p-4 border-l-4 border-[#e11d48] bg-[#fff1f2]/50 border-t border-r border-b border-ink/15 space-y-1.5 self-start h-auto">
                  <div class="flex items-center gap-1.5">
                    <span class="font-mono text-[12px] font-extrabold text-[#e11d48]">!</span>
                    <span class="font-mono text-[11px] font-extrabold uppercase text-[#e11d48] tracking-wider">THE PROBLEM</span>
                  </div>
                  <p class="text-[13px] font-medium text-ink m-0 leading-[1.55]">{{ item.problem }}</p>
                </div>

                <!-- Options Considered Card -->
                <div class="p-4 border-l-4 border-ink/40 bg-story-bg border-t border-r border-b border-ink/15 space-y-1.5 self-start h-auto">
                  <div class="flex items-center gap-1.5">
                    <span class="font-mono text-[12px] font-extrabold text-ink/60">↔</span>
                    <span class="font-mono text-[11px] font-extrabold uppercase text-ink/60 tracking-wider">OPTIONS CONSIDERED</span>
                  </div>
                  <p class="text-[13px] font-medium text-ink/90 m-0 leading-[1.55]">{{ item.options }}</p>
                </div>
              </div>

              <!-- 03 Decision & Why (Dominant Main Action) -->
              <div class="p-5 border-l-4 border-ink bg-paper border-t border-r border-b border-ink shadow-xs space-y-2">
                <div class="flex items-center gap-1.5">
                  <span class="font-mono text-[13px] font-black text-ink">→</span>
                  <span class="font-mono text-[11px] font-extrabold uppercase text-ink tracking-wider">CHOSEN DECISION</span>
                </div>
                <p class="text-[15px] font-extrabold text-ink m-0 leading-[1.5]">{{ item.decision }}</p>
                <p class="text-[13px] text-ink/80 font-medium m-0 leading-[1.55] pt-1">
                  <strong class="font-bold text-ink">UX RATIONALE:</strong> {{ item.why }}
                </p>
              </div>

              <!-- 04 Tradeoff Accepted & 05 Result Grid -->
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4 items-start">
                <!-- Tradeoff -->
                <div class="p-4 border-l-4 border-[#d97706] bg-[#fffbeb]/50 border-t border-r border-b border-ink/15 space-y-1 self-start h-auto">
                  <div class="flex items-center gap-1.5">
                    <span class="font-mono text-[12px] font-extrabold text-[#d97706]">±</span>
                    <span class="font-mono text-[11px] font-extrabold uppercase text-[#d97706] tracking-wider">TRADEOFF ACCEPTED</span>
                  </div>
                  <p class="text-[13px] font-medium text-ink/90 m-0 leading-[1.55]">{{ item.tradeoff }}</p>
                </div>

                <!-- Result -->
                <div class="p-4 border-l-4 border-[#16a34a] bg-[#f0fdf4]/50 border-t border-r border-b border-ink/15 space-y-1 self-start h-auto">
                  <div class="flex items-center gap-1.5">
                    <span class="font-mono text-[12px] font-extrabold text-[#16a34a]">↑</span>
                    <span class="font-mono text-[11px] font-extrabold uppercase text-[#16a34a] tracking-wider">MEASURED RESULT</span>
                  </div>
                  <p class="text-[13px] font-bold text-ink m-0 leading-[1.55]">{{ item.result }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- 04 / OUTCOMES & EVIDENCE (Stacked, Evidence-Oriented Layout) -->
      <div v-if="project.outcomes" class="space-y-8 border-t border-ink pt-12">
        <div class="flex flex-col sm:flex-row sm:items-end justify-between border-b border-ink pb-4 gap-2">
          <div>
            <span class="font-mono text-[11px] font-extrabold uppercase tracking-widest text-ink/60 block mb-1">
              04 / OUTCOMES &amp; EVIDENCE
            </span>
            <h3 class="text-[24px] md:text-[28px] font-extrabold text-ink m-0 tracking-[-0.02em]">
              What Was Delivered and Validated
            </h3>
            <p class="text-[13px] text-ink/75 font-medium m-0 mt-1">
              Distinguishing between shipped outputs, stakeholder validations, and projected hypotheses.
            </p>
          </div>
          <span class="font-mono text-[11px] font-bold text-ink/50 uppercase whitespace-nowrap">HONEST EVIDENCE</span>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 items-start font-sans">
          <!-- Delivered Output -->
          <div v-if="project.outcomes.delivered" class="p-5 border-l-4 border-ink bg-paper border-t border-r border-b border-ink/20 space-y-2 self-start h-auto shadow-xs">
            <div class="flex items-center gap-1.5">
              <span class="font-mono text-[12px] font-extrabold text-ink">📦</span>
              <span class="font-mono text-[11px] font-extrabold uppercase text-ink tracking-wider">SHIPPED DELIVERABLE</span>
            </div>
            <p class="text-[14px] text-ink font-bold m-0 leading-[1.55]">{{ project.outcomes.delivered }}</p>
          </div>

          <!-- Validated Feedback -->
          <div v-if="project.outcomes.validated" class="p-5 border-l-4 border-[#2563eb] bg-[#eff6ff]/50 border-t border-r border-b border-ink/20 space-y-2 self-start h-auto shadow-xs">
            <div class="flex items-center gap-1.5">
              <span class="font-mono text-[12px] font-extrabold text-[#2563eb]">✓</span>
              <span class="font-mono text-[11px] font-extrabold uppercase text-[#2563eb] tracking-wider">VALIDATED FEEDBACK</span>
            </div>
            <p class="text-[14px] text-ink/90 font-medium m-0 leading-[1.55]">{{ project.outcomes.validated }}</p>
          </div>

          <!-- Measured Metric (Only if real) -->
          <div v-if="project.outcomes.measured" class="p-5 border-l-4 border-[#16a34a] bg-[#f0fdf4]/60 border-t border-r border-b border-ink/20 space-y-2 self-start h-auto shadow-xs">
            <div class="flex items-center gap-1.5">
              <span class="font-mono text-[12px] font-extrabold text-[#16a34a]">●</span>
              <span class="font-mono text-[11px] font-extrabold uppercase text-[#16a34a] tracking-wider">MEASURED METRIC</span>
            </div>
            <p class="text-[14px] text-ink font-extrabold m-0 leading-[1.55]">{{ project.outcomes.measured }}</p>
          </div>

          <!-- Hypothesized Projection -->
          <div v-if="project.outcomes.hypothesized" class="p-5 border-l-4 border-ink/40 bg-story-bg border-t border-r border-b border-ink/20 space-y-2 self-start h-auto shadow-xs">
            <div class="flex items-center gap-1.5">
              <span class="font-mono text-[12px] font-extrabold text-ink/50">?</span>
              <span class="font-mono text-[11px] font-extrabold uppercase text-ink/60 tracking-wider">HYPOTHESIZED PROJECTION</span>
            </div>
            <p class="text-[13px] text-ink/80 font-medium m-0 leading-[1.55] italic">{{ project.outcomes.hypothesized }}</p>
          </div>
        </div>
      </div>

      <!-- 05 / MY CONTRIBUTION & DIRECT OWNERSHIP (Responsibility Breakdown) -->
      <div v-if="project.ownershipBreakdown" class="space-y-8 border-t border-ink pt-12">
        <div class="flex flex-col sm:flex-row sm:items-end justify-between border-b border-ink pb-4 gap-2">
          <div>
            <span class="font-mono text-[11px] font-extrabold uppercase tracking-widest text-ink/60 block mb-1">
              05 / MY CONTRIBUTION
            </span>
            <h3 class="text-[24px] md:text-[28px] font-extrabold text-ink m-0 tracking-[-0.02em]">
              Role &amp; Direct Ownership
            </h3>
            <p class="text-[13px] text-ink/75 font-medium m-0 mt-1">
              What I personally owned from research to execution versus shared or out-of-scope work.
            </p>
          </div>
          <span class="font-mono text-[11px] font-bold text-ink/50 uppercase whitespace-nowrap">MARWAN'S RESPONSIBILITY</span>
        </div>

        <div class="space-y-4 font-sans">
          <!-- Level 1: I Personally Owned (Dominant) -->
          <div class="p-6 border border-ink bg-paper shadow-sm space-y-4">
            <div class="flex items-center justify-between border-b border-ink/20 pb-3">
              <div class="flex items-center gap-2">
                <span class="w-2.5 h-2.5 rounded-full bg-ink inline-block"></span>
                <span class="font-mono text-[12px] font-extrabold uppercase text-ink tracking-wider">I PERSONALLY OWNED</span>
              </div>
              <span class="font-mono text-[10px] font-bold uppercase bg-ink text-paper px-2 py-0.5 rounded-sm">PRIMARY SCOPE</span>
            </div>

            <!-- If array of items -->
            <div v-if="Array.isArray(project.ownershipBreakdown.iOwned)" class="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div
                v-for="(task, tIdx) in project.ownershipBreakdown.iOwned"
                :key="tIdx"
                class="p-3 border border-ink/20 bg-story-bg flex items-start gap-2.5"
              >
                <span class="font-mono text-[11px] font-bold text-ink/60">0{{ tIdx + 1 }}.</span>
                <span class="text-[13px] font-bold text-ink leading-[1.5]">{{ task }}</span>
              </div>
            </div>
            <!-- If string fallback -->
            <p v-else class="text-[14px] font-bold text-ink m-0 leading-[1.55]">{{ project.ownershipBreakdown.iOwned }}</p>
          </div>

          <!-- Secondary & Out of Scope Grid -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 items-start">
            <!-- Level 2: Collaborated On -->
            <div class="p-5 border border-ink/30 bg-story-bg space-y-2 self-start h-auto">
              <div class="flex items-center gap-2 border-b border-ink/15 pb-2">
                <span class="font-mono text-[11px] font-bold text-ink/60">👥</span>
                <span class="font-mono text-[11px] font-extrabold uppercase text-ink/70 tracking-wider">COLLABORATED ON</span>
              </div>
              <p class="text-[13px] text-ink/85 font-medium m-0 leading-[1.55]">{{ project.ownershipBreakdown.collaboratedOn }}</p>
            </div>

            <!-- Level 3: Out of Scope -->
            <div class="p-5 border border-ink/20 bg-paper/60 space-y-2 self-start h-auto">
              <div class="flex items-center gap-2 border-b border-ink/15 pb-2">
                <span class="font-mono text-[11px] font-bold text-ink/40">✕</span>
                <span class="font-mono text-[11px] font-extrabold uppercase text-ink/50 tracking-wider">OUT OF SCOPE</span>
              </div>
              <p class="text-[13px] text-ink/60 font-medium m-0 leading-[1.55]">{{ project.ownershipBreakdown.outOfScope }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- 06 / RETROSPECTIVE & LEARNING (Seniority Retrospective) -->
      <div v-if="project.reflections && project.reflections.length" class="space-y-6 border-t border-ink pt-12">
        <div class="flex flex-col sm:flex-row sm:items-end justify-between border-b border-ink pb-4 gap-2">
          <div>
            <span class="font-mono text-[11px] font-extrabold uppercase tracking-widest text-ink/60 block mb-1">
              06 / RETROSPECTIVE
            </span>
            <h3 class="text-[24px] md:text-[28px] font-extrabold text-ink m-0 tracking-[-0.02em]">
              What I Would Approach Differently Today
            </h3>
            <p class="text-[13px] text-ink/75 font-medium m-0 mt-1">
              Concrete architectural and interaction design lessons from this engagement.
            </p>
          </div>
          <span class="font-mono text-[11px] font-bold text-ink/50 uppercase whitespace-nowrap">RETROSPECTIVE</span>
        </div>

        <div class="space-y-4 max-w-[1040px]">
          <div
            v-for="(ref, idx) in project.reflections"
            :key="idx"
            class="p-5 border-l-4 border-ink bg-paper border-t border-r border-b border-ink/20 flex items-start gap-4 shadow-xs"
          >
            <span class="font-mono text-[14px] font-black text-ink mt-0.5">↺</span>
            <div class="space-y-1">
              <span class="font-mono text-[10px] font-extrabold uppercase text-ink/50 block">LESSON 0{{ idx + 1 }}</span>
              <p class="text-[14px] font-sans font-medium text-ink leading-[1.6] m-0">{{ ref }}</p>
            </div>
          </div>
        </div>
      </div>

    </div>

    <!-- Global Image Lightbox Modal for ContentBlock -->
    <ImageLightboxModal
      :is-open="lightboxOpen"
      :src="lightboxSrc"
      :caption="lightboxCaption"
      @close="lightboxOpen = false"
    />
  </section>
</template>
