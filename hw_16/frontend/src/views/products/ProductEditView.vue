<template>
  <div class="form-wrapper p-4">
    <div class="form-container md:w-2/3 lg:w-1/2 mx-auto my-[3rem]">
      <product-form />
    </div>
  </div>
</template>

<script>
import ProductForm from "@/components/product/ProductForm/index.vue"
import { useCategoriesStore } from "@/stores/categories"
import { useProductsStore } from "@/stores/products"
import { mapActions } from "pinia"
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
  methods: {
    ...mapActions(useProductsStore, ["fetchProductById"]),
    ...mapActions(useCategoriesStore, ["fetchAllCategories"]),
  },
  mounted() {
    if (this.id) {
      this.fetchProductById(this.id)
    }
    this.fetchAllCategories()
  },
}
</script>

<style lang="scss" scoped></style>
