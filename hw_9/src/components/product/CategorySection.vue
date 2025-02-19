<template>
  <div>
    <progress-circle v-if="isLoading" />
    <div v-else-if="loadingError">{{ loadingError }}</div>
    <categories-list
      v-else
      class="categories-list"
      :categories="categoriesList"
      @category-select="onCategorySelect"
    />
  </div>
</template>

<script>
import ProgressCircle from "@/components/general/ProgressCircle.vue"
import CategoriesList from "@/components/product/CategoriesList/index.vue"
import { mapActions, mapGetters } from "vuex"
export default {
  name: "CategorySection",
  components: {
    CategoriesList,
    ProgressCircle,
  },
  computed: {
    ...mapGetters("category", ["categoriesList", "isLoading", "loadingError"]),
  },
  methods: {
    ...mapActions("category", ["fetchCategories"]),
    onCategorySelect(categoryId) {
      this.$router.push({ name: "products", params: { categoryId } })
    },
  },
  mounted() {
    this.fetchCategories()
  },
}
</script>

<style lang="css" scoped>
.categories-list {
  display: flex;
  justify-content: space-around;
}
</style>
