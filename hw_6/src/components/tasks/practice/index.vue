<template>
  <div class="condition-container"></div>
  <div class="main">
    <filter-selector></filter-selector>
  </div>
</template>

<script>
import FilterSelector from "./FilterSelector/index.vue"
export default {
  name: "Practice",
  components: {
    FilterSelector,
  },
  data() {
    return {}
  },
  computed: {},
}
</script>

<style lang="css" scoped>
.main {
  font-size: 1.2rem;
  display: flex;
  flex-direction: column;
}
</style>
