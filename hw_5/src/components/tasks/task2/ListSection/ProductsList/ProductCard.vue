<template>
  <div class="item">
    <div class="item__img-container">
      <img :src="product.imgSrc" alt="productImg" />
    </div>
    <div class="item__data-container">
      <div>
        <h2 class="light-blue">
          {{ product.name }}
        </h2>
        <span v-show="economyPrice" class="item__economy-price"
          >Ваша економія: <span class="red">{{ economyPrice }} ₴</span></span
        >
      </div>
      <div>
        <span class="item__old-price">{{ product.oldPrice }} ₴</span>
        <span class="item__price red">{{ product.price }} ₴</span>
      </div>
    </div>
    <div class="item__actions-container">
      <button class="item__btn" @click="onCart">Додати в корзину</button>
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
    economyPrice() {
      return this.product.oldPrice - this.product.price
    },
  },
  methods: {
    onCart() {
      this.$emit("add-to-cart", this.product.id)
    },
  },
}
</script>

<style lang="css" scoped>
.item {
  position: relative;
  display: flex;
  gap: 1.5rem;
  padding: 1.5rem;
  background-color: rgb(89, 89, 89);
  border-radius: 10px;
}
.item__img-container img {
  width: 300px;
  aspect-ratio: 3/2;
  object-fit: cover;
  border-radius: 1em;
}
.item__data-container {
  & > div {
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;
  }
}
.item__economy-price {
  font-size: 1rem;
}
.item__old-price {
  font-size: 1.4rem;
  text-decoration: line-through;
  color: rgb(134, 134, 134);
}
.item__price {
  font-size: 2rem;
  line-height: 1em;
}
.item__actions-container {
  position: absolute;
  bottom: 2rem;
  right: 6rem;
}
.item__btn {
  font-size: 1.1rem;
  outline: none;
  border: none;
  cursor: pointer;
  padding: 0.5em 1em;
  border-radius: 0.5em;
  background-color: rgb(66, 148, 255);
  color: white;
  transition: background-color 0.1s ease;
  &:hover {
    background-color: rgb(99, 167, 255);
  }
}
</style>
