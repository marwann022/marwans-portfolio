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
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
      <RouterLink
        v-for="item in gallery"
        :key="item.id"
        :to="`/archive/${item.id}`"
        class="group border border-ink bg-paper overflow-hidden flex flex-col justify-between transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-ink focus-visible:outline-none"
      >
        <!-- Full-bleed Artwork Frame -->
        <div class="relative w-full aspect-[4/3] overflow-hidden bg-gallery-bg border-b border-ink">
          <img
            :src="item.image"
            :alt="item.name + ' visual archive artwork preview'"
            class="w-full h-full object-cover saturate-[0.95] transition-opacity duration-300 group-hover:opacity-90"
            loading="lazy"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/20 to-transparent"></div>
          
          <!-- Top Badges -->
          <div class="absolute top-3 left-3 right-3 flex items-center justify-between font-sans text-[11px] text-paper z-10 font-bold">
            <span class="bg-ink border border-paper/30 px-2.5 py-0.5 rounded-sm">
              {{ item.num }}
            </span>
            <span class="bg-ink border border-paper/30 px-2.5 py-0.5 rounded-sm">
              {{ item.year }}
            </span>
          </div>

          <!-- Title Overlay -->
          <div class="absolute bottom-3 left-3 right-3 text-paper z-10">
            <h3 class="text-[20px] md:text-[22px] font-extrabold tracking-[-0.03em] text-paper m-0 group-hover:underline underline-offset-4">
              {{ item.name }}
            </h3>
            <p class="font-sans text-[12px] text-paper/85 font-medium m-0 mt-0.5">
              {{ item.category }}
            </p>
          </div>
        </div>

        <!-- Caption & Action Bar -->
        <div class="p-3.5 flex items-center justify-between font-sans text-[12px] font-semibold text-ink bg-paper">
          <span class="text-ink/80 font-medium truncate max-w-[80%]">
            {{ item.num }} — {{ item.name }} / {{ item.category }}
          </span>
          <span class="text-ink font-bold flex items-center gap-1">
            View ↗
          </span>
        </div>
      </RouterLink>
    </div>
  </section>
</template>

