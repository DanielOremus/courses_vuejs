<template>
  <div class="comparisons-container">
    <h2>{{ listTitle }}</h2>
    <span>Кількість товарів: {{ totalItemsNumber }}</span>
    <div class="comparisons-list">
      <item-card
        v-for="(item, i) in listItems"
        :key="i"
        :item-data="item"
      ></item-card>
    </div>
  </div>
</template>

<script>
import ItemCard from "./ItemCard.vue"
export default {
  name: "ComparisonsList",
  components: {
    ItemCard,
  },
  props: {
    listItems: {
      type: Array,
      default: () => [],
    },
    listTitle: {
      type: String,
      default: null,
    },
  },
  computed: {
    totalItemsNumber() {
      return this.listItems.length
    },
  },
}
</script>

<style lang="css" scoped>
.comparisons-container {
  padding: 1.5rem;
  border: 1px solid rgba(128, 128, 128, 0.504);
  border-radius: 10px;
}
.comparisons-list {
  margin-top: 1rem;
  display: flex;
  gap: 2rem;
}
</style>
