<script setup>
import { RouterLink } from "vue-router";
import { gallery } from "@/data/gallery.js";
</script>

<template>
  <section class="py-16 md:py-24 px-5 md:px-[7vw] lg:px-[105px] border-t border-line font-sans">
    <!-- Header Block -->
    <div class="flex max-md:flex-col justify-between items-start md:items-end mb-10 md:mb-12">
      <div>
        <p class="font-sans font-bold text-[12px] tracking-[0.05em] uppercase m-0 text-ink/70">
          (03) VISUAL ARCHIVE
        </p>
        <h2 class="text-[26px] md:text-[34px] font-extrabold tracking-[-0.03em] text-ink m-0 mt-2">
          Selected identity, packaging, campaign, and communication work.
        </h2>
      </div>
      <div class="font-sans text-[12px] font-bold text-ink/80 bg-paper border border-ink px-3.5 py-1 rounded-full max-md:mt-4">
        03 SELECTED PIECES
      </div>
    </div>

    <!-- Clean Equal 3-Column Desktop Grid -->
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 items-stretch">
      <RouterLink
        v-for="item in gallery"
        :key="item.id"
        :to="`/archive/${item.id}`"
        class="group border border-ink bg-paper overflow-hidden flex flex-col justify-between h-full transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-ink focus-visible:outline-none"
      >
        <!-- Full-bleed Artwork Frame with Contain Fit -->
        <div class="relative w-full aspect-[4/3] overflow-hidden bg-story-bg p-1 md:p-1.5 border-b border-ink flex items-center justify-center">
          <img
            :src="item.image"
            :alt="item.name + ' visual archive artwork preview'"
            class="w-full h-full object-contain object-center transition-transform duration-500 group-hover:scale-[1.02]"
            loading="lazy"
          />
          
          <!-- Top Badges -->
          <div class="absolute top-3 left-3 right-3 flex items-center justify-between font-sans text-[11px] text-paper z-10 font-bold">
            <span class="bg-ink border border-paper/30 px-2.5 py-0.5 rounded-sm">
              {{ item.num }}
            </span>
            <span class="bg-ink border border-paper/30 px-2.5 py-0.5 rounded-sm">
              {{ item.year }}
            </span>
          </div>
        </div>

        <!-- Content & Action Area (Fixed height rhythm + mt-auto CTA pin) -->
        <div class="p-4 flex-grow flex flex-col justify-between bg-paper">
          <div>
            <span class="font-mono text-[10px] font-extrabold uppercase text-ink/50 block mb-1">
              {{ item.category }}
            </span>
            <h3 class="text-[20px] font-extrabold tracking-[-0.03em] text-ink m-0 group-hover:underline underline-offset-4">
              {{ item.name }}
            </h3>
            <p class="text-[13px] text-ink/75 font-medium m-0 mt-1.5 line-clamp-2">
              {{ item.summary }}
            </p>
          </div>

          <div class="mt-4 pt-3 border-t border-ink/20 flex items-center justify-between font-sans text-[12px] font-bold text-ink">
            <span class="text-ink/60 font-mono text-[11px]">{{ item.num }} — {{ item.year }}</span>
            <span class="text-ink font-extrabold inline-flex items-center gap-1.5 group-hover:translate-x-1 transition-transform">
              <span>View System</span>
              <font-awesome-icon icon="fa-solid fa-arrow-up-right-from-square" class="text-[0.8em]" />
            </span>
          </div>
        </div>
      </RouterLink>
    </div>
  </section>
</template>

