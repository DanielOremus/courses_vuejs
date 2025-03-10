<template>
  <main-layout>
    <div class="wrapper my-16">
      <suppliers-list />
    </div>
    <template #footer>
      <Footer>
        <template #left-section>
          <span
            >Найбільш популярний:
            <span class="text-green-500">Економ</span></span
          >
        </template>
        <template #right-section>
          <span>Статус: <span class="text-green-500">відкрито</span></span>
        </template>
      </Footer>
    </template>
  </main-layout>
</template>

<script>
import SuppliersList from "@/components/suppliers/SuppliersList.vue"
export default {
  name: "SuppliersView",
  components: {
    SuppliersList,
  },
}
</script>

<style lang="scss" scoped></style>
