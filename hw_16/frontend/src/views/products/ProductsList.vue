<template>
  <div class="page-wrapper my-[3rem] flex flex-col gap-8">
    <div class="panel-wrapper">
      <div class="panel-container">
        <filter-panel />
      </div>
    </div>
    <div class="list-wrapper">
      <products-list />
    </div>
  </div>
</template>

<script>
import FilterPanel from "@/components/product/FilterPanel/index.vue"
import ProductsList from "@/components/product/ProductsList/index.vue"
import { useProductFilters } from "@/stores/productFilters"
import { mapActions } from "pinia"
export default {
  name: "ProductsListView",
  components: {
    ProductsList,
    FilterPanel,
  },

  methods: {
    ...mapActions(useProductFilters, ["resetFilters"]),
  },
  beforeRouteLeave() {
    this.resetFilters()
  },
}
</script>

<style lang="css" scoped>
.list-wrapper {
  @apply mx-auto;
}
.panel-container {
  @apply mx-auto sm:w-5/6 lg:w-2/3 xl:w-1/2;
}
</style>
