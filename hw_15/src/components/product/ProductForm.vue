<template>
  <Form
    v-slot="$product"
    :initial-values="productData"
    :key="productData"
    class="flex flex-col gap-4"
    :validate-on-submit="true"
    :validate-on-value-update="false"
    :resolver="validator"
    @submit="onSubmit"
  >
    <div></div>
    <div class="row">
      <div class="flex flex-col gap-1 basis-1/2">
        <InputText name="name" placeholder="Назва" size="large" fluid />
        <Message
          v-if="$product.name?.invalid"
          severity="error"
          size="small"
          variant="simple"
          >{{ $product.name.error?.message }}</Message
        >
      </div>
      <div class="flex flex-col gap-1 basis-1/2">
        <Select
          name="category"
          :options="categoriesList"
          :loading="loading"
          option-label="name"
          option-value="_id"
          placeholder="Категорія"
          size="large"
          fluid
        />
        <Message
          v-if="$product.category?.invalid"
          severity="error"
          size="small"
          variant="simple"
          >{{ $product.category.error?.message }}</Message
        >
      </div>
    </div>
    <div class="row">
      <div class="flex flex-col gap-1 basis-1/2">
        <InputNumber
          name="price"
          mode="currency"
          currency="UAH"
          locale="de-DE"
          placeholder="Ціна"
          size="large"
          fluid
        />
        <Message
          v-if="$product.price?.invalid"
          severity="error"
          size="small"
          variant="simple"
          >{{ $product.price.error?.message }}</Message
        >
      </div>
      <div class="flex flex-col gap-1 basis-1/2">
        <InputText
          name="mass"
          type="number"
          placeholder="Маса"
          size="large"
          fluid
        />
        <Message
          v-if="$product.mass?.invalid"
          severity="error"
          size="small"
          variant="simple"
          >{{ $product.mass.error?.message }}</Message
        >
      </div>
    </div>
    <div class="flex flex-col gap-1">
      <Textarea
        name="description"
        rows="5"
        class="resize-none"
        size="large"
        placeholder="Опис (необов'язково)"
        fluid
      ></Textarea>
      <Message
        v-if="$product.description?.invalid"
        severity="error"
        size="small"
        variant="simple"
        >{{ $product.description.error?.message }}</Message
      >
    </div>
    <ImageUpload name="image" />
    <div class="row">
      <Button class="basis-1/2" severity="secondary">Назад</Button>
      <Button type="submit" class="basis-1/2" severity="secondary">{{
        btnTitle
      }}</Button>
    </div>
  </Form>
</template>

<script>
import { productFormSchema } from "@/validators/product"
import { useProductsStore } from "@/stores/products"
import { useCategoriesStore } from "@/stores/categories"
import { mapState } from "pinia"
import { yupResolver } from "@primevue/forms/resolvers/yup"
import ImageUpload from "./components/ImageUpload.vue"
export default {
  name: "ProductForm",
  components: {
    ImageUpload,
  },
  data() {
    return {
      validator: yupResolver(productFormSchema),
    }
  },
  computed: {
    ...mapState(useProductsStore, ["currentProduct"]),
    ...mapState(useCategoriesStore, ["categoriesList", "loading"]),
    btnTitle() {
      return this.currentProduct?._id ? "Зберегти" : "Створити"
    },
    productData() {
      return this.currentProduct
        ? {
            ...this.currentProduct,
            category: this.currentProduct.category._id,
          }
        : null
    },
  },
  methods: {
    onSubmit(values) {
      console.log(values)
    },
  },
}
</script>

<style lang="css" scoped>
.row {
  @apply flex gap-4;
}
</style>
