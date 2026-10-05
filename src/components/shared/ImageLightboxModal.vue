<script setup>
import { nextTick, ref, watch } from 'vue';
import { useModalDialog } from '@/composables/useModalDialog.js';
const props = defineProps({
  isOpen: { type: Boolean, default: false }, src: { type: String, default: '' },
  alt: { type: String, default: '' }, caption: { type: String, default: '' },
  hasPrev: { type: Boolean, default: false }, hasNext: { type: Boolean, default: false }, counterText: { type: String, default: '' }
});
const emit = defineEmits(['close', 'prev', 'next']);
const dialog = ref(null);
const viewer = ref(null);
const zoom = ref(1);
const loadFailed = ref(false);
useModalDialog(() => props.isOpen, dialog, () => emit('close'));
watch([() => props.src, () => props.isOpen], async () => {
  zoom.value = 1; loadFailed.value = false;
  await nextTick(); viewer.value?.scrollTo({ top: 0, left: 0, behavior: 'instant' });
});
function handleKeys(event) {
  if (zoom.value !== 1) return;
  if (event.key === 'ArrowLeft' && props.hasPrev) { event.preventDefault(); emit('prev'); }
  if (event.key === 'ArrowRight' && props.hasNext) { event.preventDefault(); emit('next'); }
}
</script>
<template>
  <Teleport to="body">
    <Transition name="image-preview">
      <div v-if="isOpen" ref="dialog" tabindex="-1" role="dialog" aria-modal="true" aria-label="Image preview"
        class="image-dialog fixed inset-0 z-[100] bg-ink text-paper flex flex-col gap-3 p-3 md:p-6 font-sans" @keydown="handleKeys">
        <div class="flex flex-wrap items-center justify-between gap-3 shrink-0">
          <div class="text-sm font-bold">Image preview <span v-if="counterText" class="ml-2 text-paper/80">{{ counterText }}</span></div>
          <button type="button" class="min-h-[44px] px-4 border border-paper rounded font-bold" aria-label="Close image preview" @click="emit('close')">Close <span aria-hidden="true">×</span></button>
        </div>
        <div class="flex flex-wrap items-center gap-2 shrink-0" role="group" aria-label="Image controls">
          <button type="button" class="preview-control" :disabled="zoom === 1" aria-label="Zoom out" @click="zoom = Math.max(1, zoom - 0.5)">−</button>
          <button type="button" class="preview-control" :disabled="zoom === 3" aria-label="Zoom in" @click="zoom = Math.min(3, zoom + 0.5)">+</button>
          <button type="button" class="preview-control px-3" @click="zoom = 1">Fit to width</button>
          <span class="text-sm tabular-nums" aria-live="polite">{{ Math.round(zoom * 100) }}%</span>
          <div v-if="hasPrev || hasNext" class="ml-auto flex gap-2">
            <button type="button" class="preview-control" :disabled="!hasPrev" aria-label="Previous artwork" @click="emit('prev')">←</button>
            <button type="button" class="preview-control" :disabled="!hasNext" aria-label="Next artwork" @click="emit('next')">→</button>
          </div>
        </div>
        <div ref="viewer" tabindex="0" role="region" aria-label="Scrollable artwork" class="flex-1 min-h-0 overflow-auto border border-paper/30 rounded overscroll-contain bg-[#101010]">
          <p v-if="loadFailed" role="alert" class="p-6">This image couldn't load. Close the preview and try again.</p>
          <img v-else :src="src" :alt="alt || caption || 'Project artwork'" :style="{ width: `${zoom * 100}%`, maxWidth: 'none' }" class="block h-auto" @error="loadFailed = true" />
        </div>
        <div class="shrink-0 text-sm leading-relaxed text-paper/90">
          <p v-if="caption" class="m-0 mb-1">{{ caption }}</p>
          <p class="m-0 text-paper/80">Scroll to explore. Use + to zoom in, then scroll to pan. Esc closes the preview.</p>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>
<style scoped>
.preview-control { min-width: 44px; min-height: 44px; border: 1px solid currentColor; border-radius: 4px; font-weight: 700; }
.preview-control:disabled { opacity: .45; cursor: default; }
.image-preview-enter-active, .image-preview-leave-active { transition: opacity .15s ease; }
.image-preview-enter-from, .image-preview-leave-to { opacity: 0; }
</style>
