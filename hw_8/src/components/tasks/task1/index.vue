<template>
  <div class="condition-container">
    Відтворити селектор товарів за зразком (дані підготуйте самостійно)
  </div>
  <div class="main">
    <category-section></category-section>
    <list-section></list-section>
  </div>
</template>

<script>
import { mapActions } from "vuex"
import ListSection from "./ListSection/index.vue"
import CategorySection from "./CategorySection/index.vue"
export default {
  name: "Task1",
  components: {
    CategorySection,
    ListSection,
  },

  methods: {
    ...mapActions("product", ["fetchProducts"]),
    ...mapActions("category", ["fetchCategories", "selectCategory"]),
  },
  mounted() {
    this.fetchCategories()
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
