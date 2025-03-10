<template>
  <items-list :items="suppliersList" title="Оберіть постачальників">
    <item-card
      v-for="supplier in suppliersList"
      :key="supplier.id"
      :item="supplier"
    >
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
          <div class="mt-4">
            <Image
              v-for="(deliveryType, i) in supplier.deliveryImgs"
              :src="deliveryType"
              :key="i"
            />
          </div>
        </div>
      </template>
    </item-card>
  </items-list>
</template>

<script>
import { mapState } from "pinia"
import { useSuppliersStore } from "@/stores/suppliers"
import ItemsList from "../general/ItemsList.vue"
import ItemCard from "../general/ItemCard.vue"
export default {
  name: "SuppliersList",
  components: {
    ItemsList,
    ItemCard,
  },
  computed: {
    ...mapState(useSuppliersStore, ["suppliersList"]),
  },
}
</script>

<style lang="css" scoped></style>
