<template>
  <textarea class="my-textarea" :rows="rows" v-model="textAreaValue"></textarea>
</template>

<script>
export default {
  name: "MyTextarea",
  props: {
    modelValue: {
      type: String,
      default: null,
    },
    rows: {
      type: Number,
      default: 5,
    },
  },
  computed: {
    textAreaValue: {
      get() {
        return this.modelValue
      },
      set(v) {
        this.$emit("update:modelValue", v)
      },
    },
  },
}
</script>

<style lang="scss" scoped></style>
