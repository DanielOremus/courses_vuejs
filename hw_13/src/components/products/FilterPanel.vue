<template>
  <Form class="filter-panel">
    <InputText placeholder="Назва продукту..." />
    <Select
      placeholder="Сортувати за"
      :options="sortingFields"
      option-label="name"
      option-value="value"
    />
    <Button
      class="md:col-span-2 lg:col-span-1"
      :pt="{ root: 'font-semibold text-[1.1rem]' }"
      >Застосувати</Button
    >
  </Form>
</template>

<script>
export default {
  name: "ProductsFilterPanel",
  data() {
    return {
      sortingFields: [
        {
          name: "Ціна: Дешевий - Дорогий",
          value: "price:asc",
        },
        {
          name: "Ціна: Дорогий - Дешевий",
          value: "price:desc",
        },
      ],
    }
  },
}
</script>

<style lang="css" scoped>
.filter-panel {
  @apply text-lg grid md:grid-cols-2 lg:grid-cols-3 gap-6;
}
</style>
