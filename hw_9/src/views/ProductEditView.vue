<template>
  <main-master-page>
    <product-form class="product-form" :product-id="productId" />
  </main-master-page>
</template>

<script>
import { mapGetters } from "vuex"
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
    productId() {
      return this.$route.params.productId
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
