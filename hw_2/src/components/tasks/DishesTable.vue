<template>
  <table class="dish-table">
    <tr>
      <th>{{ title }}</th>
    </tr>
    <tr v-for="dish in dishes" :key="dish.id">
      <td>
        <dish-item :action-btn="actionBtn" :dish="dish"></dish-item>
      </td>
    </tr>
  </table>
</template>

<script>
import DishItem from "./DishItem.vue"
export default {
  name: "DishesTable",
  components: {
    DishItem,
  },
  props: {
    title: {
      type: String,
      required: true,
    },
    dishes: {
      type: Array,
      required: true,
    },
    actionBtn: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style lang="css" scoped>
.dish-table {
  height: fit-content;
  border: 2px solid grey;
  flex-basis: 250px;
  td,
  th {
    border: 2px solid grey;
    padding: 0.4rem 0.5rem;
  }
}
</style>
