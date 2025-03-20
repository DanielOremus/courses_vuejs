<template>
  <div class="filter-panel">
    <div class="searchbar">
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
    <div class="price-slider">
      <Slider
        range
        class="w-full"
        :min="fromPrice.min"
        :max="toPrice.max"
        v-model="filters.price"
      />
    </div>
    <div class="category-selector">
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
    <div class="price-fields">
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
    <div class="apply-btn">
      <Button @click="onApplyFilters" fluid>Застосувати</Button>
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
</script>

<style lang="css" scoped>
.filter-panel {
  @apply p-6 grid grid-cols-1 grid-rows-[repeat(3,auto)] gap-4 bg-[rgb(28,28,28)] rounded-lg;
  grid-template-areas: "first" "second" "fourth" "third" "fifth";
}
.searchbar {
  grid-area: first;
}
.price-slider {
  @apply px-4 flex items-center h-[47px];
  grid-area: second;
}
.category-selector {
  grid-area: third;
}
.price-fields {
  @apply flex gap-4;
  grid-area: fourth;
}
.apply-btn {
  @apply self-center;
  grid-area: fifth;
}
@screen md {
  .filter-panel {
    @apply grid-cols-2;
    grid-template-areas: "first first" "second third" "fourth fifth";
  }
}
</style>
