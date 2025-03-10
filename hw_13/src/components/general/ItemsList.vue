<template>
  <div class="items-list__container">
    <h1 v-if="title" class="text-2xl mb-10 text-center">{{ title }}</h1>
    <div class="items-list">
      <slot>
        <item-card v-for="item in items" :key="item.id" :item="item" />
      </slot>
    </div>
  </div>
</template>

<script>
import ItemCard from "./ItemCard.vue"
export default {
  name: "ItemsList",
  components: {
    ItemCard,
  },
  props: {
    items: {
      type: Array,
      default: () => [],
    },
    title: {
      type: String,
      default: null,
    },
  },
}
</script>

<style lang="css" scoped>
.items-list {
  @apply grid justify-center gap-x-10 gap-y-8;
  grid-template-columns: repeat(4, minmax(200px, auto));
}
</style>
