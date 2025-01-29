<template>
  <div>
    <h1>Списки порівнянь</h1>
    <comparisons-list
      v-for="(list, i) in listsArr"
      :key="i"
      :list-title="list.title"
      :list-items="list.items"
    ></comparisons-list>
  </div>
</template>

<script>
import ComparisonsList from "./ComparisonsList/index.vue"
export default {
  name: "ComparisonsSection",
  components: {
    ComparisonsList,
  },
  props: {
    listsArr: {
      type: Array,
      default: () => [],
    },
  },
}
</script>

<style lang="scss" scoped></style>
