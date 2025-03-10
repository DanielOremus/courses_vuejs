export const productsRoutes = [
  {
    path: "/products",
    name: "products",
    component: () => import("@/views/products/index.vue"),
    children: [
      {
        path: "selector",
        name: "productsSelector",
        component: () => import("@/views/products/ProductsSelector.vue"),
      },
      {
        path: "editor",
        name: "productsEditor",
        component: () => import("@/views/products/ProductsEditor.vue"),
      },
    ],
  },
]
