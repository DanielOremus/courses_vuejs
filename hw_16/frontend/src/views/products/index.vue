<template>
  <main-layout :render-loading="loading">
    <router-view></router-view>
  </main-layout>
</template>

<script>
import { useProductsStore } from "@/stores/products"
import { mapState } from "pinia"
export default {
  name: "ProductsView",
  computed: {
    ...mapState(useProductsStore, ["loading"]),
  },
}
</script>

<style lang="scss" scoped></style>
