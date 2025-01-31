<template>
  <div class="condition-container">Реалізувати список з ягодами</div>
  <div class="main">
    <berries-list></berries-list>
  </div>
</template>

<script>
import BerriesList from "./BerriesList/index.vue"
export default {
  name: "Task1",
  components: {
    BerriesList,
  },
  computed: {},
}
</script>

<style lang="css" scoped>
.main {
  font-size: 1.2rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
}
</style>
