import audiobeaApi from "@/api/audiobeaApi"


export const getHotdealDate = async ({ commit }) => {
  try {
    const { data } = await audiobeaApi.get('/products/hotdeal')
    commit('setHotdealDate', data)
  } catch (error) {
    const { message } = error.response.data
    return { 'ok': false, 'message': message }
  }
}

export const getProductsConsult = async ({ commit }, { productType, productName, brand, subBrand, newProduct, page, pageSize }) => {
  try {
    const { data } = await audiobeaApi.get('products', {
      params: {
        productType,
        productName,
        brand,
        subBrand,
        newProduct,
        page,
        pageSize
      }
    })
    return { 'ok': true, data }
  } catch (error) {
    const { message } = error.response.data
    return { 'ok': false, 'message': message }
  }
}

export const getProducts = async ({ commit }) => {
  const { ok, message, data } = await getProductsConsult(commit, {})
  if (ok) {
    commit('setNewProducts', data)
  }
}

export const getNewProducts = async ({ commit }) => {
  const { ok, message, data } = await getProductsConsult(commit, { 'newProduct': true })
  if (ok) {
    commit('setNewProducts', data)
  }
}

export const getImageCollection = async ({ commit }) => {
  try {
    const { data } = await audiobeaApi.get('image-collection')
    commit('setImageCollection', data)
  } catch (error) {
    const { message } = error.response.data
    return { 'ok': false, 'message': message }
  }
}

