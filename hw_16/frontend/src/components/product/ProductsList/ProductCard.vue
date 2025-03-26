<template>
  <div class="product-card">
    <div class="product-image__container h-[15rem] flex justify-center">
      <Image
        :src="product.image ?? noImage"
        image-class="h-full object-contain"
      />
    </div>
    <div class="flex flex-col">
      <span class="text-2xl font-medium">{{ product.name }}</span>
      <span class="text-md text-slate-400">{{
        $t(`categories.${product.category.value}`)
      }}</span>
    </div>
    <div class="flex justify-between">
      <span class="text-slate-300 text-xl"
        >{{ product.price }} {{ $t("currencies.uah") }}</span
      >
      <div class="actions">
        <router-link
          v-if="userPermissions?.products.update"
          :to="{ name: 'productEdit', params: { id: product._id } }"
        >
          <i class="edit-icon pi pi-pencil"></i>
        </router-link>
        <i
          v-if="userPermissions?.products.delete"
          class="delete-icon pi pi-trash"
          @click="onDelete(product._id)"
        ></i>
      </div>
    </div>
  </div>
</template>

<script>
import { useAuthStore } from "@/stores/auth"
import { mapState } from "pinia"
import noImage from "@/assets/images/no-image.jpg"
export default {
  name: "ProductCard",
  emits: ["delete"],
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      noImage,
    }
  },
  computed: {
    ...mapState(useAuthStore, ["userPermissions"]),
  },
  methods: {
    onDelete(productId) {
      this.$emit("delete", productId)
    },
  },
}
</script>

<style lang="css" scoped>
.product-card {
  @apply grid gap-4 rounded-xl bg-zinc-800 p-6;
}
.delete-icon {
  @apply text-red-700 text-xl hover:text-red-500 hover:cursor-pointer;
}
.edit-icon {
  @apply text-blue-500 mr-3 text-xl hover:text-blue-400 hover:cursor-pointer;
}
</style>
