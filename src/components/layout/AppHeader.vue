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

// Route-driven active states (Work remains active for case study routes)
const isHomeActive = computed(() => route.path === "/");
const isWorkActive = computed(() => route.path === "/projects" || route.path === "/work" || route.path.startsWith("/projects/"));
const isContactActive = computed(() => route.path === "/contact");
</script>

<template>
  <header
    class="h-[82px] max-md:h-[63px] flex items-center justify-between px-5 md:px-[4vw] lg:px-[62px] border-b border-line relative z-20 bg-paper font-sans"
  >
    <!-- Logo -->
    <RouterLink
      to="/"
      class="text-[22px] tracking-[-0.03em] font-extrabold text-ink focus-visible:ring-2 focus-visible:ring-ink focus-visible:outline-none rounded"
      aria-label="Go to homepage"
      @click="closeMenu"
    >
      ME<span class="text-[#0d244a] font-serif text-[16px] align-top">°</span>
    </RouterLink>

    <!-- Desktop Primary Navigation with Shared Active Line -->
    <nav class="hidden md:flex items-center gap-6 text-[13px] font-extrabold text-ink relative py-1" aria-label="Main Navigation">
      <RouterLink
        to="/"
        :class="[
          'px-2.5 py-1 transition-all relative',
          isHomeActive ? 'text-ink font-black' : 'text-ink/65 hover:text-ink'
        ]"
      >
        <span>Home</span>
        <span v-if="isHomeActive" class="absolute bottom-0 left-2.5 right-2.5 h-[2.5px] bg-[#0d244a] rounded-full transition-all"></span>
      </RouterLink>

      <RouterLink
        to="/projects"
        :class="[
          'px-2.5 py-1 transition-all relative',
          isWorkActive ? 'text-ink font-black' : 'text-ink/65 hover:text-ink'
        ]"
      >
        <span>Work</span>
        <span v-if="isWorkActive" class="absolute bottom-0 left-2.5 right-2.5 h-[2.5px] bg-[#0d244a] rounded-full transition-all"></span>
      </RouterLink>

      <RouterLink
        to="/contact"
        :class="[
          'px-2.5 py-1 transition-all relative',
          isContactActive ? 'text-ink font-black' : 'text-ink/65 hover:text-ink'
        ]"
      >
        <span>Contact</span>
        <span v-if="isContactActive" class="absolute bottom-0 left-2.5 right-2.5 h-[2.5px] bg-[#0d244a] rounded-full transition-all"></span>
      </RouterLink>

      <a
        href="/Marwan-Ashraf-uiux%20design-CV.pdf"
        download="Marwan-Ashraf-uiux design-CV.pdf"
        class="ml-2 px-4 py-1.5 border border-ink rounded-full font-bold text-[12px] text-ink hover:bg-ink hover:text-paper transition-colors focus-visible:ring-2 focus-visible:ring-ink"
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
        <font-awesome-icon icon="fa-solid fa-circle" class="text-[#2dc732] text-[7px]" />
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
