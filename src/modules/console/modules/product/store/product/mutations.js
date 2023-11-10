

// // export const myMutation =  (state) => {
// // return state
// // }

export const setProducts = (state, { data, page, pageSize, totalElements, totalPages }) => {
    if (data) {
        state.products = data
        state.page = page
        state.pageSize = pageSize
        state.totalElements = totalElements
        state.totalPages = totalPages
    }
}

export const setProduct = (state, data) => {
    state.product = data
}

export const deleteProductById = (state, productId) => {
    console.log(productId)
    const result = state.products.filter(product => product.id != productId)
    state.products = result
}
