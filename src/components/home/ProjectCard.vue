<script setup>
import { useRouter } from "vue-router";

const props = defineProps({
  project: {
    type: Object,
    required: true
  }
});

const router = useRouter();

function openCaseStudy() {
  router.push(`/projects/${props.project.id}`);
}

const accentBgMap = {
  lime: "bg-lime",
  blue: "bg-blue",
  coral: "bg-coral",
  sand: "bg-sand"
};
</script>

<template>
  <article
    class="border border-ink p-5 md:p-6 bg-paper flex flex-col justify-between cursor-pointer group transition-all duration-300 hover:shadow-[10px_10px_0_rgba(21,21,21,0.18)] hover:-translate-y-1 relative font-sans"
    @click="openCaseStudy"
  >
    <!-- Top Metadata Header -->
    <div class="flex items-center justify-between font-sans text-[12px] mb-4">
      <span class="px-3 py-1 bg-ink text-paper rounded-full uppercase font-bold tracking-[0.05em]">
        {{ project.num }}
      </span>
      <span class="text-ink/80 font-bold uppercase tracking-wider text-[11px]">
        {{ project.kind }}
      </span>
    </div>

    <!-- Image / Cover Frame -->
    <div
      :class="[
        'w-full h-[240px] md:h-[280px] p-4 mb-5 border border-ink overflow-hidden flex flex-col justify-between transition-transform duration-300 group-hover:scale-[0.98]',
        accentBgMap[project.accent] || 'bg-paper'
      ]"
    >
      <img
        v-if="project.image"
        :src="project.image"
        :alt="project.name + ' case study preview'"
        class="w-full h-full object-cover object-top border border-ink shadow-[6px_6px_0_rgba(21,21,21,0.12)]"
      />
      <template v-else>
        <span class="font-sans font-bold text-[11px] uppercase tracking-wider text-ink/70">INTERFACE SYSTEM</span>
        <div class="bg-paper/95 border border-ink p-5 shadow-[6px_6px_0_rgba(21,21,21,0.12)] my-auto">
          <b class="text-[22px] font-extrabold tracking-[-0.02em] block text-ink">
            {{ project.name }}
          </b>
        </div>
        <div class="space-y-1.5">
          <i class="block h-[6px] rounded-full bg-ink/20 w-[65%] not-italic"></i>
          <i class="block h-[20px] rounded-full bg-ink w-[35%] not-italic"></i>
        </div>
      </template>
    </div>

    <!-- Card Content & Action CTA -->
    <div>
      <h3 class="text-[28px] md:text-[34px] font-extrabold tracking-[-0.03em] leading-[1.08] text-ink m-0 group-hover:underline decoration-2 underline-offset-4">
        {{ project.name }}
      </h3>
      <p class="text-[15px] leading-[1.5] text-ink/80 my-3 font-medium line-clamp-2">
        {{ project.blurb }}
      </p>
    </div>

    <div class="pt-4 border-t border-line flex items-center justify-between font-sans text-[13px] font-bold text-ink">
      <span>View Case Study</span>
      <span class="w-8 h-8 rounded-full border border-ink grid place-content-center transition-transform duration-250 group-hover:bg-ink group-hover:text-paper group-hover:translate-x-1">
        <font-awesome-icon icon="fa-solid fa-arrow-up-right-from-square" class="text-[11px]" />
      </span>
    </div>
  </article>
</template>
