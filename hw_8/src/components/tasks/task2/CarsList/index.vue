<template>
  <div>
    <loading-circle v-if="isLoading" class="circle"></loading-circle>
    <div v-else-if="loadingError">
      {{ loadingError }}
    </div>
    <div v-else-if="!filteredCarsList.length" class="not-found">
      Вибачте, ми не знайшли шуканий транспорт
    </div>
    <template v-else>
      <car-card
        v-for="car in filteredCarsList"
        :key="car.id"
        :car-data="car"
      ></car-card>
    </template>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex"
import LoadingCircle from "@/components/general/LoadingCircle.vue"
import CarCard from "./CarCard.vue"
export default {
  name: "CarsList",
  components: {
    LoadingCircle,
    CarCard,
  },
  computed: {
    ...mapGetters("car", [
      "carsList",
      "filteredCarsList",
      "isLoading",
      "loadingError",
    ]),
  },
  methods: {
    ...mapActions("car", ["fetchCars"]),
  },
  mounted() {
    this.fetchCars()
  },
}
</script>

<style lang="css" scoped>
.circle,
.not-found {
  grid-column: 1/-1;
}
.not-found {
  text-align: center;
}
</style>
