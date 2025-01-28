<template>
  <div class="condition-container">Морський бій з історією.</div>
  <div class="main">
    <game-field :ships-positions="shipsPositions" @cell-click="onCellClick" />
    <history-section
      :stepsNumbers="fieldHistory.length - 1"
      @step-click="onStepClick"
    ></history-section>
  </div>
</template>

<script>
const shipsPositions = [
  [
    { hasShip: 0, isClosed: true },
    { hasShip: 1, isClosed: true },
    { hasShip: 0, isClosed: true },
    { hasShip: 1, isClosed: true },
    { hasShip: 0, isClosed: true },
  ],
  [
    { hasShip: 0, isClosed: true },
    { hasShip: 1, isClosed: true },
    { hasShip: 0, isClosed: true },
    { hasShip: 0, isClosed: true },
    { hasShip: 0, isClosed: true },
  ],
  [
    { hasShip: 1, isClosed: true },
    { hasShip: 0, isClosed: true },
    { hasShip: 1, isClosed: true },
    { hasShip: 0, isClosed: true },
    { hasShip: 0, isClosed: true },
  ],
  [
    { hasShip: 0, isClosed: true },
    { hasShip: 0, isClosed: true },
    { hasShip: 0, isClosed: true },
    { hasShip: 1, isClosed: true },
    { hasShip: 0, isClosed: true },
  ],
  [
    { hasShip: 0, isClosed: true },
    { hasShip: 0, isClosed: true },
    { hasShip: 0, isClosed: true },
    { hasShip: 0, isClosed: true },
    { hasShip: 1, isClosed: true },
  ],
]
import GameField from "./GameSection/index.vue"
import HistorySection from "./HistorySection/index.vue"
export default {
  name: "Task2",
  components: {
    GameField,
    HistorySection,
  },
  data() {
    return {
      fieldHistory: [],
    }
  },
  computed: {
    shipsPositions() {
      return this.fieldHistory.length
        ? this.fieldHistory.at(-1)
        : shipsPositions
    },
  },
  methods: {
    onCellClick({ isClosed, rowInd, colInd }) {
      if (!isClosed) return

      this.fieldHistory.push(
        JSON.parse(JSON.stringify(this.fieldHistory.at(-1)))
      )

      const cell = this.fieldHistory.at(-1)[rowInd][colInd]
      cell.isClosed = false
    },
    onStepClick(stepNumber) {
      this.fieldHistory.splice(stepNumber)
    },
  },
  created() {
    this.fieldHistory.push(JSON.parse(JSON.stringify(shipsPositions)))
  },
}
</script>

<style lang="css" scoped>
.main {
  font-size: 1.2rem;
  display: flex;
  flex-direction: column;
}
</style>
