<template>
  <div class="products-list">
    <product-card
      v-for="(product, i) in listItems"
      :key="i"
      :product-data="product"
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
    listItems: {
      type: Array,
      default: () => [],
    },
  },
}
</script>

<style lang="css" scoped>
.products-list {
  display: flex;
  border: 1px solid rgba(128, 128, 128, 0.504);
  border-radius: 10px;
  gap: 2rem;
  padding: 1.5rem;
}
</style>
