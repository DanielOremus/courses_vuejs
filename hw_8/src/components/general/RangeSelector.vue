<template>
  <div>
    <span v-if="selectorTitle">{{ selectorTitle }}</span>
    <br />
    <input
      type="number"
      placeholder="Від"
      :step="step"
      v-model="rangeValue.min"
    />
    <input
      type="number"
      placeholder="До"
      :step="step"
      v-model="rangeValue.max"
    />
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
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      rangeValue: this.modelValue,
      errors: [],
    }
  },
  watch: {
    rangeValue: {
      deep: true,
      handler(v) {
        let { min, max } = v
        if (min === "") min = null
        if (max === "") max = null
        this.checkRange({ min, max })
        if (this.errors.length) {
          console.log(this.errors)
        } else this.$emit("update:modelValue", { min, max })
      },
    },
  },
  methods: {
    checkRange({ min, max }) {
      this.errors = []
      if (min !== null) {
        if (min < this.allowedRange[0])
          this.errors.push({
            field: "min",
            msg: `Cannot be least than ${this.allowedRange[0]}`,
          })
      }
      if (max !== null) {
        if (max < min) {
          this.errors.push({
            field: "max",
            msg: `Cannot be least than ${min}`,
          })
        }
        if (max > this.allowedRange[1])
          this.errors.push({
            field: "max",
            msg: `Cannot be greatest than ${this.allowedRange[1]}`,
          })
      }
    },
  },
}
</script>

<style lang="scss" scoped></style>
