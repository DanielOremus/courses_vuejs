<template>
  <main-layout>
    <div class="wrapper my-16">
      <router-view name="filters" class="mb-10" />
      <products-list />
      <router-view name="editForm" class="mt-10" />
    </div>
    <template #footer>
      <Footer>
        <template #right-section>
          <span>Статус: <span class="text-green-500">відкрито</span></span>
        </template>
      </Footer>
    </template>
  </main-layout>
</template>

<script>
import Footer from "@/components/sections/Footer.vue"
import ProductsList from "@/components/products/ProductsList.vue"
export default {
  name: "ProductsView",
  components: {
    ProductsList,
    Footer,
  },
}
</script>

<style lang="scss" scoped></style>
