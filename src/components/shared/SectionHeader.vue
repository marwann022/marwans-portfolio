<script setup>
defineProps({
  eyebrow: {
    type: String,
    required: true
  },
  subtitle: {
    type: String,
    default: ""
  }
});
</script>

<template>
  <div class="flex max-md:flex-col justify-between items-start md:items-end text-[14px] mb-8 font-sans">
    <p class="font-sans font-bold text-[12px] tracking-[0.05em] uppercase m-0 text-ink/70">
      {{ eyebrow }}
    </p>
    <p v-if="subtitle" class="max-md:mt-2 text-ink/80 font-medium">
      {{ subtitle }}
    </p>
  </div>
</template>
