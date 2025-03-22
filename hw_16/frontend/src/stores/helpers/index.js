export const packInFormData = (dataObj) => {
  const formData = new FormData()
  for (const key in dataObj) {
    formData.append(key, dataObj[key])
  }
  return formData
}
