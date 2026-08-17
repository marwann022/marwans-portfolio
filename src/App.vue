<script setup>
import AppHeader from "@/components/layout/AppHeader.vue";
import AppFooter from "@/components/layout/AppFooter.vue";
</script>

<template>
  <div class="overflow-x-hidden min-h-screen flex flex-col bg-paper text-ink font-sans">
    <a href="#main-content" class="skip-link">Skip to main content</a>
    <AppHeader />
    <div id="main-content" class="flex-grow flex flex-col">
      <router-view />
    </div>
    <AppFooter />
  </div>
</template>

