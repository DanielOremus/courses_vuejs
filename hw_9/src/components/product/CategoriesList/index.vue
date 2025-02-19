<template>
  <div>
    <category-item
      v-for="category in categories"
      :key="category.id"
      :category="category"
      @category-select="$emit('category-select', $event)"
    />
  </div>
</template>

<script>
import CategoryItem from "./CategoryItem.vue"
export default {
  name: "CategoriesList",
  components: {
    CategoryItem,
  },
  props: {
    categories: {
      type: Array,
      default: () => [],
    },
  },
}
</script>

<style lang="scss" scoped></style>
