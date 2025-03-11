import { defineStore } from "pinia"
export const useSuppliersStore = defineStore("suppliers", {
  state: () => ({
    suppliersList: [
      {
        id: 1,
        name: "Політ",
        imgSrc: "https://i.imgur.com/0B9BQYB.png",
        deliveryMethods: ["Авто", "Літак"],
      },
      {
        id: 2,
        name: "Надійність",
        imgSrc: "https://i.imgur.com/dmKEvfM.png",
        deliveryMethods: ["Авто"],
      },
      {
        id: 3,
        name: "Швидка",
        imgSrc: "https://i.imgur.com/8KSvtqO.png",
        deliveryMethods: ["Літак", "Авто"],
      },
      {
        id: 4,
        name: "Економ",
        imgSrc: "https://i.imgur.com/IDUbPb7.png",
        deliveryMethods: ["Авто", "Віз"],
      },
    ],
  }),
})
