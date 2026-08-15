<script setup>
import RoleFlowVisual from "./RoleFlowVisual.vue";

defineProps({
  blocks: {
    type: Array,
    required: true
  },
  showRoleVisual: {
    type: Boolean,
    default: true
  }
});
</script>

<template>
  <section class="py-12 md:py-20 px-5 md:px-[7vw] grid gap-12 md:gap-16 font-sans">
    <div
      v-for="(block, index) in blocks"
      :key="block[0]"
      class="grid grid-cols-1 md:grid-cols-[24%_1fr] gap-4 md:gap-[40px] items-start"
    >
      <p class="font-sans font-bold text-[12px] tracking-[0.05em] uppercase m-0 text-ink/70 pt-1">
        0{{ index + 1 }} / {{ block[0] }}
      </p>
      <div>
        <p class="text-[clamp(22px,2.5vw,34px)] leading-[1.3] tracking-[-0.03em] text-ink font-bold max-w-[800px] m-0">
          {{ block[1] }}
        </p>

        <!-- Dynamic Role Flow Visual on index 1 if applicable -->
        <RoleFlowVisual v-if="index === 1 && showRoleVisual" />
      </div>
    </div>
  </section>
</template>
