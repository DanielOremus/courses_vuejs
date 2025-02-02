<template>
  <div>
    <h2>Корзина</h2>
    <cart-list
      :products="productsCartList"
      @amount-change="onAmountChange"
      @remove-item="onRemoveItem"
    ></cart-list>
  </div>
</template>

<script>
import CartList from "./CartList/index.vue"
export default {
  name: "CartSection",
  components: {
    CartList,
  },
  props: {
    productsCartList: {
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

<style lang="css" scoped></style>
