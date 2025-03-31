<template>
  <header class="header sticky top-0 z-10">
    <div class="navigation-wrapper">
      <div class="navigation-container">
        <router-link :to="{ name: 'home' }">
          <div class="homework-data">
            <span class="homework-number">Homework {{ homeworkNumber }}</span>
            <span class="author text-primary">by Daniel Oremus</span>
          </div>
        </router-link>
        <nav class="main-navigation grow text-xl">
          <nav-links />
        </nav>
      </div>
    </div>
  </header>
</template>

<script setup>
import NavLinks from "./components/NavLinks.vue"
import { ref } from "vue"
const homeworkNumber = ref(17)
</script>

<style lang="css" scoped>
.navigation-container {
  @apply flex justify-between px-40 border-b-2 border-b-primary bg-surface-900 whitespace-nowrap;
  height: var(--header-height);
}
.homework-data {
  @apply h-full flex flex-col justify-center text-center;
}
.homework-number {
  @apply text-2xl leading-4 font-medium text-surface-300;
}
.nav-links {
  @apply h-full flex list-none justify-end gap-6 items-center;
}
</style>
