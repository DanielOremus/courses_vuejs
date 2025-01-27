<template>
  <div class="condition-container">Морський бій з історією.</div>
  <div class="main">
    <game-field :ships-positions="shipsPositions" @cell-click="onCellClick" />
  </div>
</template>

<script>
import GameField from "./GameField/index.vue"
export default {
  name: "Task2",
  components: {
    GameField,
  },
  data() {
    return {
      shipsPositions: [
        [
          { hasShip: 0, isClosed: true },
          { hasShip: 0, isClosed: true },
          { hasShip: 0, isClosed: true },
          { hasShip: 1, isClosed: true },
          { hasShip: 1, isClosed: true },
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
      ],
    }
  },

  methods: {
    onCellClick({ hasShip, rowInd, colInd }) {
      const cell = this.shipsPositions[rowInd][colInd]
      cell.isClosed = false
    },
  },
}
</script>

<style lang="css" scoped>
.main {
  font-size: 1.2rem;
  display: flex;
}
</style>
