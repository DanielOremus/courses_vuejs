<template>
  <div>
    <form class="product-form" @submit.prevent="onSubmit">
      <label>
        URL до зображення:
        <input type="text" v-model="productData.imgSrc" />
      </label>
      <label>
        Назва продукту:
        <input type="text" v-model="productData.name" />
      </label>
      <label>
        Ціна:
        <input type="number" v-model="productData.price" />
      </label>
      <label>
        Ціна зі знижкою:
        <input type="number" v-model="productData.salePrice" />
      </label>
      <label>
        <item-selector
          class="category-selector"
          selector-title="Категорія: "
          :items="categoriesList"
          v-model="productData.category"
        />
      </label>
      <div class="actions-container">
        <button class="cancel-btn" @click="onCancel">Відмінити</button>
        <button type="submit" class="submit-btn">{{ submitBtnTitle }}</button>
      </div>
    </form>
  </div>
</template>

<script>
import ItemSelector from "../general/ItemSelector.vue"
export default {
  name: "ProductForm",
  components: {
    ItemSelector,
  },
  emits: ["form-submit", "form-cancel"],
  props: {
    productId: {
      type: [Number, String],
      default: null,
    },
    initProductData: {
      type: Object,
      default: () => ({}),
    },
    categoriesList: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      productData: null,
    }
  },
  computed: {
    submitBtnTitle() {
      return this.productData.id ? "Зберегти" : "Створити"
    },
  },
  methods: {
    onSubmit() {
      this.$emit("form-submit", this.productData)
    },
    onCancel() {
      this.$emit("form-cancel", this.productData)
    },
  },
  created() {
    this.productData = { ...this.initProductData }
  },
}
</script>

<style lang="css" scoped>
.product-form {
  display: flex;
  flex-direction: column;
  font-size: 1.25rem;
  width: max-content;
  gap: 0.5rem;
  label {
    display: flex;
    justify-content: space-between;
    gap: 3rem;
  }
}
.product-form input,
:deep(.selector__select) {
  width: 300px;
}
.actions-container {
  margin-top: 1rem;
  display: flex;
  gap: 1rem;
}
.submit-btn,
.cancel-btn {
  width: 50%;
  font-size: inherit;
}
.category-selector {
  width: 100%;
  font-size: 1.1rem;
  display: flex;
  justify-content: space-between;
}
</style>
