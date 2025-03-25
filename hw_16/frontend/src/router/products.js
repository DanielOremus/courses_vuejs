import apiEndpoints from "@/constants/apiEndpoints"
import axios from "axios"

const checkIfProductExists = async (to, from) => {
  try {
    await axios.get(apiEndpoints.products.fetchById(to.params.id))
    return { exists: true, error: null }
  } catch (error) {
    return { exists: false, error }
  }
}

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
        meta: {
          requiresAuth: false,
        },
      },
      {
        path: "edit/:id?",
        name: "productEdit",
        props: true,
        component: () => import("@/views/products/ProductEdit.vue"),
        meta: {
          requiresAuth: true,
        },
        beforeEnter: async (to, from) => {
          if (!to.params.id) return true
          const { exists, error } = await checkIfProductExists(to, from)
          if (!exists) {
            switch (error.response?.status) {
              case 404:
              case 400:
                return { name: "notFound" }
              default:
                return { name: "home" }
            }
          }
        },
      },
      {
        path: ":id",
        name: "productDetails",
        props: true,
        component: () => import("@/views/products/ProductDetails.vue"),
        meta: {
          requiresAuth: false,
        },
        beforeEnter: async (to, from) => {
          const { exists, error } = await checkIfProductExists(to, from)
          if (!exists) {
            switch (error.response?.status) {
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
