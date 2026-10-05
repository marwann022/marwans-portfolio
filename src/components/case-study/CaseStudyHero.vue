<script setup>
import ImagePreviewButton from "@/components/shared/ImagePreviewButton.vue";
import { ref } from "vue";
import { RouterLink } from "vue-router";
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

// 6+ Interactive Hero Tabs for SmartMeet
const activeSmartMeetTab = ref("workspace");
const smartmeetTabs = [
  { id: "workspace", label: "01 Meeting Review", image: "/smartmeet-pages/Codex Image Aug 17, 2026, 06_29_53 PM.png", caption: "Meeting summary, decisions, and action-item review." },
  { id: "knowledge", label: "02 Knowledge AI", image: "/smartmeet-pages/knowledge-ai.jpg", caption: "Cross-meeting RAG Vector Search & Query" },
  { id: "tasks", label: "03 Tasks Board", image: "/smartmeet-pages/Codex Image Aug 17, 2026, 06_30_03 PM.png", caption: "Task board with priorities, owners, and review columns." },
  { id: "dashboard", label: "04 Dashboard", image: "/smartmeet-pages/Codex Image Aug 17, 2026, 06_29_59 PM.png", caption: "Meeting Analytics & Recent Recordings" },
  { id: "archive", label: "05 Meeting Archive", image: "/smartmeet-pages/archive.jpg", caption: "Meeting archive empty state" },
  { id: "schedule", label: "06 New Meeting", image: "/smartmeet-pages/Codex Image Aug 17, 2026, 06_30_07 PM.png", caption: "Meeting details, participants, and scheduling." }
];

// 9 Interactive Hero Tabs for WeCare
const activeWeCareTab = ref("discover");
const wecareTabs = [
  { id: "discover", label: "01 Discover", image: "/WeCare/Home.png", caption: "Patient home dashboard & doctor search with category filters, upcoming appointments, and top-rated specialists." },
  { id: "search", label: "02 Doctor Search", image: "/WeCare/Search.png", caption: "Specialist & medical service search with active category pills and quick filters." },
  { id: "schedule", label: "03 Doctor & Schedule", image: "/WeCare/Doctor’s Info.png", caption: "Specialist profile with credentials, verified 4.8 rating, upfront fee ($25), and calendar date & time slot selector." },
  { id: "details", label: "04 Booking Details", image: "/WeCare/Appointment Details.png", caption: "Appointment summary, scheduled date & time, and note to doctor." },
  { id: "payment", label: "05 Payment Methods", image: "/WeCare/Payment methods.png", caption: "Multiple payment options including Cash, Mastercard, InstaPay, and PayPal." },
  { id: "confirm", label: "06 Confirmed", image: "/WeCare/Checkout.png", caption: "Instant booking confirmation with clinic location map, payment summary, and direct navigation instructions." },
  { id: "chat", label: "07 Telehealth List", image: "/WeCare/Chat option.png", caption: "Doctor messaging directory with video & audio consultation shortcuts." },
  { id: "audio", label: "08 Audio Call", image: "/WeCare/Audio call.png", caption: "Live audio consultation screen with in-call controls." },
  { id: "profile", label: "09 Patient Profile", image: "/WeCare/Chat option-1.png", caption: "Patient account hub with medical reports, appointments history, and settings." }
];

// 6+ Interactive Hero Tabs for GolderaPharm
const activeGolderaTab = ref("manager");
const golderaTabs = [
  { id: "manager", label: "01 Manager Dashboard", image: "/Golderapharm/Manager Dashboard.png", caption: "Macro revenue metrics, team performance & territory approvals." },
  { id: "supervisor", label: "02 Supervisor View", image: "/Golderapharm/Supervisor Dashboard.png", caption: "Real-time rep location tracking & joint visit coaching." },
  { id: "rep", label: "03 Medical Rep View", image: "/Golderapharm/Medical Rep Dashboard.png", caption: "Field visit logging and sample requests." },
  { id: "target", label: "04 Forecast & Target", image: "/Golderapharm/Target.png", caption: "Quota allocation & sales target performance." },
  { id: "map", label: "05 Territory Map", image: "/Golderapharm/Territory Map.png", caption: "Regional representative territory mapping." },
  { id: "logging", label: "06 Visit Logging", image: "/Golderapharm/Add new visit-1.png", caption: "Mobile-first clinic visit entry & offline queue." }
];

// 6+ Interactive Hero Tabs for HMZ
const activeHmzTab = ref("home");
const hmzTabs = [
  { id: "home", label: "01 Home Learning Hub", image: "/HMZ/Home.png", caption: "Learning Hub landing page with personalized AI roadmaps." },
  { id: "courses", label: "02 Course Catalog", image: "/HMZ/Courses.png", caption: "Course discovery catalog with category filtering." },
  { id: "courseInfo", label: "03 Module & Video Player", image: "/HMZ/Course Info.png", caption: "Structured unit timeline, instructor details & video player." },
  { id: "dashboard", label: "04 Student Dashboard", image: "/HMZ/Dashboard.png", caption: "Visual streak tracking, certificates & active units." },
  { id: "pricing", label: "05 Subscription Pricing", image: "/HMZ/Pricing.png", caption: "Transparent tier pricing & student discounts." },
  { id: "services", label: "06 Platform Services", image: "/HMZ/Services.png", caption: "EdTech learning tools & community features." }
];

// 6 Interactive Hero Tabs for 212 Franchise (Desktop + Mobile Evidence)
const activeFranchiseTab = ref("home");
const franchiseTabs = [
  { id: "home", label: "01 Desktop Home", image: "/212/Home.jpg", caption: "Editorial 212° Franchise desktop homepage with concept navigation." },
  { id: "mobHome", label: "02 Mobile Home", image: "/212/mob home.jpg", caption: "Mobile-optimized responsive home layout with touch-friendly cards." },
  { id: "products", label: "03 Products Catalog", image: "/212/Products.jpg", caption: "Commercial franchise multi-category product exploration grid." },
  { id: "mobProducts", label: "04 Mobile Products", image: "/212/mob prod.jpg", caption: "Stacked mobile product specification cards & direct action button." },
  { id: "burger", label: "05 Mobile Navigation", image: "/212/Burger menu.jpg", caption: "Full-height mobile navigation drawer with quick section jumps." },
  { id: "solar", label: "06 Clean Energy Concept", image: "/212/solar.jpg", caption: "Clean energy / solar commercial franchise vertical showcase." }
];

// 6 Interactive Hero Tabs for IMDb
const activeImdbTab = ref("redesign");
const imdbTabs = [
  { id: "redesign", label: "01 Movie Details", image: "/IMDB Redesign/IMDB 2Redesign.jpg", caption: "Cinematic movie detail page, ratings & cast grid." },
  { id: "multiFrame", label: "02 System Overview", image: "/IMDB Redesign/Frame 1948755426.png", caption: "Complete dark mode media database system overview." },
  { id: "feed", label: "03 Home Discovery", image: "/IMDB Redesign/S6.png", caption: "Trending releases, editorial staff picks & trailer feed." },
  { id: "watchlist", label: "04 Watchlist & Media", image: "/IMDB Redesign/S7.png", caption: "User watchlist, photo galleries & user ratings." },
  { id: "search", label: "05 Search & Filter", image: "/IMDB Redesign/S8.png", caption: "Advanced genre filter, celebrity index & awards search." },
  { id: "cover", label: "06 Light & Dark System", image: "/IMDB Redesign/Cover - Light.jpg", caption: "High-contrast editorial cover poster view." }
];
</script>

<template>
  <section class="pt-6 md:pt-8 px-5 md:px-[7vw] font-sans bg-paper border-b border-ink">
    <div class="max-w-[1240px] mx-auto space-y-6 pb-8">
      
      <!-- Top Navigation Line -->
      <div class="flex items-center justify-between border-b border-ink/20 pb-3 text-[12px] font-bold text-ink">
        <RouterLink
          to="/projects"
          class="inline-flex items-center gap-2 hover:underline focus-visible:ring-2 focus-visible:ring-ink"
        >
          <span>←</span>
          <span>Back to Work Index</span>
        </RouterLink>

        <div class="flex items-center gap-2 font-mono text-[11px] uppercase tracking-widest text-ink/70">
          <span class="bg-ink text-paper px-2 py-0.5 rounded-sm font-black">{{ project.num }}</span>
          <span>FLAGSHIP CASE STUDY</span>
        </div>
      </div>

      <!-- Compact Recruiter Headline Row -->
      <div class="space-y-4">
        <div>
          <span class="font-mono text-[11px] font-extrabold uppercase tracking-widest text-ink/70 block mb-1">
            {{ project.kind }}
          </span>
          <h1 class="text-[clamp(30px,4.5vw,56px)] leading-[1.08] tracking-[-0.035em] font-extrabold text-ink m-0">
            {{ project.name }}
          </h1>
        </div>

        <!-- Restrained Typographic Project Metadata Strip -->
        <div v-if="project.meta" class="grid grid-cols-2 md:grid-cols-4 gap-4 py-3.5 px-4 border-y border-ink/20 bg-story-bg font-sans text-ink">
          <div>
            <span class="font-mono text-[10px] font-extrabold uppercase text-ink/70 block">PROJECT TYPE</span>
            <span class="text-[13px] font-extrabold text-ink">{{ project.meta.context }}</span>
          </div>
          <div>
            <span class="font-mono text-[10px] font-extrabold uppercase text-ink/70 block">ROLE</span>
            <span class="text-[13px] font-extrabold text-ink">{{ project.meta.roleTitle || project.meta.ownership }}</span>
          </div>
          <div>
            <span class="font-mono text-[10px] font-extrabold uppercase text-ink/70 block">STATUS</span>
            <span class="text-[13px] font-extrabold text-ink">{{ project.meta.statusShort || project.meta.status }}</span>
          </div>
          <div>
            <span class="font-mono text-[10px] font-extrabold uppercase text-ink/70 block">TECH / TOOLS</span>
            <span class="text-[13px] font-extrabold text-ink">{{ project.meta.techStack || 'Figma' }}</span>
          </div>
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 border-b border-ink/20 pb-6">
        <div><p class="text-xs uppercase font-bold text-ink/70">Design focus</p><p class="text-[18px] leading-relaxed font-semibold m-0">{{ project.headline }}</p></div>
        <div><p class="text-xs uppercase font-bold text-ink/70">Period &amp; deliverables</p><p class="text-sm font-bold m-0">{{ project.meta.period }}</p><p class="text-sm leading-relaxed mt-2 mb-0">{{ project.meta.deliverables }}</p></div>
      </div>
      <nav aria-label="Case study sections" class="flex flex-wrap gap-x-5 gap-y-1 text-sm font-bold">
        <a class="inline-flex items-center min-h-[44px] underline underline-offset-4" href="#project-screens">Screens</a>
        <a class="inline-flex items-center min-h-[44px] underline underline-offset-4" href="#project-problem">Problem</a>
        <a class="inline-flex items-center min-h-[44px] underline underline-offset-4" href="#project-decisions">Decisions</a>
        <a class="inline-flex items-center min-h-[44px] underline underline-offset-4" href="#project-deliverables">Deliverables</a>
        <a class="inline-flex items-center min-h-[44px] underline underline-offset-4" href="#project-contribution">My role</a>
      </nav>
      <div id="project-screens" class="case-study-anchor"></div>
      <p class="m-0 text-sm text-ink/75">Choose a screen below. Scroll the screen list sideways on smaller displays.</p>
      <!-- HERO 01: SMARTMEET (6 INTERACTIVE TABS) -->
      <div v-if="project.id === 'smartmeet'" class="border border-ink bg-ink overflow-hidden shadow-[12px_12px_0_rgba(21,21,21,0.08)] relative group">
        <div class="min-h-[44px] py-2 bg-[#171717] px-4 flex max-sm:flex-col items-center justify-between border-b border-[#333333] font-mono text-[11px] gap-2">
          <div class="flex items-center gap-2">
            <span class="w-3 h-3 rounded-full bg-[#ff5f56] block"></span>
            <span class="w-3 h-3 rounded-full bg-[#ffbd2e] block"></span>
            <span class="w-3 h-3 rounded-full bg-[#27c93f] block"></span>
            <span class="ml-2 text-paper/80 font-bold max-sm:hidden">smartmeet.app</span>
          </div>

          <div class="flex items-center gap-1.5 overflow-x-auto w-full sm:w-auto py-1">
            <button
              v-for="t in smartmeetTabs"
              :key="t.id"
              type="button"
              :aria-pressed="activeSmartMeetTab === t.id"
              @click="activeSmartMeetTab = t.id"
              :class="[
                'min-h-[44px] px-3 py-2 rounded text-[12px] font-bold transition-all cursor-pointer whitespace-nowrap',
                activeSmartMeetTab === t.id ? 'bg-[#1e3a8a] text-paper font-black' : 'text-paper/60 hover:text-paper hover:bg-paper/10'
              ]"
            >
              {{ t.label }}
            </button>
          </div>
        </div>

        <div class="relative overflow-hidden bg-ink max-h-[620px]">
          <template v-for="t in smartmeetTabs" :key="t.id">
            <ImagePreviewButton
              v-if="activeSmartMeetTab === t.id"
              @click="openLightbox(t.image, t.caption)"
              class="cursor-zoom-in group/zoom relative"
            >
              <img
                :src="t.image"
                :alt="t.label"
                class="w-full h-auto max-h-[620px] object-cover object-top block transition-all duration-500 animate-fade"
                loading="eager"
              />
              <div class="absolute inset-0 bg-ink/0 group-hover/zoom:bg-ink/10 transition-colors flex items-center justify-center">
                <span class="opacity-0 group-hover/zoom:opacity-100 transition-opacity bg-ink/90 text-paper px-4 py-2 rounded font-mono text-[12px] font-bold shadow-lg">
                  Open image preview
                </span>
              </div>
            </ImagePreviewButton>
          </template>

          <div class="absolute bottom-4 left-4 bg-ink/90 text-paper text-[11px] font-mono font-bold px-3 py-1.5 rounded border border-paper/20 backdrop-blur-sm">
            {{ smartmeetTabs.find(t => t.id === activeSmartMeetTab)?.caption }} (Click image to zoom)
          </div>
        </div>
      </div>

      <!-- HERO 02: WECARE (9 INTERACTIVE TABS & SCROLLABLE PHONE) -->
      <div v-else-if="project.id === 'wecare'" class="border border-ink bg-[#eef7fc] p-5 md:p-8 overflow-hidden shadow-[12px_12px_0_rgba(21,21,21,0.08)] relative space-y-4">
        <div class="flex max-sm:flex-col items-start sm:items-center justify-between gap-4 border-b border-[#1e8dc1]/30 pb-3 font-mono text-[11px]">
          <span class="font-mono text-[11px] font-extrabold uppercase text-[#11427e]">
            9 NATIVE MOBILE SCREENS (INTERACTIVE PREVIEW)
          </span>

          <div class="flex items-center gap-1.5 overflow-x-auto w-full sm:w-auto pb-1 sm:pb-0">
            <button
              v-for="t in wecareTabs"
              :key="t.id"
              type="button"
              :aria-pressed="activeWeCareTab === t.id"
              @click="activeWeCareTab = t.id"
              :class="[
                'min-h-[44px] px-3 py-2 rounded text-[12px] font-bold transition-all cursor-pointer whitespace-nowrap',
                activeWeCareTab === t.id ? 'bg-[#11427e] text-paper font-black' : 'bg-paper text-ink/70 hover:text-ink border border-ink/20'
              ]"
            >
              {{ t.label }}
            </button>
          </div>
        </div>

        <div class="max-w-[820px] mx-auto grid grid-cols-1 md:grid-cols-[310px_1fr] gap-6 items-center bg-paper border border-ink p-5 rounded-xl shadow-md">
          <div class="relative w-full max-w-[310px] mx-auto">
            <div
              v-for="t in wecareTabs"
              :key="t.id"
              v-show="activeWeCareTab === t.id"
              class="border-2 border-ink bg-[#0f172a] rounded-[32px] p-2.5 shadow-xl overflow-hidden group/zoom relative flex flex-col"
            >
              <!-- Phone Notch Header -->
              <div class="h-5 flex items-center justify-between font-mono text-[9px] text-white/70 px-3 pb-1 border-b border-white/10 shrink-0">
                <span>9:41</span>
                <span class="uppercase text-[#38bdf8] font-extrabold text-[8px]">{{ t.id }}</span>
                <div class="flex items-center gap-1">
                  <span class="w-1.5 h-1.5 rounded-full bg-white/70"></span>
                  <span class="w-1.5 h-1.5 rounded-full bg-white/70"></span>
                </div>
              </div>
              
              <!-- Scrollable Phone Viewport -->
              <ImagePreviewButton
                @click="openLightbox(t.image, t.caption)"
                class="w-full h-[520px] overflow-y-auto overflow-x-hidden bg-paper rounded-b-[24px] cursor-zoom-in relative scrollbar-thin scroll-smooth"
              >
                <img
                  :src="t.image"
                  :alt="t.label"
                  class="w-full h-auto block"
                  :loading="activeWeCareTab === t.id ? 'eager' : 'lazy'"
                />
              </ImagePreviewButton>

              <!-- Subtle Scroll Affordance Indicator -->
              <div class="pointer-events-none absolute bottom-4 left-1/2 -translate-x-1/2 bg-ink/80 text-paper text-[9px] font-mono px-2.5 py-0.5 rounded-full backdrop-blur-sm opacity-90 transition-opacity">
                ↕ Scroll screen
              </div>
            </div>
          </div>

          <div class="space-y-3 font-sans text-ink">
            <span class="font-mono text-[11px] font-extrabold uppercase bg-[#11427e] text-paper px-2.5 py-0.5 rounded-sm inline-block">
              ACTIVE SCREEN: {{ wecareTabs.find(t => t.id === activeWeCareTab)?.label }}
            </span>
            <p class="text-[15px] leading-[1.55] font-bold text-ink m-0">
              {{ wecareTabs.find(t => t.id === activeWeCareTab)?.caption }}
            </p>
            <div class="pt-3 border-t border-ink/20 space-y-1">
              <p class="text-[12px] text-ink/70 font-mono m-0">
                Scroll inside the phone to inspect the screen.
              </p>
              <p class="text-[11px] text-ink/70 font-mono m-0">
                Open the image for a full-width preview and zoom controls.
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- HERO 03: GOLDERAPHARM (6 INTERACTIVE TABS) -->
      <div v-else-if="project.id === 'goldera'" class="border border-ink bg-[#fbf9f1] p-5 md:p-8 overflow-hidden shadow-[12px_12px_0_rgba(21,21,21,0.08)] relative space-y-4">
        <div class="flex max-sm:flex-col items-start sm:items-center justify-between gap-4 border-b border-[#be9e1c]/40 pb-3 font-mono text-[11px]">
          <span class="font-mono text-[11px] font-extrabold uppercase text-[#695511]">
            6 ENTERPRISE CRM DASHBOARD MODULES
          </span>

          <div class="flex items-center gap-1.5 overflow-x-auto w-full sm:w-auto">
            <button
              v-for="t in golderaTabs"
              :key="t.id"
              type="button"
              :aria-pressed="activeGolderaTab === t.id"
              @click="activeGolderaTab = t.id"
              :class="[
                'min-h-[44px] px-3 py-2 rounded text-[12px] font-bold transition-all cursor-pointer whitespace-nowrap',
                activeGolderaTab === t.id ? 'bg-[#be9e1c] text-ink font-black' : 'bg-paper text-ink/70 hover:text-ink border border-ink/20'
              ]"
            >
              {{ t.label }}
            </button>
          </div>
        </div>

        <div class="border border-ink bg-paper p-3 shadow-md space-y-3 max-h-[580px] overflow-hidden">
          <div class="flex items-center justify-between border-b border-ink/20 pb-2 font-mono text-[11px]">
            <span class="font-extrabold uppercase bg-ink text-paper px-2 py-0.5 rounded-sm">
              ACTIVE VIEW: {{ golderaTabs.find(t => t.id === activeGolderaTab)?.label }}
            </span>
            <span class="text-ink/70 font-medium hidden sm:inline-block">
              {{ golderaTabs.find(t => t.id === activeGolderaTab)?.caption }}
            </span>
          </div>

          <template v-for="t in golderaTabs" :key="t.id">
            <ImagePreviewButton
              v-if="activeGolderaTab === t.id"
              @click="openLightbox(t.image, t.caption)"
              class="cursor-zoom-in group/zoom relative"
            >
              <img
                :src="t.image"
                :alt="t.label"
                class="w-full h-auto max-h-[500px] object-cover object-top block border border-ink/20 animate-fade"
                loading="eager"
              />
              <div class="absolute inset-0 bg-ink/0 group-hover/zoom:bg-ink/10 transition-colors flex items-center justify-center">
                <span class="opacity-0 group-hover/zoom:opacity-100 transition-opacity bg-ink/90 text-paper px-4 py-2 rounded font-mono text-[12px] font-bold shadow-lg">
                  Open image preview
                </span>
              </div>
            </ImagePreviewButton>
          </template>
        </div>
      </div>

      <!-- HERO 04: HMZ E-LEARNING (6 INTERACTIVE TABS) -->
      <div v-else-if="project.id === 'hmz'" class="border border-ink bg-[#fff7f5] p-5 md:p-8 overflow-hidden shadow-[12px_12px_0_rgba(21,21,21,0.08)] relative space-y-4">
        <div class="flex max-sm:flex-col items-start sm:items-center justify-between gap-4 border-b border-coral/40 pb-3 font-mono text-[11px]">
          <span class="font-mono text-[11px] font-extrabold uppercase text-[#9a3412]">
            6 HMZ PLATFORM INTERFACES
          </span>

          <div class="flex items-center gap-1.5 overflow-x-auto w-full sm:w-auto">
            <button
              v-for="t in hmzTabs"
              :key="t.id"
              type="button"
              :aria-pressed="activeHmzTab === t.id"
              @click="activeHmzTab = t.id"
              :class="[
                'min-h-[44px] px-3 py-2 rounded text-[12px] font-bold transition-all cursor-pointer whitespace-nowrap',
                activeHmzTab === t.id ? 'bg-[#9a3412] text-paper font-black' : 'bg-paper text-ink/70 hover:text-ink border border-ink/20'
              ]"
            >
              {{ t.label }}
            </button>
          </div>
        </div>

        <div class="border border-ink bg-paper p-3 shadow-md space-y-3 max-h-[580px] overflow-hidden">
          <div class="flex items-center justify-between border-b border-ink/20 pb-2 font-mono text-[11px]">
            <span class="font-extrabold uppercase bg-ink text-paper px-2 py-0.5 rounded-sm">
              ACTIVE VIEW: {{ hmzTabs.find(t => t.id === activeHmzTab)?.label }}
            </span>
            <span class="text-ink/70 font-medium hidden sm:inline-block">
              {{ hmzTabs.find(t => t.id === activeHmzTab)?.caption }}
            </span>
          </div>

          <template v-for="t in hmzTabs" :key="t.id">
            <ImagePreviewButton
              v-if="activeHmzTab === t.id"
              @click="openLightbox(t.image, t.caption)"
              class="cursor-zoom-in group/zoom relative"
            >
              <img
                :src="t.image"
                :alt="t.label"
                class="w-full h-auto max-h-[500px] object-cover object-top block border border-ink/20 animate-fade"
                loading="eager"
              />
              <div class="absolute inset-0 bg-ink/0 group-hover/zoom:bg-ink/10 transition-colors flex items-center justify-center">
                <span class="opacity-0 group-hover/zoom:opacity-100 transition-opacity bg-ink/90 text-paper px-4 py-2 rounded font-mono text-[12px] font-bold shadow-lg">
                  Open image preview
                </span>
              </div>
            </ImagePreviewButton>
          </template>
        </div>
      </div>

      <!-- HERO 05: 212° FRANCHISE (6 INTERACTIVE TABS) -->
      <div v-else-if="project.id === 'franchise212'" class="border border-ink bg-[#faf8f5] p-5 md:p-8 overflow-hidden shadow-[12px_12px_0_rgba(21,21,21,0.08)] relative space-y-4">
        <div class="flex max-sm:flex-col items-start sm:items-center justify-between gap-4 border-b border-ink/20 pb-3 font-mono text-[11px]">
          <span class="font-mono text-[11px] font-extrabold uppercase text-ink">
            6 FRANCHISE PLATFORM DESTINATIONS
          </span>

          <div class="flex items-center gap-1.5 overflow-x-auto w-full sm:w-auto">
            <button
              v-for="t in franchiseTabs"
              :key="t.id"
              type="button"
              :aria-pressed="activeFranchiseTab === t.id"
              @click="activeFranchiseTab = t.id"
              :class="[
                'min-h-[44px] px-3 py-2 rounded text-[12px] font-bold transition-all cursor-pointer whitespace-nowrap',
                activeFranchiseTab === t.id ? 'bg-ink text-paper font-black' : 'bg-paper text-ink/70 hover:text-ink border border-ink/20'
              ]"
            >
              {{ t.label }}
            </button>
          </div>
        </div>

        <div class="border border-ink bg-paper p-3 shadow-md space-y-3 max-h-[580px] overflow-hidden">
          <template v-for="t in franchiseTabs" :key="t.id">
            <ImagePreviewButton
              v-if="activeFranchiseTab === t.id"
              @click="openLightbox(t.image, t.caption)"
              class="cursor-zoom-in group/zoom relative"
            >
              <img
                :src="t.image"
                :alt="t.label"
                class="w-full h-auto max-h-[500px] object-cover object-top block border border-ink/20 animate-fade"
                loading="eager"
              />
              <div class="absolute inset-0 bg-ink/0 group-hover/zoom:bg-ink/10 transition-colors flex items-center justify-center">
                <span class="opacity-0 group-hover/zoom:opacity-100 transition-opacity bg-ink/90 text-paper px-4 py-2 rounded font-mono text-[12px] font-bold shadow-lg">
                  Open image preview
                </span>
              </div>
            </ImagePreviewButton>
          </template>
        </div>
      </div>

      <!-- HERO 06: IMDB REDESIGN (3 INTERACTIVE TABS) -->
      <div v-else-if="project.id === 'imdb'" class="border border-ink bg-ink p-5 md:p-8 overflow-hidden shadow-[12px_12px_0_rgba(21,21,21,0.08)] relative space-y-4 text-paper">
        <div class="flex max-sm:flex-col items-start sm:items-center justify-between gap-4 border-b border-paper/20 pb-3 font-mono text-[11px]">
          <span class="font-mono text-[11px] font-extrabold uppercase text-[#9a3412]">
            3 CINEMATIC DARK MODE INTERFACES
          </span>

          <div class="flex items-center gap-1.5 overflow-x-auto w-full sm:w-auto">
            <button
              v-for="t in imdbTabs"
              :key="t.id"
              type="button"
              :aria-pressed="activeImdbTab === t.id"
              @click="activeImdbTab = t.id"
              :class="[
                'min-h-[44px] px-3 py-2 rounded text-[12px] font-bold transition-all cursor-pointer whitespace-nowrap',
                activeImdbTab === t.id ? 'bg-[#9a3412] text-paper font-black' : 'bg-paper/10 text-paper/70 hover:text-paper border border-paper/20'
              ]"
            >
              {{ t.label }}
            </button>
          </div>
        </div>

        <div class="border border-paper/20 bg-[#141414] p-3 shadow-md space-y-3 max-h-[580px] overflow-hidden">
          <template v-for="t in imdbTabs" :key="t.id">
            <ImagePreviewButton
              v-if="activeImdbTab === t.id"
              @click="openLightbox(t.image, t.caption)"
              class="cursor-zoom-in group/zoom relative"
            >
              <img
                :src="t.image"
                :alt="t.label"
                class="w-full h-auto max-h-[500px] object-cover object-top block border border-paper/20 animate-fade"
                loading="eager"
              />
              <div class="absolute inset-0 bg-ink/0 group-hover/zoom:bg-ink/30 transition-colors flex items-center justify-center">
                <span class="opacity-0 group-hover/zoom:opacity-100 transition-opacity bg-paper text-ink px-4 py-2 rounded font-mono text-[12px] font-bold shadow-lg">
                  Open image preview
                </span>
              </div>
            </ImagePreviewButton>
          </template>
        </div>
      </div>

      <!-- Motion Scroll Cue Indicator -->
      <div class="flex items-center justify-center pt-2 font-mono text-[11px] font-bold text-ink/60 gap-2 animate-bounce">
        <span>Scroll to explore project</span>
        <span>↓</span>
      </div>

    </div>

    <!-- Global Fullscreen Image Lightbox Modal -->
    <ImageLightboxModal
      :is-open="lightboxOpen"
      :src="lightboxSrc"
      :caption="lightboxCaption"
      @close="lightboxOpen = false"
    />
  </section>
</template>
