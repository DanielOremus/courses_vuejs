<template>
  <div
    class="ship-cell"
    :class="{ [hasShipColor]: !colData.isClosed, closed: colData.isClosed }"
  ></div>
</template>

<script>
export default {
  name: "ShipCell",
  props: {
    colData: {
      type: Object,
      required: true,
    },
  },
  computed: {
    hasShipColor() {
      return this.colData.hasShip ? "filled" : "empty"
    },
  },
}
</script>

<style lang="css" scoped>
.ship-cell {
  width: 100px;
  height: 100px;
  border-radius: 1px solid black;
}
.empty {
  background-color: aqua;
}
.filled {
  background-color: green;
}
.closed {
  background-color: white;
}
</style>
