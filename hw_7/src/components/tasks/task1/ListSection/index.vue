<template>
  <div>
    <div class="section-header">
      <h2>Список товарів</h2>
      <currency-selector
        v-model="selectedCurrency"
        :currenciesList="currenciesList"
      ></currency-selector>
    </div>
    <div>
      <loading-circle v-if="isLoading"></loading-circle>
      <span v-else-if="loadingError">Error has occured!</span>
      <products-list
        v-else
        :products="productsList"
        @add-to-cart="onAddToCart"
      ></products-list>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex"
import LoadingCircle from "../general/LoadingCircle.vue"
import ProductsList from "./ProductsList/index.vue"
import CurrencySelector from "./CurrencySelector.vue"
export default {
  name: "ListSection",
  components: {
    ProductsList,
    LoadingCircle,
    CurrencySelector,
  },
  data() {
    return {
      selectedCurrency: null,
    }
  },
  computed: {
    ...mapGetters("product", [
      "productsList",
      "isLoading",
      "loadingError",
      "getProductById",
    ]),
    ...mapGetters("currency", ["currenciesList", "currentCurrency"]),
  },
  methods: {
    ...mapActions("product", ["fetchProducts"]),
    ...mapActions("cart", ["addToCart"]),

    ...mapActions("currency", ["fetchCurrencies", "setCurrentCurrency"]),
    setStartCurrency() {
      this.selectedCurrency = this.currenciesList[0]
    },
    onAddToCart(productId) {
      const product = this.getProductById(productId)

      this.addToCart(product)
    },
  },
  watch: {
    selectedCurrency(newValue) {
      this.setCurrentCurrency(newValue)
    },
  },
  async created() {
    await this.fetchCurrencies()
    this.setStartCurrency()
  },
  mounted() {
    this.fetchProducts()
  },
}
</script>

<style lang="css" scoped>
.section-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
}
</style>
