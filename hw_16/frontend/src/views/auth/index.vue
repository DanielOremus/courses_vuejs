<template>
  <main-layout :render-loading="loading">
    <div class="form-wrapper">
      <div class="form-container">
        <router-view></router-view>
      </div>
    </div>
  </main-layout>
</template>

<script>
import { useAuthStore } from "@/stores/auth"
import { mapState } from "pinia"
export default {
  name: "AuthView",
  computed: {
    ...mapState(useAuthStore, ["loading"]),
  },
}
</script>

<style lang="css" scoped>
.form-container {
  @apply bg-neutral-950 py-8 px-10 rounded-xl w-5/6 sm:w-2/3 md:w-1/2 xl:w-1/3 mx-auto;
}
.form-wrapper {
  @apply my-[3rem];
}
</style>
