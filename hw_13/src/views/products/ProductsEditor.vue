<template>
  <div class="form-container flex justify-center">
    <div class="form-wrapper min-w-96 w-1/2">
      <product-form />
    </div>
  </div>
</template>

<script>
import ProductForm from "@/components/products/ProductForm.vue"
export default {
  name: "ProductsEditor",
  components: {
    ProductForm,
  },
}
</script>

<style lang="scss" scoped></style>
