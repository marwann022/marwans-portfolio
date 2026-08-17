<script setup>
import { computed, watch, onUnmounted } from "vue";
import { RouterLink, useRoute } from "vue-router";

const props = defineProps({
  isOpen: {
    type: Boolean,
    default: false
  }
});

const emit = defineEmits(["close"]);
const route = useRoute();

function handleNavClick() {
  emit("close");
}

function handleKeyDown(event) {
  if (event.key === "Escape" && props.isOpen) {
    emit("close");
  }
}

// Active Route Logic (matches desktop)
const isHomeActive = computed(() => route.path === "/");
const isWorkActive = computed(() => route.path === "/projects" || route.path === "/work" || route.path.startsWith("/projects/"));
const isAboutActive = computed(() => route.path === "/about");
const isContactActive = computed(() => route.path === "/contact");

watch(
  () => props.isOpen,
  (open) => {
    if (open) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    }
  }
);

onUnmounted(() => {
  document.body.style.overflow = "";
  window.removeEventListener("keydown", handleKeyDown);
});
</script>

<template>
  <nav
    v-show="isOpen"
    id="mobile-navigation-menu"
    class="md:hidden fixed inset-x-0 top-[63px] bottom-0 bg-paper z-50 p-6 flex flex-col justify-between border-t border-ink font-sans text-ink animate-fade"
    role="dialog"
    aria-modal="true"
    aria-label="Mobile Navigation Menu"
  >
    <div class="flex flex-col gap-2 pt-2">
      <p class="font-sans text-[11px] font-extrabold uppercase tracking-widest text-ink/50 mb-3">
        NAVIGATION
      </p>
      
      <RouterLink
        to="/"
        :class="[
          'min-h-[48px] flex items-center text-[24px] font-extrabold text-ink hover:underline underline-offset-4 transition-all',
          isHomeActive ? 'underline decoration-2' : ''
        ]"
        @click="handleNavClick"
      >
        <span>Home</span>
        <span v-if="isHomeActive" class="ml-2 text-[12px] font-extrabold text-[#4fbf5d]">●</span>
      </RouterLink>

      <RouterLink
        to="/projects"
        :class="[
          'min-h-[48px] flex items-center text-[24px] font-extrabold text-ink hover:underline underline-offset-4 transition-all',
          isWorkActive ? 'underline decoration-2' : ''
        ]"
        @click="handleNavClick"
      >
        <span>Work</span>
        <span v-if="isWorkActive" class="ml-2 text-[12px] font-extrabold text-[#4fbf5d]">●</span>
      </RouterLink>

      <RouterLink
        to="/about"
        :class="[
          'min-h-[48px] flex items-center text-[24px] font-extrabold text-ink hover:underline underline-offset-4 transition-all',
          isAboutActive ? 'underline decoration-2' : ''
        ]"
        @click="handleNavClick"
      >
        <span>About</span>
        <span v-if="isAboutActive" class="ml-2 text-[12px] font-extrabold text-[#4fbf5d]">●</span>
      </RouterLink>

      <RouterLink
        to="/contact"
        :class="[
          'min-h-[48px] flex items-center text-[24px] font-extrabold text-ink hover:underline underline-offset-4 transition-all',
          isContactActive ? 'underline decoration-2' : ''
        ]"
        @click="handleNavClick"
      >
        <span>Contact</span>
        <span v-if="isContactActive" class="ml-2 text-[12px] font-extrabold text-[#4fbf5d]">●</span>
      </RouterLink>

      <div class="pt-4">
        <a
          href="/Marwan-Ashraf-Product-Designer-CV.pdf"
          download="Marwan-Ashraf-Product-Designer-CV.pdf"
          class="min-h-[48px] px-5 bg-ink text-paper rounded-full font-bold flex items-center justify-between text-[14px] hover:bg-ink/85 transition-colors focus-visible:ring-2 focus-visible:ring-ink"
          @click="handleNavClick"
        >
          <span>Download CV / Résumé</span>
          <span>↗</span>
        </a>
      </div>
    </div>

    <!-- Mobile Menu Bottom Meta Bar -->
    <div class="pt-6 border-t border-line text-[13px] font-semibold text-ink/80 flex flex-col gap-3 font-sans">
      <div class="flex items-center gap-5">
        <a href="https://www.linkedin.com/in/marwan-ashraf-ibrahim/" target="_blank" rel="noopener" class="hover:underline font-bold text-ink">
          LinkedIn ↗
        </a>
        <a href="https://github.com/marwann022" target="_blank" rel="noopener" class="hover:underline font-bold text-ink">
          GitHub ↗
        </a>
      </div>
      <a href="mailto:marwanelgammal0@gmail.com" class="hover:underline flex items-center gap-2 text-ink/90 font-bold">
        <font-awesome-icon icon="fa-solid fa-envelope" />
        marwanelgammal0@gmail.com
      </a>
      <p class="text-[12px] text-ink/60 m-0">Cairo, Egypt · Open to relocate</p>
    </div>
  </nav>
</template>


