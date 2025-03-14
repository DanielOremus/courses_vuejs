<template>
  <div class="pagination-list">
    <slot name="header" :totalItemsNumber="items.length">
      <span v-if="listTitle">{{ listTitle }}</span>
    </slot>
    <div class="main">
      <component
        :is="selectedListComponent"
        :current-items-list="currentItemsList"
        :start-index="startIndex"
      />
    </div>
    <div class="footer">
      <slot
        name="footer"
        :pages-number="pagesNumber"
        :current-page="currentPage"
      >
        <component
          :is="selectedPaginationComponent"
          :current-page="currentPage"
          :pages-number="pagesNumber"
          @page-change="onPageChange"
        />
      </slot>
    </div>
  </div>
</template>

<script>
import OrderedList from "./components/lists/OrderedList.vue"
import ExperienceList from "./components/lists/ExperienceList.vue"
import ButtonPagination from "./components/pagination/ButtonPagination.vue"
export default {
  name: "PaginatedList",
  components: {
    ExperienceList,
    OrderedList,
    ButtonPagination,
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
    listMode: {
      type: Number,
      default: 1,
    },
    paginationMode: {
      type: Number,
      default: 1,
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
    selectedListComponent() {
      switch (this.listMode) {
        case 1:
          return OrderedList
        case 2:
          return ExperienceList
      }
    },
    selectedPaginationComponent() {
      switch (this.paginationMode) {
        case 1:
          return ButtonPagination
        // case 2:
        //   return ExperienceList
      }
    },
  },

  methods: {
    onPageChange(newPage) {
      this.currentPage = newPage
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
