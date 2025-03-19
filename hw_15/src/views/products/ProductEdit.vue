<template>
  <loading-overlay v-if="loading" />
  <div class="form-container p-4">
    <div class="form-wrapper md:w-2/3 lg:w-1/2 mx-auto mt-[3rem]">
      <product-form />
    </div>
  </div>
</template>

<script>
import ProductForm from "@/components/product/ProductForm.vue"
import { useCategoriesStore } from "@/stores/categories"
import { useProductsStore } from "@/stores/products"
import { mapActions, mapState } from "pinia"
export default {
  name: "ProductEditView",
  components: {
    ProductForm,
  },
  props: {
    id: {
      type: [String, Number],
    },
  },
  computed: {
    ...mapState(useProductsStore, ["loading"]),
  },
  methods: {
    ...mapActions(useProductsStore, ["fetchProductById"]),
    ...mapActions(useCategoriesStore, ["fetchAllCategories"]),
  },
  mounted() {
    this.fetchProductById(this.id)
    this.fetchAllCategories()
  },
}
</script>

<style lang="scss" scoped></style>
