<template>
  <div class="step">
    <span>Step: {{ stepNumber }}</span>
    <button @click="onReturn"></button>
  </div>
</template>

<script>
export default {
  name: "StepItem",
  props: {
    stepNumber: {
      type: Number,
      required: true,
    },
  },
  methods: {
    onReturn() {
      this.$emit("return", this.stepNumber)
    },
  },
}
</script>

<style lang="css" scoped>
.step {
  width: 100px;
  display: flex;
  justify-content: space-between;
  button {
    font-size: 1rem;
    padding: 0.2rem;
    cursor: pointer;
  }
  button::before {
    content: "⟵";
  }
}
</style>
