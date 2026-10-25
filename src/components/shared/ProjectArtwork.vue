<script setup>
import { computed } from 'vue';
import { getPresentation, archivePresentation } from '@/data/projectPresentation.js';
const props = defineProps({ project: { type: Object, required: true }, archive: Boolean, eager: Boolean });
const look = computed(() => props.archive ? archivePresentation[props.project.id] : getPresentation(props.project.id));
const previews = { smartmeet: '/previews/smartmeet.jpg', goldera: '/previews/goldera.jpg', wecare: '/previews/wecare-home.jpg', hmz: '/previews/hmz.jpg', franchise212: '/previews/franchise212.jpg', imdb: '/previews/imdb.jpg' };
const primary = computed(() => look.value.cover || previews[props.project.id] || look.value.screens[0].image);
</script>
<template>
  <div class="project-artwork" :class="[`art-${project.id}`, { 'art-mobile': look.mobile, 'art-archive': archive }]" :style="{ '--project-color': look.color, '--project-ink': look.ink }" aria-hidden="true">
    <div class="art-heading">
      <img v-if="look.logo" :src="look.logo" alt="" class="art-logo" :class="{ 'art-logo-square': project.id === 'goldera' }" :loading="eager ? 'eager' : 'lazy'" />
      <span v-else class="art-wordmark">{{ project.name }}</span><span class="art-type">{{ look.type }}</span>
    </div>
    <div class="art-screens" data-parallax>
      <img :src="primary" alt="" class="art-screen art-screen-primary" :loading="eager ? 'eager' : 'lazy'" decoding="async" />
      <img v-if="look.mobile" src="/previews/wecare-doctor.jpg" alt="" class="art-screen art-screen-secondary" :loading="eager ? 'eager' : 'lazy'" decoding="async" />
    </div>
    <span class="art-open"><font-awesome-icon icon="fa-solid fa-arrow-up-right-from-square" /></span>
  </div>
</template>
