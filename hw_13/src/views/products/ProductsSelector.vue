<template>
  <div class="filter-panel__container">
    <div
      class="filter-panel__wrapper min-w-[20rem] w-3/5 p-6 mx-auto bg-zinc-900 rounded-xl"
    >
      <filter-panel />
    </div>
  </div>
</template>

<script>
import FilterPanel from "@/components/products/FilterPanel.vue"
export default {
  name: "ProductsSelector",
  components: {
    FilterPanel,
  },
}
</script>

<style lang="scss" scoped></style>
