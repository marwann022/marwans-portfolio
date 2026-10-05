<script setup>
import { ref, watch, onErrorCaptured } from "vue";
import { RouterLink, useRoute } from "vue-router";
import AppHeader from "@/components/layout/AppHeader.vue";
import AppFooter from "@/components/layout/AppFooter.vue";
import BackToTop from "@/components/shared/BackToTop.vue";

const route = useRoute();
const hasError = ref(false);
watch(() => route.fullPath, () => { hasError.value = false; });
onErrorCaptured((error, instance, info) => {
  console.error('[portfolio] Page rendering failed', info, error);
  hasError.value = true;
  return false;
});

function reloadPage() {
  window.location.reload();
}
</script>

<template>
  <div class="overflow-x-hidden min-h-screen flex flex-col bg-paper text-ink font-sans">
    <a href="#main-content" class="skip-link">Skip to main content</a>
    <AppHeader />
    <div id="main-content" class="flex-grow flex flex-col">
      <main v-if="hasError" class="px-5 md:px-[7vw] py-24" role="alert">
        <h1 class="text-4xl font-bold mb-6">This page couldn't load.</h1>
        <p class="mb-6">Please try again or return to the portfolio.</p>
        <div class="flex gap-6">
          <button type="button" class="underline" @click="reloadPage">Reload page</button>
          <RouterLink to="/" class="underline">Return to Index</RouterLink>
        </div>
      </main>
      <router-view v-else v-slot="{ Component }">
        <transition name="page" mode="out-in">
          <component :is="Component" :key="route.path" />
        </transition>
      </router-view>
    </div>
    <AppFooter v-if="route.path !== '/contact'" />
    <BackToTop />
  </div>
</template>
