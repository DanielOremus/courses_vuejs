<template>
  <div class="product-list">
    <product-card
      v-for="product in productsList"
      :key="product._id"
      :product="product"
      @delete="onProductDelete"
    />
  </div>
</template>

<script>
import { useProductsStore } from "@/stores/products"
import { mapActions, mapState } from "pinia"
import ProductCard from "./ProductCard.vue"
export default {
  name: "ProductsList",
  components: {
    ProductCard,
  },
  computed: {
    ...mapState(useProductsStore, ["productsList", "loading"]),
  },
  methods: {
    ...mapActions(useProductsStore, ["fetchProductsByQuery", "deleteProduct"]),
    onProductDelete(prodId) {
      this.deleteProduct(prodId)
    },
  },
  mounted() {
    this.fetchProductsByQuery()
  },
}
</script>

<style lang="css" scoped>
.product-list {
  @apply grid grid-cols-[repeat(1,280px)] md:grid-cols-[repeat(2,280px)] lg:grid-cols-[repeat(3,280px)] xl:grid-cols-[repeat(4,280px)] justify-center gap-8;
}
</style>
