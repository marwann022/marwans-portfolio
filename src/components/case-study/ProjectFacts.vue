<script setup>
defineProps({
  facts: {
    type: Array,
    required: true
  }
});
</script>

<template>
  <section class="grid grid-cols-1 md:grid-cols-3 border-t border-b border-ink bg-paper font-sans">
    <div
      v-for="(fact, index) in facts"
      :key="fact[1]"
      :class="[
        'p-6 md:py-8 md:px-8 flex flex-col justify-between border-ink max-md:border-b max-md:last:border-b-0 gap-2',
        index < facts.length - 1 ? 'md:border-r' : ''
      ]"
    >
      <b class="text-[clamp(32px,4vw,52px)] tracking-[-0.03em] leading-none font-extrabold text-ink block">
        {{ fact[0] }}
      </b>
      <span class="font-sans text-[12px] leading-[1.4] text-ink/80 font-bold">
        {{ fact[1] }}
      </span>
    </div>
  </section>
</template>
