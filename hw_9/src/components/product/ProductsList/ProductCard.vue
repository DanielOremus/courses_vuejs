<template>
  <div class="product">
    <img class="product__img" :src="product.imgSrc" alt="Product Image" />
    <div class="product__data">
      <span class="product__title">{{ product.name }}</span>
      <div class="product__price-container">
        <span v-if="hasSale" class="product__sale-price"
          >{{ product.salePrice }} ₴</span
        >

        <span class="product__price" :class="{ 'has-sale': hasSale }"
          >{{ product.price }} ₴</span
        >
      </div>
      <div class="product__actions">
        <button class="action-btn" @click="onEdit">Edit</button>
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
  methods: {
    onEdit() {
      this.$router.push({
        name: "editProduct",
        params: { productId: this.product.id },
      })
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
  max-height: 150px;
  object-fit: contain;
}
.product__data {
  position: relative;
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
  line-height: 1em;
  color: rgb(255, 56, 56);
  font-weight: 500;
}
.product__price {
  font-size: 1.3rem;
}
.product__actions {
  position: absolute;
  bottom: 0;
}
.action-btn {
  font-size: 1rem;
  padding: 0.1em 0.8em;
  border-radius: 5px;
}
.has-sale {
  font-size: 1.2rem;
  text-decoration: line-through;
  color: rgb(113, 113, 113);
}
</style>
