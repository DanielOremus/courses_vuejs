import { getPopulatedArr, createMapFromFilterValue } from "./index"

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
export const getFilteredCarsList = (carsList, selectedFilters) => {
  return carsList.filter((car) => {
    if (selectedFilters.type && car.type !== selectedFilters.type) return false
    if (
      selectedFilters.bodyType.length > 0 &&
      !selectedFilters.bodyType.includes(car.bodyType)
    )
      return false
    if (selectedFilters.brand && car.brand !== selectedFilters.brand)
      return false
    if (selectedFilters.model && car.model !== selectedFilters.model)
      return false
    if (selectedFilters.year.some((el) => el)) {
      const [min, max] = selectedFilters.year
      if ((min && car.year < min) || (max && car.year > max)) return false
    }
    return true
  })
}
