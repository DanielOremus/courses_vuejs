<template>
  <div class="condition-container">
    Розробити компонент для введення віку користувача (з підтримкою v-model).
    При заданні модифікатора check не допускати введення некоректного віку (вік
    не може бути більшим за 150). При заданні модифікатора setColor задавати фон
    (вік менше 10 – зелений, від 10 до 21 – жовтий, інакше – оранжевий).
  </div>
  <div class="main">
    <custom-age-input v-model.setColor.check="userAge"></custom-age-input>
  </div>
</template>

<script>
import CustomAgeInput from "./CustomAgeInput.vue"
export default {
  name: "Task1",
  components: {
    CustomAgeInput,
  },
  data() {
    return {
      userAge: null,
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
