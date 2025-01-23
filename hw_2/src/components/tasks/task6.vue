<template>
  <div class="condition-container">
    На кухню поступають замовлення. Спочатку ми додаємо їх у список “Очікують на
    виконання”, якщо повар береться робити — замовлення переходить у список
    “Виконуються”, якщо замовлення виконано — переходить у список “Готові до
    виносу”. Якщо натиснути на “Подано” - страва зникає з таблиці
  </div>
  <div class="main">
    <label>
      New dish:
      <input type="text" v-model.trim="dishName" />
    </label>
    <button :disabled="!isDishNameValid" @click="onOrder">Add to order</button>
    <div class="tables-container">
      <dishes-table
        title="In queue"
        :dishes="waitingList"
        :action-btn="{ title: 'Cook', clickCallback: onCook }"
      ></dishes-table>
      <dishes-table
        title="Processing"
        :dishes="processingList"
        :action-btn="{ title: 'Finished', clickCallback: onFinish }"
      ></dishes-table>
      <dishes-table
        title="Completed"
        :dishes="completedList"
        :action-btn="{ title: 'Submitted', clickCallback: onComplete }"
      ></dishes-table>
    </div>
  </div>
</template>

<script>
import DishesTable from "./DishesTable.vue"
export default {
  name: "Task6",
  components: {
    DishesTable,
  },
  data() {
    return {
      dishName: null,
      waitingList: [],
      processingList: [],
      completedList: [],
    }
  },
  methods: {
    onOrder() {
      this.waitingList.push({ id: new Date().getTime(), name: this.dishName })
      this.dishName = null
    },
    onCook(id) {
      const dishIndex = this.waitingList.findIndex((dish) => dish.id === id)
      if (dishIndex === -1) return
      const [dish] = this.waitingList.splice(dishIndex, 1)
      this.processingList.push(dish)
    },
    onFinish(id) {
      const dishIndex = this.processingList.findIndex((dish) => dish.id === id)
      if (dishIndex === -1) return
      const [dish] = this.processingList.splice(dishIndex, 1)
      this.completedList.push(dish)
    },
    onComplete(id) {
      const dishIndex = this.completedList.findIndex((dish) => dish.id === id)
      if (dishIndex > -1) this.completedList.splice(dishIndex, 1)
    },
  },
  computed: {
    isDishNameValid() {
      return this.dishName
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
  font-size: 1.1rem;
  padding: 0.2rem 0.5rem;
}
.tables-container {
  margin-top: 1rem;
  display: flex;
  gap: 5px;
}
</style>
