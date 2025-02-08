<template>
  <div>
    <label>
      {{ selectorTitle }}:
      <select v-model="selectedOption">
        <option v-for="opt in selectOptions" :key="opt.id" :value="opt.id">
          {{ opt.title }}
        </option>
      </select>
    </label>
  </div>
</template>

<script>
export default {
  name: "FilterItem",
  props: {
    selectorTitle: {
      type: String,
      required: true,
    },
    selectOptions: {
      type: Array,
      default: () => [],
    },
    modelValue: {
      type: [String, Number],
    },
  },
  computed: {
    selectedOption: {
      get() {
        return this.modelValue
      },
      set(newValue) {
        this.$emit("update:modelValue", newValue)
      },
    },
  },
}
</script>

<style lang="scss" scoped></style>
