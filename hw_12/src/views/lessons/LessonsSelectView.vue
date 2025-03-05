<template>
  <selector
    :mode="1"
    selectorTitle="Виберіть уроки:"
    :lessons-list="lessonsList"
  />
</template>

<script>
import { mapState } from "pinia"
import { useLessonsStore } from "@/stores/lessons"
import Selector from "@/components/lessons/Selector.vue"
export default {
  name: "LessonsSelectView",
  components: {
    Selector,
  },
  computed: {
    ...mapState(useLessonsStore, ["lessonsList"]),
  },
}
</script>

<style lang="scss" scoped></style>
