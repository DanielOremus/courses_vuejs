<template>
  <div class="condition-container"></div>
  <div class="main">
    <category-section></category-section>
  </div>
</template>

<script>
import CategorySection from "./CategorySection/index.vue"
export default {
  name: "Task1",
  components: {
    CategorySection,
  },
  data() {
    return {}
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
