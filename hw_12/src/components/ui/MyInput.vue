<template>
  <input class="my-input" :type="type" v-model="inputValue" />
</template>

<script>
export default {
  name: "MyInput",
  props: {
    modelValue: {
      type: [Number, String],
      default: null,
    },
    modelModifiers: {
      type: Object,
      default: () => ({}),
    },
    type: { type: String, default: "text" },
  },
  computed: {
    inputValue: {
      get() {
        return this.modelValue
      },
      set(v) {
        if (this.modelModifiers.number) {
          v = v === "" ? null : parseFloat(v)
        }
        this.$emit("update:modelValue", v)
      },
    },
  },
}
</script>

<style lang="scss" scoped></style>
