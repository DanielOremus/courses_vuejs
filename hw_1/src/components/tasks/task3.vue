<template>
  <div>
    <h2>Task {{ $route.params.id }}</h2>
    <div class="condition-container">
      Condition: Задано початок та кінець діапазону. При натисканні на кнопку
      випадковим чином генерувати значення з вказаного діапазону та відображати
      його.
    </div>
    <div class="main">
      <label
        >Min number:
        <input type="number" v-model="minNumber" />
      </label>
      <label
        >Max number:
        <input type="number" v-model="maxNumber" />
      </label>
      <button @click="onGenerate()">Generate</button>
      <span>Generated number: {{ randomNumber }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Task3",
  data() {
    return {
      minNumber: 0,
      maxNumber: 10,
      randomNumber: null,
    }
  },
  computed: {},
  methods: {
    generateRandomNumber() {
      return (
        this.minNumber +
        Math.floor(Math.random() * (this.maxNumber - this.minNumber + 1))
      )
    },
    onGenerate() {
      this.randomNumber = this.generateRandomNumber()
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
button {
  width: fit-content;
  font-size: 1.2rem;
}
</style>
