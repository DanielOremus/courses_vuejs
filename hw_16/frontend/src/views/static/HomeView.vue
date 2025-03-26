<template>
  <main-layout>
    <hero-carousel />
    <p class="absolute w-full text-2xl text-slate-300 text-center top-1/3">
      {{ $t("pages.home.messages.welcome") }}
    </p>
  </main-layout>
</template>

<script>
import HeroCarousel from "@/components/hero/HeroCarousel.vue"
export default {
  name: "HomeView",
  components: {
    HeroCarousel,
  },
}
</script>
<style></style>
