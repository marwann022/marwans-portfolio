<script setup>
import { useSlots } from 'vue';
defineProps({ label: { type: String, default: '' } });
const emit = defineEmits(['click']);
const slots = useSlots();
function imageLabel(nodes) {
  for (const node of nodes || []) {
    if (node.type === 'img' && node.props?.alt) return node.props.alt;
    if (Array.isArray(node.children)) { const label = imageLabel(node.children); if (label) return label; }
  }
  return ''; 
}
</script>
<template>
  <div class="relative" @click="emit('click', $event)">
    <slot />
    <button type="button" class="absolute inset-0 z-10 w-full h-full border-0 bg-transparent cursor-zoom-in rounded-[inherit]"
      :aria-label="label || `Open image: ${imageLabel(slots.default?.()) || 'project artwork'}`" aria-haspopup="dialog" @click.stop="emit('click', $event)" />
  </div>
</template>
