<template>
  <div>
    <div v-if="isLoading">Loading</div>
    <div v-else-if="loadingError">{{ loadingError }}</div>
    <category-selector
      v-else
      :categories-list="categoriesList"
    ></category-selector>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex"
import CategorySelector from "./CategorySelector/index.vue"
export default {
  name: "CategorySection",
  components: {
    CategorySelector,
  },
  computed: {
    ...mapGetters("category", ["categoriesList", "isLoading", "loadingError"]),
  },
  methods: {
    ...mapActions("category", ["fetchCategories"]),
  },
  mounted() {
    this.fetchCategories()
  },
}
</script>

<style lang="scss" scoped></style>
