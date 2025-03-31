export const groupListById = (list) => {
  return list.reduce((acc, item) => {
    acc[item.id] = item
    return acc
  }, {})
}
