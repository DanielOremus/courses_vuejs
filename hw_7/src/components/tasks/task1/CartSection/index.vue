<template>
  <div>
    <h2 class="section-title">Корзина</h2>
    <cart-list></cart-list>
  </div>
</template>

<script>
import CartList from "./CartList/index.vue"
export default {
  name: "CartSection",
  components: {
    CartList,
  },
}
</script>

<style lang="css" scoped></style>
