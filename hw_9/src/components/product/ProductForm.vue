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
          :items="categories"
          v-model="productData.category"
        />
      </label>
      <button type="submit" class="submit-btn">{{ submitBtnTitle }}</button>
    </form>
  </div>
</template>

<script>
import { mapGetters } from "vuex"
import ItemSelector from "../general/ItemSelector.vue"
export default {
  name: "ProductForm",
  components: {
    ItemSelector,
  },
  props: {
    productId: {
      type: [Number, String],
      default: null,
    },
  },
  data() {
    return {
      productData: null,
    }
  },
  computed: {
    ...mapGetters("product", ["getProductById"]),
    ...mapGetters("category", ["categoriesList"]),
    categories() {
      return [{ id: null, name: "Оберіть" }, ...this.categoriesList]
    },
    submitBtnTitle() {
      return this.productData.id ? "Зберегти" : "Створити"
    },
  },
  methods: {
    onSubmit() {},
  },
  created() {
    this.productData = { ...this.getProductById(this.productId) }
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
.submit-btn {
  font-size: inherit;
}
.category-selector {
  width: 100%;
  font-size: 1.1rem;
  display: flex;
  justify-content: space-between;
}
:deep(.selector__select) {
  width: 222px;
}
</style>
