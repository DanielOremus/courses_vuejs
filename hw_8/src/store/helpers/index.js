import * as changeCase from "change-case"

export const sleep = async (ms = 1000) => {
  return await new Promise((resolve) => setTimeout(resolve, ms))
}
export const getObjKeysInCamelCase = (obj) => {
  const objCopy = JSON.parse(JSON.stringify(obj))
  for (const key in objCopy) {
    const keyCamelCase = changeCase.camelCase(key)
    objCopy[keyCamelCase] = objCopy[key]
    delete objCopy[key]
  }
  return objCopy
}
