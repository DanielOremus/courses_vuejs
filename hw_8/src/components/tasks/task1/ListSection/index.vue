<template>
  <div>
    <h3 class="category-title">
      <span>{{ categoryTitle }}</span> в Україні
    </h3>
    <loading-circle v-if="isLoading"></loading-circle>
    <div v-else-if="loadingError">{{ loadingError }}</div>
    <products-list
      v-else
      :products="productsListByCategoryId(selectedCategory?.id)"
    ></products-list>
  </div>
</template>

<script>
import ProductsList from "./ProductsList/index.vue"
import LoadingCircle from "@/components/general/LoadingCircle.vue"
import { mapGetters } from "vuex"
export default {
  name: "ListSection",
  components: {
    ProductsList,
    LoadingCircle,
  },
  computed: {
    ...mapGetters("product", [
      "productsListByCategoryId",
      "isLoading",
      "loadingError",
    ]),
    ...mapGetters("category", ["selectedCategory"]),
    categoryTitle() {
      return this.selectedCategory ? this.selectedCategory.title : "Товари"
    },
  },
}
</script>

<style lang="css" scoped>
.category-title {
  margin-block: 1rem;
}
</style>
