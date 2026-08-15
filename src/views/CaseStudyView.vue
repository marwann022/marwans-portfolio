<script setup>
import { computed } from "vue";
import { useProjectNavigation } from "@/composables/useProjectNavigation.js";

import CaseStudyHero from "@/components/case-study/CaseStudyHero.vue";
import ProjectFacts from "@/components/case-study/ProjectFacts.vue";
import ContentBlock from "@/components/case-study/ContentBlock.vue";
import RoleFlow from "@/components/case-study/RoleFlow.vue";
import NextCaseStudy from "@/components/case-study/NextCaseStudy.vue";
import NotFoundView from "@/views/NotFoundView.vue";

const props = defineProps({
  slug: {
    type: String,
    required: true
  }
});

const { getProject } = useProjectNavigation();
const project = computed(() => getProject(props.slug));
</script>

<template>
  <main v-if="project" class="bg-paper w-full">
    <CaseStudyHero :project="project" />
    <ProjectFacts :facts="project.facts" />
    <ContentBlock :blocks="project.blocks" :show-role-visual="project.id === 'goldera'" />
    <RoleFlow :role-map="project.roleMap" />

    <template v-if="project.id === 'franchise212'">
      <section class="py-16 md:py-28 px-5 md:px-[7vw] grid grid-cols-1 md:grid-cols-[26%_1fr] gap-6 md:gap-[8%] bg-story-bg border-t border-ink">
        <div class="text-[14px] leading-[1.35] max-w-[225px]">
          <p class="font-mono font-medium text-[11px] tracking-[0.02em] uppercase m-0 text-ink/70">04 / THE PUBLIC JOURNEY</p>
          <p class="mt-4 font-sans text-ink/80">A straightforward website should still have a clear point of view.</p>
        </div>
        <div>
          <h2 class="text-[clamp(36px,5.5vw,80px)] leading-[0.98] tracking-[-0.04em] m-0 max-w-[900px] font-bold text-ink">
            Give the concept space.<br /><span class="font-medium text-ink/80">Then make action easy.</span>
          </h2>
          <p class="text-[18px] leading-[1.4] tracking-[-0.02em] max-w-[540px] mt-6 mb-0 text-ink/85 font-normal">
            I designed the public journey around four clear destinations: an editorial Home that introduces 212°, supporting context in About, a focused Products view, and a direct Contact route.
          </p>
        </div>
      </section>

      <section class="pb-16 md:pb-28 px-5 md:px-[7vw] bg-story-bg">
        <div class="flex max-md:flex-col justify-between gap-6 items-end pb-6">
          <p class="font-mono font-medium text-[11px] tracking-[0.02em] uppercase m-0 text-ink/70">01 / HOME</p>
          <p class="text-[16px] leading-[1.4] max-w-[410px] m-0 text-ink/85">
            The first screen balances the brand story with a clear way into the franchise offering.
          </p>
        </div>
        <div class="bg-browser-dark p-2 md:p-3.5 rounded-t-xl md:rounded-t-2xl overflow-hidden shadow-[16px_18px_0_rgba(21,21,21,0.14)] border border-ink">
          <div class="h-8 flex items-center gap-1.5 text-[#dcd8d0] font-mono text-[10px]">
            <i class="block w-2 h-2 rounded-full bg-[#dcd8d0] not-italic"></i>
            <i class="block w-2 h-2 rounded-full bg-[#dcd8d0] not-italic"></i>
            <i class="block w-2 h-2 rounded-full bg-[#dcd8d0] not-italic"></i>
            <span class="ml-3.5 opacity-70">212franchise.com</span>
          </div>
          <img :src="project.screens?.home" alt="212 Franchise Home page interface preview" class="w-full block max-h-[340px] md:max-h-[670px] object-cover object-top" />
        </div>
      </section>

      <section class="py-16 md:py-24 px-5 md:px-[7vw] grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-7 bg-dark-grid text-paper border-t border-ink">
        <article class="min-w-0">
          <div class="bg-browser-small p-2 rounded-t-lg border border-[#404040]">
            <div class="h-6 flex items-center gap-1.5 mb-1">
              <i class="block w-2 h-2 rounded-full bg-[#dcd8d0] not-italic"></i>
              <i class="block w-2 h-2 rounded-full bg-[#dcd8d0] not-italic"></i>
              <i class="block w-2 h-2 rounded-full bg-[#dcd8d0] not-italic"></i>
            </div>
            <img :src="project.screens?.about" alt="212 Franchise About page preview" class="h-[310px] md:h-[390px] w-full object-cover object-top block" />
          </div>
          <p class="font-mono text-[11px] uppercase tracking-[0.02em] mt-5 text-lime m-0">02 / ABOUT</p>
          <h3 class="text-[22px] md:text-[26px] leading-[1.1] tracking-[-0.035em] max-w-[290px] mt-3 mb-0 font-bold">
            Build trust before asking for a decision.
          </h3>
        </article>

        <article class="min-w-0">
          <div class="bg-browser-small p-2 rounded-t-lg border border-[#404040]">
            <div class="h-6 flex items-center gap-1.5 mb-1">
              <i class="block w-2 h-2 rounded-full bg-[#dcd8d0] not-italic"></i>
              <i class="block w-2 h-2 rounded-full bg-[#dcd8d0] not-italic"></i>
              <i class="block w-2 h-2 rounded-full bg-[#dcd8d0] not-italic"></i>
            </div>
            <img :src="project.screens?.products" alt="212 Franchise Products page preview" class="h-[310px] md:h-[390px] w-full object-cover object-top block" />
          </div>
          <p class="font-mono text-[11px] uppercase tracking-[0.02em] mt-5 text-lime m-0">03 / PRODUCTS</p>
          <h3 class="text-[22px] md:text-[26px] leading-[1.1] tracking-[-0.035em] max-w-[290px] mt-3 mb-0 font-bold">
            Keep category exploration visual and easy to scan.
          </h3>
        </article>

        <article class="min-w-0">
          <div class="bg-browser-small p-2 rounded-t-lg border border-[#404040]">
            <div class="h-6 flex items-center gap-1.5 mb-1">
              <i class="block w-2 h-2 rounded-full bg-[#dcd8d0] not-italic"></i>
              <i class="block w-2 h-2 rounded-full bg-[#dcd8d0] not-italic"></i>
              <i class="block w-2 h-2 rounded-full bg-[#dcd8d0] not-italic"></i>
            </div>
            <img :src="project.screens?.contact" alt="212 Franchise Contact page preview" class="h-[310px] md:h-[390px] w-full object-cover object-top block" />
          </div>
          <p class="font-mono text-[11px] uppercase tracking-[0.02em] mt-5 text-lime m-0">04 / CONTACT</p>
          <h3 class="text-[22px] md:text-[26px] leading-[1.1] tracking-[-0.035em] max-w-[290px] mt-3 mb-0 font-bold">
            End the journey with one direct, unambiguous next step.
          </h3>
        </article>
      </section>

      <section class="py-16 md:py-24 px-5 md:px-[7vw] bg-sand border-t border-ink">
        <p class="font-mono font-medium text-[11px] tracking-[0.02em] uppercase m-0 text-ink/80">DESIGNED FOR THE FULL JOURNEY</p>
        <div class="flex flex-wrap items-center justify-between gap-3 md:gap-4 mt-8 md:mt-12 text-[clamp(24px,4vw,64px)] tracking-[-0.04em] font-extrabold text-ink">
          <b>HOME</b>
          <font-awesome-icon icon="fa-solid fa-arrow-right" class="text-[0.6em] font-light" />
          <b>ABOUT</b>
          <font-awesome-icon icon="fa-solid fa-arrow-right" class="text-[0.6em] font-light" />
          <b>PRODUCTS</b>
          <font-awesome-icon icon="fa-solid fa-arrow-right" class="text-[0.6em] font-light" />
          <b>CONTACT</b>
        </div>
      </section>
    </template>

    <NextCaseStudy :current-id="project.id" />
  </main>
  <NotFoundView v-else />
</template>
