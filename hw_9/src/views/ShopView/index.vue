<template>
  <main-master-page>
    <category-section class="category-section" />
  </main-master-page>
</template>

<script>
import CategorySection from "@/components/product/CategorySection.vue"
import MainMasterPage from "@/layouts/MainMasterPage.vue"
import { mapActions } from "vuex"
export default {
  name: "ShopView",
  components: {
    MainMasterPage,
    CategorySection,
  },
  methods: {
    ...mapActions("product", ["fetchProducts"]),
  },
  mounted() {
    this.fetchProducts()
  },
}
</script>

<style lang="css" scoped>
.category-section {
  align-self: center;
}
</style>
