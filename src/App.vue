<script setup>
import AppHeader from "@/components/layout/AppHeader.vue";
import AppFooter from "@/components/layout/AppFooter.vue";
</script>

<template>
  <div class="overflow-x-hidden min-h-screen flex flex-col bg-paper text-ink font-sans">
    <AppHeader />
    <router-view class="flex-grow" />
    <AppFooter />
  </div>
</template>
