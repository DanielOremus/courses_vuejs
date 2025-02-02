<template>
  <div class="products-list">
    <product-card
      v-for="product in products"
      :key="product.id"
      :product="product"
      @add-to-cart="onCart"
    ></product-card>
  </div>
</template>

<script>
import ProductCard from "./ProductCard.vue"
export default {
  name: "ProductsList",
  components: {
    ProductCard,
  },
  props: {
    products: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    onCart(productId) {
      this.$emit("add-to-cart", productId)
    },
  },
}
</script>

<style lang="css" scoped>
.products-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
</style>
