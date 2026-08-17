<script setup>
import { ref } from "vue";
import ImageLightboxModal from "@/components/shared/ImageLightboxModal.vue";

defineProps({
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
</script>

<template>
  <section class="py-12 md:py-20 px-5 md:px-[7vw] font-sans bg-paper space-y-16">
    <div class="max-w-[1240px] mx-auto space-y-16">

      <!-- 1. REAL CONSTRAINTS SECTION (Short & Direct) -->
      <div v-if="project.constraints && project.constraints.length" class="grid grid-cols-1 md:grid-cols-[260px_1fr] gap-6 md:gap-10 items-start border-t border-ink pt-10">
        <div>
          <span class="font-mono text-[11px] font-extrabold uppercase tracking-widest text-ink/50 block mb-1">
            01 / OPERATIONAL REALITY
          </span>
          <h3 class="text-[20px] font-extrabold text-ink m-0 tracking-[-0.02em]">
            Real Project Constraints
          </h3>
        </div>

        <div class="space-y-4 max-w-[840px]">
          <div
            v-for="(constraint, idx) in project.constraints"
            :key="idx"
            class="p-5 border-l-4 border-ink bg-story-bg border-t border-r border-b border-ink/20"
          >
            <p class="text-[15px] leading-[1.6] text-ink/90 font-medium m-0">
              {{ constraint }}
            </p>
          </div>
        </div>
      </div>

      <!-- 2. SMARTMEET SPECIALIZED: VISUAL WORKFLOW SEQUENCE (Meeting → AI → Tasks) -->
      <div v-if="project.id === 'smartmeet'" class="space-y-8 border-t border-ink pt-10">
        <div class="flex items-center justify-between border-b border-ink pb-4">
          <div>
            <span class="font-mono text-[11px] font-extrabold uppercase tracking-widest text-[#1e3a8a] block mb-1">
              VISUAL PRODUCT LIFECYCLE
            </span>
            <h3 class="text-[24px] font-extrabold text-ink m-0">
              From Live Conversation to Searchable Team Knowledge
            </h3>
          </div>
          <span class="font-mono text-[11px] font-bold text-ink/50 uppercase hidden sm:inline-block">CLICK SCREENS TO ZOOM 🔍</span>
        </div>

        <!-- 4-Stage Visual Product Flow -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div
            @click="openLightbox('/smartmeet-pages/live-meeting.jpg', '01 Live Meeting: Real-time audio stream & speaker tagging')"
            class="border border-ink bg-paper p-3 space-y-3 shadow-sm group cursor-zoom-in relative"
          >
            <span class="font-mono text-[10px] font-extrabold bg-[#1e3a8a] text-paper px-2 py-0.5 rounded-sm block w-fit">
              01 LIVE MEETING
            </span>
            <div class="aspect-[16/10] overflow-hidden border border-ink/20 bg-ink">
              <img src="/smartmeet-pages/live-meeting.jpg" alt="SmartMeet Live Meeting screen" class="w-full h-full object-cover object-top group-hover:scale-[1.03] transition-transform" />
            </div>
            <p class="text-[12px] font-bold text-ink m-0">Real-time audio stream &amp; speaker tagging.</p>
          </div>

          <div
            @click="openLightbox('/Thumbnail.png', '02 AI Transcript: Automated summary & timestamped notes')"
            class="border border-ink bg-paper p-3 space-y-3 shadow-sm group cursor-zoom-in relative"
          >
            <span class="font-mono text-[10px] font-extrabold bg-[#1e3a8a] text-paper px-2 py-0.5 rounded-sm block w-fit">
              02 AI TRANSCRIPT
            </span>
            <div class="aspect-[16/10] overflow-hidden border border-ink/20 bg-ink">
              <img src="/Thumbnail.png" alt="SmartMeet Transcript &amp; Summary view" class="w-full h-full object-cover object-top group-hover:scale-[1.03] transition-transform" />
            </div>
            <p class="text-[12px] font-bold text-ink m-0">Automated summary &amp; timestamped notes.</p>
          </div>

          <div
            @click="openLightbox('/smartmeet-pages/tasks.jpg', '03 Action Items & Tasks: Human verification before board sync')"
            class="border border-ink bg-paper p-3 space-y-3 shadow-sm group cursor-zoom-in relative"
          >
            <span class="font-mono text-[10px] font-extrabold bg-[#1e3a8a] text-paper px-2 py-0.5 rounded-sm block w-fit">
              03 DECISIONS &amp; TASKS
            </span>
            <div class="aspect-[16/10] overflow-hidden border border-ink/20 bg-ink">
              <img src="/smartmeet-pages/tasks.jpg" alt="SmartMeet Action Items &amp; Tasks screen" class="w-full h-full object-cover object-top group-hover:scale-[1.03] transition-transform" />
            </div>
            <p class="text-[12px] font-bold text-ink m-0">Human verification before board sync.</p>
          </div>

          <div
            @click="openLightbox('/smartmeet-pages/knowledge-ai.jpg', '04 RAG Search: Semantic search across past transcripts')"
            class="border border-ink bg-paper p-3 space-y-3 shadow-sm group cursor-zoom-in relative"
          >
            <span class="font-mono text-[10px] font-extrabold bg-[#1e3a8a] text-paper px-2 py-0.5 rounded-sm block w-fit">
              04 RAG SEARCH
            </span>
            <div class="aspect-[16/10] overflow-hidden border border-ink/20 bg-ink">
              <img src="/smartmeet-pages/knowledge-ai.jpg" alt="SmartMeet Knowledge AI vector search" class="w-full h-full object-cover object-top group-hover:scale-[1.03] transition-transform" />
            </div>
            <p class="text-[12px] font-bold text-ink m-0">Semantic search across past transcripts.</p>
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
              LEARNING RHYTHM &amp; INTERFACE SYSTEM
            </span>
            <h3 class="text-[24px] font-extrabold text-ink m-0">
              Structured Curriculum &amp; Student Dashboard
            </h3>
          </div>
          <span class="font-mono text-[11px] font-bold text-ink/50 uppercase hidden sm:inline-block">CLICK SCREENS TO ZOOM 🔍</span>
        </div>

        <!-- 3-Step Visual Progression -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div
            @click="openLightbox('/HMZ/Courses.png', 'HMZ 01 Course Discovery Catalog')"
            class="border border-ink bg-paper p-3 space-y-3 group shadow-sm cursor-zoom-in relative"
          >
            <span class="font-mono text-[10px] font-extrabold bg-ink text-paper px-2 py-0.5 rounded-sm block w-fit">
              01 COURSE DISCOVERY
            </span>
            <div class="aspect-[16/10] overflow-hidden border border-ink/20 bg-ink/5">
              <img src="/HMZ/Courses.png" alt="HMZ Course Discovery screen" class="w-full h-full object-cover object-top group-hover:scale-[1.02] transition-transform" />
            </div>
            <p class="text-[13px] font-bold text-ink m-0">Catalog with filtering by skill level &amp; estimated hours.</p>
          </div>

          <div
            @click="openLightbox('/HMZ/Course Info.png', 'HMZ 02 Course Info & Module View')"
            class="border border-ink bg-paper p-3 space-y-3 group shadow-sm cursor-zoom-in relative"
          >
            <span class="font-mono text-[10px] font-extrabold bg-ink text-paper px-2 py-0.5 rounded-sm block w-fit">
              02 MODULE VIEW
            </span>
            <div class="aspect-[16/10] overflow-hidden border border-ink/20 bg-ink/5">
              <img src="/HMZ/Course Info.png" alt="HMZ Course Info module view" class="w-full h-full object-cover object-top group-hover:scale-[1.02] transition-transform" />
            </div>
            <p class="text-[13px] font-bold text-ink m-0">Structured unit timeline &amp; video player integration.</p>
          </div>

          <div
            @click="openLightbox('/HMZ/Dashboard.png', 'HMZ 03 Student Progress Dashboard')"
            class="border border-ink bg-paper p-3 space-y-3 group shadow-sm cursor-zoom-in relative"
          >
            <span class="font-mono text-[10px] font-extrabold bg-ink text-paper px-2 py-0.5 rounded-sm block w-fit">
              03 STUDENT DASHBOARD
            </span>
            <div class="aspect-[16/10] overflow-hidden border border-ink/20 bg-ink/5">
              <img src="/HMZ/Dashboard.png" alt="HMZ Student Dashboard screen" class="w-full h-full object-cover object-top group-hover:scale-[1.02] transition-transform" />
            </div>
            <p class="text-[13px] font-bold text-ink m-0">Visual streak tracking, certificates &amp; active units.</p>
          </div>
        </div>

        <!-- Full Width Showcase Screen -->
        <div
          @click="openLightbox('/HMZ/Home.png', 'HMZ Learning Hub — Home Landing & AI Roadmap')"
          class="border border-ink bg-paper p-4 space-y-3 shadow-md max-h-[620px] overflow-hidden cursor-zoom-in relative group"
        >
          <span class="font-mono text-[11px] font-bold uppercase text-ink/60">HMZ LEARNING HUB — HOME LANDING &amp; AI ROADMAP</span>
          <img src="/HMZ/Home.png" alt="HMZ Home Landing page" class="w-full h-auto max-h-[540px] object-cover object-top border border-ink/20 block group-hover:scale-[1.005] transition-transform" />
        </div>
      </div>

      <!-- 4. IMDB REDESIGN SPECIALIZED: CINEMATIC DARK MODE SYSTEM -->
      <div v-else-if="project.id === 'imdb'" class="space-y-8 border-t border-ink pt-10">
        <div class="flex items-center justify-between border-b border-ink pb-4">
          <div>
            <span class="font-mono text-[11px] font-extrabold uppercase tracking-widest text-coral block mb-1">
              CINEMATIC DARK INTERFACE
            </span>
            <h3 class="text-[24px] font-extrabold text-ink m-0">
              Reconsidering Legacy Database Clutter
            </h3>
          </div>
          <span class="font-mono text-[11px] font-bold text-ink/50 uppercase hidden sm:inline-block">CLICK SCREENS TO ZOOM 🔍</span>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div
            @click="openLightbox('/IMDB Redesign/IMDB 2Redesign.jpg', 'IMDb Redesign Primary Movie Detail Page')"
            class="border border-ink bg-ink p-3 space-y-3 group max-h-[600px] overflow-hidden cursor-zoom-in relative"
          >
            <span class="font-mono text-[10px] font-extrabold bg-paper text-ink px-2 py-0.5 rounded-sm block w-fit">
              PRIMARY MOVIE DETAIL VIEW
            </span>
            <img src="/IMDB Redesign/IMDB 2Redesign.jpg" alt="IMDb Redesign Movie detail page" class="w-full h-auto max-h-[520px] object-cover object-top block border border-paper/20 group-hover:scale-[1.01] transition-transform" />
          </div>

          <div class="space-y-6 font-sans text-ink">
            <div class="p-4 border-l-4 border-ink bg-story-bg border-t border-r border-b border-ink/20 space-y-2">
              <span class="font-mono text-[11px] font-bold uppercase text-ink/60">01 / CINEMATIC BACKDROP</span>
              <p class="text-[14px] font-bold text-ink m-0">Full-bleed movie backdrop graphics establish immediate visual context without crowding cast details.</p>
            </div>

            <div class="p-4 border-l-4 border-ink bg-story-bg border-t border-r border-b border-ink/20 space-y-2">
              <span class="font-mono text-[11px] font-bold uppercase text-ink/60">02 / MODULAR METADATA CARDS</span>
              <p class="text-[14px] font-bold text-ink m-0">Replaced legacy text lists with high-contrast modular cards for ratings, cast, trivia, and streaming options.</p>
            </div>

            <div class="p-4 border-l-4 border-ink bg-story-bg border-t border-r border-b border-ink/20 space-y-2">
              <span class="font-mono text-[11px] font-bold uppercase text-ink/60">03 / STREAMING &amp; WATCHLIST</span>
              <p class="text-[14px] font-bold text-ink m-0">Direct 1-click watchlist bookmarking and streaming provider availability badges.</p>
            </div>
          </div>
        </div>

        <!-- Full Width Design Frame -->
        <div
          @click="openLightbox('/IMDB Redesign/Frame.png', 'IMDb Redesign Full Interface System Frame')"
          class="border border-ink bg-ink p-4 space-y-3 shadow-md max-h-[620px] overflow-hidden cursor-zoom-in relative group"
        >
          <span class="font-mono text-[11px] font-bold uppercase text-paper/70">FULL INTERFACE SYSTEM FRAME</span>
          <img src="/IMDB Redesign/Frame.png" alt="IMDb Redesign Full Frame preview" class="w-full h-auto max-h-[540px] object-cover object-top border border-paper/20 block group-hover:scale-[1.005] transition-transform" />
        </div>
      </div>

      <!-- 5. WECARE SPECIALIZED: TRUST HIERARCHY & 3 EQUAL JOURNEY SCREENS -->
      <div v-else-if="project.id === 'wecare'" class="space-y-12 border-t border-ink pt-10">
        <!-- Trust Hierarchy -->
        <div class="grid grid-cols-1 md:grid-cols-[260px_1fr] gap-6 md:gap-10 items-start">
          <div>
            <span class="font-mono text-[11px] font-extrabold uppercase tracking-widest text-[#1e8dc1] bg-[#1e8dc1]/10 px-2 py-0.5 rounded-sm block mb-2 w-fit">
              PATIENT UX &amp; TRUST
            </span>
            <h3 class="text-[20px] font-extrabold text-ink m-0 tracking-[-0.02em]">
              Trust &amp; Information Hierarchy
            </h3>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-[840px]">
            <div v-for="item in project.trustHierarchy.hierarchyOrder" :key="item.rank" class="p-4 border border-ink bg-paper space-y-1">
              <span class="font-mono text-[11px] font-black text-[#1e8dc1] uppercase block">PRIORITY {{ item.rank }}</span>
              <strong class="text-[14px] font-bold text-ink block">{{ item.element }}</strong>
              <p class="text-[13px] text-ink/80 font-medium m-0 leading-[1.5]">{{ item.why }}</p>
            </div>
          </div>
        </div>

        <!-- 3 Equal Journey Screens -->
        <div v-if="project.journeyFlow && project.journeyFlow.length" class="space-y-6 pt-6 border-t border-ink/20">
          <div class="flex items-center justify-between border-b border-ink pb-4">
            <h3 class="text-[24px] font-extrabold text-ink m-0">
              01 Discover → 02 Schedule → 03 Confirm
            </h3>
            <span class="font-mono text-[11px] font-bold text-ink/50 uppercase hidden sm:inline-block">CLICK SCREENS TO ZOOM 🔍</span>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
            <div
              v-for="j in project.journeyFlow"
              :key="j.step"
              @click="openLightbox(j.screen, 'WeCare Step ' + j.step + ': ' + j.label)"
              class="border border-ink bg-[#f4f8fb] p-4 space-y-3 text-center group cursor-zoom-in relative"
            >
              <div class="flex items-center justify-between border-b border-ink/20 pb-2 font-mono text-[11px] font-bold">
                <span class="bg-[#1e8dc1] text-paper px-2 py-0.5 rounded-sm">{{ j.step }}</span>
                <span class="text-ink uppercase">{{ j.label }}</span>
              </div>
              <div class="aspect-[9/18] overflow-hidden border border-ink bg-paper max-h-[480px]">
                <img :src="j.screen" :alt="j.label" class="w-full h-full object-cover object-top group-hover:scale-[1.02] transition-transform" />
              </div>
              <p class="text-[13px] leading-[1.5] text-ink/80 font-medium m-0 text-left px-1">{{ j.caption }}</p>
            </div>
          </div>
        </div>

        <!-- WeCare Ecosystem Gallery -->
        <div v-if="project.galleryScreens && project.galleryScreens.length" class="space-y-6 pt-6 border-t border-ink/20">
          <span class="font-mono text-[11px] font-extrabold uppercase text-[#1e8dc1] block">PATIENT ECOSYSTEM GALLERY (CLICK TO ZOOM)</span>
          <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            <div
              v-for="s in project.galleryScreens"
              :key="s.name"
              @click="openLightbox(s.path, 'WeCare Screen: ' + s.name)"
              class="border border-ink bg-paper p-2 space-y-2 group cursor-zoom-in relative"
            >
              <div class="aspect-[9/18] overflow-hidden border border-ink/20 bg-ink/5 max-h-[380px]">
                <img :src="s.path" :alt="s.name" class="w-full h-full object-cover object-top group-hover:scale-[1.03] transition-transform" />
              </div>
              <span class="font-mono text-[10px] font-extrabold text-ink block text-center truncate">{{ s.name }}</span>
            </div>
          </div>
        </div>
      </div>

      <!-- 6. GOLDERAPHARM SPECIALIZED: 3-ROLE CRM DECK & SYSTEM GALLERY -->
      <div v-else-if="project.id === 'goldera'" class="space-y-12 border-t border-ink pt-10">
        <!-- 3 Role Architecture -->
        <div v-if="project.roleArchitecture" class="space-y-6">
          <div class="flex items-center justify-between border-b border-ink pb-4">
            <h3 class="text-[24px] font-extrabold text-ink m-0">One Operating System, Three Persona Views</h3>
            <span class="font-mono text-[11px] font-bold text-ink/50 uppercase hidden sm:inline-block">CLICK SCREENS TO ZOOM 🔍</span>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div
              v-for="r in project.roleArchitecture.roles"
              :key="r.name"
              @click="openLightbox(r.screen, 'GolderaPharm Role: ' + r.name)"
              class="border border-ink bg-paper p-5 space-y-3 shadow-sm cursor-zoom-in relative group"
            >
              <span class="font-mono text-[11px] font-extrabold uppercase bg-ink text-paper px-2 py-0.5 rounded-sm block w-fit">{{ r.name }}</span>
              <h4 class="text-[16px] font-extrabold text-ink m-0">{{ r.focus }}</h4>
              <p class="text-[13px] leading-[1.5] text-ink/80 font-medium m-0">{{ r.duties }}</p>
              <div v-if="r.screen" class="border border-ink overflow-hidden aspect-[16/10] bg-ink/5 max-h-[340px]">
                <img :src="r.screen" :alt="r.name" class="w-full h-full object-cover object-top group-hover:scale-[1.02] transition-transform" />
              </div>
            </div>
          </div>
        </div>

        <!-- System Gallery -->
        <div v-if="project.systemGallery && project.systemGallery.length" class="space-y-6 pt-6 border-t border-ink/20">
          <span class="font-mono text-[11px] font-extrabold uppercase text-[#be9e1c] block">OPERATIONAL CRM MODULES (CLICK TO ZOOM)</span>
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div
              v-for="mod in project.systemGallery"
              :key="mod.title"
              @click="openLightbox(mod.screen, 'GolderaPharm Module: ' + mod.title)"
              class="border border-ink bg-paper p-3 space-y-2 group cursor-zoom-in relative"
            >
              <div class="aspect-[16/10] overflow-hidden border border-ink/20 bg-ink/5 max-h-[340px]">
                <img :src="mod.screen" :alt="mod.title" class="w-full h-full object-cover object-top group-hover:scale-[1.02] transition-transform" />
              </div>
              <span class="font-mono text-[11px] font-extrabold text-ink block border-t border-ink/10 pt-2">{{ mod.title }}</span>
            </div>
          </div>
        </div>
      </div>

      <!-- 7. STRUCTURED TRADEOFF DECISIONS FRAMEWORK (Concise 2-Sentence Rationale) -->
      <div v-if="project.decisions && project.decisions.length" class="space-y-8 border-t border-ink pt-10">
        <div class="flex items-center justify-between border-b border-ink pb-4">
          <div>
            <span class="font-mono text-[11px] font-extrabold uppercase tracking-widest text-ink/60 block mb-1">
              STRATEGIC TRADEOFFS
            </span>
            <h3 class="text-[24px] font-extrabold text-ink m-0">
              Key Product &amp; Design Decisions
            </h3>
          </div>
          <span class="font-mono text-[11px] font-bold text-ink/50 uppercase hidden sm:inline-block">{{ project.decisions.length }} DECISIONS</span>
        </div>

        <div class="space-y-6">
          <div
            v-for="(item, idx) in project.decisions"
            :key="idx"
            class="border border-ink bg-paper p-6 md:p-8 space-y-6"
          >
            <div class="flex items-center justify-between border-b border-ink/20 pb-3">
              <h4 class="text-[20px] md:text-[22px] font-extrabold text-ink m-0 tracking-[-0.02em]">
                {{ item.title }}
              </h4>
              <span class="font-mono text-[11px] font-black uppercase bg-ink text-paper px-2.5 py-0.5 rounded-sm">
                DECISION 0{{ idx + 1 }}
              </span>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 text-[13px]">
              <div class="p-4 border border-ink/20 bg-story-bg space-y-1">
                <span class="font-mono text-[11px] font-extrabold text-ink/50 uppercase block">THE PROBLEM</span>
                <p class="font-medium text-ink m-0 leading-[1.5]">{{ item.problem }}</p>
              </div>

              <div class="p-4 border border-ink/20 bg-story-bg space-y-1">
                <span class="font-mono text-[11px] font-extrabold text-ink/50 uppercase block">OPTIONS CONSIDERED</span>
                <p class="font-medium text-ink m-0 leading-[1.5]">{{ item.options }}</p>
              </div>
            </div>

            <div class="p-5 border-l-4 border-ink bg-paper border-t border-r border-b border-ink/20 text-[13px] space-y-2">
              <p class="m-0 text-[14px]"><strong>DECISION MADE:</strong> {{ item.decision }}</p>
              <p class="m-0 text-ink/80"><strong>RATIONALE:</strong> {{ item.why }}</p>
              <p class="m-0 text-ink/80"><strong>TRADEOFF ACCEPTED:</strong> {{ item.tradeoff }}</p>
              <p class="m-0 text-ink/90 font-bold"><strong>MEASURED RESULT:</strong> {{ item.result }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- 8. HONEST OUTCOMES & OWNERSHIP BREAKDOWN -->
      <div v-if="project.outcomes" class="grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-ink pt-10">
        <!-- Honest Outcomes -->
        <div class="border border-ink bg-paper p-6 md:p-8 space-y-4">
          <span class="font-mono text-[11px] font-extrabold uppercase tracking-widest text-ink/50 block border-b border-ink/20 pb-2">
            HONEST PRODUCT OUTCOMES
          </span>

          <div v-if="project.outcomes.measured" class="space-y-1">
            <span class="font-mono text-[11px] font-extrabold text-[#2dc732] uppercase block">● MEASURED IMPACT</span>
            <p class="text-[14px] text-ink font-bold m-0 leading-[1.5]">{{ project.outcomes.measured }}</p>
          </div>

          <div v-if="project.outcomes.validated" class="space-y-1 pt-2 border-t border-ink/20">
            <span class="font-mono text-[11px] font-extrabold text-[#1e3a8a] uppercase block">✓ VALIDATED FEEDBACK</span>
            <p class="text-[14px] text-ink/85 font-medium m-0 leading-[1.5]">{{ project.outcomes.validated }}</p>
          </div>

          <div v-if="project.outcomes.hypothesized" class="space-y-1 pt-2 border-t border-ink/20">
            <span class="font-mono text-[11px] font-extrabold text-ink/50 uppercase block">? HYPOTHESIZED PROJECTION</span>
            <p class="text-[13px] text-ink/75 font-medium m-0 leading-[1.5] italic">{{ project.outcomes.hypothesized }}</p>
          </div>
        </div>

        <!-- Ownership Breakdown -->
        <div v-if="project.ownershipBreakdown" class="border border-ink bg-story-bg p-6 md:p-8 space-y-4">
          <span class="font-mono text-[11px] font-extrabold uppercase tracking-widest text-ink/50 block border-b border-ink/20 pb-2">
            OWNERSHIP CLARITY
          </span>

          <div class="space-y-1">
            <span class="font-mono text-[11px] font-extrabold text-ink uppercase block">I PERSONALLY OWNED</span>
            <p class="text-[14px] text-ink font-bold m-0 leading-[1.5]">{{ project.ownershipBreakdown.iOwned }}</p>
          </div>

          <div class="space-y-1 pt-2 border-t border-ink/20">
            <span class="font-mono text-[11px] font-extrabold text-ink/60 uppercase block">COLLABORATED ON</span>
            <p class="text-[13px] text-ink/80 font-medium m-0 leading-[1.5]">{{ project.ownershipBreakdown.collaboratedOn }}</p>
          </div>

          <div class="space-y-1 pt-2 border-t border-ink/20">
            <span class="font-mono text-[11px] font-extrabold text-ink/40 uppercase block">OUT OF SCOPE</span>
            <p class="text-[13px] text-ink/60 font-medium m-0 leading-[1.5]">{{ project.ownershipBreakdown.outOfScope }}</p>
          </div>
        </div>
      </div>

      <!-- 9. REFLECTION: WHAT I WOULD CHANGE NOW -->
      <div v-if="project.reflections && project.reflections.length" class="border-t border-ink pt-10 space-y-6">
        <div class="flex items-center justify-between border-b border-ink pb-3">
          <div>
            <span class="font-mono text-[11px] font-extrabold uppercase tracking-widest text-ink/50 block mb-1">
              SENIORITY SIGNAL
            </span>
            <h3 class="text-[22px] font-extrabold text-ink m-0">
              What I Would Change Today
            </h3>
          </div>
          <span class="font-mono text-[11px] font-bold text-ink/50 uppercase hidden sm:inline-block">RETROSPECTIVE</span>
        </div>

        <div class="space-y-3 max-w-[960px]">
          <div
            v-for="(ref, idx) in project.reflections"
            :key="idx"
            class="p-4 border-l-2 border-ink bg-paper text-[15px] font-serif italic text-ink/90 leading-[1.55]"
          >
            "{{ ref }}"
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
