<script setup>
import { watch, onUnmounted } from "vue";
import { RouterLink } from "vue-router";

const props = defineProps({
  isOpen: {
    type: Boolean,
    default: false
  }
});

const emit = defineEmits(["close"]);

function handleNavClick() {
  emit("close");
}

function handleKeyDown(event) {
  if (event.key === "Escape" && props.isOpen) {
    emit("close");
  }
}

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
    class="md:hidden fixed inset-x-0 top-[63px] bottom-0 bg-paper/98 backdrop-blur-md z-50 p-6 flex flex-col justify-between border-t border-ink font-sans text-ink animate-fade"
    role="dialog"
    aria-modal="true"
    aria-label="Mobile Navigation Menu"
  >
    <div class="flex flex-col gap-2 pt-4">
      <p class="font-sans text-[11px] font-extrabold uppercase tracking-widest text-ink/60 mb-2">
        NAVIGATION
      </p>
      
      <RouterLink
        to="/"
        class="min-h-[48px] flex items-center text-[22px] font-extrabold text-ink hover:underline underline-offset-4 [&.router-link-exact-active]:underline"
        @click="handleNavClick"
      >
        Home
      </RouterLink>

      <RouterLink
        to="/projects"
        class="min-h-[48px] flex items-center text-[22px] font-extrabold text-ink hover:underline underline-offset-4 [&.router-link-active]:underline"
        @click="handleNavClick"
      >
        Work &amp; Archive
      </RouterLink>

      <RouterLink
        to="/about"
        class="min-h-[48px] flex items-center text-[22px] font-extrabold text-ink hover:underline underline-offset-4 [&.router-link-active]:underline"
        @click="handleNavClick"
      >
        About Marwan
      </RouterLink>

      <RouterLink
        to="/contact"
        class="min-h-[48px] flex items-center text-[22px] font-extrabold text-ink hover:underline underline-offset-4 [&.router-link-active]:underline"
        @click="handleNavClick"
      >
        Contact
      </RouterLink>

      <a
        href="/Marwan-Ashraf-Product-Designer-CV.pdf"
        download="Marwan-Ashraf-Product-Designer-CV.pdf"
        class="mt-4 min-h-[48px] px-5 bg-ink text-paper rounded-full font-bold flex items-center justify-between text-[14px]"
        @click="handleNavClick"
      >
        <span>Download CV / Résumé</span>
        <span>↗</span>
      </a>
    </div>

    <!-- Mobile Menu Bottom Meta Bar -->
    <div class="pt-6 border-t border-line text-[13px] font-semibold text-ink/80 flex flex-col gap-2">
      <a href="mailto:marwanelgammal0@gmail.com" class="hover:underline flex items-center gap-2">
        <font-awesome-icon icon="fa-solid fa-envelope" />
        marwanelgammal0@gmail.com
      </a>
      <p class="text-[12px] text-ink/60 m-0">Cairo, Egypt · Open to relocate</p>
    </div>
  </nav>
</template>

