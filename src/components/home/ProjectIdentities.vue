<script setup>
import { RouterLink } from 'vue-router';
const identities = [
  { name: 'VActives Agency', image: '/brands/vactives.png', to: '/projects/vactives', kind: 'Website' },
  { name: 'GolderaPharm', image: '/brands/goldera.webp', to: '/projects/goldera', kind: 'Product design' },
  { name: 'IEEE SCU', image: '/brands/ieee.png', to: '/archive/ieee', kind: 'Media direction' },
  { name: 'Moon', image: '/brands/moon.jpg', to: '/archive/moon', kind: 'Brand identity' }
];
</script>
<template>
  <section class="identity-section page-shell" aria-label="Selected projects and identities" data-reveal>
    <p class="section-eyebrow">A few identities behind the work</p>
    <div class="identity-row"><RouterLink v-for="identity in identities" :key="identity.name" :to="identity.to" :aria-label="`${identity.name} — ${identity.kind}`"><div class="identity-logo"><img :src="identity.image" :alt="identity.name" loading="lazy" decoding="async" /></div><span>{{ identity.name }}</span></RouterLink></div>
  </section>
</template>
