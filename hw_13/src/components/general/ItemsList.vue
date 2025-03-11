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
  @apply grid lg:grid-cols-[repeat(4,_minmax(200px,_auto))] md:grid-cols-[repeat(2,_minmax(200px,_auto))] sm:grid-cols-[repeat(1,_minmax(200px,_auto))] justify-center gap-x-10 gap-y-8;
}
</style>
