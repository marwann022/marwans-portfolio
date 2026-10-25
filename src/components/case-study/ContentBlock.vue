<script setup>
import { computed, ref } from 'vue';
import { getPresentation } from '@/data/projectPresentation.js';
defineEmits(['preview']);
const props = defineProps({ project: { type: Object, required: true } });
const look = computed(() => getPresentation(props.project.id));
const selectedScreen = ref(0);
const currentScreen = computed(() => look.value.screens[selectedScreen.value]);
const highlights = computed(() => look.value.screens.slice(1, 3));
</script>
<template>
  <div class="case-content page-shell">
    <section id="project-problem" class="case-brief case-study-anchor" data-reveal>
      <div><p class="section-eyebrow">01 / The brief</p><h2 class="section-heading">The challenge.<br /><em>The response.</em></h2></div>
      <div class="case-brief-copy"><p>{{ look.brief }}</p><p>{{ look.solution }}</p><dl class="scope-facts"><div v-for="fact in project.facts" :key="fact[1]"><dt>{{ fact[0] }}</dt><dd>{{ fact[1] }}</dd></div></dl></div>
    </section>
    <section id="project-screens" class="case-screen-section case-study-anchor">
      <div class="section-intro" data-reveal><div><p class="section-eyebrow">02 / The interface</p><h2 class="section-heading">A closer <em>look.</em></h2></div><span class="section-aside">Real screens. Every detail is explorable.</span></div>
      <div class="screen-browser" data-reveal>
        <div class="screen-tabs" role="group" aria-label="Project screen views"><button v-for="(screen, index) in look.screens" :key="screen.id" type="button" :aria-pressed="selectedScreen === index" @click="selectedScreen = index">{{ screen.label }}</button></div>
        <button type="button" class="screen-preview" :class="{ 'screen-preview-mobile': look.mobile || currentScreen.id === 'mobile' }" :aria-label="`Open image: ${project.name} — ${currentScreen.label}`" aria-haspopup="dialog" @click="$emit('preview', selectedScreen)"><img :src="currentScreen.image" :alt="`${project.name} — ${currentScreen.label}`" loading="lazy" decoding="async" /><span class="screen-zoom" aria-hidden="true"><font-awesome-icon icon="fa-solid fa-plus" /></span></button>
        <div class="screen-caption"><p>{{ currentScreen.caption }}</p><span>{{ String(selectedScreen + 1).padStart(2, '0') }} / {{ String(look.screens.length).padStart(2, '0') }}</span></div>
      </div>
      <div class="screen-highlights"><figure v-for="(screen, index) in highlights" :key="screen.id" data-reveal><button type="button" :aria-label="`Open image: ${screen.label} detail`" aria-haspopup="dialog" @click="$emit('preview', index + 1)" :class="{ 'highlight-mobile': look.mobile }"><img :src="screen.image" :alt="screen.label" loading="lazy" decoding="async" /></button><figcaption><strong>{{ screen.label }}</strong><span>{{ screen.caption }}</span></figcaption></figure></div>
    </section>
    <section id="project-decisions" class="case-decisions case-study-anchor">
      <div class="section-intro" data-reveal><div><p class="section-eyebrow">03 / The thinking</p><h2 class="section-heading">The choices<br /><em>behind the pixels.</em></h2></div></div>
      <div class="decision-list"><article v-for="(decision, index) in project.decisions" :key="decision.title" class="decision-item" data-reveal><span class="decision-number">0{{ index + 1 }}</span><div><h3>{{ look.takeaways[index] || decision.title }}</h3><p>{{ decision.result }}</p><details class="process-details"><summary>Why this choice? <font-awesome-icon icon="fa-solid fa-plus" /></summary><div><p><strong>The problem.</strong> {{ decision.problem }}</p><p><strong>Considered.</strong> {{ decision.options }}</p><p><strong>The choice.</strong> {{ decision.decision }}</p><p><strong>The reason.</strong> {{ decision.why }}</p><p><strong>The tradeoff.</strong> {{ decision.tradeoff }}</p></div></details></div></article></div>
    </section>
    <section id="project-contribution" class="case-ownership case-study-anchor" data-reveal>
      <div><p class="section-eyebrow">04 / My contribution</p><h2 class="section-heading">What I<br /><em>brought to it.</em></h2></div>
      <div><ul class="ownership-list"><li v-for="task in look.contribution" :key="task"><font-awesome-icon icon="fa-solid fa-check" />{{ task }}</li></ul><details class="process-details"><summary>Collaboration &amp; boundaries <font-awesome-icon icon="fa-solid fa-plus" /></summary><div><p><strong>Collaborated on.</strong> {{ project.ownershipBreakdown.collaboratedOn }}</p><p><strong>Outside my scope.</strong> {{ project.ownershipBreakdown.outOfScope }}</p></div></details></div>
    </section>
    <section id="project-deliverables" class="case-delivered case-study-anchor" data-reveal><p class="section-eyebrow">The deliverable</p><h2>{{ project.outcomes.delivered }}</h2><details class="process-details"><summary>Next evaluation &amp; process notes <font-awesome-icon icon="fa-solid fa-plus" /></summary><div><p><strong>Next evaluation.</strong> {{ project.outcomes.validationPlan }}</p><p v-for="note in project.reflections" :key="note">{{ note }}</p><p v-for="constraint in project.constraints" :key="constraint">{{ constraint }}</p></div></details></section>
  </div>
</template>
