<template>
  <Form v-slot="$productData" class="flex flex-col gap-4">
    <InputText name="name" type="text" placeholder="Назва" fluid />
    <InputText name="price" type="number" min="1" placeholder="Ціна" fluid />
    <FileUpload>
      <template #empty>
        <span>Перетягніть файл, щоб завантажити.</span>
      </template>
    </FileUpload>
    <Button type="submit">Додати</Button>
  </Form>
</template>

<script>
export default {
  name: "ProductForm",
  data() {
    return {
      productData: {},
    }
  },
}
</script>

<style lang="scss" scoped></style>
