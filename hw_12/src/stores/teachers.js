import { defineStore } from "pinia"

export const useTeachersStore = defineStore("teachers", {
  state: () => ({
    teachersList: [],
  }),
})
