<template>
  <main-layout>
    <div class="assigner-container">
      <present-assigner />
    </div>
  </main-layout>
</template>

<script setup>
import PresentAssigner from "@/components/friends/Manager/PresentAssigner.vue"
</script>

<style lang="css" scoped>
.assigner-container {
  @apply mx-auto rounded-md bg-zinc-800 p-4 my-[5rem] w-full sm:w-2/3 xl:w-2/5;
}
</style>
