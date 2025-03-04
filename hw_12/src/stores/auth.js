import { defineStore } from "pinia"
export const useAuthStore = defineStore("auth", {
  state: () => ({
    username: null,
    password: null,
    fieldName: "auth",
  }),
  getters: {
    isAuthenticated: (state) => !!state.username && !!state.password,
  },
  actions: {
    syncAuthData() {
      const authData = JSON.parse(localStorage.getItem(this.fieldName)) ?? null
      if (authData) {
        const { username, password } = authData
        this.username = username ?? null
        this.password = password ?? null
      } else {
        this.username = null
        this.password = null
      }
    },
    login({ username, password }) {
      localStorage.setItem(
        this.fieldName,
        JSON.stringify({ username, password })
      )
      this.syncAuthData()
    },
    logout() {
      localStorage.removeItem(this.fieldName)
      this.syncAuthData()
    },
  },
})
