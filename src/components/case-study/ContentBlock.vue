<script setup>
import RoleFlowVisual from "./RoleFlowVisual.vue";

defineProps({
  blocks: {
    type: Array,
    required: true
  },
  sections: {
    type: Object,
    default: () => null
  },
  showRoleVisual: {
    type: Boolean,
    default: true
  }
});
</script>

<template>
  <section class="py-12 md:py-20 px-5 md:px-[7vw] grid gap-12 md:gap-16 font-sans">
    <!-- Traditional Content Blocks -->
    <div
      v-for="(block, index) in blocks"
      :key="block[0]"
      class="grid grid-cols-1 md:grid-cols-[24%_1fr] gap-4 md:gap-[40px] items-start"
    >
      <p class="font-sans font-bold text-[12px] tracking-[0.05em] uppercase m-0 text-ink/70 pt-1">
        0{{ index + 1 }} / {{ block[0] }}
      </p>
      <div>
        <p class="text-[clamp(20px,2.4vw,32px)] leading-[1.3] tracking-[-0.03em] text-ink font-bold max-w-[840px] m-0">
          {{ block[1] }}
        </p>

        <!-- Role Flow Visual on system block -->
        <RoleFlowVisual v-if="index === 1 && showRoleVisual" />
      </div>
    </div>

    <!-- Structured Senior Case Study Evidence Sections -->
    <template v-if="sections">
      <!-- Problem & Context -->
      <div v-if="sections.problem" class="grid grid-cols-1 md:grid-cols-[24%_1fr] gap-4 md:gap-[40px] items-start border-t border-line pt-10">
        <p class="font-sans font-bold text-[12px] tracking-[0.05em] uppercase m-0 text-ink/70 pt-1">
          USER &amp; BUSINESS PROBLEM
        </p>
        <p class="text-[16px] md:text-[18px] leading-[1.6] text-ink/90 font-medium max-w-[800px] m-0">
          {{ sections.problem }}
        </p>
      </div>

      <!-- Constraints -->
      <div v-if="sections.constraints" class="grid grid-cols-1 md:grid-cols-[24%_1fr] gap-4 md:gap-[40px] items-start border-t border-line pt-10">
        <p class="font-sans font-bold text-[12px] tracking-[0.05em] uppercase m-0 text-ink/70 pt-1">
          REAL CONSTRAINTS
        </p>
        <div class="bg-story-bg border border-ink p-5 md:p-6 max-w-[800px]">
          <p class="text-[15px] md:text-[16px] leading-[1.55] text-ink/90 font-medium m-0">
            {{ sections.constraints }}
          </p>
        </div>
      </div>

      <!-- Research Evidence & Insight -->
      <div v-if="sections.research || sections.coreInsight" class="grid grid-cols-1 md:grid-cols-[24%_1fr] gap-4 md:gap-[40px] items-start border-t border-line pt-10">
        <p class="font-sans font-bold text-[12px] tracking-[0.05em] uppercase m-0 text-ink/70 pt-1">
          EVIDENCE &amp; INSIGHT
        </p>
        <div class="space-y-6 max-w-[800px]">
          <div v-if="sections.research">
            <span class="text-[11px] font-extrabold uppercase tracking-wider text-ink/50 block mb-1">WHAT INFORMED THE DESIGN</span>
            <p class="text-[16px] leading-[1.55] text-ink/90 font-medium m-0">{{ sections.research }}</p>
          </div>
          <div v-if="sections.coreInsight" class="p-5 border-l-4 border-ink bg-paper shadow-[3px_3px_0_rgba(21,21,21,0.08)]">
            <span class="text-[11px] font-extrabold uppercase tracking-wider text-ink/70 block mb-1">CORE PRODUCT INSIGHT</span>
            <p class="text-[17px] font-extrabold text-ink leading-[1.4] m-0">{{ sections.coreInsight }}</p>
          </div>
        </div>
      </div>

      <!-- Key Design Decisions (Problem -> Options -> Decision -> Reason -> Consequence) -->
      <div v-if="sections.decisions &amp;&amp; sections.decisions.length" class="grid grid-cols-1 md:grid-cols-[24%_1fr] gap-4 md:gap-[40px] items-start border-t border-line pt-10">
        <p class="font-sans font-bold text-[12px] tracking-[0.05em] uppercase m-0 text-ink/70 pt-1">
          KEY DESIGN DECISIONS
        </p>
        <div class="space-y-6 max-w-[800px]">
          <div
            v-for="(item, idx) in sections.decisions"
            :key="idx"
            class="border border-ink bg-paper p-6 space-y-3 font-sans"
          >
            <div class="flex items-center justify-between border-b border-line pb-2">
              <h4 class="text-[18px] font-extrabold text-ink m-0">{{ item.title }}</h4>
              <span class="text-[11px] font-bold bg-ink text-paper px-2.5 py-0.5 rounded-sm">DECISION 0{{ idx + 1 }}</span>
            </div>
            
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 text-[13px]">
              <div>
                <span class="text-[11px] font-extrabold text-ink/50 uppercase block">THE PROBLEM</span>
                <p class="font-medium text-ink m-0 mt-0.5">{{ item.problem }}</p>
              </div>
              <div>
                <span class="text-[11px] font-extrabold text-ink/50 uppercase block">OPTIONS CONSIDERED</span>
                <p class="font-medium text-ink m-0 mt-0.5">{{ item.options }}</p>
              </div>
            </div>

            <div class="pt-3 border-t border-line text-[13px] space-y-2">
              <p class="m-0"><strong>DECISION MADE:</strong> {{ item.decision }}</p>
              <p class="m-0 text-ink/80"><strong>RATIONALE:</strong> {{ item.reason }}</p>
              <p class="m-0 text-ink/80"><strong>CONSEQUENCE:</strong> {{ item.consequence }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Outcomes & Reflection -->
      <div v-if="sections.outcomes || sections.reflection" class="grid grid-cols-1 md:grid-cols-[24%_1fr] gap-4 md:gap-[40px] items-start border-t border-line pt-10">
        <p class="font-sans font-bold text-[12px] tracking-[0.05em] uppercase m-0 text-ink/70 pt-1">
          OUTCOMES &amp; REFLECTION
        </p>
        <div class="space-y-6 max-w-[800px]">
          <div v-if="sections.outcomes" class="border border-ink p-5 bg-paper font-sans">
            <span class="text-[11px] font-extrabold uppercase tracking-wider text-ink/50 block mb-2">TRUTHFUL OUTCOMES</span>
            <p v-if="sections.outcomes.measured" class="text-[15px] font-bold text-ink m-0 mb-1">
              <strong>Measured Impact:</strong> {{ sections.outcomes.measured }}
            </p>
            <p v-if="sections.outcomes.qualitative" class="text-[14px] text-ink/85 font-medium m-0">
              <strong>Qualitative Outcome:</strong> {{ sections.outcomes.qualitative }}
            </p>
          </div>

          <div v-if="sections.reflection">
            <span class="text-[11px] font-extrabold uppercase tracking-wider text-ink/50 block mb-1">DESIGN RETROSPECTIVE</span>
            <p class="text-[15px] leading-[1.55] text-ink/85 font-medium m-0 italic">
              "{{ sections.reflection }}"
            </p>
          </div>
        </div>
      </div>
    </template>
  </section>
</template>

