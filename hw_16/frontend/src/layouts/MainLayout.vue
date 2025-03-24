<template>
  <loading-overlay v-if="renderLoading" />
  <div class="main-layout flex-grow flex flex-col">
    <Header />
    <div class="content flex-grow">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import Header from "@/components/sections/Header/index.vue"
export default {
  name: "MainLayout",
  components: {
    Header,
  },
  props: {
    renderLoading: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style lang="scss" scoped></style>
