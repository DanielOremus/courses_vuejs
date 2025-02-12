<template>
  <div class="category-selector">
    <category-item
      v-for="category in categoriesList"
      :key="category.id"
      :category="category"
      :is-selected="category.id === categoryId"
      @select-category="onSelectCategory"
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
    modelValue: {
      type: [Number, String],
    },
  },
  computed: {
    categoryId: {
      get() {
        return this.modelValue
      },
      set(v) {
        this.$emit("update:modelValue", v)
      },
    },
  },
  methods: {
    onSelectCategory(id) {
      this.categoryId = id
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
