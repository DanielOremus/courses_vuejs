import CollectionManager from "../managers/localStorageDB"
import { sleep } from "./index"

export const state = {
  itemsList: [],
  collectionName: null,
  currentItem: null,
  isLoading: false,
  responseError: null,
}
export const getters = {}
export const actions = {
  async fetchItems() {
    this.responseError = null
    this.isLoading = true
    try {
      await sleep()
      this.itemsList = CollectionManager.getItems(this.collectionName)
    } catch (error) {
      this.responseError = error
    } finally {
      this.isLoading = false
    }
  },
  async fetchItemById(id) {
    this.responseError = null
    this.isLoading = true
    try {
      await sleep()
      this.currentItem = CollectionManager.getItemById(this.collectionName, id)
    } catch (error) {
      this.responseError = error
    } finally {
      this.isLoading = false
    }
  },
  async addItem(itemData) {
    this.responseError = null
    this.isLoading = true
    try {
      CollectionManager.addItem(this.collectionName, itemData)
      await sleep()
      this.itemsList.push(itemData)
    } catch (error) {
      this.responseError = error
    } finally {
      this.isLoading = false
    }
  },
  async updateItemById(itemData) {
    this.responseError = null
    this.isLoading = true
    try {
      CollectionManager.updateItem(this.collectionName, itemData)
      await sleep()
    } catch (error) {
      this.responseError = error
    } finally {
      this.isLoading = false
    }
    // this.
  },
  async deleteItemById(id) {
    this.responseError = null
    this.isLoading = true
    try {
      CollectionManager.deleteItem(this.collectionName, id)
      await sleep()
    } catch (error) {
      this.responseError = error
    } finally {
      this.isLoading = false
    }
  },
}
