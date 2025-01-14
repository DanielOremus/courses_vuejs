<template>
  <div>
    <h2>Task {{ $route.params.id }}</h2>
    <div class="condition-container">
      Condition: Вводиться кількість пасажирів. Вивести: <br />
      <ul class="condition-todo">
        <li>скільки потрібно автобусів (кожен автобус на 20 місць)</li>
        <li>скільки пляшок води (кожному пасажиру 2 пляшки)</li>
        <li>скільки бутербродів (кожному пасажиру 3 бутерброди)</li>
      </ul>
    </div>
    <div class="main">
      <label
        >Passengers count:
        <input type="number" v-model.lazy="passengersCount" />
      </label>
      <span>Busses count: {{ bussesCount }}</span>
      <span>Bottles count: {{ bottlesCount }}</span>
      <span>Sandwiches count: {{ sandwichesCount }}</span>
    </div>
  </div>
</template>

<script>
const passengersPerBus = 20
const bottlesPerPassenger = 2
const sandwichesPerPassenger = 3
export default {
  name: "Task1",
  data() {
    return {
      passengersCount: 0,
    }
  },
  computed: {
    bussesCount() {
      return Math.ceil(this.passengersCount / passengersPerBus)
    },
    bottlesCount() {
      return this.passengersCount * bottlesPerPassenger
    },
    sandwichesCount() {
      return this.passengersCount * sandwichesPerPassenger
    },
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
