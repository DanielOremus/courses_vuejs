<template>
  <div class="condition-container">
    Розробити компонент для вводу віку користувача та імені. Робити форматування
    при заданні відповідних модифікаторів відповідних полів input:
    <ul>
      <li>ім’я користувача - у випадку порожнього поля (червони фон)</li>
      <li>вік (вік менший за 18 – колір фону червоний, інакше – зелений).</li>
    </ul>
  </div>
  <div class="main">
    <worker-form
      v-model:name.check="workerName"
      v-model:age.check="workerAge"
    ></worker-form>
    <div>Name: {{ workerName }} - Age: {{ workerAge }}</div>
  </div>
</template>

<script>
import WorkerForm from "./WorkerForm.vue"
export default {
  name: "Task4",
  components: {
    WorkerForm,
  },
  data() {
    return {
      workerName: "",
      workerAge: null,
    }
  },
}
</script>

<style lang="css" scoped>
.main {
  font-size: 1.2rem;
  display: flex;
  flex-direction: column;
}
.condition-container > ul {
  list-style-position: inside;
}
</style>
