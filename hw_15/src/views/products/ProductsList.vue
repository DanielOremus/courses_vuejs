<template>
  <div></div>
</template>

<script>
import { useProductsStore } from "@/stores/products"
import { mapActions } from "pinia"
export default {
  name: "ProductsListView",
  methods: {
    ...mapActions(useProductsStore, ["fetchAllProducts"]),
  },
  mounted() {
    this.fetchAllProducts()
  },
}
</script>

<style lang="scss" scoped></style>
