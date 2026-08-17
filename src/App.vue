<script setup>
import { useRoute } from "vue-router";
import AppHeader from "@/components/layout/AppHeader.vue";
import AppFooter from "@/components/layout/AppFooter.vue";
import BackToTop from "@/components/shared/BackToTop.vue";

const route = useRoute();
</script>

<template>
  <div class="overflow-x-hidden min-h-screen flex flex-col bg-paper text-ink font-sans">
    <a href="#main-content" class="skip-link">Skip to main content</a>
    <AppHeader />
    <div id="main-content" class="flex-grow flex flex-col">
      <router-view v-slot="{ Component }">
        <transition name="page" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </div>
    <AppFooter v-if="route.path !== '/contact'" />
    <BackToTop />
  </div>
</template>
