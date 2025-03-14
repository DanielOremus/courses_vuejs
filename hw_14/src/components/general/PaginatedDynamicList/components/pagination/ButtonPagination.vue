<template>
  <div class="flex justify-center gap-4">
    <Button
      v-for="page in pagesNumber"
      :pt="{ root: 'text-lg aspect-square' }"
      :disabled="currentPage === page - 1"
      @click="onPageChange(page)"
      >{{ page }}</Button
    >
  </div>
</template>
<script>
export default {
  name: "ButtonPagination",
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
