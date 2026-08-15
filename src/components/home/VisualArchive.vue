<script setup>
import { RouterLink } from "vue-router";
import { gallery } from "@/data/gallery.js";
</script>

<template>
  <section class="py-16 md:py-28 px-5 md:px-[7vw] lg:px-[105px] border-t border-line font-sans">
    <!-- Header Block -->
    <div class="flex max-md:flex-col justify-between items-start md:items-end mb-10 md:mb-12">
      <div>
        <p class="font-sans font-bold text-[12px] tracking-[0.05em] uppercase m-0 text-ink/70">
          (03) VISUAL ARCHIVE
        </p>
        <h2 class="text-[28px] md:text-[36px] font-extrabold tracking-[-0.03em] text-ink m-0 mt-2">
          Selected identity, packaging, campaign, and communication work.
        </h2>
      </div>
      <div class="font-sans text-[12px] font-bold text-ink/80 bg-paper border border-ink px-3.5 py-1.5 rounded-full max-md:mt-4">
        03 SELECTED PIECES
      </div>
    </div>

    <!-- Clean Equal 3-Column Desktop Grid -->
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
      <RouterLink
        v-for="item in gallery"
        :key="item.id"
        :to="`/archive/${item.id}`"
        class="group border border-ink bg-paper rounded-lg overflow-hidden flex flex-col justify-between transition-all duration-300 hover:shadow-[10px_10px_0_rgba(21,21,21,0.18)] hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-ink"
      >
        <!-- Full-bleed Artwork Frame -->
        <div class="relative w-full aspect-[4/3] overflow-hidden bg-gallery-bg border-b border-ink">
          <img
            :src="item.image"
            :alt="item.name + ' visual archive artwork'"
            class="w-full h-full object-cover saturate-[0.95] transition-transform duration-500 ease-out group-hover:scale-105"
          />
          <!-- Gradient overlay for text legibility -->
          <div class="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity"></div>
          
          <!-- Top Badge & Number -->
          <div class="absolute top-3 left-3 right-3 flex items-center justify-between font-sans text-[11px] text-paper z-10 font-bold">
            <span class="bg-ink/90 border border-paper/30 px-2.5 py-0.5 rounded">
              {{ item.num }}
            </span>
            <span class="bg-ink/90 border border-paper/30 px-2.5 py-0.5 rounded">
              {{ item.year }}
            </span>
          </div>

          <!-- Title Overlay -->
          <div class="absolute bottom-3 left-3 right-3 text-paper z-10">
            <h3 class="text-[22px] font-extrabold tracking-[-0.03em] text-paper m-0 group-hover:text-lime transition-colors">
              {{ item.name }}
            </h3>
            <p class="font-sans text-[12px] text-paper/85 font-medium m-0 mt-0.5">
              {{ item.category }}
            </p>
          </div>
        </div>

        <!-- Caption & Action Bar -->
        <div class="p-4 flex items-center justify-between font-sans text-[12px] font-semibold text-ink bg-paper">
          <span class="text-ink/80 font-medium truncate max-w-[80%]">
            {{ item.num }} — {{ item.name }} / {{ item.category }}
          </span>
          <span class="text-ink font-bold flex items-center gap-1 group-hover:text-lime-700 transition-colors">
            View <font-awesome-icon icon="fa-solid fa-arrow-up-right-from-square" class="text-[10px]" />
          </span>
        </div>

        <!-- Hover Accent Line -->
        <div class="h-1 bg-transparent group-hover:bg-lime transition-colors"></div>
      </RouterLink>
    </div>
  </section>
</template>
