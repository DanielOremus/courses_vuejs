import { computed, reactive } from "vue"
import { v4 as uuidv4 } from "uuid"
import { groupListById } from "./groupListById"

export const useDefaultModuleObj = (moduleName) => {
  let itemsList = reactive([])

  const groupedItemsList = computed(() => {
    return groupListById(itemsList)
  })

  function createItem(itemData) {
    itemsList.push({ id: uuidv4(), ...itemData })
  }

  function updateItem(itemData) {
    const itemInd = itemsList.findIndex((item) => item.id === itemData.id)
    if (itemInd > -1) itemsList[itemInd] = { ...itemData }
  }
  function deleteItem(id) {
    const itemInd = itemsList.findIndex((item) => item.id === id)
    if (itemInd > -1) itemsList.splice(itemInd, 1)
  }

  return {
    [`${moduleName}List`]: itemsList,
    [`grouped${moduleName[0].toUpperCase() + moduleName.slice(1)}List`]:
      groupedItemsList,
    create: createItem,
    update: updateItem,
    delete: deleteItem,
  }
}
