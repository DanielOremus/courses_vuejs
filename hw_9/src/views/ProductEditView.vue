<template>
  <main-master-page>
    <product-form
      class="product-form"
      :init-product-data="productObj"
      :categories-list="categories"
      @form-submit="onSubmit"
      @form-cancel="onCancel"
    />
  </main-master-page>
</template>

<script>
import { mapGetters, mapActions } from "vuex"
import ProductForm from "@/components/product/ProductForm.vue"
import MainMasterPage from "@/layouts/MainMasterPage.vue"
export default {
  name: "ProductEditView",
  components: {
    ProductForm,
    MainMasterPage,
  },
  computed: {
    ...mapGetters("product", ["getProductById"]),
    ...mapGetters("category", ["categoriesList"]),
    productId() {
      return this.$route.params.productId
    },
    productObj() {
      return this.getProductById(this.$route.params.productId)
    },
    categories() {
      return [{ id: null, name: "Оберіть" }, ...this.categoriesList]
    },
  },
  methods: {
    ...mapActions("product", ["createProduct", "updateProductById"]),
    onCancel({ category }) {
      if (this.productId) {
        this.$router.push({
          name: "products",
          params: { categoryId: category },
        })
      } else this.$router.push({ name: "shop" })
    },
    onSubmit(productData) {
      if (this.productId) this.updateProductById(productData)
      else this.createProduct(productData)
      this.$router.push({
        name: "products",
        params: { categoryId: productData.category },
      })
    },
  },
}
</script>

<style lang="css" scoped>
.product-form {
  position: absolute;
  left: 50%;
  top: 50%;
  translate: -50% -50%;
}
</style>
