<template>
  <div class="item">
    <img :src="productData.imgSrc" />
    <div class="item-data">
      <span>{{ productData.title }}</span>
      <span :class="availabilityColor">{{ availabilityLabel }}</span>
      <h4 class="item__price">{{ productData.price }}$</h4>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductCard",
  props: {
    productData: {
      type: Object,
      default: () => ({}),
    },
  },
  computed: {
    availabilityLabel() {
      return this.productData.isAvailable ? "В наявності" : "Немає в наявності"
    },
    availabilityColor() {
      return this.productData.isAvailable ? "available" : "not-available"
    },
  },
  mounted() {
    console.log(this.productData)
  },
}
</script>

<style lang="css" scoped>
.item {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 250px;
  height: 400px;
  box-shadow: 0 0 15px 1px rgba(0, 0, 0, 0.526);
  border-radius: 10px;
  padding: 1rem;
  img {
    max-width: 200px;
    max-height: 300px;
    align-self: center;
    justify-self: center;
  }
}
.item-data {
  display: flex;
  flex-direction: column;
}
.item__price {
  font-weight: 600;
}
.available {
  color: rgb(0, 146, 0);
}
.not-available {
  color: red;
}
</style>
