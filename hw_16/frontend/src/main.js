import "./assets/styles/index.css"
import "primeicons/primeicons.css"

import { createApp } from "vue"
import PrimeVue from "primevue/config"

import App from "./App.vue"
import router from "./router"
import pinia from "./stores/index"
import Aura from "@primeuix/themes/aura"
import MainLayout from "./layouts/MainLayout.vue"
import { useAuthStore } from "./stores/auth"
import LoadingOverlay from "./components/general/LoadingOverlay.vue"
const app = createApp(App)

app.use(pinia)
app.use(router)
app.use(PrimeVue, {
  theme: {
    preset: Aura,
    options: {
      cssLayer: {
        name: "primevue",
        order: "tailwind-base, primevue, tailwind-utilities",
      },
      darkModeSelector: ".dark",
    },
  },
  pt: {
    inputText: {
      root: "border-2",
    },
    button: {
      root: "text-lg py-1",
    },
    select: {
      root: "border-2",
    },
    multiselect: {
      root: "border-2",
    },
    textarea: {
      root: "border-2",
    },
  },
})

app.component("main-layout", MainLayout)
app.component("loading-overlay", LoadingOverlay)

if (useAuthStore().jwtToken) {
  useAuthStore().fetchProfileData()
}
app.mount("#app")
