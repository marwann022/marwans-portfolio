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
    default: "Enlarged project screenshot preview"
  },
  caption: {
    type: String,
    default: ""
  }
});

const emit = defineEmits(["close"]);

function handleKeyDown(e) {
  if (e.key === "Escape") {
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
  <Teleport to="body">
    <Transition name="fade">
      <div
        v-if="isOpen"
        class="fixed inset-0 z-[100] bg-ink/90 backdrop-blur-md p-4 md:p-8 flex flex-col justify-between items-center animate-fade cursor-zoom-out font-sans text-paper"
        @click="emit('close')"
        role="dialog"
        aria-modal="true"
        aria-label="Image Preview Modal"
      >
        <!-- Modal Top Bar -->
        <div class="w-full max-w-[1240px] flex items-center justify-between font-mono text-[12px] text-paper/80 z-10">
          <span class="bg-paper/10 px-3 py-1 rounded">IMAGE PREVIEW (ESC to close)</span>
          <button
            @click.stop="emit('close')"
            class="px-3.5 py-1 bg-paper text-ink rounded font-black hover:bg-paper/80 transition-colors cursor-pointer"
            aria-label="Close preview modal"
          >
            ✕ CLOSE
          </button>
        </div>

        <!-- Centered High-Res Image -->
        <div class="my-auto max-w-[1240px] max-h-[85vh] flex flex-col items-center justify-center p-2" @click.stop>
          <img
            :src="src"
            :alt="alt"
            class="max-w-full max-h-[80vh] w-auto h-auto object-contain border border-paper/20 rounded shadow-2xl block select-none"
          />
          <p v-if="caption" class="mt-3 font-mono text-[12px] text-paper/90 text-center max-w-[800px] m-0 bg-ink/80 px-4 py-2 rounded border border-paper/10">
            {{ caption }}
          </p>
        </div>

        <!-- Modal Bottom Hint -->
        <div class="font-mono text-[11px] text-paper/50 uppercase tracking-widest z-10">
          Click anywhere outside or press ESC to dismiss
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
