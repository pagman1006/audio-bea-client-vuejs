import audiobeaApi from "@/api/audiobeaApi"


export const listProducts = async ({ commit }, { productType, productName, brand, subBrand, newProduct, page, pageSize }) => {
  try {
    const { data } = await audiobeaApi.get('/products', {
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
    commit('setProducts', data)
    return { 'ok': true, 'message': 'data' }
  } catch (error) {
    const { message } = error.response.data
    return { 'ok': false, 'message': message }
  }
}

export const getProductById = async ({ commit }, { productId }) => {
  try {
    const { data } = await audiobeaApi.get(`/products/${productId}`)
    commit('setProduct', data)
    return { 'ok': true, 'message': data }
  } catch (error) {
    const { message } = error.response.data
    return { 'ok': false, 'message': message }
  }
}

export const deleteProductById = async ({ commit }, { productId, token }) => {
  try {
    const { data } = await audiobeaApi.delete(`/products/${productId}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    commit('deleteProductById', productId)
    console.log(data)
    return { 'ok': true, 'message': data }
  } catch (error) {
    const { message } = error.response.data
    return { 'ok': false, 'message': message }
  }
}
