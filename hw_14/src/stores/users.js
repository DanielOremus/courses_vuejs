import { defineStore } from "pinia"
export const useUsersStore = defineStore("users", {
  state: () => ({
    usersList: [
      { id: 1, name: "Шевченко О. В.", experience: 5 },
      { id: 2, name: "Коваленко І. М.", experience: 3 },
      { id: 3, name: "Бондаренко М. С.", experience: 7 },
      { id: 4, name: "Ткаченко О. П.", experience: 2 },
      { id: 5, name: "Кравченко А. В.", experience: 4 },
      { id: 6, name: "Олійник Н. І.", experience: 6 },
      { id: 7, name: "Лисенко В. О.", experience: 8 },
      { id: 8, name: "Мельник Ю. М.", experience: 1 },
      { id: 9, name: "Романенко Д. С.", experience: 9 },
      { id: 10, name: "Петренко К. І.", experience: 3 },
      { id: 11, name: "Сидоренко С. В.", experience: 5 },
      { id: 12, name: "Гончар І. М.", experience: 4 },
      { id: 13, name: "Мороз М. О.", experience: 7 },
      { id: 14, name: "Кузьменко В. І.", experience: 2 },
      { id: 15, name: "Поліщук О. С.", experience: 6 },
      { id: 16, name: "Ковальчук І. В.", experience: 8 },
      { id: 17, name: "Савченко А. М.", experience: 1 },
      { id: 18, name: "Рибак Ю. О.", experience: 9 },
      { id: 19, name: "Захарченко Д. І.", experience: 3 },
      { id: 20, name: "Павленко К. С.", experience: 5 },
    ],
  }),
})
