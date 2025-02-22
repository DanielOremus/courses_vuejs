<template>
  <div>
    <progress-circle v-if="isLoading" />
    <div v-else-if="loadingError">{{ loadingError }}</div>
    <products-list
      v-else
      class="products-list"
      :products="getProductsByCategoryId(currentCategoryId)"
      @product-edit="onEditProduct"
      @product-delete="onDeleteProduct"
    />
  </div>
</template>

<script>
import ProgressCircle from "@/components/general/ProgressCircle.vue"
import ProductsList from "@/components/product/ProductsList/index.vue"
import { mapGetters, mapActions } from "vuex"
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
  methods: {
    ...mapActions("product", ["deleteProductById"]),
    onEditProduct(productId) {
      this.$router.push({
        name: "editProduct",
        params: { productId },
      })
    },
    onDeleteProduct(productId) {
      this.deleteProductById(productId)
    },
  },
}
</script>

<style lang="css" scoped>
.products-list {
  display: grid;
  grid-template-columns: repeat(3, minmax(200px, 1fr));
  grid-auto-rows: min-content;
  align-items: start;
  justify-content: center;
  gap: 3rem;
}
@media only screen and (max-width: 1200px) {
  .products-list {
    grid-template-columns: repeat(2, minmax(200px, 1fr));
  }
}
</style>
