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

export const getPopulatedObj = (targetObj, fields) => {
  //field = {
  //name: 'brand',
  //refMap: brandsList,
  //nameFromTargetObj: 'title'
  //}
  const targetObjCopy = { ...targetObj }
  for (const field of fields) {
    if (targetObj[field.name]) {
      const refObj = field.refMap.get(targetObj[field.name])
      targetObjCopy[field.name] = refObj[field.nameFromTargetObj]
    }
  }
  return targetObjCopy
}

export const getPopulatedArr = (targetArr, fields) => {
  return targetArr.map((obj) => getPopulatedObj(obj, fields))
}

export const createMapFromFilterValue = (filterValue) => {
  return new Map(
    filterValue.reduce((acc, el) => {
      if (el.id) {
        acc.push([el.id, el])
      }
      return acc
    }, [])
  )
}

export const getPopulatedCarsList = (carsList, filterValues) => {
  const { typesList, brandsList, modelsList, bodyTypes } = filterValues
  const resArr = getPopulatedArr(carsList, [
    {
      name: "type",
      refMap: createMapFromFilterValue(typesList),
      nameFromTargetObj: "title",
    },
    {
      name: "brand",
      refMap: createMapFromFilterValue(brandsList),
      nameFromTargetObj: "title",
    },
    {
      name: "model",
      refMap: createMapFromFilterValue(modelsList),
      nameFromTargetObj: "title",
    },
    {
      name: "bodyType",
      refMap: createMapFromFilterValue(bodyTypes),
      nameFromTargetObj: "title",
    },
  ])
  return resArr
}
