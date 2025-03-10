import { defineStore } from "pinia"
export const useSuppliersStore = defineStore("suppliers", {
  state: () => ({
    suppliersList: [
      {
        id: 1,
        name: "Політ",
        imgSrc: "example.png",
        deliveryImgs: ["example.png"],
      },
      {
        id: 2,
        name: "Надійність",
        imgSrc: "example.png",
        deliveryImgs: ["example.png"],
      },
      {
        id: 3,
        name: "Швидка",
        imgSrc: "example.png",
        deliveryImgs: ["example.png"],
      },
      {
        id: 4,
        name: "Економ",
        imgSrc: "example.png",
        deliveryImgs: ["example.png"],
      },
    ],
  }),
})
