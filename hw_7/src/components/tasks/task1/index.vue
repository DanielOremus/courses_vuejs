<template>
  <div class="condition-container"></div>
  <div class="main">
    {{ productsList }}
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex"
export default {
  name: "Task1",
  components: {},
  computed: {
    ...mapGetters("product", ["productsList"]),
  },
  methods: {
    ...mapActions("product", ["fetchProducts"]),
  },
  mounted() {
    this.fetchProducts()
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
