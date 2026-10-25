<script setup>
import { RouterLink } from 'vue-router';
</script>
<template>
  <section id="about" class="about-section page-shell">
    <div class="about-copy" data-reveal><p class="section-eyebrow">The person behind the pixels</p><h2 class="section-heading">An engineer's logic.<br /><em>A designer's eye.</em></h2><p>Computer &amp; Control Engineering graduate and ITI UI/UX Development alumnus. I connect how a product feels with how it actually works.</p><RouterLink to="/contact" class="text-link">Let's work together <font-awesome-icon icon="fa-solid fa-arrow-up-right-from-square" /></RouterLink></div>
    <div class="about-experience" data-reveal><div><span>Latest client work</span><h3>VActives Agency</h3><p>UI/UX + Web Development · 2026</p></div><div><span>Product design</span><h3>GolderaPharm</h3><p>Enterprise CRM · Jan–May 2026</p></div><a href="/Marwan-Ashraf-uiux%20design-CV.pdf" download class="text-link">The full story, in my CV <font-awesome-icon icon="fa-solid fa-arrow-up-right-from-square" /></a></div>
  </section>
</template>
