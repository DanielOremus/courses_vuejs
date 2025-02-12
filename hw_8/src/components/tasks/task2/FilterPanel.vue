<template>
  <div>
    <item-selector
      class="vehicle-type-selector"
      :items="filterValues.typesList"
      :selector-title="vehicleTypeSelector.title"
      v-model="vehicleTypeSelector.value"
    ></item-selector>
    <multi-selector
      :items="filterValues.bodyTypes"
      :selector-title="vehicleBodyTypeSelector.title"
      v-model="vehicleBodyTypeSelector.value"
    ></multi-selector>
    <item-selector
      class="vehicle-brand-selector"
      :items="filterValues.brandsList"
      :selector-title="vehicleBrandSelector.title"
      v-model="vehicleBrandSelector.value"
    ></item-selector>
    <item-selector
      class="vehicle-model-selector"
      :items="modelsList"
      :selector-title="vehicleModelSelector.title"
      v-model="vehicleModelSelector.value"
    ></item-selector>
  </div>
</template>

<script>
import ItemSelector from "@/components/general/ItemSelector.vue"
import MultiSelector from "@/components/general/MultiSelector.vue"
import { mapActions, mapGetters } from "vuex"
export default {
  name: "FilterPanel",
  components: {
    ItemSelector,
    MultiSelector,
  },
  data() {
    return {
      vehicleTypeSelector: {
        title: "Тип транспорту",
        value: null,
      },
      vehicleBodyTypeSelector: {
        title: "Тип кузова",
        value: [],
      },
      vehicleBrandSelector: {
        title: "Марка",
        value: null,
      },
      vehicleModelSelector: {
        title: "Модель",
        value: null,
      },
    }
  },
  computed: {
    ...mapGetters("carFilters", ["filterValues", "modelsListByBrandId"]),
    modelsList() {
      return this.modelsListByBrandId(this.vehicleBrandSelector.value)
    },
  },
  watch: {
    "vehicleBrandSelector.value"() {
      this.vehicleModelSelector.value = null
    },
  },
  methods: {
    ...mapActions("carFilters", ["fetchFilterValues"]),
  },
  mounted() {
    this.fetchFilterValues()
  },
}
</script>

<style lang="css" scoped></style>
