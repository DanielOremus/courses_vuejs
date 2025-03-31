<template>
  <main-layout>
    <div class="manager-container">
      <friends-manager />
    </div>
  </main-layout>
</template>

<script setup>
import FriendsManager from "@/components/friends/Manager/index.vue"
</script>

<style lang="css" scoped>
.manager-container {
  @apply mx-auto rounded-md bg-zinc-800 p-4 my-[5rem] w-full sm:w-2/3 xl:w-2/5;
}
</style>
