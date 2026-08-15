<script setup>
import { RouterLink } from "vue-router";

defineProps({
  isOpen: {
    type: Boolean,
    default: false
  }
});

const emit = defineEmits(["close"]);

function handleNavClick() {
  emit("close");
}
</script>

<template>
  <nav
    :class="[
      'text-[14px] font-sans font-semibold transition-all duration-200',
      'max-md:absolute max-md:top-[63px] max-md:left-0 max-md:w-full max-md:p-5 max-md:bg-paper max-md:border-b max-md:border-ink max-md:flex-col max-md:gap-4',
      isOpen ? 'max-md:flex' : 'max-md:hidden',
      'md:flex md:gap-7'
    ]"
  >
    <RouterLink
      to="/"
      class="transition-transform duration-200 hover:-translate-y-0.5 hover:underline underline-offset-4 [&.router-link-active]:underline"
      @click="handleNavClick"
    >
      Index
    </RouterLink>
    <RouterLink
      to="/about"
      class="transition-transform duration-200 hover:-translate-y-0.5 hover:underline underline-offset-4 [&.router-link-active]:underline"
      @click="handleNavClick"
    >
      About
    </RouterLink>
    <RouterLink
      to="/contact"
      class="transition-transform duration-200 hover:-translate-y-0.5 hover:underline underline-offset-4 [&.router-link-active]:underline"
      @click="handleNavClick"
    >
      Contact
    </RouterLink>
  </nav>
</template>
