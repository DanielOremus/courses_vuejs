<template>
  <paginated-list
    :items="items"
    :per-page="perPage"
    :start-page="outerCurrentPage"
  >
    <!--варіант через ключ для оновлення сторінки :key="outerCurrentPage" -->
    <template #header="{ totalItemsNumber }">
      <span v-if="listTitle"> {{ listTitle }}</span>
      <span>Всього - {{ totalItemsNumber }} ос.</span>
    </template>
    <template #default="{ currentItems }">
      <div v-for="item in currentItems" :key="item.id">
        {{ item.name }} - {{ item.experience }}
      </div>
    </template>
    <template #footer="{ pagesNumber, currentPage }">
      <div class="flex justify-center gap-[7rem]">
        <Button
          icon="pi pi-arrow-circle-left text-2xl"
          variant="text"
          :disabled="currentPage === 0"
          :pt="{
            root: 'aspect-square',
          }"
          @click="outerCurrentPage--"
        />

        <Button
          icon="pi pi-arrow-circle-right text-2xl"
          variant="text"
          :disabled="currentPage === pagesNumber - 1"
          :pt="{
            root: 'aspect-square',
          }"
          @click="outerCurrentPage++"
        />
      </div>
    </template>
  </paginated-list>
</template>

<script>
import PaginatedList from "./index.vue"
export default {
  name: "PaginatedTotalList",
  components: {
    PaginatedList,
  },
  props: {
    listTitle: {
      type: String,
      default: null,
    },
    items: {
      type: Array,
      default: () => [],
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
  data() {
    return {
      outerCurrentPage: this.startPage,
    }
  },
}
</script>

<style lang="scss" scoped></style>
