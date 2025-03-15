<template>
  <div class="flex justify-center gap-[7rem]">
    <Button
      icon="pi pi-arrow-circle-left text-2xl"
      variant="text"
      :disabled="currentPage === 0"
      :pt="{
        root: 'aspect-square',
      }"
      @click="onPageChange(currentPage - 1)"
    />

    <Button
      icon="pi pi-arrow-circle-right text-2xl"
      variant="text"
      :disabled="currentPage === pagesNumber - 1"
      :pt="{
        root: 'aspect-square',
      }"
      @click="onPageChange(currentPage + 1)"
    />
  </div>
</template>

<script>
export default {
  name: "ArrowPagination",
  props: {
    currentPage: {
      type: Number,
      default: 0,
    },
    pagesNumber: {
      type: Number,
      required: true,
    },
  },
  methods: {
    onPageChange(pageNumber) {
      this.$emit("page-change", pageNumber)
    },
  },
}
</script>

<style lang="scss" scoped></style>
