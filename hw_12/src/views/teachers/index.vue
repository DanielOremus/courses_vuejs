<template>
  <main-master-page>
    <div class="teachers-list__container">
      <h1 class="teachers-list__title">Наші викладачі</h1>
      <ol class="teachers-list">
        <li v-for="teacher in teachersList" :key="teacher.id">
          {{ teacher.name }}
        </li>
      </ol>
    </div>
  </main-master-page>
</template>

<script>
import { mapState } from "pinia"
import { useTeachersStore } from "@/stores/teachers"
export default {
  name: "TeachersView",
  computed: {
    ...mapState(useTeachersStore, ["teachersList"]),
  },
}
</script>

<style lang="scss" scoped>
.teachers-list__container {
  font-size: 1.15rem;
  margin: 0 auto;
  margin-top: 5rem;
  width: fit-content;
  padding-inline: clamp(1rem, 5vw, 8rem);
  padding-block: 2rem;
  background-color: rgb(0, 0, 0);
  border-radius: 15px;
}
.teachers-list {
  display: grid;
  column-gap: 1.5rem;
  grid-template-columns: 1fr 1fr;
  list-style-position: inside;
  font-size: 1.15rem;
}
.teachers-list__title {
  margin-bottom: 1rem;
  text-align: center;
}
</style>
