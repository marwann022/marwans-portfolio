<script setup>
import { ref } from 'vue';
const portrait = ref(null);
function movePortrait(event) {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || !window.matchMedia('(pointer: fine)').matches) return;
  const box = event.currentTarget.getBoundingClientRect();
  const x = (event.clientX - box.left) / box.width - .5;
  portrait.value?.style.setProperty('--portrait-turn', `${x * 5}deg`);
}
function resetPortrait() { portrait.value?.style.setProperty('--portrait-turn', '0deg'); }
</script>
<template>
  <section class="home-hero page-shell">
    <div class="hero-intro">
      <p class="section-eyebrow hero-person">Marwan Ashraf Elgammal <span>Product &amp; UI/UX Designer</span></p>
      <h1 class="hero-title"><span>Complex products.</span><em>Clear experiences.</em></h1>
      <p class="hero-description">I turn complex workflows into thoughtful interfaces — then bring them to life with code.</p>
      <a href="#projects" class="pill-link">Explore the work <font-awesome-icon icon="fa-solid fa-arrow-down" /></a>
      <div class="hero-capabilities"><span>Product design</span><span>Design systems</span><span>Vue development</span></div>
    </div>
    <div ref="portrait" class="hero-portrait" @pointermove="movePortrait" @pointerleave="resetPortrait">
      <span class="portrait-initials" aria-hidden="true">MA</span>
      <img src="/assets/marwan-portrait-2026.png" alt="Marwan Ashraf portrait illustration" width="1254" height="1254" fetchpriority="high" />
      <p>Cairo, Egypt <span>Available worldwide</span></p>
    </div>
    <div class="hero-footnote"><span>Engineering mindset. Design eye.</span><a href="#projects">Scroll to explore <font-awesome-icon icon="fa-solid fa-arrow-down" /></a></div>
  </section>
</template>
