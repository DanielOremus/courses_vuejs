<template>
  <div>
    <input
      ref="ageInput"
      :class="{
        [bgColorClass]: modelModifiers.setColor && this.modelValue <= 150,
      }"
      v-model="ageValue"
    />
  </div>
</template>

<script>
export default {
  name: "CustomInput",
  props: {
    modelValue: {
      type: Number,
    },
    modelModifiers: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {
      errorMessage: null,
    }
  },
  computed: {
    ageValue: {
      get() {
        return this.modelValue
      },
      set(newValue) {
        if (newValue === "") newValue = null
        else newValue = parseInt(newValue)
        if (this.modelModifiers.check) {
          const isValid = this.checkAgeValidity(newValue)
          if (!isValid) {
            this.$refs.ageInput.value = this.modelValue
            return
          }
        }
        this.$emit("update:modelValue", newValue)
      },
    },
    bgColorClass() {
      if (this.modelValue > 21) return "adult"
      if (this.modelValue >= 10) return "teenager"
      if (this.modelValue > 0) return "child"
    },
  },
  methods: {
    checkAgeValidity(age) {
      return age === null || (age > 0 && age <= 150)
    },
  },
}
</script>

<style lang="css" scoped>
.child {
  background-color: green;
}
.teenager {
  background-color: yellow;
}
.adult {
  background-color: orange;
}
</style>
