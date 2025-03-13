<template>
  <div class="pagination-list">
    <slot name="header" :totalItemsNumber="items.length">
      <span v-if="listTitle">{{ listTitle }}</span>
    </slot>
    <div class="main">
      <slot :current-items="currentItemsList">
        <ol :start="startIndex + 1" class="items-list list-inside list-decimal">
          <li v-for="item in currentItemsList" :key="item.id">
            {{ item.name }}
          </li>
        </ol>
      </slot>
    </div>
    <div class="footer">
      <slot
        name="footer"
        :pages-number="pagesNumber"
        :current-page="currentPage"
      >
        <div class="flex justify-center gap-4">
          <Button
            v-for="page in pagesNumber"
            :pt="{ root: 'text-lg aspect-square' }"
            :disabled="currentPage === page - 1"
            @click="onPageChange(page)"
            >{{ page }}</Button
          >
        </div>
      </slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "PaginatedList",
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
      currentPage: this.startPage,
    }
  },
  computed: {
    currentItemsList() {
      return this.items.slice(this.startIndex, this.startIndex + this.perPage)
    },
    startIndex() {
      return this.currentPage * this.perPage
    },
    pagesNumber() {
      return Math.ceil(this.items.length / this.perPage)
    },
  },

  methods: {
    onPageChange(page) {
      this.currentPage = page - 1
    },
  },
  //Варіант через watch для оновлення сторінки
  watch: {
    startPage(newValue) {
      this.currentPage = newValue
    },
  },
}
</script>

<style lang="css" scoped>
.pagination-list {
  @apply flex flex-col gap-6 p-8 bg-[rgb(35,35,35)] text-xl rounded-xl;
}
</style>
