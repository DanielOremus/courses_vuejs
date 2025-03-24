// import { getDefaultModuleObj } from "./helpers/getCollectionModule"
// export const useProductsStore = getDefaultModuleObj("products")
import { useProductFilters } from "./productFilters"
import he from "he"
import apiEndpoints from "@/constants/apiEndpoints"
import api from "@/config/axios"
import { defineStore } from "pinia"
import { packInFormData } from "./helpers"

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
        const response = await api.get(apiEndpoints.products.fetchAll)
        const resData = response.data
        this.productsList = resData.data.products
      } catch (error) {
        this.error = error
      } finally {
        this.loading = false
      }
    },
    async fetchProductsByQuery() {
      this.loading = true
      this.error = null
      const productFilters = useProductFilters()
      try {
        const response = await api.get(apiEndpoints.products.fetchByQuery, {
          params: productFilters.query,
        })
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
        const response = await api.get(apiEndpoints.products.fetchById(id))
        const resData = response.data
        const product = resData.data.product
        this.currentProduct = {
          ...product,
          name: he.decode(product.name),
          description: he.decode(product.description ?? ""),
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

      const productFormData = packInFormData(productData)

      try {
        const response = await api.post(
          apiEndpoints.products.create,
          productFormData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        )
        const resData = response.data
        this.productsList.push(resData.data.product)
        this.clearCurrentProduct()
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
      const productFormData = packInFormData(productData)
      try {
        const response = await api.put(
          apiEndpoints.products.updateById(_id),
          productFormData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        )
        const resData = response.data
        let productInd = this.productsList.findIndex(
          (product) => product._id === _id
        )
        this.productsList[productInd] = resData.data.product
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
        await api.delete(apiEndpoints.products.deleteById, { data: { id } })
        this.productsList = this.productsList.filter(
          (product) => product._id !== id
        )
      } catch (error) {
        this.error = error
      } finally {
        this.loading = false
      }
    },
    clearCurrentProduct() {
      this.currentProduct = null
    },
  },
})
