<template>
  <div>
    <label>
      Name:
      <input
        type="text"
        :class="{ invalid: shouldShowNameError }"
        v-model="nameValue"
      />
    </label>
    <label>
      Age:
      <input
        type="number"
        :class="{
          [ageColorClass]: shouldShowAgeStatus,
        }"
        v-model="ageValue"
      />
    </label>
  </div>
</template>

<script>
export default {
  name: "WorkerForm",
  props: {
    name: {
      type: String,
      default: "",
    },
    nameModifiers: {
      type: Object,
      default: () => ({}),
    },
    age: {
      type: Number,
      default: null,
    },
    ageModifiers: {
      type: Object,
      default: () => ({}),
    },
  },
  computed: {
    nameValue: {
      get() {
        return this.name
      },
      set(v) {
        return this.$emit("update:name", v)
      },
    },
    ageValue: {
      get() {
        return this.age
      },
      set(v) {
        if (v === "") v = null
        return this.$emit("update:age", v)
      },
    },
    isNameValid() {
      return this.nameValue && this.nameValue.length > 0
    },
    ageColorClass() {
      return this.ageValue >= 18 ? "valid" : "invalid"
    },
    shouldShowNameError() {
      return this.nameModifiers.check && !this.isNameValid
    },
    shouldShowAgeStatus() {
      return this.ageValue !== null && this.ageModifiers.check
    },
  },
}
</script>

<style lang="css" scoped>
.invalid {
  background-color: rgb(219, 0, 0);
}
.valid {
  background-color: green;
}
</style>
