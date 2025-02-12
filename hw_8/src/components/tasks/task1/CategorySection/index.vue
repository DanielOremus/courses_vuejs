<template>
  <div class="section-container">
    <h3>Категорії</h3>
    <loading-circle v-if="isLoading"> </loading-circle>
    <div v-else-if="loadingError">{{ loadingError }}</div>
    <category-selector
      v-else
      :categories-list="categoriesList"
      v-model="selectedCategoryId"
    ></category-selector>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex"
import CategorySelector from "./CategorySelector/index.vue"
import LoadingCircle from "@/components/general/LoadingCircle.vue"

export default {
  name: "CategorySection",
  components: {
    CategorySelector,
    LoadingCircle,
  },
  data() {
    return {
      selectedCategoryId: null,
    }
  },
  computed: {
    ...mapGetters("category", [
      "categoriesList",
      "isLoading",
      "loadingError",
      "selectedCategory",
    ]),
  },
  watch: {
    selectedCategoryId(newValue) {
      this.onSelectCategory(newValue)
    },
  },
  methods: {
    ...mapActions("category", ["selectCategory"]),
    onSelectCategory(id) {
      this.selectCategory(id)
    },
  },
}
</script>

<style lang="css" scoped>
.section-container {
  background-color: rgb(11, 11, 11);
  padding: 1rem 2rem;
  border-radius: 1rem;
}
</style>
