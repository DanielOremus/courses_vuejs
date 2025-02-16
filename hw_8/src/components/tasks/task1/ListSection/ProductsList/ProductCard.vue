<template>
  <div class="card">
    <div class="card__img-container">
      <img :src="product.imgSrc" alt="product-image" class="card__img" />
    </div>
    <div class="product">
      <span class="product__title"> {{ product.name }} </span>
      <span v-if="hasSale" class="product__sale-price"
        >{{ product.salePrice }} ₴</span
      >
      <span :class="oldPriceClass">{{ product.price }} ₴</span>
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
    oldPriceClass() {
      return this.hasSale ? "product__old-price" : "product__price"
    },
    hasSale() {
      return this.product.salePrice !== this.product.price
    },
  },
}
</script>

<style lang="css" scoped>
.card {
  display: flex;
  gap: 1rem;
}
.card__img {
  width: 200px;
}
.product {
  margin-top: 0.5rem;
  display: flex;
  flex-direction: column;
}
.product__sale-price {
  color: rgb(255, 70, 70);
  font-weight: 500;
  font-size: 1.1rem;
}
.product__old-price {
  font-size: 1rem;
  text-decoration: line-through;
  color: grey;
}
.product__price {
  font-size: 1.1rem;
  font-weight: 500;
}
</style>
