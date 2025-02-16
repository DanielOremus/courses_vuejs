<template>
  <div>
    <loading-circle v-if="isLoading"></loading-circle>
    <div v-else-if="loadingError">{{ loadingError }}</div>
    <template v-else>
      <car-card
        v-for="car in carsList"
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
    ...mapGetters("car", ["carsList", "isLoading", "loadingError"]),
  },
  methods: {
    ...mapActions("car", ["fetchCars"]),
  },
  mounted() {
    this.fetchCars()
  },
}
</script>

<style lang="scss" scoped></style>
