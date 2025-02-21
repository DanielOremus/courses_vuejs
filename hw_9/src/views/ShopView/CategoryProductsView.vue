<template>
  <main-master-page>
    <div class="content-wrapper">
      <router-link :to="{ name: 'shop' }">
        <div class="arrow-icon-container">
          <i class="bi bi-arrow-left-square-fill arrow"></i>
        </div>
      </router-link>
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
  margin: 4rem;
}
.content-wrapper {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.arrow-icon-container {
  position: absolute;
  top: 1rem;
  left: 1rem;
  color: rgb(75, 75, 75);
  font-size: 1.6rem;
  transition: color 0.15s ease-out;
  cursor: pointer;
}
.arrow-icon-container:hover {
  color: rgb(119, 119, 119);
}
</style>
