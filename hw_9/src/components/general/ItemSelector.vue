<template>
  <div class="selector">
    <span v-if="selectorTitle" class="selector__title">{{
      selectorTitle
    }}</span>
    <select class="selector__select" v-model="selectedItem">
      <option v-for="item in items" :key="item.id" :value="item.id">
        {{ item.name }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  name: "ItemSelector",
  props: {
    selectorTitle: {
      type: String,
      default: null,
    },
    items: {
      type: Array,
      default: () => [],
    },
    modelValue: {
      type: [String, Number],
    },
  },
  computed: {
    selectedItem: {
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

<style lang="css" scoped>
.selector__select {
  font: inherit;
}
</style>
