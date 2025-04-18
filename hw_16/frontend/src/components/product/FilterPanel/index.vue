<template>
  <div class="filter-panel">
    <div class="searchbar">
      <IconField>
        <InputIcon class="pi pi-search" />
        <InputText
          class="w-full"
          size="large"
          enter-key-hint="search"
          :placeholder="$t('pages.productsList.fields.search')"
          v-model="filters.name"
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
        :option-label="getTranslatedCategory"
        option-value="_id"
        :placeholder="$t('pages.productsList.fields.category')"
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
        :placeholder="$t('pages.productsList.fields.from')"
        size="large"
        type="number"
        :min="fromPrice.min"
        :max="fromPrice.max"
        fluid
        v-model.number="filters.price[0]"
      />
      <InputText
        :placeholder="$t('pages.productsList.fields.to')"
        size="large"
        type="number"
        :min="toPrice.min"
        :max="toPrice.max"
        fluid
        v-model.number="filters.price[1]"
      />
    </div>
    <div class="apply-btn">
      <Button @click="onApplyFilters" fluid>{{ $t("buttons.apply") }}</Button>
    </div>
  </div>
</template>

<script>
import { useCategoriesStore } from "@/stores/categories"
import { useProductsStore } from "@/stores/products"
import { useProductFilters } from "@/stores/productFilters"
import { mapActions, mapState } from "pinia"
export default {
  name: "FilterPanel",

  computed: {
    ...mapState(useCategoriesStore, ["categoriesList", "loading"]),
    ...mapState(useProductFilters, ["filters"]),
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
    ...mapActions(useProductFilters, ["setFilterValues"]),
    onApplyFilters() {
      this.fetchProductsByQuery()
    },
    getTranslatedCategory(category) {
      return this.$t(`categories.${category.value}`)
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
