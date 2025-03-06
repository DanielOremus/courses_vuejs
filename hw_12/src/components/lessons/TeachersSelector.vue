<template>
  <div class="teachers-selector">
    <div
      v-for="(lesson, i) in lessonsList"
      :key="lesson.id"
      class="lesson-card"
    >
      {{ lesson.name }}
      <!-- TODO: fix teachers selection -->
      <m-select
        :items="teachersList"
        v-model="selectedTeachersIds[lesson.id]"
      />
    </div>
  </div>
  <div class="teachers-selector__actions">
    <button
      class="start-education-btn"
      :disabled="!areAllLessonsAttached"
      @click="onTeachersSelect"
    >
      Почати навчання
    </button>
  </div>
</template>

<script>
export default {
  name: "TeachersSelector",
  emits: ["select-teachers"],
  props: {
    lessonsList: {
      type: Array,
      default: () => [],
    },
    teachersList: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      selectedTeachersIds: {},
    }
  },
  computed: {
    areAllLessonsAttached() {
      if (
        Object.keys(this.selectedTeachersIds).length !== this.lessonsList.length
      )
        return false
      for (const lessonsId in this.selectedTeachersIds) {
        if (!this.selectedTeachersIds[lessonsId]) return false
      }
      return true
    },
  },
  methods: {
    onTeachersSelect() {
      const idPairs = []
      for (const lessonId in this.selectedTeachersIds) {
        const teacherId = this.selectedTeachersIds[lessonId]
        if (teacherId) {
          idPairs.push(`${lessonId}-${teacherId}`)
        }
      }
      this.$emit("select-teachers", idPairs)
    },
  },
}
</script>

<style lang="scss" scoped>
.teachers-selector {
  display: grid;
  gap: 1rem;
}
.lesson-card {
  font-size: 1.2rem;
  width: 600px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  & > .my-selector {
    font-size: 1.05rem;
  }
}
.teachers-selector__actions {
  margin-top: 1rem;
  display: flex;
  justify-content: center;
}
.start-education-btn {
  font-size: 1.15rem;
  padding: 0.2em 0.5em;
}
</style>
