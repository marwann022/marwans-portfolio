<script setup>
</script>

<template>
  <main class="contact-page min-h-[calc(100vh-82px)] p-5 md:p-[80px_7vw] flex flex-col justify-between bg-[#181715] font-sans text-paper" id="contact">
    <div>
      <p class="font-sans font-bold text-[12px] tracking-[0.05em] uppercase m-0 text-paper/60">
        DIRECT RECRUITER &amp; TEAM CONTACT
      </p>

      <h1 class="text-[clamp(40px,6.5vw,92px)] leading-[1.04] tracking-[-0.035em] my-6 md:my-8 font-extrabold text-paper">
        Have a product<br />worth <span class="font-serif italic font-normal text-paper/90">shaping?</span>
      </h1>

      <p class="text-[17px] md:text-[19px] leading-[1.55] tracking-[-0.01em] max-w-[580px] text-paper/80 font-medium mb-8">
        Open for product design roles, design systems architecture, and front-end UI engineering opportunities.
      </p>

      <div class="space-y-6">
        <a
          href="mailto:marwanelgammal0@gmail.com"
          class="text-[clamp(18px,3.2vw,40px)] font-extrabold tracking-[-0.03em] border-b-2 border-paper/70 pb-1.5 inline-flex items-center gap-3 text-paper hover:border-paper hover:opacity-90 focus-visible:ring-2 focus-visible:ring-paper transition-all"
        >
          <span class="break-all">marwanelgammal0@gmail.com</span>
          <font-awesome-icon icon="fa-solid fa-arrow-up-right-from-square" class="text-[0.6em]" />
        </a>

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

    <!-- Contact & Secondary Action Footer Bar -->
    <div class="mt-16 md:mt-24 pt-8 border-t border-paper/20 grid grid-cols-1 md:grid-cols-3 gap-6 font-sans text-[13px] font-bold text-paper">
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


