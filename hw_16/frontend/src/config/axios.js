import axios from "axios"
import config from "./default"
const api = axios.create({
  baseURL: config.apiUri,
})
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("jwt")
  if (token) {
    config.headers.authorization = `Bearer ${token}`
  }
  return config
})

export default api
