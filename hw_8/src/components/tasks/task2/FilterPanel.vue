<template>
  <div class="panel-container">
    <item-selector
      class="vehicle-type-selector"
      :items="filterValues.typesList"
      :selector-title="typeSelectorTitle"
      v-model="vehicleType"
    ></item-selector>
    <multi-selector
      :items="filterValues.bodyTypes"
      :selector-title="bodyTypeSelectorTitle"
      v-model="vehicleBodyType"
    ></multi-selector>
    <item-selector
      class="vehicle-brand-selector"
      :items="filterValues.brandsList"
      :selector-title="brandSelectorTitle"
      v-model="vehicleBrand"
    ></item-selector>
    <item-selector
      class="vehicle-model-selector"
      :items="modelsList"
      :selector-title="modelSelectorTitle"
      v-model="vehicleModel"
    ></item-selector>
    <range-selector
      :selector-title="yearSelectorTitle"
      v-model="vehicleYear"
      :allowed-range="allowedYearRange"
    ></range-selector>
  </div>
</template>

<script>
import ItemSelector from "@/components/general/ItemSelector.vue"
import MultiSelector from "@/components/general/MultiSelector.vue"
import RangeSelector from "@/components/general/RangeSelector.vue"
import { mapActions, mapGetters } from "vuex"
export default {
  name: "FilterPanel",
  components: {
    ItemSelector,
    MultiSelector,
    RangeSelector,
  },
  data() {
    return {
      typeSelectorTitle: "Тип транспорта",
      bodyTypeSelectorTitle: "Тип кузова",
      brandSelectorTitle: "Марка",
      modelSelectorTitle: "Модель",
      yearSelectorTitle: "Рік",
      allowedYearRange: [2010, 2024],
    }
  },
  computed: {
    ...mapGetters("carFilters", [
      "filterValues",
      "modelsListByBrandId",
      "selectedFilters",
    ]),
    modelsList() {
      return this.modelsListByBrandId(this.vehicleBrand)
    },
    vehicleType: {
      get() {
        return this.selectedFilters.type
      },
      set(value) {
        this.setFilterPropValue({ name: "type", value })
      },
    },
    vehicleBodyType: {
      get() {
        return this.selectedFilters.bodyType
      },
      set(value) {
        this.setFilterPropValue({ name: "bodyType", value })
      },
    },
    vehicleBrand: {
      get() {
        return this.selectedFilters.brand
      },
      set(value) {
        this.vehicleModel = null
        this.setFilterPropValue({ name: "brand", value })
      },
    },
    vehicleModel: {
      get() {
        return this.selectedFilters.model
      },
      set(value) {
        this.setFilterPropValue({ name: "model", value })
      },
    },
    vehicleYear: {
      get() {
        return this.selectedFilters.year
      },
      set(value) {
        this.setFilterPropValue({ name: "year", value })
      },
    },
  },
  methods: {
    ...mapActions("carFilters", ["fetchFilterValues", "setFilterPropValue"]),
  },
  mounted() {
    this.fetchFilterValues()
  },
}
</script>

<style lang="css" scoped>
.panel-container {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
</style>
