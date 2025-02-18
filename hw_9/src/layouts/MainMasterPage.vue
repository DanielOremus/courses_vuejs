<template>
  <div class="main-layout">
    <Header />
    <slot></slot>
  </div>
</template>

<script>
import Header from "@/components/sections/Header.vue"
export default {
  name: "MainMasterPage",
  components: {
    Header,
  },
}
</script>

<style lang="css" scoped>
.main-layout {
  min-height: 100vh;
}
</style>
