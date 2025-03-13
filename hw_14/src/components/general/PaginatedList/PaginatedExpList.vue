<template>
  <paginated-list
    list-title="Стаж працівників"
    :items="items"
    :per-page="perPage"
    :start-page="startPage"
  >
    <template #default="{ currentItems }">
      <div v-for="item in currentItems">
        {{ item.name }} - {{ item.experience }}
      </div>
    </template>
  </paginated-list>
</template>

<script>
import PaginatedList from "./index.vue"
export default {
  name: "PaginatedExpList",
  components: {
    PaginatedList,
  },
  props: {
    items: {
      type: Array,
      default: () => [],
    },
    listTitle: {
      type: String,
      default: null,
    },
    perPage: {
      type: Number,
      default: 5,
    },
    startPage: {
      type: Number,
      default: 0,
    },
  },
}
</script>

<style lang="scss" scoped></style>
