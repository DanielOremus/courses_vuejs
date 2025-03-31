<template>
  <main-layout>
    <div class="manager-container">
      <present-manager />
    </div>
  </main-layout>
</template>

<script setup>
import PresentManager from "@/components/presents/Manager/index.vue"
</script>

<style lang="css" scoped>
.manager-container {
  @apply mx-auto rounded-md bg-zinc-800 p-4 my-[5rem] w-full sm:w-2/3 xl:w-2/5;
}
</style>
