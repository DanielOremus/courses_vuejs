<template>
  <div>
    <h2>Task {{ task.id }}</h2>
    <component :is="taskComponent"> </component>
  </div>
</template>

<script>
import { defineAsyncComponent } from "vue"
export default {
  name: "Task",
  props: {
    task: {
      type: Object,
      default: ()=>({}),
    },
  },
  computed: {
    taskComponent() {
      return defineAsyncComponent(this.task.component)
    },
  },
}
</script>

<style lang="css" coped>
.condition-container {
  font-size: 1.2rem;
  margin-bottom: 1rem;
}
.condition-todo {
  list-style-position: inside;
}
</style>
