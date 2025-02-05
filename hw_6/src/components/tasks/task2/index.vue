<template>
  <div class="condition-container">
    Розробити компонент (з підтримкою v-model), який дозволяє вводити шлях до
    файлу js (URL, що закінчується розширенням js). При заданні модифікатора
    checkPath відображати червоним фоном input, якщо шлях некоректний.
  </div>
  <div class="main">
    <url-input v-model.checkPath="fileUrl"></url-input>
  </div>
</template>

<script>
import UrlInput from "./UrlInput.vue"
export default {
  name: "Task2",
  components: {
    UrlInput,
  },
  data() {
    return {
      fileUrl: null,
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
</style>
