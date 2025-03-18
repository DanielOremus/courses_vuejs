// import { getDefaultModuleObj } from "./helpers/getCollectionModule"
// export const useProductsStore = getDefaultModuleObj("products")
import he from "he"
import apiEndpoints from "@/constants/apiEndpoints"
import axios from "axios"
import { defineStore } from "pinia"

export const useProductsStore = defineStore("products", {
  state: () => ({
    productsList: [],
    currentProduct: null,
    loading: false,
    error: null,
  }),
  actions: {
    async fetchAllProducts() {
      this.loading = true
      this.error = null
      try {
        const response = await axios.get(apiEndpoints.products.fetchAll)
        const resData = response.data
        this.productsList = resData.data.products
      } catch (error) {
        this.error = error
      } finally {
        this.loading = false
      }
    },
    async fetchProductById(id) {
      this.loading = true
      this.error = null
      try {
        const response = await axios.get(apiEndpoints.products.fetchById(id))
        const resData = response.data
        await new Promise((resolve, reject) => setTimeout(resolve, 2000))
        const product = resData.data.product
        this.currentProduct = {
          ...product,
          name: he.decode(product.name),
          description: he.decode(product.description),
        }
      } catch (error) {
        this.error = error
      } finally {
        this.loading = false
      }
    },
    async createProduct(productData) {
      this.loading = true
      this.error = null
      try {
        //TODO: rewrite to formData
        await axios.post(apiEndpoints.products.create, productData)
        this.productsList.push(productData)
      } catch (error) {
        this.error = error
      } finally {
        this.loading = false
      }
    },
    async updateProduct(productData) {
      this.loading = true
      this.error = null
      const { _id } = productData
      try {
        //TODO: rewrite to formData
        await axios.put(apiEndpoints.products.updateById(_id), productData)
        let product = this.productsList.find((product) => product._id === _id)
        product = productData
      } catch (error) {
        this.error = error
      } finally {
        this.loading = false
      }
    },
    async deleteProduct(id) {
      this.loading = true
      this.error = null
      try {
        await axios.delete(apiEndpoints.products.deleteById, { data: { id } })
      } catch (error) {
        this.error = error
      } finally {
        this.loading = false
      }
    },
  },
})
