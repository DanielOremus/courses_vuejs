<template>
  <div class="berries-container">
    <berry-card
      v-for="berry in berriesList"
      :key="berry.id"
      :berry="berry"
    ></berry-card>
  </div>
</template>

<script>
import BerryCard from "./BerryCard.vue"
export default {
  name: "BerryList",
  components: {
    BerryCard,
  },
  props: {
    berriesList: {
      type: Array,
      default: () => [],
    },
  },
}
</script>

<style lang="css" scoped>
.berries-container {
  display: flex;
  gap: 1.5rem;
}
</style>
