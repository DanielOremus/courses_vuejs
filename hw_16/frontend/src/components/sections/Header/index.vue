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
        <div class="flex items-center gap-8 ml-20 text-xl">
          <user-section />
          <language-section />
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import NavLinks from "./components/NavLinks.vue"
import UserSection from "./components/UserSection.vue"
import LanguageSection from "./components/LanguageSection.vue"
export default {
  name: "Header",
  components: {
    UserSection,
    NavLinks,
    LanguageSection,
  },
  data() {
    return {
      homeworkNumber: 16,
    }
  },
}
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
