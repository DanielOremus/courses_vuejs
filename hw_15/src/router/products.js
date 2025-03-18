import apiEndpoints from "@/constants/apiEndpoints"
import axios from "axios"

export const productsRoutes = [
  {
    path: "/products",
    name: "products",
    component: () => import("@/views/products/index.vue"),
    redirect: { name: "productsList" },
    children: [
      {
        path: "list",
        name: "productsList",
        component: () => import("@/views/products/ProductsList.vue"),
      },
      {
        path: "edit/:id?",
        name: "productEdit",
        props: true,
        component: () => import("@/views/products/ProductEdit.vue"),
      },
      {
        path: ":id",
        name: "productDetails",
        props: true,
        component: () => import("@/views/products/ProductDetails.vue"),
        beforeEnter: async (to, from) => {
          try {
            await axios.get(apiEndpoints.products.fetchById(to.params.id))
          } catch (error) {
            const response = error.response
            switch (response.status) {
              case 404:
              case 400:
                return { name: "notFound" }
              default:
                return { name: "home" }
            }
          }
        },
      },
    ],
  },
]
