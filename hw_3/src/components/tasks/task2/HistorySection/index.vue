<template>
  <div class="history">
    <step-item
      v-for="i in stepsNumbers"
      :key="i"
      :step-number="i"
      @return="onStepClick"
    ></step-item>
  </div>
</template>

<script>
import StepItem from "./StepItem.vue"
export default {
  name: "HistorySection",
  components: {
    StepItem,
  },
  props: {
    stepsNumbers: {
      type: Number,
      default: null,
    },
  },
  methods: {
    onStepClick(stepNumber) {
      this.$emit("step-click", stepNumber)
    },
  },
}
</script>

<style lang="css" coped>
.history {
  margin-top: 1rem;
  display: flex;
  gap: 1rem;
  font-size: 1rem;
  max-width: 550px;
  flex-wrap: wrap;
}
</style>
