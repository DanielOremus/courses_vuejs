<template>
  <div>
    <span v-if="selectorTitle" class="selector__title">{{
      selectorTitle
    }}</span>
    <div>
      <div v-for="item in items" :key="item.id">
        <label>
          <input
            type="checkbox"
            class="selector__checkbox"
            :value="item"
            v-model="selectedItems"
          />
          {{ item.title }}
        </label>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MultiSelector",
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
      type: Array,
    },
  },
  computed: {
    selectedItems: {
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
