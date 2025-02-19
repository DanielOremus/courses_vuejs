<template>
  <div>
    <progress-circle v-if="isLoading" />
    <div v-else-if="loadingError">{{ loadingError }}</div>
    <products-list
      v-else
      class="products-list"
      :products="getProductsByCategoryId(currentCategoryId)"
    />
  </div>
</template>

<script>
import ProgressCircle from "@/components/general/ProgressCircle.vue"
import ProductsList from "@/components/product/ProductsList/index.vue"
import { mapGetters } from "vuex"
export default {
  name: "ProductsSection",
  components: {
    ProductsList,
    ProgressCircle,
  },

  computed: {
    ...mapGetters("product", [
      "getProductsByCategoryId",
      "isLoading",
      "loadingError",
    ]),
    currentCategoryId() {
      return this.$route.params.categoryId
    },
  },
}
</script>

<style lang="css" scoped>
.products-list {
  display: grid;
  grid-template-columns: repeat(3, 500px);
  grid-auto-rows: min-content;
  align-items: start;
  justify-content: center;
  gap: 3rem;
}
</style>
