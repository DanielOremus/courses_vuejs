// import apiEndpoints from "@/constants/apiEndpoints"
// import axios from "axios"
// import { defineStore } from "pinia"

// export const getDefaultModuleObj = (collectionTitle) => {
//   return defineStore(collectionTitle, {
//     state: () => ({
//       [collectionTitle]: [],
//       currentItem: null,
//       loading: false,
//       error: null,
//     }),
//     actions: {
//       async fetchItems() {
//         try {
//           const response = await axios.get(
//             apiEndpoints[collectionTitle].fetchAll
//           )
//           const resData = response.data
//           this[collectionTitle] = resData.data[collectionTitle]
//         } catch (error) {
//           this.error = error
//         } finally {
//           this.loading = false
//         }
//       },
//       async fetchItemById(id) {
//         try {
//           const response = await axios.get(
//             apiEndpoints[collectionTitle].fetchById
//           )
//           const resData = response.data
//           this[collectionTitle] = resData.data[collectionTitle]
//         } catch (error) {
//           this.error = error
//         } finally {
//           this.loading = false
//         }
//       },
//     },
//   })
// }
