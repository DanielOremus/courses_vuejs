<template>
  <div class="cart-list">
    <div v-if="!cartItems.length">Схоже, ви ще не додали жоден товар</div>
    <cart-item
      v-else
      v-for="product in cartItems"
      :key="product._id"
      :product="product"
      @delete-from-cart="$emit('deleteFromCart', $event)"
    ></cart-item>
  </div>
</template>

<script>
import CartItem from "./CartItem.vue"
import { mapGetters } from "vuex"
export default {
  name: "CartList",
  components: {
    CartItem,
  },
  emits: ["deleteFromCart"],
  computed: {
    ...mapGetters("cart", ["cartItems"]),
  },
}
</script>

<style lang="css" scoped>
.cart-list > div {
  margin-block: 0.5rem;
}
</style>
