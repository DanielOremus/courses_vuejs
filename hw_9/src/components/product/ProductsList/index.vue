<template>
  <div>
    <product-card
      v-for="product in products"
      :key="product.id"
      :product="product"
      @product-edit="$emit('product-edit', $event)"
      @product-delete="$emit('product-delete', $event)"
    />
  </div>
</template>

<script>
import ProductCard from "./ProductCard.vue"
export default {
  name: "ProductsList",
  emits: ["product-edit", "product-delete"],
  components: {
    ProductCard,
  },
  props: {
    products: {
      type: Array,
      default: () => [],
    },
  },
}
</script>

<style lang="scss" scoped></style>
