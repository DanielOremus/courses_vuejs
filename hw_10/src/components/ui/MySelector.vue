<template>
  <select class="my-selector" v-model="selectorValue">
    <option v-for="item in items" :key="item.id" :value="item.id">
      {{ item.name }}
    </option>
  </select>
</template>

<script>
export default {
  name: "MySelector",
  props: {
    modelValue: {
      type: [String, Number],
      default: null,
    },
    items: {
      type: Array,
      default: () => [],
    },
  },
  computed: {
    selectorValue: {
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
