<script setup>
import { ref, computed } from "vue";
import { RouterLink, useRoute } from "vue-router";
import MobileMenu from "./MobileMenu.vue";

const route = useRoute();
const menuOpen = ref(false);

function toggleMenu() {
  menuOpen.value = !menuOpen.value;
}

function closeMenu() {
  menuOpen.value = false;
}

// Route-driven active states
const isHomeActive = computed(() => route.path === "/");
const isWorkActive = computed(() => route.path === "/projects" || route.path === "/work" || route.path.startsWith("/projects/"));
const isAboutActive = computed(() => route.path === "/about");
const isContactActive = computed(() => route.path === "/contact");
</script>

<template>
  <header
    class="h-[82px] max-md:h-[63px] flex items-center justify-between px-5 md:px-[4vw] lg:px-[62px] border-b border-line relative z-20 bg-paper font-sans"
  >
    <RouterLink
      to="/"
      class="text-[22px] tracking-[-0.03em] font-extrabold text-ink focus-visible:ring-2 focus-visible:ring-ink focus-visible:outline-none rounded"
      aria-label="Go to homepage"
      @click="closeMenu"
    >
      ME<span class="text-[#f34e37] text-[16px] align-top">°</span>
    </RouterLink>

    <!-- Desktop Primary Navigation -->
    <nav class="hidden md:flex items-center gap-8 text-[13px] font-bold text-ink" aria-label="Main Navigation">
      <RouterLink
        to="/"
        :class="[
          'hover:underline underline-offset-4 transition-all',
          isHomeActive ? 'underline font-extrabold decoration-2' : ''
        ]"
      >
        Home
      </RouterLink>

      <RouterLink
        to="/projects"
        :class="[
          'hover:underline underline-offset-4 transition-all',
          isWorkActive ? 'underline font-extrabold decoration-2' : ''
        ]"
      >
        Work
      </RouterLink>

      <RouterLink
        to="/about"
        :class="[
          'hover:underline underline-offset-4 transition-all',
          isAboutActive ? 'underline font-extrabold decoration-2' : ''
        ]"
      >
        About
      </RouterLink>

      <RouterLink
        to="/contact"
        :class="[
          'hover:underline underline-offset-4 transition-all',
          isContactActive ? 'underline font-extrabold decoration-2' : ''
        ]"
      >
        Contact
      </RouterLink>

      <a
        href="/Marwan-Ashraf-Product-Designer-CV.pdf"
        download="Marwan-Ashraf-Product-Designer-CV.pdf"
        class="px-3.5 py-1.5 border border-ink rounded-full font-bold hover:bg-ink hover:text-paper transition-colors focus-visible:ring-2 focus-visible:ring-ink"
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
        class="hidden max-md:inline-flex min-w-[44px] min-h-[44px] items-center justify-center bg-transparent border-0 text-[20px] cursor-pointer text-ink focus-visible:ring-2 focus-visible:ring-ink rounded"
        :aria-expanded="menuOpen"
        aria-controls="mobile-navigation-menu"
        :aria-label="menuOpen ? 'Close navigation menu' : 'Open navigation menu'"
        @click="toggleMenu"
      >
        <font-awesome-icon :icon="menuOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-plus'" />
      </button>
    </div>
  </header>
</template>


