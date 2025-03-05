<template>
  <div class="lessons-selector">
    <label v-for="lesson in lessonsList" :key="lesson.id" class="label">
      <input type="checkbox" :value="lesson.id" v-model="selectedLessonsIds" />
      {{ lesson.name }}
    </label>
  </div>
  <div class="lessons-selector__actions">
    <button
      class="select-teachers-btn"
      :disabled="!selectedLessonsIds.length"
      @click="onLessonsSelect"
    >
      Вибрати вчителів
    </button>
  </div>
</template>

<script>
export default {
  name: "LessonsSelector",
  emits: ["select-lessons"],
  props: {
    lessonsList: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      selectedLessonsIds: [],
    }
  },

  methods: {
    onLessonsSelect() {
      this.$emit("select-lessons", this.selectedLessonsIds)
    },
  },
}
</script>

<style lang="scss" scoped>
.lessons-selector {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  row-gap: 1rem;
  column-gap: clamp(1rem, 10vw, 10rem);
}
.lessons-selector__actions {
  margin-top: 1rem;
  display: flex;
  justify-content: center;
}
.select-teachers-btn {
  font-size: 1.15rem;
  padding: 0.2em 0.5em;
}
.label {
  font-size: 1.2rem;
}
</style>
