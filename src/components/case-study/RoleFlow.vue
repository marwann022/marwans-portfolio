<script setup>
defineProps({
  roleMap: {
    type: Array,
    required: true
  }
});
</script>

<template>
  <section class="py-16 md:py-24 px-5 md:px-[7vw] bg-ink text-paper font-sans">
    <p class="font-sans font-bold text-[12px] tracking-[0.05em] uppercase m-0 text-lime">
      THE EXPERIENCE, IN MOTION
    </p>

    <div class="mt-10 border-t border-[#565656]">
      <div
        v-for="(step, index) in roleMap"
        :key="step"
        class="border-b border-[#565656] py-5 grid grid-cols-[10%_1fr_10%] items-center text-[clamp(20px,2.8vw,36px)] tracking-[-0.03em] font-bold"
      >
        <b class="font-sans text-[13px] text-lime font-extrabold">
          0{{ index + 1 }}
        </b>
        <span>{{ step }}</span>
        <span class="text-right text-[20px] md:text-[24px]">
          <font-awesome-icon icon="fa-solid fa-arrow-right" />
        </span>
      </div>
    </div>
  </section>
</template>
