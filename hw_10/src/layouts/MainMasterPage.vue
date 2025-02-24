<template>
  <div class="main-layout">
    <Header />
    <div class="content">
      <slot></slot>
    </div>
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
  height: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
.content {
  flex-grow: 1;
}
</style>
