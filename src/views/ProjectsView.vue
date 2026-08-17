<script setup>
import { RouterLink } from "vue-router";
import { flagshipProjects, secondaryProjects } from "@/data/projects.js";
import { gallery } from "@/data/gallery.js";
</script>

<template>
  <main class="projects-page min-h-[calc(100vh-82px)] font-sans text-ink bg-paper">
    <!-- Hero Section -->
    <header class="py-16 md:py-24 px-5 md:px-[7vw] bg-ink text-paper border-b border-ink">
      <div class="max-w-[1240px] mx-auto">
        <div class="flex items-center gap-3 mb-6">
          <span class="font-sans text-[11px] font-extrabold uppercase tracking-widest bg-lime text-ink px-3 py-1 rounded-sm">
            SELECTED WORK
          </span>
          <span class="text-[12px] font-bold text-paper/60 uppercase tracking-wider hidden sm:inline-block">
            FEATURED CASE STUDIES &amp; PRODUCTION SYSTEMS
          </span>
        </div>

        <h1 class="text-[clamp(38px,5.8vw,80px)] leading-[1.04] tracking-[-0.035em] font-extrabold m-0 text-paper">
          Designing complex products <br />
          <span class="font-serif italic font-normal text-lime">from research to production.</span>
        </h1>

        <p class="mt-6 text-[18px] md:text-[21px] leading-[1.55] max-w-[760px] text-paper/90 font-medium m-0">
          Product Designer with engineering background who designs complex SaaS products and builds production-ready interfaces.
        </p>

        <!-- Category Jumps -->
        <div class="mt-10 flex flex-wrap gap-3 font-sans text-[12px] font-bold">
          <a href="#featured-projects" class="px-5 py-2.5 bg-lime text-ink rounded-full font-extrabold hover:bg-lime/90 transition-colors">
            01. Featured Case Studies (3 Flagship)
          </a>
          <a href="#more-work" class="px-5 py-2.5 border border-paper/30 text-paper rounded-full hover:bg-paper hover:text-ink transition-colors">
            02. More Work &amp; Secondary Projects
          </a>
          <a href="#creative-archive" class="px-5 py-2.5 border border-paper/30 text-paper rounded-full hover:bg-paper hover:text-ink transition-colors">
            03. Creative Brand Archive
          </a>
        </div>
      </div>
    </header>

    <!-- SECTION 01: 3 FEATURED PROJECTS ONLY (Exact Order: 01 GolderaPharm, 02 WeCare, 03 SmartMeet) -->
    <section id="featured-projects" class="py-16 md:py-24 px-5 md:px-[7vw] border-b border-ink bg-paper">
      <div class="max-w-[1240px] mx-auto space-y-24">

        <!-- Header Label -->
        <div class="flex items-center justify-between border-b border-ink pb-4">
          <div>
            <span class="font-sans font-extrabold text-[12px] tracking-[0.05em] uppercase text-ink/70 block">
              FLAGSHIP SHOWCASE
            </span>
            <h2 class="text-[28px] md:text-[36px] font-extrabold text-ink m-0 tracking-[-0.03em]">
              Featured Case Studies
            </h2>
          </div>
          <span class="hidden sm:inline-block text-[12px] font-mono font-extrabold uppercase text-ink/50">03 CURATED PROJECTS</span>
        </div>

        <!-- PROJECT 01: GolderaPharm (Enterprise CRM) -->
        <article class="border border-ink bg-paper p-6 md:p-10 shadow-[8px_8px_0_rgba(21,21,21,0.04)]">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            
            <!-- Left Side: Large Real Visual -->
            <div class="space-y-4">
              <div class="aspect-[16/10] overflow-hidden border border-ink bg-ink relative">
                <img
                  src="/assets/golderapharm-cover.png"
                  alt="GolderaPharm Enterprise CRM Dashboard"
                  class="w-full h-full object-cover object-top hover:scale-[1.02] transition-transform duration-500"
                />
              </div>

              <!-- Three Roles Visual Breakdown Badges -->
              <div class="p-4 border border-ink bg-story-bg space-y-2">
                <span class="text-[11px] font-extrabold uppercase tracking-wider text-ink/70 block">
                  ROLE-SPECIFIC INTERFACE MODULES
                </span>
                <div class="grid grid-cols-3 gap-2 text-center text-[11px] font-bold font-sans">
                  <div class="p-2 border border-ink/30 bg-paper">Medical Rep</div>
                  <div class="p-2 border border-ink/30 bg-paper">Supervisor</div>
                  <div class="p-2 border border-ink/30 bg-paper">Manager</div>
                </div>
              </div>
            </div>

            <!-- Right Side: Product Information & Story -->
            <div class="space-y-6">
              <div class="flex items-center justify-between border-b border-ink/20 pb-3">
                <span class="font-sans text-[13px] font-black uppercase bg-ink text-paper px-3 py-1 rounded-sm">
                  PROJECT 01
                </span>
                <span class="font-mono text-[12px] font-bold text-ink/60 uppercase">Enterprise SaaS · Pharmaceutical</span>
              </div>

              <!-- Title & Quote Highlight -->
              <div>
                <h3 class="text-[32px] md:text-[40px] font-extrabold text-ink m-0 tracking-[-0.03em] leading-tight">
                  GolderaPharm
                </h3>
                <p class="text-[14px] font-bold text-ink/60 mt-1 uppercase tracking-wider">
                  Enterprise Role-Based CRM Platform
                </p>
              </div>

              <blockquote class="p-4 border-l-2 border-ink bg-story-bg text-[17px] font-serif italic text-ink m-0 leading-snug">
                “One CRM system adapted for three operational roles.”
              </blockquote>

              <p class="text-[15px] leading-[1.6] text-ink/85 font-medium m-0">
                Architected an enterprise pharmaceutical sales platform. Medical Representatives gain sub-45s field visit and sample logging; Supervisors monitor real-time team visits; Managers receive macro sales targets and performance analytics.
              </p>

              <!-- Detailed Fact Grid -->
              <div class="grid grid-cols-2 gap-4 py-4 border-t border-b border-ink/20 text-[13px]">
                <div>
                  <span class="text-[11px] font-extrabold uppercase text-ink/50 block">My Role</span>
                  <strong class="font-extrabold text-ink">Lead Product Designer &amp; Systems Architect</strong>
                </div>
                <div>
                  <span class="text-[11px] font-extrabold uppercase text-ink/50 block">Industry</span>
                  <strong class="font-extrabold text-ink">Pharmaceutical Enterprise Operations</strong>
                </div>
                <div>
                  <span class="text-[11px] font-extrabold uppercase text-ink/50 block">Main Challenge</span>
                  <strong class="font-extrabold text-ink">40% workday lost to cluttered field logging forms</strong>
                </div>
                <div>
                  <span class="text-[11px] font-extrabold uppercase text-ink/50 block">Main Outcome</span>
                  <strong class="font-extrabold text-ink">Visit logging time reduced from 4.5m to ~45s</strong>
                </div>
              </div>

              <!-- CTA Link -->
              <div class="pt-2">
                <RouterLink
                  to="/projects/goldera"
                  class="px-6 py-3 bg-ink text-paper rounded-full font-extrabold text-[13px] hover:bg-paper hover:text-ink border border-ink transition-colors inline-flex items-center gap-2"
                >
                  Read GolderaPharm Case Study ↗
                </RouterLink>
              </div>
            </div>

          </div>
        </article>

        <!-- PROJECT 02: WeCare (Healthcare Appointment Experience) -->
        <article class="border border-ink bg-paper p-6 md:p-10 shadow-[8px_8px_0_rgba(21,21,21,0.04)]">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            
            <!-- Left Side: Product Story & Information -->
            <div class="space-y-6 order-2 lg:order-1">
              <div class="flex items-center justify-between border-b border-ink/20 pb-3">
                <span class="font-sans text-[13px] font-black uppercase bg-ink text-paper px-3 py-1 rounded-sm">
                  PROJECT 02
                </span>
                <span class="font-mono text-[12px] font-bold text-ink/60 uppercase">Digital Health · Mobile App</span>
              </div>

              <div>
                <h3 class="text-[32px] md:text-[40px] font-extrabold text-ink m-0 tracking-[-0.03em] leading-tight">
                  WeCare
                </h3>
                <p class="text-[14px] font-bold text-ink/60 mt-1 uppercase tracking-wider">
                  Healthcare Appointment &amp; Patient Care Experience
                </p>
              </div>

              <blockquote class="p-4 border-l-2 border-ink bg-story-bg text-[17px] font-serif italic text-ink m-0 leading-snug">
                “Care journeys deserve calm, anxiety-reducing interfaces.”
              </blockquote>

              <p class="text-[15px] leading-[1.6] text-ink/85 font-medium m-0">
                Designed an end-to-end patient mobile application eliminating booking drop-off. Mapped doctor discovery, a progressive 3-step scheduling wizard (Doctor → Date/Time → Confirmation), transparent pricing breakdowns, and post-care follow-up alerts.
              </p>

              <!-- Detailed Fact Grid -->
              <div class="grid grid-cols-2 gap-4 py-4 border-t border-b border-ink/20 text-[13px]">
                <div>
                  <span class="text-[11px] font-extrabold uppercase text-ink/50 block">My Role</span>
                  <strong class="font-extrabold text-ink">Mobile UX/UI Designer</strong>
                </div>
                <div>
                  <span class="text-[11px] font-extrabold uppercase text-ink/50 block">Industry</span>
                  <strong class="font-extrabold text-ink">Telehealth &amp; Clinical Booking</strong>
                </div>
                <div>
                  <span class="text-[11px] font-extrabold uppercase text-ink/50 block">Main Challenge</span>
                  <strong class="font-extrabold text-ink">Patient anxiety &amp; dense jargon form drop-off</strong>
                </div>
                <div>
                  <span class="text-[11px] font-extrabold uppercase text-ink/50 block">Main Outcome</span>
                  <strong class="font-extrabold text-ink">20+ screens linked in high-fidelity prototype</strong>
                </div>
              </div>

              <!-- CTA Link -->
              <div class="pt-2">
                <RouterLink
                  to="/projects/wecare"
                  class="px-6 py-3 bg-ink text-paper rounded-full font-extrabold text-[13px] hover:bg-paper hover:text-ink border border-ink transition-colors inline-flex items-center gap-2"
                >
                  Read WeCare Case Study ↗
                </RouterLink>
              </div>
            </div>

            <!-- Right Side: Real Mobile Screenshots & Patient Journey Showcase -->
            <div class="space-y-4 order-1 lg:order-2">
              <div class="p-6 md:p-8 border border-ink bg-story-bg space-y-6">
                <!-- Section Header / Narrative Label -->
                <div class="flex items-center justify-between border-b border-ink/20 pb-3">
                  <div>
                    <span class="font-sans text-[11px] font-extrabold uppercase tracking-widest text-ink/60 block">
                      PATIENT APPOINTMENT JOURNEY
                    </span>
                    <h4 class="text-[14px] font-extrabold text-ink m-0 tracking-tight">
                      3-Step Progressive Booking Wizard
                    </h4>
                  </div>
                  <span class="font-mono text-[11px] font-bold text-ink/50 uppercase hidden sm:inline-block">
                    MOBILE NATIVE UI
                  </span>
                </div>

                <!-- 3 Phones Horizontal Showcase Grid -->
                <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-5 items-end justify-items-center">
                  
                  <!-- Phone 1: 01 Discover -->
                  <div class="flex flex-col items-center space-y-2.5 w-full max-w-[190px]">
                    <div class="flex items-center gap-1.5 font-sans text-[11px] font-extrabold text-ink">
                      <span class="font-mono text-[10px] bg-ink text-paper px-1.5 py-0.5 rounded-sm">01</span>
                      <span>Discover</span>
                    </div>
                    <!-- Equal Phone Frame -->
                    <div class="w-full aspect-[9/18.5] bg-ink rounded-[22px] border-2 border-ink p-1.5 shadow-[4px_6px_0_rgba(21,21,21,0.08)] flex flex-col justify-between overflow-hidden">
                      <div class="w-8 h-1 bg-paper/20 rounded-full mx-auto my-0.5 shrink-0"></div>
                      <div class="w-full h-full rounded-[16px] overflow-hidden bg-paper border border-ink/20">
                        <img
                          src="/WeCare/Screens/Home.png"
                          alt="WeCare Doctor Discovery Screen"
                          class="w-full h-full object-cover object-top block"
                        />
                      </div>
                    </div>
                  </div>

                  <!-- Phone 2: 02 Schedule (Slight Elevation Difference on Desktop) -->
                  <div class="flex flex-col items-center space-y-2.5 w-full max-w-[190px] sm:translate-y-[-8px]">
                    <div class="flex items-center gap-1.5 font-sans text-[11px] font-extrabold text-ink">
                      <span class="font-mono text-[10px] bg-ink text-paper px-1.5 py-0.5 rounded-sm">02</span>
                      <span>Schedule</span>
                    </div>
                    <!-- Equal Phone Frame -->
                    <div class="w-full aspect-[9/18.5] bg-ink rounded-[22px] border-2 border-ink p-1.5 shadow-[4px_8px_0_rgba(21,21,21,0.12)] flex flex-col justify-between overflow-hidden">
                      <div class="w-8 h-1 bg-paper/20 rounded-full mx-auto my-0.5 shrink-0"></div>
                      <div class="w-full h-full rounded-[16px] overflow-hidden bg-paper border border-ink/20">
                        <img
                          src="/WeCare/Screens/Doctor’s Info.png"
                          alt="WeCare Appointment Scheduling Screen"
                          class="w-full h-full object-cover object-top block"
                        />
                      </div>
                    </div>
                  </div>

                  <!-- Phone 3: 03 Confirm -->
                  <div class="flex flex-col items-center space-y-2.5 w-full max-w-[190px]">
                    <div class="flex items-center gap-1.5 font-sans text-[11px] font-extrabold text-ink">
                      <span class="font-mono text-[10px] bg-ink text-paper px-1.5 py-0.5 rounded-sm">03</span>
                      <span>Confirm</span>
                    </div>
                    <!-- Equal Phone Frame -->
                    <div class="w-full aspect-[9/18.5] bg-ink rounded-[22px] border-2 border-ink p-1.5 shadow-[4px_6px_0_rgba(21,21,21,0.08)] flex flex-col justify-between overflow-hidden">
                      <div class="w-8 h-1 bg-paper/20 rounded-full mx-auto my-0.5 shrink-0"></div>
                      <div class="w-full h-full rounded-[16px] overflow-hidden bg-paper border border-ink/20">
                        <img
                          src="/WeCare/Screens/Checkout.png"
                          alt="WeCare Booking Confirmation Screen"
                          class="w-full h-full object-cover object-top block"
                        />
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>

          </div>
        </article>

        <!-- PROJECT 03: SmartMeet (AI Meeting Intelligence Platform) -->
        <!-- Layout Requirement: Text section FIRST, then a large product showcase image BELOW (image NOT beside text) -->
        <article class="border border-ink bg-paper p-6 md:p-10 shadow-[8px_8px_0_rgba(21,21,21,0.04)]">
          <div class="space-y-8">
            
            <!-- Header Badge & Title -->
            <div class="flex items-center justify-between border-b border-ink/20 pb-3">
              <span class="font-sans text-[13px] font-black uppercase bg-ink text-paper px-3 py-1 rounded-sm">
                PROJECT 03
              </span>
              <span class="font-mono text-[12px] font-bold text-ink/60 uppercase">AI Productivity · SaaS</span>
            </div>

            <!-- Text Section (FIRST) -->
            <div class="space-y-6 max-w-[960px]">
              <div>
                <h3 class="text-[32px] md:text-[40px] font-extrabold text-ink m-0 tracking-[-0.03em] leading-tight">
                  SmartMeet
                </h3>
                <p class="text-[14px] font-bold text-ink/60 mt-1 uppercase tracking-wider">
                  AI Meeting Intelligence &amp; Workspace Platform
                </p>
              </div>

              <blockquote class="p-4 border-l-2 border-ink bg-story-bg text-[17px] font-serif italic text-ink m-0 leading-snug">
                “Transforming passive video meetings into structured, searchable organizational knowledge.”
              </blockquote>

              <p class="text-[15px] leading-[1.6] text-ink/85 font-medium m-0">
                Led UI/UX design and frontend development for an AI-powered meeting workspace. SmartMeet pairs real-time speech-to-text transcription with RAG knowledge search, automated action item extraction, decision logging, and multi-tenant data isolation.
              </p>

              <!-- Detailed Fact Grid -->
              <div class="grid grid-cols-2 sm:grid-cols-4 gap-4 py-4 border-t border-b border-ink/20 text-[13px]">
                <div>
                  <span class="text-[11px] font-extrabold uppercase text-ink/50 block">My Role</span>
                  <strong class="font-extrabold text-ink">Lead Product Designer &amp; Frontend Engineer</strong>
                </div>
                <div>
                  <span class="text-[11px] font-extrabold uppercase text-ink/50 block">Industry</span>
                  <strong class="font-extrabold text-ink">AI Productivity SaaS</strong>
                </div>
                <div>
                  <span class="text-[11px] font-extrabold uppercase text-ink/50 block">Main Challenge</span>
                  <strong class="font-extrabold text-ink">Context loss post-meeting &amp; task fragmentation</strong>
                </div>
                <div>
                  <span class="text-[11px] font-extrabold uppercase text-ink/50 block">Main Outcome</span>
                  <strong class="font-extrabold text-ink">Awarded top capstone evaluation score at ITI</strong>
                </div>
              </div>

              <!-- SmartMeet Feature Highlights -->
              <div class="grid grid-cols-2 md:grid-cols-4 gap-3 pt-1">
                <div class="p-3 border border-ink/30 bg-story-bg text-[12px] font-bold text-ink">
                  Real-Time Transcription
                </div>
                <div class="p-3 border border-ink/30 bg-story-bg text-[12px] font-bold text-ink">
                  Automated Action Extraction
                </div>
                <div class="p-3 border border-ink/30 bg-story-bg text-[12px] font-bold text-ink">
                  RAG Knowledge Search
                </div>
                <div class="p-3 border border-ink/30 bg-story-bg text-[12px] font-bold text-ink">
                  Sync-Scroll Split Workspace
                </div>
              </div>
            </div>

            <!-- Large Showcase Image (BELOW Text Section) -->
            <div class="space-y-4 pt-4 border-t border-ink">
              <div class="aspect-[16/9] overflow-hidden border border-ink bg-ink relative shadow-inner">
                <img
                  src="/Thumbnail.png"
                  alt="SmartMeet AI Meeting Intelligence Dashboard and Transcript View"
                  class="w-full h-full object-cover object-top hover:scale-[1.01] transition-transform duration-500"
                />
              </div>
              <div class="flex items-center justify-between text-[12px] text-ink/70 font-sans font-bold px-1">
                <span>SmartMeet Split-Screen Workspace UI (Vue 3 + Node.js)</span>
                <RouterLink
                  to="/projects/smartmeet"
                  class="px-6 py-2.5 bg-ink text-paper rounded-full font-extrabold text-[12px] hover:bg-paper hover:text-ink border border-ink transition-colors inline-flex items-center gap-2"
                >
                  Read SmartMeet Case Study ↗
                </RouterLink>
              </div>
            </div>

          </div>
        </article>

      </div>
    </section>

    <!-- SECTION 02: "More work" (Secondary Projects - Lower Importance) -->
    <section id="more-work" class="py-16 md:py-24 px-5 md:px-[7vw] border-b border-ink bg-story-bg">
      <div class="max-w-[1240px] mx-auto">
        <div class="flex items-center justify-between border-b border-ink pb-4 mb-10">
          <div>
            <span class="font-sans font-extrabold text-[12px] tracking-[0.05em] uppercase text-ink/70 block">
              SECONDARY EXTENDED PROJECTS
            </span>
            <h2 class="text-[26px] md:text-[32px] font-extrabold text-ink m-0 tracking-[-0.03em]">
              More Work
            </h2>
          </div>
          <span class="hidden sm:inline-block text-[12px] font-mono font-extrabold uppercase text-ink/50">EXTENDED CATALOGUE</span>
        </div>

        <!-- Editorial Index List (Secondary Work - Compact & Lower Prominence) -->
        <div class="divide-y divide-ink border-t border-b border-ink bg-paper">
          <article
            v-for="p in secondaryProjects"
            :key="p.id"
            class="py-6 px-6 md:px-8 grid grid-cols-1 md:grid-cols-[70px_1fr_180px] gap-6 items-center hover:bg-story-bg/50 transition-colors"
          >
            <div class="font-mono text-[16px] font-black text-ink/40">
              {{ p.num }}
            </div>

            <div>
              <div class="flex items-center gap-3">
                <h3 class="text-[20px] font-extrabold text-ink m-0 tracking-[-0.02em]">{{ p.name }}</h3>
                <span class="text-[10px] font-extrabold uppercase tracking-wider bg-ink/10 text-ink px-2.5 py-0.5 rounded-full">
                  {{ p.kind }}
                </span>
              </div>
              <p class="text-[14px] text-ink/80 font-medium m-0 mt-1 max-w-[680px]">
                {{ p.blurb }}
              </p>
              <div class="flex items-center gap-4 mt-2 font-sans text-[12px] font-bold text-ink/60">
                <span>Role: {{ p.overview.role }}</span>
                <span>•</span>
                <span>{{ p.overview.timeframe }}</span>
              </div>
            </div>

            <div class="flex max-md:justify-start justify-end">
              <RouterLink
                :to="`/projects/${p.id}`"
                class="px-4 py-2 border border-ink bg-paper text-ink rounded-full font-extrabold text-[12px] hover:bg-ink hover:text-paper transition-colors"
              >
                View Details ↗
              </RouterLink>
            </div>
          </article>
        </div>
      </div>
    </section>

    <!-- SECTION 03: Creative Brand & Campaign Archive -->
    <section id="creative-archive" class="py-16 md:py-24 px-5 md:px-[7vw] bg-paper">
      <div class="max-w-[1240px] mx-auto">
        <div class="flex items-center justify-between border-b border-ink pb-4 mb-10">
          <div>
            <span class="font-sans font-extrabold text-[12px] tracking-[0.05em] uppercase text-ink/70 block">
              VISUAL SYSTEMS &amp; BRANDING
            </span>
            <h2 class="text-[26px] md:text-[32px] font-extrabold text-ink m-0 tracking-[-0.03em]">
              Creative Archive
            </h2>
            <p class="text-[14px] text-ink/75 font-medium m-0 mt-1">
              Brand identity systems, visual campaign graphics, and promotional media.
            </p>
          </div>
          <span class="hidden sm:inline-block text-[12px] font-mono font-extrabold uppercase text-ink/50">BRAND ARCHIVE</span>
        </div>

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
              <h4 class="text-[20px] font-extrabold text-ink m-0">{{ item.name }}</h4>
              <p class="text-[13px] text-ink/80 font-medium m-0 mt-1">{{ item.summary }}</p>
            </div>
            <div class="pt-4 border-t border-ink/20 flex justify-end">
              <RouterLink :to="`/archive/${item.id}`" class="text-[12px] font-extrabold text-ink hover:underline">
                View Identity System ↗
              </RouterLink>
            </div>
          </article>
        </div>

        <!-- Footnote Navigation -->
        <div class="mt-16 pt-8 border-t border-ink flex max-sm:flex-col items-center justify-between gap-4 font-sans text-[13px] font-extrabold text-ink">
          <RouterLink to="/about" class="hover:underline">
            ← Read Marwan's Background &amp; Story
          </RouterLink>
          <RouterLink to="/contact" class="hover:underline">
            Initiate Contact ↗
          </RouterLink>
        </div>
      </div>
    </section>
  </main>
</template>
