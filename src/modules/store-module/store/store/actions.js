import audiobeaApi from "@/api/audiobeaApi"

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
        commit('setProducts', data)
    }
}