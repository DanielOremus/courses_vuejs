<template>
  <main-master-page>
    <div class="page-wrapper">
      <div class="back-arrow" @click="onBack">
        <img
          width="50"
          height="50"
          src="@/assets/icons/arrow-left-bold.svg?url"
          alt=""
        />
      </div>
      <products-section class="products-section" />
    </div>
  </main-master-page>
</template>

<script>
import ProductsSection from "@/components/product/ProductsSection.vue"
import MainMasterPage from "@/layouts/MainMasterPage.vue"
export default {
  name: "CategoryProductsView",
  components: {
    MainMasterPage,
    ProductsSection,
  },
  methods: {
    onBack() {
      this.$router.push({ name: "shop" })
    },
  },
}
</script>

<style lang="css" scoped>
.products-section {
  margin: 4rem 2rem;
}
.page-wrapper {
  position: relative;
}
.back-arrow {
  position: absolute;
  top: 1rem;
  left: 1rem;
  img {
    cursor: pointer;
  }
}
</style>
