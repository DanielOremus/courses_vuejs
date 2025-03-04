import { defineStore } from "pinia"

export const useLessonsStore = defineStore("lessons", {
  state: () => ({
    lessonsList: [],
  }),
})
