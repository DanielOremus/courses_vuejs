<template>
  <div class="condition-container">
    Відтворити селектор за зразком (дані підготуйте самостійно)
  </div>
  <div class="main">
    <filter-panel class="filter-panel"></filter-panel>
  </div>
</template>

<script>
import FilterPanel from "./FilterPanel.vue"
export default {
  name: "Task2",
  components: {
    FilterPanel,
  },
}
</script>

<style lang="css" scoped>
.main {
  font-size: 1.2rem;
  display: flex;
  flex-direction: column;
}
.filter-panel {
  width: 250px;
}
</style>
