<template>
  <div class="item">
    <img :src="product.imgSrc" alt="productImg" class="item__img" />
    <div class="item__data-container">
      <span class="item__name light-blue">{{ product.name }}</span>
      <span class="item__price">{{ product.price }} ₴/шт.</span>
      <span class="item__price">{{ totalPrice }} ₴</span>
    </div>
    <div class="counter">
      <button
        class="counter__btn"
        :disabled="isAmountMin"
        @click="onAmountChange(-1)"
      >
        -
      </button>
      <span>{{ product.count }}</span>
      <button class="counter__btn" @click="onAmountChange(1)">+</button>
    </div>
    <div class="item__actions-container">
      <button class="action-btn remove-btn" @click="onRemoveItem">
        Вилучити
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "CartItem",
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
  computed: {
    isAmountMin() {
      return this.product.count === 1
    },
    totalPrice() {
      return this.product.count * this.product.price
    },
  },
  methods: {
    emitEvent(name, data) {
      this.$emit(name, data)
    },
    onAmountChange(value) {
      this.emitEvent("amount-change", { productId: this.product.id, value })
    },
    onRemoveItem() {
      this.emitEvent("remove-item", this.product.id)
    },
  },
}
</script>

<style lang="css" scoped>
.item {
  padding: 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
  background-color: rgb(89, 89, 89);
  border-radius: 10px;
}
.item__img {
  width: 200px;
  border-radius: 5px;
  aspect-ratio: 3/2;
  object-fit: cover;
}
.item__data-container {
  display: flex;
  justify-content: space-around;
  font-size: 1.3rem;
  flex-grow: 1;
}
.item__name {
  font-size: 1.5rem;
  font-weight: 500;
}
.item__price {
  font-size: 1.5rem;
}
.counter {
  flex-basis: 120px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.counter__btn,
.action-btn {
  color: white;
  cursor: pointer;
  outline: none;
  border: none;
  transition: background-color 0.1s ease;
  background-color: rgb(66, 148, 255);
  &:hover {
    background-color: rgb(99, 167, 255);
  }
}
.counter__btn {
  width: 35px;
  height: 35px;
  font-size: 1.1rem;
  border-radius: 5px;
}
.counter__btn:disabled {
  cursor: default;
  background-color: rgb(59, 102, 158);
}
.remove-btn {
  font-size: 1.2rem;
  padding: 0.5em 1em;
  margin: auto 2em;
  border-radius: 10px;
  background-color: rgb(195, 1, 1);
  &:hover {
    background-color: rgb(219, 0, 0);
  }
}
</style>
