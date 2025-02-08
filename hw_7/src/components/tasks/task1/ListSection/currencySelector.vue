<template>
  <div>
    <select v-model="selectedCurrencyValue">
      <option
        v-for="currency in currenciesList"
        :key="currency.id"
        :value="currency"
      >
        {{ currency.title }}, {{ currency.symbol }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  name: "CurrencySelector",
  props: {
    modelValue: {
      type: Object,
    },
    currenciesList: {
      type: Array,
      default: () => [],
    },
  },
  computed: {
    selectedCurrencyValue: {
      get() {
        return this.modelValue
      },
      set(v) {
        return this.$emit("update:modelValue", v)
      },
    },
  },
}
</script>

<style lang="css" scoped>
select {
  font-size: 1.1rem;
}
</style>
