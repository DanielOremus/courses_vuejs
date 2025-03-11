<template>
  <items-list :items="suppliersList" title="Оберіть постачальників">
    <supplier-card
      v-for="supplier in suppliersList"
      :key="supplier.id"
      :supplier="supplier"
    />
  </items-list>
</template>

<script>
import { mapState } from "pinia"
import { useSuppliersStore } from "@/stores/suppliers"
import ItemsList from "../general/ItemsList.vue"
import SupplierCard from "./SupplierCard.vue"
export default {
  name: "SuppliersList",
  components: {
    ItemsList,
    SupplierCard,
  },
  computed: {
    ...mapState(useSuppliersStore, ["suppliersList"]),
  },
}
</script>

<style lang="css" scoped></style>
