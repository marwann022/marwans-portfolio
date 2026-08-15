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
    class="h-[82px] max-md:h-[63px] flex items-center justify-between px-5 md:px-[4vw] lg:px-[62px] border-b border-line relative z-10 bg-paper font-sans"
  >
    <RouterLink
      to="/"
      class="text-[22px] tracking-[-0.03em] font-extrabold text-ink"
      @click="closeMenu"
    >
      ME<span class="text-[#f34e37] text-[16px] align-top">°</span>
    </RouterLink>

    <MobileMenu :is-open="menuOpen" @close="closeMenu" />

    <button
      class="hidden max-md:block bg-transparent border-0 text-[20px] cursor-pointer text-ink"
      :aria-label="menuOpen ? 'Close navigation menu' : 'Open navigation menu'"
      @click="toggleMenu"
    >
      <font-awesome-icon :icon="menuOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-plus'" />
    </button>

    <a
      class="px-[14px] py-[9px] border border-ink rounded-full font-sans text-[12px] font-semibold max-md:hidden inline-flex items-center gap-2 text-ink hover:bg-ink hover:text-paper transition-colors"
      href="mailto:marwanelgammal0@gmail.com"
    >
      <font-awesome-icon icon="fa-solid fa-circle" class="text-[#4fbf5d] text-[7px]" />
      Available for work
    </a>
  </header>
</template>
