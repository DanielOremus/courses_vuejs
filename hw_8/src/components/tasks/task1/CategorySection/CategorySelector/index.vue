<template>
  <div class="category-selector">
    <category-item
      v-for="category in categoriesList"
      :key="category.id"
      :category="category"
    >
    </category-item>
  </div>
</template>

<script>
import CategoryItem from "./CategoryItem.vue"
export default {
  name: "CategorySelector",
  components: {
    CategoryItem,
  },
  props: {
    categoriesList: {
      type: Array,
      default: () => [],
    },
  },
}
</script>

<style lang="css" scoped>
.category-selector {
  display: flex;
  justify-content: space-between;
}
</style>
