<template>
  <Form
    v-slot="$product"
    :initial-values="initialData"
    :key="currentProduct"
    class="flex flex-col gap-4"
    :validate-on-submit="true"
    :validate-on-value-update="false"
    :resolver="validator"
    @submit="onSubmit"
  >
    <div class="flex justify-end">
      <label
        class="flex cursor-pointer items-center text-lg text-slate-400 gap-4"
      >
        {{ $t("pages.productEdit.fields.deleteImage") }}
        <ToggleSwitch name="toDeleteImg" />
      </label>
    </div>
    <div class="row">
      <div class="flex flex-col gap-1 basis-1/2">
        <InputText
          name="name"
          :placeholder="$t('pages.productEdit.fields.name')"
          size="large"
          fluid
        />
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
          :option-label="getTranslatedCategory"
          option-value="_id"
          :placeholder="$t('pages.productEdit.fields.category')"
          size="large"
          fluid
        >
        </Select>
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
          :placeholder="$t('pages.productEdit.fields.price')"
          size="large"
          :min="0"
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
          :placeholder="$t('pages.productEdit.fields.mass')"
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
        :placeholder="$t('pages.productEdit.fields.description')"
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
    <ImageUpload
      name="image"
      v-model="currentImage"
      @select="onNewFileSelected"
      :caption="$t('pages.productEdit.fields.image')"
    />
    <div class="row">
      <Button class="basis-1/2" severity="secondary" @click="onBack">{{
        $t("buttons.back")
      }}</Button>
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
import { mapActions, mapState } from "pinia"
import { yupResolver } from "@primevue/forms/resolvers/yup"
import ImageUpload from "./components/ImageUploader.vue"
export default {
  name: "ProductForm",
  components: {
    ImageUpload,
  },
  data() {
    return {
      validator: yupResolver(productFormSchema),
      isNewImageSelected: false,
      currentImage: null,
    }
  },
  computed: {
    ...mapState(useProductsStore, ["currentProduct", "error"]),
    ...mapState(useCategoriesStore, ["categoriesList", "loading"]),
    btnTitle() {
      return this.currentProduct?._id
        ? this.$t("buttons.save")
        : this.$t("buttons.create")
    },
    initialData() {
      if (!this.currentProduct) return { toDeleteImg: false }
      return {
        ...this.currentProduct,
        category: this.currentProduct.category._id,
        toDeleteImg: false,
      }
    },
  },
  methods: {
    ...mapActions(useProductsStore, [
      "createProduct",
      "updateProduct",
      "clearCurrentProduct",
    ]),
    async onSubmit(form) {
      if (!form.valid) return
      if (this.currentProduct?._id) {
        await this.updateProduct({
          ...form.values,
          _id: this.currentProduct._id,
          image: this.isNewImageSelected ? this.currentImage : undefined,
        })
      } else {
        await this.createProduct({
          ...form.values,
          image: this.isNewImageSelected ? this.currentImage : undefined,
        })
      }
      if (!this.error) {
        this.$router.push({ name: "productsList" })
      } //TODO: add error render
    },
    onBack() {
      this.$router.push({ name: "productsList" })
    },
    async createFileFromImg(imgSrc) {
      if (!imgSrc) return
      const response = await fetch(imgSrc)
      const blob = await response.blob()
      return new File([blob], "image", { type: blob.type })
    },
    onNewFileSelected() {
      this.isNewImageSelected = true
    },
    reset() {
      this.clearCurrentProduct()
      this.isNewImageSelected = false
      this.currentImage = null
    },
    getTranslatedCategory(category) {
      return this.$t(`categories.${category.value}`)
    },
  },
  watch: {
    currentProduct: {
      handler: async function (newValue) {
        if (newValue?.image) {
          this.currentImage = await this.createFileFromImg(newValue?.image)
        }
      },
    },
    $route: {
      immediate: true,
      handler() {
        this.reset()
      },
    },
  },
}
</script>

<style lang="css" scoped>
.row {
  @apply flex gap-4;
}
</style>
