<template>
  <div>
    <filter-item
      v-for="(optionsObj, i) in filtersOptionsList"
      :key="i"
      :select-options="optionsObj.list"
      :selector-title="optionsObj.title"
      v-model="selectedOptions[i]"
    ></filter-item>
  </div>
</template>

<script>
const carBrands = [
  { id: 1, title: "Toyota" },
  { id: 2, title: "Ford" },
  { id: 3, title: "Honda" },
  { id: 4, title: "Chevrolet" },
  { id: 5, title: "BMW" },
  { id: 6, title: "Audi" },
  { id: 7, title: "Mercedes-Benz" },
]

const carBodyTypes = [
  { id: 1, title: "Седан" },
  { id: 2, title: "Хетчбек" },
  { id: 3, title: "Купе" },
  { id: 4, title: "Універсал" },
  { id: 5, title: "Спорткар" },
  { id: 6, title: "Кросовер" },
  { id: 7, title: "Мінівен" },
]

const fuelTypes = [
  { id: 1, title: "Бензин" },
  { id: 2, title: "Дизель" },
  { id: 3, title: "Гібрид" },
  { id: 4, title: "Електрика" },
  { id: 5, title: "Газ" },
]
import FilterItem from "./FilterItem.vue"
export default {
  name: "FilterSelector",
  components: {
    FilterItem,
  },
  data() {
    return {
      selectedOptions: new Array(3).fill(null),
    }
  },
  computed: {
    filtersOptionsList() {
      return [
        {
          title: "Виберіть тип кузова",
          list: [{ id: null, title: "Оберіть тип кузова" }, ...carBodyTypes],
        },
        {
          title: "Виберіть марку авто",
          list: [{ id: null, title: "Оберіть марку авто" }, ...carBrands],
        },
        {
          title: "Виберіть тип палива",
          list: [{ id: null, title: "Оберіть тип палива" }, ...fuelTypes],
        },
      ]
    },
  },
}
</script>

<style lang="scss" scoped></style>
