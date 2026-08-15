<script setup>
import { useRouter } from "vue-router";
import ArrowButton from "@/components/shared/ArrowButton.vue";

const router = useRouter();

function handleStart() {
  router.push("/projects/goldera");
}
</script>

<template>
  <section class="min-h-[640px] md:min-h-[700px] pt-16 md:pt-24 px-5 md:px-[7vw] lg:px-[105px] relative font-sans">
    <p class="font-sans font-bold text-[12px] tracking-[0.05em] uppercase m-0 animate-fade text-ink/70">
      Cairo, Egypt <span class="mx-1.5 text-ink/40">—</span> Open to relocate
    </p>

    <h1 class="text-[clamp(46px,7.5vw,108px)] tracking-[-0.03em] leading-[1.05] mt-12 md:mt-16 font-extrabold text-ink">
      <span class="block animate-rise">Digital products</span>
      <span class="block animate-rise-delay font-serif italic font-normal tracking-normal text-ink/90">with a pulse.</span>
    </h1>

    <div class="mt-12 md:mt-16 md:ml-auto max-w-[730px] flex max-md:flex-col items-start md:items-end justify-between gap-6 animate-fade">
      <p class="text-[17px] md:text-[19px] leading-[1.55] max-w-[440px] tracking-[-0.01em] text-ink/85 font-medium m-0">
        UI/UX designer and developer shaping complex systems into interfaces people can move through naturally.
      </p>
      <ArrowButton
        variant="circle"
        label="Start here"
        icon="fa-solid fa-arrow-down"
        @click="handleStart"
      />
    </div>

    <div class="absolute top-24 md:top-36 right-5 md:right-[7%] w-[100px] md:w-[130px] h-[100px] md:h-[130px] border border-ink rounded-full grid place-content-center text-center font-sans font-bold text-[10px] md:text-[11px] leading-[1.2] rotate-12 animate-spin-slow pointer-events-none select-none text-ink">
      UI/UX<br />DESIGNER<br />&amp; DEVELOPER
    </div>

    <div class="absolute bottom-0 left-0 w-full overflow-hidden bg-ink text-paper h-[42px] flex whitespace-nowrap items-center font-sans font-semibold text-[12px] tracking-[0.05em]">
      <span class="block animate-marquee">RESEARCH · SYSTEMS · FLOWS · INTERFACES · BUILD · </span>
      <span class="block animate-marquee">RESEARCH · SYSTEMS · FLOWS · INTERFACES · BUILD · </span>
    </div>
  </section>
</template>
