import { defineStore } from "pinia"

export const useTeachersStore = defineStore("teachers", {
  state: () => ({
    teachersList: [
      { id: 1, name: "Олександр Іванович" },
      { id: 2, name: "Марія Петрівна" },
      { id: 3, name: "Іван Миколайович" },
      { id: 4, name: "Світлана Олександрівна" },
      { id: 5, name: "Петро Васильович" },
      { id: 6, name: "Олена Сергіївна" },
      { id: 7, name: "Володимир Андрійович" },
    ],
  }),
  getters: {
    teachersListObj: ({ teachersList }) =>
      teachersList.reduce((acc, teacher) => {
        acc[teacher.id] = { ...teacher }
        return acc
      }, {}),
  },
})
