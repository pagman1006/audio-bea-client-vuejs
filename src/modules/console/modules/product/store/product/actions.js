// import audiobeaApi from "@/api/audiobeaApi"


// export const createBrand = async ({ commit }, payload) => {
//   const { brandName, token } = payload

//   try {
//     const { data } = await audiobeaApi.post('/brands', { brandName, "enabled": true }, {
//       headers: {
//         Authorization: `Bearer ${token}`
//       }
//     })
//     return { 'ok': true, 'message': data }
//   } catch (error) {
//     const { message } = error.response.data
//     return { 'ok': false, 'message': message }
//   }
// }

// export const listBrands = async ({ commit }, { brand, page, pageSize }) => {
//   try {
//     const { data } = await audiobeaApi.get('/brands', {
//       params: {
//         brand,
//         page,
//         pageSize
//       }
//     })
//     commit('setBrands', data)
//     return { 'ok': true, 'message': data }
//   } catch (error) {
//     console.log(error)
//     const { message } = error.response.data
//     return { 'ok': false, 'message': message }
//   }
// }

// export const deleteBrandById = async ({ commit }, { id, token }) => {
//   try {
//     const { data } = await audiobeaApi.delete(`/brands/${id}`, {
//       headers: {
//         Authorization: `Bearer ${token}`
//       }
//     })
//     return { 'ok': true, 'message': data }
//   } catch (error) {
//     const { message } = error.response.data
//     return { 'ok': false, 'message': message }
//   }
// }

// export const getBrandById = async ({ commit }, { id }) => {
//   try {
//     const { data } = await audiobeaApi.get(`/brands/${id}`)
//     commit('setBrand', data)
//     return { 'ok': true, 'message': data }
//   } catch (error) {
//     const { message } = error.response.data
//     return { 'ok': false, 'message': message }
//   }
// }

// export const updateBrandById = async ({ commit }, { id, brandName, enabled, token }) => {
//   try {
//     const { data } = await audiobeaApi.put(`/brands/${id}`, { id, brandName, enabled }, {
//       headers: {
//         Authorization: `Bearer ${token}`
//       }
//     })
//     commit('setBrand', data)
//     return { 'ok': true, 'message': data }
//   } catch (error) {
//     const { message } = error.response.data
//     return { 'ok': false, 'message': message }
//   }
// }
