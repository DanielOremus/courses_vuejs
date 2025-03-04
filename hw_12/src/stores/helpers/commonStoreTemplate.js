import CollectionManager from "../managers/localStorageDB"
import { sleep } from "./index"

export const state = {
  itemsList: [],
  collectionName: null,
  currentItem: null,
  fetchLoading: false,
  actionLoading: false,
  responseError: null,
}
export const getters = {}
export const actions = {
  async fetchItems() {
    this.responseError = null
    this.fetchLoading = true
    try {
      await sleep()
      this.itemsList = CollectionManager.getItems(this.collectionName)
    } catch (error) {
      this.responseError = error
    } finally {
      this.fetchLoading = false
    }
  },
  async fetchItemById(id) {
    this.responseError = null
    this.fetchLoading = true
    try {
      await sleep()
      this.currentItem = CollectionManager.getItemById(this.collectionName, id)
    } catch (error) {
      this.responseError = error
    } finally {
      this.fetchLoading = false
    }
  },
  async addItem(itemData) {
    this.responseError = null
    this.actionLoading = true
    try {
      await sleep()
      CollectionManager.addItem(this.collectionName, itemData)
      this.itemsList.push(itemData)
    } catch (error) {
      this.responseError = error
    } finally {
      this.actionLoading = false
    }
  },
  async updateItemById(itemData) {
    this.responseError = null
    this.actionLoading = true
    try {
      await sleep()
      CollectionManager.updateItem(this.collectionName, itemData)
      const index = this.itemsList.findIndex((item) => item.id === itemData.id)
      this.itemsList[index] = { ...this.itemsList[index], ...itemData }
    } catch (error) {
      this.responseError = error
    } finally {
      this.actionLoading = false
    }
  },
  async deleteItemById(id) {
    this.responseError = null
    this.actionLoading = true
    try {
      await sleep()
      CollectionManager.deleteItem(this.collectionName, id)
      this.itemsList = this.itemsList.filter((item) => item.id !== id)
    } catch (error) {
      this.responseError = error
    } finally {
      this.actionLoading = false
    }
  },
  clearCurrentItem() {
    this.currentItem = null
  },
}
