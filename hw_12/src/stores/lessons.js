import { defineStore } from "pinia"
import { useTeachersStore } from "./teachers"

export const useLessonsStore = defineStore("lessons", {
  state: () => ({
    lessonsList: [
      { id: 1, name: "Математика" },
      { id: 2, name: "Фізика" },
      { id: 3, name: "Хімія" },
      { id: 4, name: "Біологія" },
      { id: 5, name: "Історія" },
      { id: 6, name: "Географія" },
      { id: 7, name: "Література" },
      { id: 8, name: "Музика" },
      { id: 9, name: "Малювання" },
      { id: 10, name: "Фізкультура" },
    ],
  }),
  getters: {
    lessonsListObj({ lessonsList }) {
      return lessonsList.reduce((acc, lesson) => {
        acc[lesson.id] = { ...lesson }
        return acc
      }, {})
    },
    getLessonsByIds: (state) => (idList) => {
      return idList.map((id) => ({ ...state.lessonsListObj[id] }))
    },
    getPopulatedEducationList(state) {
      return (lessonsAndTeachersPairs) => {
        const teachersListObj = useTeachersStore().teachersListObj

        return lessonsAndTeachersPairs.map((pair) => ({
          lesson: state.lessonsListObj[pair.lesson],
          teacher: teachersListObj[pair.teacher],
        }))
      }
    },
  },
})
