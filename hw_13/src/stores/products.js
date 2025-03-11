import { defineStore } from "pinia"
export const useProductsStore = defineStore("products", {
  state: () => ({
    productsList: [
      {
        id: 1,
        name: "Яблука",
        price: 30,
        imgSrc: "https://ecovista.ua/wp-content/uploads/2019/02/apple_left.png",
      },
      {
        id: 2,
        name: "Банани",
        price: 40,
        imgSrc:
          "https://purepng.com/public/uploads/large/purepng.com-bananasbananabananasyellow-bananabotanically-a-berryedible-fruitherbaceousgenus-musa-1701527188617r7d10.png",
      },
      {
        id: 3,
        name: "Молоко",
        price: 25,
        imgSrc:
          "https://ekoferma-pole.com/wp-content/uploads/2020/07/prod1-1.png",
      },
      {
        id: 4,
        name: "Хліб",
        price: 15,
        imgSrc:
          "https://dikbakery.com/image/cache/catalog/products/bread/bread_0027-800x800.png",
      },
      {
        id: 5,
        name: "Яйця",
        price: 20,
        imgSrc: "https://pngicon.ru/file/uploads/eggs-128x81.png",
      },
      {
        id: 6,
        name: "Картопля",
        price: 10,
        imgSrc: "https://pngicon.ru/file/uploads/kartofel-1-256x204.png",
      },
      {
        id: 7,
        name: "Морква",
        price: 12,
        imgSrc: "https://imgpng.ru/d/carrot_PNG4978.png",
      },
      {
        id: 8,
        name: "Цибуля",
        price: 8,
        imgSrc: "https://imgpng.ru/d/onion_PNG602.png",
      },
      {
        id: 9,
        name: "Помідори",
        price: 35,
        imgSrc: "https://pngicon.ru/file/uploads/pomidory-png.png",
      },
      {
        id: 10,
        name: "Огірки",
        price: 28,
        imgSrc: "https://pngimg.com/uploads/cucumber/cucumber_PNG12628.png",
      },
    ],
  }),
})
