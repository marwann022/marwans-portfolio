<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const isVisible = ref(false);

function checkScroll() {
  isVisible.value = window.scrollY > 400;
}

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

onMounted(() => {
  window.addEventListener("scroll", checkScroll, { passive: true });
});

onUnmounted(() => {
  window.removeEventListener("scroll", checkScroll);
});
</script>

<template>
  <Transition
    enter-active-class="transition-all duration-300 ease-out"
    enter-from-class="opacity-0 translate-y-4 scale-95"
    enter-to-class="opacity-100 translate-y-0 scale-100"
    leave-active-class="transition-all duration-200 ease-in"
    leave-from-class="opacity-100 translate-y-0 scale-100"
    leave-to-class="opacity-0 translate-y-4 scale-95"
  >
    <button
      v-if="isVisible"
      @click="scrollToTop"
      type="button"
      aria-label="Back to top of page"
      class="fixed bottom-6 right-6 z-40 p-3 bg-ink text-paper rounded-full shadow-lg border border-ink hover:bg-ink/80 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-ink transition-colors cursor-pointer group"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2.5"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="w-5 h-5 group-hover:-translate-y-0.5 transition-transform"
      >
        <path d="m18 15-6-6-6 6" />
      </svg>
    </button>
  </Transition>
</template>
