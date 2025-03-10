<template>
  <items-list :items="productsList" title="Оберіть продукти" />
</template>

<script>
import { mapState } from "pinia"
import { useProductsStore } from "@/stores/products"
import ItemsList from "../general/ItemsList.vue"
export default {
  name: "ProductsList",
  components: {
    ItemsList,
  },
  computed: {
    ...mapState(useProductsStore, ["productsList"]),
  },
}
</script>

<style lang="css" scoped></style>
