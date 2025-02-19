<template>
  <div class="product">
    <img class="product__img" :src="product.imgSrc" alt="Product Image" />
    <div>
      <span class="product__title">{{ product.name }}</span>
      <div class="product__price-container">
        <span v-if="hasSale" class="product__sale-price"
          >{{ product.salePrice }} ₴</span
        >

        <span class="product__price" :class="{ 'has-sale': hasSale }"
          >{{ product.price }} ₴</span
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductCard",
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
  computed: {
    hasSale() {
      return this.product.price !== this.product.salePrice
    },
  },
}
</script>

<style lang="css" scoped>
.product {
  padding: 1rem;
  background-color: rgb(48, 48, 48);
  border-radius: 10px;
  display: flex;
  gap: 1rem;
}
.product__img {
  width: 200px;
  max-height: 100%;
  object-fit: cover;
}
.product__title {
  font-size: 1.5rem;
}
.product__price-container {
  margin-top: 0.5rem;
  display: flex;
  flex-direction: column;
}
.product__sale-price {
  font-size: 1.3rem;
  color: rgb(255, 56, 56);
  font-weight: 500;
}
.product__price {
  font-size: 1.3rem;
}
.has-sale {
  font-size: 1.2rem;
  text-decoration: line-through;
  color: rgb(113, 113, 113);
}
</style>
