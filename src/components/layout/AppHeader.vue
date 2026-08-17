<script setup>
import { ref } from "vue";
import { RouterLink } from "vue-router";
import MobileMenu from "./MobileMenu.vue";

const menuOpen = ref(false);

function toggleMenu() {
  menuOpen.value = !menuOpen.value;
}

function closeMenu() {
  menuOpen.value = false;
}
</script>

<template>
  <header
    class="h-[82px] max-md:h-[63px] flex items-center justify-between px-5 md:px-[4vw] lg:px-[62px] border-b border-line relative z-20 bg-paper font-sans"
  >
    <RouterLink
      to="/"
      class="text-[22px] tracking-[-0.03em] font-extrabold text-ink focus-visible:ring-2 focus-visible:ring-ink focus-visible:outline-none"
      aria-label="Marwan Ashraf Home Page"
      @click="closeMenu"
    >
      ME<span class="text-[#f34e37] text-[16px] align-top">°</span>
    </RouterLink>

    <!-- Desktop Primary Navigation -->
    <nav class="hidden md:flex items-center gap-8 text-[13px] font-bold text-ink" aria-label="Main Navigation">
      <RouterLink
        to="/projects"
        class="hover:underline underline-offset-4 [&.router-link-active]:underline"
      >
        Work
      </RouterLink>
      <RouterLink
        to="/about"
        class="hover:underline underline-offset-4 [&.router-link-active]:underline"
      >
        About
      </RouterLink>
      <RouterLink
        to="/contact"
        class="hover:underline underline-offset-4 [&.router-link-active]:underline"
      >
        Contact
      </RouterLink>
      <a
        href="/Marwan-Ashraf-Product-Designer-CV.pdf"
        download="Marwan-Ashraf-Product-Designer-CV.pdf"
        class="px-3.5 py-1.5 border border-ink rounded-full font-bold hover:bg-ink hover:text-paper transition-colors"
      >
        Download CV ↗
      </a>
    </nav>

    <!-- Mobile Drawer Navigation Component -->
    <MobileMenu :is-open="menuOpen" @close="closeMenu" />

    <div class="flex items-center gap-3">
      <a
        class="px-[14px] py-[9px] border border-ink rounded-full font-sans text-[12px] font-semibold max-md:hidden inline-flex items-center gap-2 text-ink hover:bg-ink hover:text-paper transition-colors"
        href="mailto:marwanelgammal0@gmail.com"
      >
        <font-awesome-icon icon="fa-solid fa-circle" class="text-[#4fbf5d] text-[7px]" />
        Available for work
      </a>

      <!-- Mobile Menu Toggle Button -->
      <button
        class="hidden max-md:inline-flex min-w-[44px] min-h-[44px] items-center justify-center bg-transparent border-0 text-[20px] cursor-pointer text-ink"
        :aria-expanded="menuOpen"
        :aria-label="menuOpen ? 'Close navigation menu' : 'Open navigation menu'"
        @click="toggleMenu"
      >
        <font-awesome-icon :icon="menuOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-plus'" />
      </button>
    </div>
  </header>
</template>

