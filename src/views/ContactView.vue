<script setup>
</script>

<template>
  <main
    class="contact-page min-h-[calc(100vh-82px)] p-6 md:p-[7vw] flex flex-col justify-center bg-[#151515] font-sans text-paper"
    id="contact"
  >
    <div class="max-w-[1240px] mx-auto w-full my-auto py-8 md:py-12">
      <!-- Main Content Grid (Two-column on Desktop: Left 60% / Right 40%) -->
      <div class="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-12 lg:gap-16 items-start">
        
        <!-- LEFT COLUMN: Primary Recruiter Value & CTAs -->
        <div class="space-y-8">
          <div class="flex items-center gap-3">
            <span class="font-sans text-[11px] font-extrabold uppercase tracking-widest bg-lime text-ink px-3 py-1 rounded-sm">
              GET IN TOUCH
            </span>
            <span class="text-[12px] font-bold text-paper/60 uppercase tracking-wider hidden sm:inline-block">
              RECRUITER &amp; TEAM DIRECT CONTACT
            </span>
          </div>

          <!-- Headline -->
          <h1 class="text-[clamp(38px,5.5vw,80px)] leading-[1.04] tracking-[-0.035em] m-0 font-extrabold text-paper">
            Let’s build products <br />
            <span class="font-serif italic font-normal text-lime">that solve real problems.</span>
          </h1>

          <!-- Value Proposition Paragraph -->
          <p class="text-[18px] md:text-[21px] leading-[1.55] tracking-[-0.015em] max-w-[640px] text-paper/90 font-medium m-0">
            I design complex digital products and turn ideas into production-ready experiences by combining UX thinking with engineering knowledge.
          </p>

          <!-- Roles Availability Pills -->
          <div class="space-y-3 pt-2">
            <span class="text-[11px] font-extrabold uppercase tracking-wider text-paper/50 block">
              AVAILABLE FOR
            </span>
            <div class="flex flex-wrap gap-2">
              <span class="px-3.5 py-1.5 border border-paper/30 bg-paper/5 rounded-full text-[13px] font-bold text-paper">
                Product Designer Roles
              </span>
              <span class="px-3.5 py-1.5 border border-paper/30 bg-paper/5 rounded-full text-[13px] font-bold text-paper">
                UI/UX Designer Roles
              </span>
              <span class="px-3.5 py-1.5 border border-paper/30 bg-paper/5 rounded-full text-[13px] font-bold text-paper">
                Frontend / UI Engineer Roles
              </span>
            </div>
          </div>

          <!-- Primary & Secondary Action Block -->
          <div class="pt-4 space-y-6">
            <!-- Email (Secondary CTA) -->
            <div>
              <span class="text-[11px] font-extrabold uppercase tracking-wider text-paper/50 block mb-2">
                DIRECT EMAIL
              </span>
              <a
                href="mailto:marwanelgammal0@gmail.com"
                class="text-[clamp(20px,3.2vw,36px)] font-extrabold tracking-[-0.03em] border-b-2 border-lime pb-1 inline-flex items-center gap-3 text-paper hover:text-lime hover:border-paper transition-all"
              >
                <span class="break-all">marwanelgammal0@gmail.com</span>
                <span class="text-[0.7em] text-lime">↗</span>
              </a>
            </div>

            <!-- Download CV (Primary CTA) -->
            <div class="pt-2">
              <a
                href="/Marwan-Ashraf-Product-Designer-CV.pdf"
                download="Marwan-Ashraf-Product-Designer-CV.pdf"
                class="inline-flex items-center gap-2 px-8 py-4 bg-lime text-ink rounded-full font-extrabold text-[14px] hover:bg-lime/90 transition-colors shadow-lg"
              >
                Download CV / Résumé ↗
              </a>
            </div>
          </div>
        </div>

        <!-- RIGHT COLUMN: Compact Professional Summary -->
        <div class="lg:border-l lg:border-paper/20 lg:pl-12 space-y-8 font-sans text-paper/90">
          
          <!-- Section 1: Roles -->
          <div class="space-y-2">
            <span class="block text-paper/40 text-[11px] uppercase font-extrabold tracking-widest">
              CURRENTLY AVAILABLE FOR
            </span>
            <ul class="space-y-1.5 font-bold text-[15px] text-paper list-none p-0 m-0">
              <li class="flex items-center gap-2">
                <span class="w-1.5 h-1.5 rounded-full bg-lime"></span>
                Product Design
              </li>
              <li class="flex items-center gap-2">
                <span class="w-1.5 h-1.5 rounded-full bg-lime"></span>
                UI/UX Design
              </li>
              <li class="flex items-center gap-2">
                <span class="w-1.5 h-1.5 rounded-full bg-lime"></span>
                Frontend Development
              </li>
            </ul>
          </div>

          <!-- Section 2: Location -->
          <div class="space-y-1.5">
            <span class="block text-paper/40 text-[11px] uppercase font-extrabold tracking-widest">
              BASED IN
            </span>
            <p class="font-extrabold text-[15px] text-paper m-0">
              Egypt
            </p>
            <p class="text-[13px] text-paper/70 font-medium m-0">
              Open to relocation &amp; remote opportunities worldwide.
            </p>
          </div>

          <!-- Section 3: Response Expectation -->
          <div class="space-y-1">
            <span class="block text-paper/40 text-[11px] uppercase font-extrabold tracking-widest">
              RESPONSE TIME
            </span>
            <p class="font-bold text-[14px] text-paper/90 m-0">
              Within 24 hours via email or LinkedIn.
            </p>
          </div>

          <!-- Section 4: Connect Links -->
          <div class="space-y-2 pt-2 border-t border-paper/15">
            <span class="block text-paper/40 text-[11px] uppercase font-extrabold tracking-widest">
              CONNECT
            </span>
            <div class="flex items-center gap-6 font-bold text-[14px] text-paper">
              <a
                href="https://www.linkedin.com/in/marwan-ashraf-ibrahim/"
                target="_blank"
                rel="noopener"
                class="hover:text-lime hover:underline inline-flex items-center gap-1"
              >
                LinkedIn ↗
              </a>
              <a
                href="mailto:marwanelgammal0@gmail.com"
                class="hover:text-lime hover:underline inline-flex items-center gap-1"
              >
                Email ↗
              </a>
            </div>
          </div>

        </div>

      </div>
    </div>
  </main>
</template>
