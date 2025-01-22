<template>
  <div class="condition-container">
    Вивести список як маркований список з елементами у форматі (name: salary)
  </div>
  <div class="main">
    <ul>
      <li v-for="worker in workersList" :key="worker.id">
        {{ worker.name }} : {{ worker.salary }}
      </li>
    </ul>
  </div>
</template>

<script>
const workersList = [
  {
    id: "111",
    name: "Іванов",
    salary: 10000,
  },
  {
    id: "112",
    name: "Петров",
    salary: 20000,
  },
  {
    id: "113",
    name: "Сидоров",
    salary: 50000,
  },
]
export default {
  name: "Task4",
  computed: {
    workersList() {
      return workersList
    },
  },
}
</script>

<style lang="css" scoped>
.main {
  font-size: 1.2rem;
  display: flex;
  flex-direction: column;
  ul {
    list-style-position: inside;
  }
}
</style>
