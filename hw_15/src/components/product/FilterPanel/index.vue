<template>
  <div class="filter-panel">
    <div class="searchbar mx-auto w-full">
      <IconField>
        <InputIcon class="pi pi-search" />
        <InputText
          class="w-full"
          size="large"
          enter-key-hint="search"
          placeholder="Пошук"
          v-model="filters.searchName"
        />
      </IconField>
    </div>
    <div class="flex justify-between">
      <div class="basis-1/3 flex items-center gap-4">
        <InputText
          placeholder="Від"
          size="large"
          type="number"
          :min="fromPrice.min"
          :max="fromPrice.max"
          fluid
          v-model.number="filters.price[0]"
        />

        <InputText
          placeholder="До"
          size="large"
          type="number"
          :min="toPrice.min"
          :max="toPrice.max"
          fluid
          v-model.number="filters.price[1]"
        />
      </div>
      <div class="basis-1/3 flex justify-end gap-2">
        <MultiSelect
          name="category"
          :options="categoriesList"
          :loading="loading"
          option-label="name"
          option-value="_id"
          placeholder="Категорія"
          size="large"
          :show-toggle-all="false"
          :show-clear="true"
          :max-selected-labels="3"
          fluid
          v-model="filters.categories"
        />
      </div>
    </div>
    <div class="flex justify-end">
      <Button class="text-black mr-8" @click="onApplyFilters"
        >Застосувати</Button
      >
    </div>
  </div>
</template>

<script>
import { useCategoriesStore } from "@/stores/categories"
import { useProductsStore } from "@/stores/products"
import { mapActions, mapState } from "pinia"
export default {
  name: "FilterPanel",
  data() {
    return {
      filters: {
        price: [null, null],
        searchName: null,
        categories: [],
      },
    }
  },
  computed: {
    ...mapState(useCategoriesStore, ["categoriesList", "loading"]),
    ...mapState(useProductsStore, { productLoading: "loading" }),
    fromPrice() {
      return {
        min: 0,
        max: this.filters.price[1] || 1000,
      }
    },
    toPrice() {
      return {
        min: this.filters.price[0] || 0,
        max: 1000,
      }
    },
  },
  methods: {
    ...mapActions(useCategoriesStore, ["fetchAllCategories"]),
    ...mapActions(useProductsStore, ["fetchProductsByQuery"]),
    onApplyFilters() {
      if (!this.productLoading) {
        const query = this.getReqQueryObj()
        this.fetchProductsByQuery(query)
      }
    },
    getReqQueryObj() {
      return {
        name: this.filters.searchName,
        price: this.getPriceQuery(),
        category: this.filters.categories?.join(","),
      }
    },
    getPriceQuery() {
      const [minPrice, maxPrice] = this.filters.price
      if (minPrice && maxPrice) return `${minPrice}-${maxPrice}`
      if (minPrice) return `gte:${minPrice}`
      if (maxPrice) return `lte:${maxPrice}`
      return null
    },
  },
  mounted() {
    this.fetchAllCategories()
  },
}
//TODO: add adaptive style for panel
</script>

<style lang="css" scoped>
.filter-panel {
  @apply p-6 mx-auto flex flex-col xl:w-1/2 gap-4 bg-[rgb(28,28,28)] rounded-lg;
}
</style>
