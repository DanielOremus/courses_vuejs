export const productsRoutes = [
  {
    path: "/products",
    name: "products",
    component: () => import("@/views/products/index.vue"),
    children: [
      {
        path: "selector",
        name: "productsSelector",
        components: {
          filters: () => import("@/views/products/ProductsSelector.vue"),
        },
      },
      {
        path: "editor",
        name: "productsEditor",
        components: {
          editForm: () => import("@/views/products/ProductsEditor.vue"),
        },
      },
    ],
  },
]
