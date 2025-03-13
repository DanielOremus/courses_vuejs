<template>
  <div class="main-layout flex-grow flex flex-col">
    <Header />
    <div class="content flex-grow">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import Header from "@/components/sections/Header.vue"
export default {
  name: "MainLayout",
  components: {
    Header,
  },
}
</script>

<style lang="scss" scoped></style>
