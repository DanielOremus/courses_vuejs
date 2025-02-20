<template>
  <RouterView />
</template>

<script>
import { mapActions } from "vuex"
export default {
  methods: {
    ...mapActions("product", ["fetchProducts"]),
  },
  mounted() {
    this.fetchProducts()
  },
}
</script>

<style scoped></style>
