<template>
  <selector
    :mode="2"
    selector-title="Виберіть вчителів:"
    :lessons-list="selectedLessons"
    :teachers-list="teachersList"
  />
</template>

<script>
import { mapState } from "pinia"
import { useTeachersStore } from "@/stores/teachers"
import { useLessonsStore } from "@/stores/lessons"
import Selector from "@/components/lessons/Selector.vue"
export default {
  name: "TeachersSelectView",
  components: {
    Selector,
  },
  computed: {
    ...mapState(useTeachersStore, ["teachersList"]),
    ...mapState(useLessonsStore, ["getLessonsByIds"]),
    selectedLessons() {
      const lessonsIds = this.$route.params.lessonsIds
      return this.getLessonsByIds(lessonsIds)
    },
  },
}
</script>

<style lang="scss" scoped></style>
