<template>
  <div class="cart-list">
    <product-card
      v-for="product in productsList"
      :key="product._id"
      :product="product"
    ></product-card>
  </div>
</template>

<script>
import ProductCard from "./ProductCard.vue"
import { mapGetters } from "vuex"
export default {
  name: "CartList",
  components: {
    ProductCard,
  },
  computed: {
    ...mapGetters("cart", ["productsList"]),
  },
}
</script>

<style lang="css" scoped>
.cart-list > div {
  margin-block: 0.5rem;
}
</style>
