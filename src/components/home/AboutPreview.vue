<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <section class="py-16 md:py-24 px-5 md:px-[7vw] lg:px-[105px] grid grid-cols-1 md:grid-cols-[44%_1fr] gap-8 md:gap-[8%] items-start border-t border-line font-sans">
    <!-- Editorial Proof Card (Replaces draft placeholder) -->
    <div class="border border-ink p-6 md:p-8 bg-paper flex flex-col justify-between min-h-[360px] md:min-h-[440px] font-sans">
      <div class="flex items-center justify-between border-b border-ink pb-4">
        <span class="text-[11px] font-extrabold uppercase tracking-wider text-ink/70">CANDIDATE SUMMARY</span>
        <span class="bg-ink text-paper text-[11px] font-bold px-2.5 py-0.5 rounded-sm">2026 PROFILE</span>
      </div>

      <div class="my-6 space-y-4">
        <div>
          <span class="text-[11px] font-extrabold uppercase tracking-wider text-ink/50 block">BACKGROUND</span>
          <p class="text-[15px] font-extrabold text-ink m-0">B.Sc. Computer &amp; Control Engineering</p>
          <p class="text-[13px] text-ink/75 font-medium m-0">Suez Canal University · Very Good</p>
        </div>

        <div class="pt-3 border-t border-line">
          <span class="text-[11px] font-extrabold uppercase tracking-wider text-ink/50 block">SPECIALIZED TRAINING</span>
          <p class="text-[15px] font-extrabold text-ink m-0">ITI 6-Month Intensive UI/UX Development</p>
          <p class="text-[13px] text-ink/75 font-medium m-0">UX Research, System Design, Vue 3, Node &amp; REST APIs</p>
        </div>

        <div class="pt-3 border-t border-line">
          <span class="text-[11px] font-extrabold uppercase tracking-wider text-ink/50 block">FLAGSHIP EXPERIENCE</span>
          <p class="text-[15px] font-extrabold text-ink m-0">GolderaPharm CRM &amp; SmartMeet SaaS</p>
          <p class="text-[13px] text-ink/75 font-medium m-0">Role-based systems, design libraries &amp; responsive UI</p>
        </div>
      </div>

      <div class="pt-4 border-t border-ink flex items-center justify-between text-[12px] font-bold text-ink">
        <span>Available for relocation</span>
        <span class="text-[#4fbf5d] font-extrabold">● Active</span>
      </div>
    </div>

    <!-- Right Copy & Primary Recruiter CTAs -->
    <div>
      <p class="font-sans font-bold text-[12px] tracking-[0.05em] uppercase m-0 text-ink/70">(04) MULTIDISCIPLINARY ADVANTAGE</p>
      <h2 class="text-[clamp(32px,4.5vw,60px)] tracking-[-0.035em] leading-[1.05] my-6 font-extrabold text-ink">
        Systems thinker.<br /><span class="font-serif italic font-normal text-ink/85">Frontend execution.</span>
      </h2>
      <p class="text-[16px] md:text-[18px] leading-[1.55] tracking-[-0.01em] max-w-[480px] text-ink/85 font-medium m-0 mb-8">
        My engineering background brings algorithmic logic and component scalability, while UI/UX training ensures every interaction is user-validated, accessible, and ready for production.
      </p>

      <div class="flex flex-wrap items-center gap-4">
        <RouterLink
          to="/about"
          class="px-6 py-3 bg-ink text-paper rounded-full font-bold text-[13px] hover:bg-ink/85 transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-ink"
        >
          Read full background ↗
        </RouterLink>
        <a
          href="/Marwan-Ashraf-Product-Designer-CV.pdf"
          download="Marwan-Ashraf-Product-Designer-CV.pdf"
          class="px-5 py-3 border border-ink text-ink rounded-full font-bold text-[13px] hover:bg-ink hover:text-paper transition-colors"
        >
          Download CV ↗
        </a>
      </div>
    </div>
  </section>
</template>

