<script setup>
</script>

<template>
  <main class="contact-page min-h-[calc(100vh-82px)] p-5 md:p-[60px_7vw] flex flex-col justify-between bg-[#181715] font-sans text-paper" id="contact">
    <!-- Main Content Grid (Two-column on Desktop: 58% Left / 42% Right) -->
    <div class="my-auto py-8 md:py-12 grid grid-cols-1 lg:grid-cols-[58%_42%] gap-10 lg:gap-16 items-center">
      <!-- Left Column: Primary Communication -->
      <div class="space-y-6">
        <p class="font-sans font-bold text-[12px] tracking-[0.05em] uppercase m-0 text-paper/60">
          DIRECT RECRUITER &amp; TEAM CONTACT
        </p>

        <h1 class="text-[clamp(38px,5.8vw,86px)] leading-[1.04] tracking-[-0.035em] m-0 font-extrabold text-paper">
          Have a product<br />worth <span class="font-serif italic font-normal text-paper/90">shaping?</span>
        </h1>

        <p class="text-[16px] md:text-[18px] leading-[1.55] tracking-[-0.01em] max-w-[540px] text-paper/80 font-medium m-0">
          Open for product design roles, design systems architecture, and front-end UI engineering opportunities.
        </p>

        <div class="pt-2 space-y-6">
          <div>
            <a
              href="mailto:marwanelgammal0@gmail.com"
              class="text-[clamp(18px,3vw,36px)] font-extrabold tracking-[-0.03em] border-b-2 border-paper/70 pb-1 inline-flex items-center gap-3 text-paper hover:border-paper hover:opacity-90 focus-visible:ring-2 focus-visible:ring-paper transition-all"
            >
              <span class="break-all">marwanelgammal0@gmail.com</span>
              <font-awesome-icon icon="fa-solid fa-arrow-up-right-from-square" class="text-[0.6em]" />
            </a>
          </div>

          <div>
            <a
              href="/Marwan-Ashraf-Product-Designer-CV.pdf"
              download="Marwan-Ashraf-Product-Designer-CV.pdf"
              class="inline-flex items-center gap-2 px-6 py-3.5 bg-paper text-ink rounded-full font-bold text-[13px] hover:bg-paper/90 transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-paper"
            >
              Download CV / Résumé PDF ↗
            </a>
          </div>
        </div>
      </div>

      <!-- Right Column: Restrained Editorial Metadata -->
      <div class="lg:border-l lg:border-paper/15 lg:pl-12 space-y-7 font-sans">
        <div>
          <span class="block text-paper/40 text-[11px] uppercase mb-2 font-extrabold tracking-widest">
            CURRENTLY OPEN TO
          </span>
          <ul class="space-y-1 font-bold text-[14px] text-paper/90 list-none p-0 m-0">
            <li>Product Design</li>
            <li>UI/UX Design</li>
            <li>Product-focused Frontend / UI Engineering</li>
          </ul>
        </div>

        <div>
          <span class="block text-paper/40 text-[11px] uppercase mb-1.5 font-extrabold tracking-widest">
            LOCATION
          </span>
          <p class="font-bold text-[14px] text-paper/90 m-0">
            Egypt · Open to relocate / remote worldwide
          </p>
        </div>

        <div>
          <span class="block text-paper/40 text-[11px] uppercase mb-1.5 font-extrabold tracking-widest">
            RESPONSE TIME
          </span>
          <p class="font-bold text-[14px] text-paper/90 m-0">
            Usually available within 24 hours via email or LinkedIn
          </p>
        </div>

        <div>
          <span class="block text-paper/40 text-[11px] uppercase mb-1.5 font-extrabold tracking-widest">
            CONNECT
          </span>
          <div class="flex items-center gap-5 font-bold text-[13px] text-paper">
            <a
              href="https://www.linkedin.com/in/marwan-ashraf-ibrahim/"
              target="_blank"
              rel="noopener"
              class="hover:underline flex items-center gap-1"
            >
              LinkedIn ↗
            </a>
            <a
              href="https://github.com/marwann022"
              target="_blank"
              rel="noopener"
              class="hover:underline flex items-center gap-1"
            >
              GitHub ↗
            </a>
          </div>
        </div>
      </div>
    </div>

    <!-- Contact & Secondary Action Footer Bar -->
    <div class="pt-6 border-t border-paper/20 grid grid-cols-1 md:grid-cols-3 gap-6 font-sans text-[13px] font-bold text-paper">
      <div>
        <span class="block text-paper/50 text-[11px] uppercase mb-1 font-extrabold tracking-wider">Direct Phone</span>
        <a
          href="tel:+201016906441"
          class="inline-flex items-center gap-2 text-paper hover:underline focus-visible:ring-1 focus-visible:ring-paper"
        >
          <font-awesome-icon icon="fa-solid fa-phone" class="text-[12px]" />
          +20 101 690 6441
        </a>
      </div>

      <div>
        <span class="block text-paper/50 text-[11px] uppercase mb-1 font-extrabold tracking-wider">Professional Profiles</span>
        <div class="flex items-center gap-5">
          <a
            href="https://www.linkedin.com/in/marwan-ashraf-ibrahim/"
            target="_blank"
            rel="noopener"
            class="inline-flex items-center gap-1.5 text-paper hover:underline focus-visible:ring-1 focus-visible:ring-paper"
          >
            <font-awesome-icon icon="fa-brands fa-linkedin" class="text-[14px]" />
            LinkedIn ↗
          </a>
          <a
            href="https://github.com/marwann022"
            target="_blank"
            rel="noopener"
            class="inline-flex items-center gap-1.5 text-paper hover:underline focus-visible:ring-1 focus-visible:ring-paper"
          >
            <font-awesome-icon icon="fa-brands fa-github" class="text-[14px]" />
            GitHub ↗
          </a>
        </div>
      </div>

      <div>
        <span class="block text-paper/50 text-[11px] uppercase mb-1 font-extrabold tracking-wider">Curriculum Vitae</span>
        <a
          href="/Marwan-Ashraf-Product-Designer-CV.pdf"
          download="Marwan-Ashraf-Product-Designer-CV.pdf"
          class="inline-flex items-center gap-1.5 text-paper font-extrabold hover:underline focus-visible:ring-1 focus-visible:ring-paper"
        >
          <font-awesome-icon icon="fa-solid fa-envelope" class="text-[12px]" />
          Download PDF Résumé ↗
        </a>
      </div>
    </div>
  </main>
</template>



