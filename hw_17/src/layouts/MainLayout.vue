<template>
  <div class="main-layout flex-grow flex flex-col">
    <Header />
    <div class="content flex-grow">
      <slot></slot>
    </div>
  </div>
</template>

<script setup>
import Header from "@/components/sections/Header/index.vue"
</script>

<style lang="scss" scoped></style>
