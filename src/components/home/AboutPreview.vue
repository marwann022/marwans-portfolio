<script setup>
import { useRouter } from "vue-router";
import ArrowButton from "@/components/shared/ArrowButton.vue";

const router = useRouter();

function goToAbout() {
  router.push("/about");
}
</script>

<template>
  <section class="py-16 md:py-28 px-5 md:px-[7vw] lg:px-[105px] grid grid-cols-1 md:grid-cols-[44%_1fr] gap-8 md:gap-[10%] items-start border-t border-line font-sans">
    <div class="bg-portrait-bg border border-ink min-h-[360px] md:min-h-[520px] p-5 relative overflow-hidden font-sans text-[11px] font-bold select-none">
      <div class="absolute w-[300px] h-[300px] rounded-full bg-lime -right-[50px] -top-[40px] pointer-events-none"></div>
      <span>PORTRAIT / DETAIL<br />PLACEHOLDER</span>
      <b class="font-sans text-[220px] md:text-[250px] leading-none tracking-[-0.04em] absolute -bottom-[45px] -right-[10px] font-extrabold text-ink">ME</b>
    </div>

    <div>
      <p class="font-sans font-bold text-[12px] tracking-[0.05em] uppercase m-0 text-ink/70">(04) MORE THAN SCREENS</p>
      <h2 class="text-[clamp(36px,4.8vw,68px)] tracking-[-0.03em] leading-[1.05] my-6 font-extrabold text-ink">
        Systems thinker.<br /><span class="font-serif italic font-normal text-ink/85">Builder, too.</span>
      </h2>
      <p class="text-[17px] leading-[1.55] tracking-[-0.01em] max-w-[440px] text-ink/85 font-medium m-0">
        I connect UX research, visual design, and enough code to make the handoff genuinely useful.
      </p>
      <ArrowButton
        variant="text"
        label="More about me"
        icon="fa-solid fa-arrow-up-right-from-square"
        @click="goToAbout"
      />
    </div>
  </section>
</template>
