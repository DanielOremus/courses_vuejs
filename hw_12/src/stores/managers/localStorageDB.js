import { v4 as uuidv4 } from "uuid"
export default class CollectionManager {
  static getItems(collectionName) {
    return JSON.parse(localStorage.getItem(collectionName)) || []
  }
  static getItemById(collectionName, itemId) {
    const items = CollectionManager.getItems(collectionName)
    return items.find((item) => item.id === itemId)
  }
  static getItemsByFieldValue(collectionName, { fieldName, fieldValue }) {
    const items = CollectionManager.getItems(collectionName)
    return items.filter((item) => item[fieldName] === fieldValue)
  }
  static saveItems(collectionName, items) {
    localStorage.setItem(collectionName, JSON.stringify(items))
  }
  static addItem(collectionName, item) {
    const items = CollectionManager.getItems(collectionName)
    items.push({
      id: uuidv4(),
      ...item,
    })
    CollectionManager.saveItems(collectionName, items)
  }
  static updateItem(collectionName, updatedItem) {
    const items = CollectionManager.getItems(collectionName)
    const index = items.findIndex((item) => item.id === updatedItem.id)
    if (index > -1) {
      items[index] = { ...items[index], ...updatedItem }
      CollectionManager.saveItems(collectionName, items)
    }
  }
  static updateManyItems(
    collectionName,
    { fieldName, fieldValue },
    updatedData
  ) {
    let items = CollectionManager.getItems(collectionName)
    items = items.map((item) =>
      item[fieldName] === fieldValue ? { ...item, ...updatedData } : item
    )
    CollectionManager.saveItems(collectionName, items)
  }
  static deleteItem(collectionName, itemId) {
    let items = CollectionManager.getItems(collectionName)
    items = items.filter(({ id }) => id !== itemId)
    CollectionManager.saveItems(collectionName, items)
  }
}
