<template>
  <div class="product-item">
    <span class="product-item__title">{{ product.title }}</span>

    <div>
      <span>{{ product.price.toFixed(2) }} {{ currentCurrency.symbol }}</span>
      <button @click="onRefuse">Відмовитись</button>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex"
export default {
  name: "ProductCard",
  emits: ["deleteFromCart"],
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
  computed: {
    ...mapGetters("currency", ["currentCurrency"]),
  },
  methods: {
    onRefuse() {
      this.$emit("deleteFromCart", this.product._id)
    },
  },
}
</script>

<style lang="css" scoped>
.product-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  img {
    height: 150px;
    aspect-ratio: 1/1;
    object-fit: cover;
  }
  div {
    display: flex;
    gap: 2rem;
    align-items: center;
  }
  button {
    font-size: 1.2rem;
    padding: 0.2em 0.5em;
  }
}
.product-item__title {
  font-size: 1.2rem;
  font-weight: 500;
}
</style>
