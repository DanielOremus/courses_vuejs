<template>
  <div class="main-layout">
    <loading-overlay v-if="renderLoadingOverlay" />
    <Header />
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import LoadingOverlay from "@/components/general/LoadingOverlay.vue"
import Header from "@/components/sections/Header.vue"
export default {
  name: "MainMasterPage",
  components: {
    Header,
    LoadingOverlay,
  },
  props: {
    renderLoadingOverlay: {
      type: Boolean,
      default: false,
    },
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
