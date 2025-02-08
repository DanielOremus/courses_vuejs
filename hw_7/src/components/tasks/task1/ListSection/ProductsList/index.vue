<template>
  <div class="products-list">
    <product-card
      v-for="product in products"
      :key="product._id"
      :product="product"
      @add-to-cart="$emit('addToCart', $event)"
    ></product-card>
  </div>
</template>

<script>
import ProductCard from "./productCard.vue"

export default {
  name: "ProductList",
  components: {
    ProductCard,
  },
  emits: ["addToCart"],
  props: {
    products: {
      type: Array,
      default: () => [],
    },
  },
}
</script>

<style lang="css" scoped>
.products-list > div {
  margin-bottom: 1rem;
}
</style>
