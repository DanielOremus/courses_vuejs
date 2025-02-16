<template>
  <div class="car">
    <span class="car__title">{{ carData.brand }} {{ carData.model }}</span>
    <span class="car__vin">{{ carData.vin }}</span>
    <div class="car__price-container">
      <span class="price-usd">{{ carData.priceUSD }} $</span>
      <span class="price-uah">{{ carData.priceUAH }} грн.</span>
    </div>
    <div class="car__other-data-container">
      <div>
        <span>{{ getThousands(carData.mileage) }} тис. км</span>
        <span>{{ carData.color }}</span>
      </div>
      <div>
        <span>{{ carData.fuelType }}</span>
        <span>{{ carData.transmission }}</span>
      </div>
      <div></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CarCard",
  props: {
    carData: {
      type: Object,
      required: true,
    },
  },
  methods: {
    getThousands(number) {
      return number / 1000
    },
  },
}
</script>

<style lang="css" scoped>
.car {
  display: flex;
  flex-direction: column;
}
.car__title {
  font-size: 1.3rem;
  color: rgb(60, 141, 255);
}
.car__vin {
  font-size: 1rem;
  color: rgb(85, 85, 85);
}
.car__price-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.price-usd {
  font-size: 1.8rem;
  color: rgb(0, 194, 113);
}
.price-uah {
  font-size: 1.2rem;
  color: rgb(156, 156, 156);
}
.car__other-data-container > * {
  display: flex;
  justify-content: space-between;
}
</style>
