<template>
  <div class="condition-container">
    Відтворити селектор за зразком (дані підготуйте самостійно)
  </div>
  <div class="main">
    <div class="filter-panel-wrapper">
      <filter-panel class="filter-panel"></filter-panel>
    </div>
    <cars-list class="cars-list"></cars-list>
  </div>
</template>

<script>
import CarsList from "./CarsList/index.vue"
import FilterPanel from "./FilterPanel.vue"
export default {
  name: "Task2",
  components: {
    FilterPanel,
    CarsList,
  },
}
</script>

<style lang="css" scoped>
.main {
  position: relative;
  font-size: 1.2rem;
  display: flex;
  gap: 2rem;
}
.filter-panel {
  width: 250px;
  flex-shrink: 0;
  position: sticky;
  top: 1rem;
}
.cars-list {
  display: grid;
  width: 100%;
  grid-template-columns: 1fr 1fr 1fr;
  grid-auto-rows: min-content;
  justify-content: space-between;
  align-items: start;
  column-gap: 2rem;
  row-gap: 1rem;
}
</style>
