<template>
  <div class="cart-list">
    <cart-item
      v-for="product in products"
      :key="product.id"
      :product="product"
      @amount-change="onAmountChange"
      @remove-item="onRemoveItem"
    ></cart-item>
  </div>
</template>

<script>
import CartItem from "./CartItem.vue"
export default {
  name: "CartList",
  components: {
    CartItem,
  },
  props: {
    products: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    onAmountChange(payload) {
      this.$emit("amount-change", payload)
    },
    onRemoveItem(productId) {
      this.$emit("remove-item", productId)
    },
  },
}
</script>

<style lang="css" scoped>
.cart-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
</style>
