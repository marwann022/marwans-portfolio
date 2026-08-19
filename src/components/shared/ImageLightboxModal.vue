<script setup>
import { watch, onUnmounted } from "vue";

const props = defineProps({
  isOpen: {
    type: Boolean,
    default: false
  },
  src: {
    type: String,
    default: ""
  },
  alt: {
    type: String,
    default: "Enlarged project artwork preview"
  },
  caption: {
    type: String,
    default: ""
  },
  hasPrev: {
    type: Boolean,
    default: false
  },
  hasNext: {
    type: Boolean,
    default: false
  },
  counterText: {
    type: String,
    default: ""
  }
});

const emit = defineEmits(["close", "prev", "next"]);

function handleKeyDown(e) {
  if (e.key === "Escape") {
    emit("close");
  } else if (e.key === "ArrowLeft" && props.hasPrev) {
    emit("prev");
  } else if (e.key === "ArrowRight" && props.hasNext) {
    emit("next");
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
  <Teleport to="body">
    <Transition name="fade">
      <div
        v-if="isOpen"
        class="fixed inset-0 z-[100] bg-ink/95 backdrop-blur-md p-4 md:p-8 flex flex-col justify-between items-center animate-fade font-sans text-paper"
        @click="emit('close')"
        role="dialog"
        aria-modal="true"
        aria-label="Image Preview Modal"
      >
        <!-- Modal Top Bar -->
        <div class="w-full max-w-[1240px] flex items-center justify-between font-mono text-[12px] text-paper/80 z-20">
          <div class="flex items-center gap-3">
            <span class="bg-paper/10 px-3 py-1 rounded font-bold">FULL ARTWORK INSPECTOR</span>
            <span v-if="counterText" class="text-paper/60 font-medium">{{ counterText }}</span>
          </div>
          <button
            @click.stop="emit('close')"
            class="px-3.5 py-1 bg-paper text-ink rounded font-black hover:bg-paper/80 transition-colors cursor-pointer"
            aria-label="Close preview modal"
          >
            ✕ CLOSE (ESC)
          </button>
        </div>

        <!-- Centered High-Res Image & Navigation Controls -->
        <div class="my-auto w-full max-w-[1240px] max-h-[85vh] flex items-center justify-between gap-4 p-2 relative" @click.stop>
          <!-- Prev Button -->
          <button
            v-if="hasPrev"
            @click="emit('prev')"
            class="w-12 h-12 rounded-full bg-paper/15 hover:bg-paper hover:text-ink text-paper border border-paper/20 flex items-center justify-center font-extrabold text-[18px] transition-all cursor-pointer shrink-0 z-20"
            aria-label="Previous artwork"
          >
            ←
          </button>
          <div v-else class="w-12 shrink-0"></div>

          <!-- Main Image Display -->
          <div class="flex-1 flex flex-col items-center justify-center max-h-[82vh] overflow-hidden">
            <img
              :src="src"
              :alt="alt"
              class="max-w-full max-h-[78vh] w-auto h-auto object-contain border border-paper/20 rounded shadow-2xl block select-none bg-ink/50"
            />
            <p v-if="caption" class="mt-3 font-mono text-[12px] text-paper/90 text-center max-w-[840px] m-0 bg-ink/90 px-4 py-2 rounded border border-paper/15 shadow-md">
              {{ caption }}
            </p>
          </div>

          <!-- Next Button -->
          <button
            v-if="hasNext"
            @click="emit('next')"
            class="w-12 h-12 rounded-full bg-paper/15 hover:bg-paper hover:text-ink text-paper border border-paper/20 flex items-center justify-center font-extrabold text-[18px] transition-all cursor-pointer shrink-0 z-20"
            aria-label="Next artwork"
          >
            →
          </button>
          <div v-else class="w-12 shrink-0"></div>
        </div>

        <!-- Modal Bottom Hint -->
        <div class="font-mono text-[11px] text-paper/50 uppercase tracking-widest z-10">
          Use ← → Arrow Keys to navigate · Click outside to dismiss
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
