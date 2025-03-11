<template>
  <item-card>
    <template #header>
      <Image
        :pt="{
          image: 'w-56 object-contain h-72 mx-auto',
        }"
        :src="supplier.imgSrc"
      />
    </template>
    <template #default>
      <div class="text-xl">
        <span>{{ supplier.name }}</span>
        <div class="mt-4 text-lg">
          {{ deliveryStr }}
        </div>
      </div>
    </template>
  </item-card>
</template>

<script>
import ItemCard from "@/components/general/ItemCard.vue"
export default {
  name: "SupplierCard",
  components: {
    ItemCard,
  },
  props: {
    supplier: {
      type: Object,
      required: true,
    },
  },
  computed: {
    deliveryStr() {
      return this.supplier.deliveryMethods.join(", ")
    },
  },
}
</script>

<style lang="scss" scoped></style>
