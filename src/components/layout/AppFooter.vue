<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <footer
    class="px-5 md:px-[7vw] py-8 border-t border-ink bg-paper font-sans text-ink"
  >
    <div class="flex max-md:flex-col justify-between items-start md:items-center gap-6 mb-6">
      <div>
        <p class="font-extrabold text-[16px] tracking-[-0.02em] m-0">Marwan Ashraf</p>
        <p class="text-[13px] text-ink/75 font-medium m-0 mt-0.5">
          Product Designer &amp; UI/UX Developer · Engineering &amp; ITI Background
        </p>
      </div>

      <div class="flex flex-wrap items-center gap-6 text-[13px] font-bold">
        <a
          href="mailto:marwanelgammal0@gmail.com"
          class="hover:underline inline-flex items-center gap-1.5"
        >
          <font-awesome-icon icon="fa-solid fa-envelope" class="text-[12px]" />
          Email
        </a>
        <a
          href="https://www.linkedin.com/in/marwan-ashraf-ibrahim/"
          target="_blank"
          rel="noopener"
          class="hover:underline inline-flex items-center gap-1.5"
        >
          <font-awesome-icon icon="fa-brands fa-linkedin" class="text-[13px]" />
          LinkedIn ↗
        </a>
        <a
          href="https://github.com/marwann022"
          target="_blank"
          rel="noopener"
          class="hover:underline inline-flex items-center gap-1.5"
        >
          <font-awesome-icon icon="fa-brands fa-github" class="text-[13px]" />
          GitHub ↗
        </a>
        <a
          href="/Marwan-Ashraf-Product-Designer-CV.pdf"
          download="Marwan-Ashraf-Product-Designer-CV.pdf"
          class="hover:underline inline-flex items-center gap-1.5 text-ink font-extrabold"
        >
          Download CV ↗
        </a>
      </div>
    </div>

    <div class="pt-4 border-t border-line flex max-md:flex-col justify-between items-start md:items-center gap-2 text-[11px] font-semibold text-ink/60">
      <span>© 2026 Marwan Ashraf. All rights reserved.</span>
      <span>Designed &amp; Developed with Vue 3, Vite &amp; TailwindCSS</span>
    </div>
  </footer>
</template>

