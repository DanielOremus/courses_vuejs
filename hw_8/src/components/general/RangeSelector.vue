<template>
  <div>
    <span v-if="selectorTitle" class="selector__title">{{
      selectorTitle
    }}</span>
    <div class="selector-container">
      <input
        type="number"
        :placeholder="`Від (${allowedRange[0]})`"
        :step="step"
        class="selector__input"
        :class="{ selector__error: !isMinValid }"
        v-model="rangeValue[0]"
      />
      <input
        type="number"
        :placeholder="`До (${allowedRange[1]})`"
        :step="step"
        class="selector__input"
        :class="{ selector__error: !isMaxValid }"
        v-model="rangeValue[1]"
      />
      <button @click="onApplyRange" class="apply-btn">
        Застосувати діапазон
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "RangeSelector",
  props: {
    selectorTitle: {
      type: String,
      default: null,
    },
    allowedRange: {
      type: Array,
      required: true,
    },
    step: {
      type: Number,
      default: 1,
    },
    modelValue: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      rangeValue: [...this.modelValue],
      errors: [],
    }
  },
  computed: {
    isMinValid() {
      return this.errors.every((err) => err.field !== "min")
    },
    isMaxValid() {
      return this.errors.every((err) => err.field !== "max")
    },
  },
  methods: {
    onApplyRange() {
      let [min, max] = this.rangeValue
      if (min === "") min = null
      if (max === "") max = null
      this.checkRange(min, max)
      if (this.errors.length) console.log(this.errors)
      else this.$emit("update:modelValue", [min, max])
    },
    checkRange(min, max) {
      this.errors = []
      if (min !== null) {
        if (!this.isInAllowedRange(min))
          this.errors.push({
            field: "min",
            msg: "Must be in allowed range",
          })
      }
      if (max !== null) {
        if (!this.isInAllowedRange(max))
          this.errors.push({
            field: "max",
            msg: "Must be in allowed range",
          })
        if (max < min) {
          this.errors.push({
            field: "max",
            msg: `Must be greater than ${min}`,
          })
        }
      }
    },
    isInAllowedRange(value) {
      return value >= this.allowedRange[0] && value <= this.allowedRange[1]
    },
  },
}
</script>

<style lang="css" scoped>
.selector-container {
  display: flex;
  /* width: fit-content; */
  flex-direction: column;
  gap: 1rem;
}
.apply-btn {
  font-size: 1.1rem;
  padding: 0.2em 0.5em;
  width: 100%;
  cursor: pointer;
}
</style>
