<template>
  <div class="condition-container"></div>
  <div class="main">
    <list-section></list-section>
    <cart-section></cart-section>
  </div>
</template>

<script>
import ListSection from "./ListSection/index.vue"
import CartSection from "./CartSection/index.vue"
export default {
  name: "Task1",
  components: {
    ListSection,
    CartSection,
  },
}
</script>

<style lang="css" scoped>
.main {
  font-size: 1.2rem;
  display: flex;
  flex-direction: column;
}
</style>
