<template>
  <table>
    <tr v-for="(row, rowInd) in shipsPositions" :key="rowInd">
      <td v-for="(cellObj, colInd) in row" :key="colInd">
        <ship-cell
          :col-data="cellObj"
          @click="onCellClick(cellObj, rowInd, colInd)"
        ></ship-cell>
      </td>
    </tr>
  </table>
</template>

<script>
import ShipCell from "./ShipCell.vue"
export default {
  name: "GameField",
  components: {
    ShipCell,
  },
  props: {
    shipsPositions: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    onCellClick(cellObj, rowInd, colInd) {
      this.$emit("cell-click", { ...cellObj, rowInd, colInd })
    },
  },
}
</script>

<style lang="scss" scoped></style>
