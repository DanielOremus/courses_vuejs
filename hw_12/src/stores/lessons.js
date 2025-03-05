import { defineStore } from "pinia"

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
    getLessonsByIds:
      ({ lessonsList }) =>
      (ids) => {
        const objList = {}
        for (const lesson of lessonsList) {
          objList[lesson.id] = { ...lesson }
        }
        const list = []
        ids.forEach((id) => {
          if (objList[id]) list.push(objList[id])
        })
        return list
      },
  },
})
