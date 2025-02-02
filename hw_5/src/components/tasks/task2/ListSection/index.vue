<template>
  <div>
    <h2>Список товарів</h2>
    <products-list
      :products="productsList"
      @add-to-cart="onCart"
    ></products-list>
  </div>
</template>

<script>
import ProductsList from "./ProductsList/index.vue"
export default {
  name: "ListSection",
  components: {
    ProductsList,
  },
  props: {
    productsList: {
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

<style lang="css" scoped></style>
