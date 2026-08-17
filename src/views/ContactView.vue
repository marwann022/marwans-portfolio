<script setup>
import { ref } from "vue";

const copied = ref(false);

function copyEmail() {
  navigator.clipboard.writeText("marwanelgammal0@gmail.com");
  copied.value = true;
  setTimeout(() => {
    copied.value = false;
  }, 2500);
}
</script>

<template>
  <main
    class="contact-page min-h-[calc(100vh-82px)] bg-paper font-sans text-ink flex flex-col justify-between"
    id="contact"
  >
    <!-- Top Main Composition Section (Asymmetrical: Left 65% / Right 35%) -->
    <section class="py-12 md:py-20 px-5 md:px-[7vw] max-w-[1240px] mx-auto w-full flex-grow flex items-center">
      <div class="w-full grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-12 lg:gap-16 items-stretch">
        
        <!-- LEFT COLUMN (~65%): Direct Statement, Giant Hero Email, CV Action -->
        <div class="flex flex-col justify-between space-y-10 py-2">
          
          <div class="space-y-6">
            <!-- Status Indicator -->
            <div class="flex items-center gap-2.5">
              <span class="w-2.5 h-2.5 rounded-full bg-[#2dc732]"></span>
              <span class="font-mono text-[12px] font-bold text-ink/70 uppercase tracking-widest">
                AVAILABLE FOR SELECT OPPORTUNITIES
              </span>
            </div>

            <!-- Direct Title (Distinct hierarchy: Bold sans + clean serif subtitle) -->
            <div>
              <h1 class="text-[clamp(42px,6vw,78px)] leading-[1.02] tracking-[-0.04em] font-extrabold text-ink m-0">
                Let’s talk.
              </h1>
              <p class="text-[20px] md:text-[24px] font-serif italic text-ink/75 mt-2 m-0">
                about products, systems, and new ideas.
              </p>
            </div>

            <!-- Conversation Lead-in -->
            <p class="text-[17px] md:text-[19px] leading-[1.55] max-w-[580px] text-ink/80 font-medium m-0">
              Have a project, open product role, or design system problem worth discussing? The fastest way to reach me is directly via email or LinkedIn.
            </p>
          </div>

          <!-- The Visual Hero Element: Large Direct Email Component -->
          <div class="pt-4 space-y-4">
            <span class="font-mono text-[11px] font-extrabold uppercase tracking-widest text-ink/50 block">
              PRIMARY INBOX
            </span>
            
            <a
              href="mailto:marwanelgammal0@gmail.com"
              class="group relative inline-block text-[clamp(22px,3.5vw,40px)] font-extrabold tracking-[-0.035em] text-ink border-b-2 border-ink pb-1 transition-colors hover:text-[#0d244a]"
            >
              <span class="break-all">marwanelgammal0@gmail.com</span>
              <span class="inline-block ml-2 text-[0.7em] transition-transform duration-300 group-hover:translate-x-1.5 group-hover:-translate-y-1">↗</span>
            </a>

            <div class="pt-4 flex flex-wrap items-center gap-4">
              <a
                href="/Marwan-Ashraf-uiux%20design-CV.pdf"
                download="Marwan-Ashraf-uiux design-CV.pdf"
                class="px-7 py-3.5 bg-ink text-paper rounded-full font-extrabold text-[13px] hover:bg-ink/85 active:scale-[0.98] transition-all inline-flex items-center gap-2 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-ink"
              >
                Download Résumé / CV ↗
              </a>
              
              <a
                href="https://www.linkedin.com/in/marwan-ashraf-ibrahim/"
                target="_blank"
                rel="noopener"
                class="px-6 py-3.5 border border-ink text-ink rounded-full font-bold text-[13px] hover:bg-ink hover:text-paper transition-all inline-flex items-center gap-2"
              >
                LinkedIn Profile ↗
              </a>
            </div>
          </div>

        </div>

        <!-- RIGHT COLUMN (~35%): Restrained Tinted Panel with Typography List -->
        <div class="bg-paper border border-ink p-8 md:p-10 rounded-md flex flex-col justify-between space-y-8">
          
          <!-- Specializations (Clean Typography, NO pills) -->
          <div class="space-y-4">
            <span class="font-mono text-[11px] font-extrabold uppercase tracking-widest text-ink/50 block border-b border-ink/20 pb-2">
              TARGET ROLES &amp; SCOPE
            </span>
            <ul class="space-y-3 font-sans text-[15px] font-extrabold text-ink list-none p-0 m-0">
              <li class="flex items-center gap-3">
                <span class="w-1.5 h-1.5 bg-ink rounded-full"></span>
                <span>Product Design (SaaS &amp; Web)</span>
              </li>
              <li class="flex items-center gap-3">
                <span class="w-1.5 h-1.5 bg-ink rounded-full"></span>
                <span>UI/UX &amp; Interaction Systems</span>
              </li>
              <li class="flex items-center gap-3">
                <span class="w-1.5 h-1.5 bg-ink rounded-full"></span>
                <span>Frontend UI (Vue 3 / Tailwind)</span>
              </li>
            </ul>
          </div>

          <!-- Location & Relocation -->
          <div class="space-y-2 border-t border-ink/20 pt-6">
            <span class="font-mono text-[11px] font-extrabold uppercase tracking-widest text-ink/50 block">
              LOCATION &amp; AVAILABILITY
            </span>
            <p class="text-[15px] font-extrabold text-ink m-0">
              Based in Egypt
            </p>
            <p class="text-[13px] text-ink/75 font-medium m-0">
              Open to relocation &amp; full-time remote opportunities worldwide.
            </p>
          </div>

          <!-- Response Expectation -->
          <div class="space-y-2 border-t border-ink/20 pt-6">
            <span class="font-mono text-[11px] font-extrabold uppercase tracking-widest text-ink/50 block">
              RESPONSE TIME
            </span>
            <p class="text-[13px] text-ink/80 font-bold m-0">
              Usually respond within 24 hours on business days.
            </p>
          </div>

          <!-- Social Links -->
          <div class="border-t border-ink/20 pt-6 flex items-center gap-5 text-[13px] font-extrabold">
            <a
              href="https://www.linkedin.com/in/marwan-ashraf-ibrahim/"
              target="_blank"
              rel="noopener"
              class="text-ink hover:underline"
            >
              LinkedIn ↗
            </a>
            <a
              href="https://github.com/marwann022"
              target="_blank"
              rel="noopener"
              class="text-ink hover:underline"
            >
              GitHub ↗
            </a>
          </div>

        </div>

      </div>
    </section>

    <!-- Bottom Deep Ink Conversion Band -->
    <section class="bg-ink text-paper py-8 px-5 md:px-[7vw] border-t border-ink font-sans">
      <div class="max-w-[1240px] mx-auto flex max-md:flex-col items-start md:items-center justify-between gap-6">
        <div>
          <span class="font-mono text-[11px] uppercase tracking-widest text-paper/50 block mb-1">
            DIRECT INQUIRIES
          </span>
          <p class="text-[16px] md:text-[18px] font-bold text-paper m-0">
            Prefer traditional email attachments or direct outreach? Feel free to reach out anytime.
          </p>
        </div>

        <div class="flex items-center gap-4">
          <button
            @click="copyEmail"
            type="button"
            class="px-6 py-3 bg-paper text-ink rounded-full font-extrabold text-[13px] hover:bg-paper/90 transition-colors cursor-pointer"
          >
            {{ copied ? 'Copied to Clipboard! ✓' : 'Copy Email Address' }}
          </button>
        </div>
      </div>
    </section>
  </main>
</template>
