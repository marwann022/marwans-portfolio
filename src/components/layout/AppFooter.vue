<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <footer
    class="px-5 md:px-[7vw] py-8 border-t border-ink bg-paper font-sans text-ink"
  >
    <div class="max-w-[1240px] mx-auto w-full">
      <div class="flex max-md:flex-col justify-between items-start md:items-center gap-6 mb-6">
        <div>
          <p class="font-extrabold text-[16px] tracking-[-0.02em] m-0 text-ink">Marwan Ashraf</p>
          <p class="text-[13px] text-ink/75 font-medium m-0 mt-0.5">
            Product Designer &amp; UI/UX Developer
          </p>
        </div>

        <nav class="flex flex-wrap items-center gap-6 text-[13px] font-bold" aria-label="Footer Navigation">
          <a
            href="mailto:marwanelgammal0@gmail.com"
            class="hover:underline text-ink"
          >
            Email
          </a>
          <a
            href="https://www.linkedin.com/in/marwan-ashraf-ibrahim/"
            target="_blank"
            rel="noopener"
            class="hover:underline text-ink"
          >
            LinkedIn ↗
          </a>
          <a
            href="https://github.com/marwann022"
            target="_blank"
            rel="noopener"
            class="hover:underline text-ink"
          >
            GitHub ↗
          </a>
          <a
            href="/Marwan-Ashraf-Product-Designer-CV.pdf"
            download="Marwan-Ashraf-Product-Designer-CV.pdf"
            class="hover:underline text-ink font-extrabold"
          >
            CV ↗
          </a>
        </nav>
      </div>

      <div class="pt-4 border-t border-line flex max-md:flex-col justify-between items-start md:items-center gap-2 text-[11px] font-semibold text-ink/60">
        <span>© 2026 Marwan Ashraf. All rights reserved.</span>
        <span>Designed &amp; Developed with Vue 3, Vite &amp; TailwindCSS</span>
      </div>
    </div>
  </footer>
</template>
