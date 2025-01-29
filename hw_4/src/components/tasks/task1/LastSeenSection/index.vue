<template>
  <div>
    <h1>Останні переглянуті товари</h1>
    <products-list :list-items="listItems"></products-list>
  </div>
</template>

<script>
import ProductsList from "./ProductsList/index.vue"
export default {
  name: "LastSeenSection",
  components: {
    ProductsList,
  },
  props: {
    listItems: {
      type: Array,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped></style>
