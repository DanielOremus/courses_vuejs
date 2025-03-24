import { defineStore } from "pinia"
import apiEndpoints from "@/constants/apiEndpoints"
import api from "@/config/axios"

export const useAuthStore = defineStore("auth", {
  state: () => ({
    user: null,
    loading: false,
    error: null,
  }),
  getters: {
    isAuthenticated: (state) => !!state.user,
    jwtToken: () => localStorage.getItem("jwt"),
  },
  actions: {
    async fetchProfileData() {
      try {
        const response = await api.get(apiEndpoints.users.fetchOwnProfileData)
        const resData = response.data
        this.user = resData.data.profile
      } catch (error) {
        this.error = error
      } finally {
        this.loading = false
      }
    },
    async signIn(credentials) {
      let type = credentials.type ?? "register"

      const url =
        type === "login" ? apiEndpoints.auth.login : apiEndpoints.auth.register

      try {
        const response = await api.post(url, credentials)
        const resData = response.data
        localStorage.setItem("jwt", resData.data.token)
        await this.fetchProfileData()
      } catch (error) {
        this.error = error
      } finally {
        this.loading = false
      }
    },
  },
})
