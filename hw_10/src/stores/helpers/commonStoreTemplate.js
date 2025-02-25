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
      CollectionManager.addItem(this.collectionName, itemData)
      await sleep()
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
      CollectionManager.updateItem(this.collectionName, itemData)
      await sleep()
    } catch (error) {
      this.responseError = error
    } finally {
      this.actionLoading = false
    }
    // this.
  },
  async deleteItemById(id) {
    this.responseError = null
    this.actionLoading = true
    try {
      CollectionManager.deleteItem(this.collectionName, id)
      await sleep()
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
