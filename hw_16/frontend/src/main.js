import "./assets/styles/index.css"
import "primeicons/primeicons.css"

import { createApp } from "vue"
import PrimeVue from "primevue/config"
import themeOptions from "./constants/themeOptions"
import i18n from "./plugins/i18n"

import App from "./App.vue"
import { router } from "./router"
import pinia from "./stores/index"
import { useAuthStore } from "./stores/auth"
import MainLayout from "./layouts/MainLayout.vue"
import LoadingOverlay from "./components/general/LoadingOverlay.vue"
const app = createApp(App)

app.use(pinia)
app.use(i18n)
app.use(PrimeVue, themeOptions)
app.use(router)
app.component("main-layout", MainLayout)
app.component("loading-overlay", LoadingOverlay)

const authStore = useAuthStore()

if (authStore.jwtToken) {
  authStore.fetchProfileData()
}
app.mount("#app")
