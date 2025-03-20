<template>
  <div class="product-card">
    <div class="product-image__container h-[15rem] flex justify-center">
      <Image :src="product.image" image-class="h-full" />
    </div>
    <div class="flex flex-col">
      <span class="text-2xl font-medium">{{ product.name }}</span>
      <span class="text-md text-slate-400">{{ product.category.name }}</span>
    </div>
    <div class="flex justify-between">
      <span class="text-slate-300 text-xl">{{ product.price }} грн.</span>
      <div class="actions">
        <router-link :to="{ name: 'productEdit', params: { id: product._id } }">
          <i class="edit-icon pi pi-pencil"></i>
        </router-link>

        <i class="delete-icon pi pi-trash" @click="onDelete(product._id)"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductCard",
  emits: ["delete"],
  props: {
    product: {
      type: Object,
      required: true,
    },
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
