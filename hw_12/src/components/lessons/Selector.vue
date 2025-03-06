<template>
  <div class="selector__container">
    <h1 class="selector__title">{{ selectorTitle }}</h1>
    <component
      :is="selectorComponent"
      v-bind="componentsProps"
      v-on="componentListeners"
    />
  </div>
</template>

<script>
import LessonsSelector from "./LessonsSelector.vue"
import TeachersSelector from "./TeachersSelector.vue"
export default {
  name: "LessonsList",
  props: {
    selectorTitle: {
      type: String,
      required: true,
    },
    lessonsList: {
      type: Array,
      default: () => [],
    },
    teachersList: {
      type: Array,
      default: () => [],
    },
    mode: {
      type: Number,
      default: 1,
    },
  },

  computed: {
    selectorComponent() {
      switch (this.mode) {
        case 1:
          return LessonsSelector

        case 2:
          return TeachersSelector
      }
    },
    componentsProps() {
      const props = { lessonsList: this.lessonsList }
      if (this.mode === 2)
        props.teachersList = [
          { id: null, name: "Оберіть" },
          ...this.teachersList,
        ]
      return props
    },
    componentListeners() {
      switch (this.mode) {
        case 1:
          return { "select-lessons": this.onLessonsSelect }
        case 2:
          return { "select-teachers": this.onTeachersSelect }
        default:
          return {}
      }
    },
  },

  methods: {
    onLessonsSelect(lessonsIds) {
      this.$router.push({
        name: "teachersSelect",
        params: { lessonsIds },
      })
    },
    onTeachersSelect(idPairs) {
      this.$router.push({
        name: "educationPlan",
        params: { lessonTeacherIds: idPairs },
      })
    },
  },
}
</script>

<style lang="scss" scoped>
.selector__container {
  padding: 1.5rem 5rem;
  width: fit-content;
  margin: 0 auto;
  margin-top: 5rem;
  background-color: rgb(13, 13, 13);
  border-radius: 15px;
}
.selector__title {
  margin-bottom: 1rem;
  text-align: center;
}
</style>
