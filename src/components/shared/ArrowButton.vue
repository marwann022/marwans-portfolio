<script setup>
defineProps({
  variant: {
    type: String,
    default: "circle"
  },
  label: {
    type: String,
    default: ""
  },
  icon: {
    type: String,
    default: "fa-solid fa-arrow-up-right-from-square"
  }
});

const emit = defineEmits(["click"]);
</script>

<template>
  <button
    v-if="variant === 'circle'"
    class="w-[96px] h-[96px] max-md:mt-6 border border-ink rounded-full bg-transparent font-sans text-[11px] font-bold cursor-pointer transition-all duration-300 hover:bg-ink hover:text-paper hover:rotate-6 flex flex-col items-center justify-center gap-1 group text-ink"
    @click="emit('click')"
  >
    <span>{{ label }}</span>
    <font-awesome-icon :icon="icon" class="text-[14px]" />
  </button>

  <button
    v-else
    class="mt-8 border-b border-ink bg-transparent pb-1 font-sans text-[14px] font-bold cursor-pointer inline-flex items-center gap-2 text-ink hover:opacity-80 transition-opacity"
    @click="emit('click')"
  >
    <span>{{ label }}</span>
    <font-awesome-icon :icon="icon" class="text-[12px]" />
  </button>
</template>
