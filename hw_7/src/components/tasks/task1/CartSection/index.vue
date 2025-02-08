<template>
  <div>
    <h2>Корзина</h2>
    <cart-list @delete-from-cart="onDeleteItem"></cart-list>
    <div class="total-price">
      Разом до сплати: {{ totalItemsPrice.toFixed(2) }}
      {{ currentCurrency?.symbol }}
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex"
import CartList from "./CartList/index.vue"

export default {
  name: "CartSection",
  components: {
    CartList,
  },
  computed: {
    ...mapGetters("cart", ["totalItemsPrice"]),
    ...mapGetters("currency", ["currentCurrency"]),
  },
  methods: {
    ...mapActions("cart", ["deleteFromCart"]),
    onDeleteItem(itemId) {
      this.deleteFromCart(itemId)
    },
  },
}
</script>

<style lang="css" scoped>
.total-price {
  margin-top: 2rem;
  border-top: 2px solid;
  font-size: 1.3rem;
  font-weight: 700;
}
</style>
