

// // export const myGetter =  (state) => {
// // return state
// // }


export const getProducts = (state) => {
    return state.products
}

export const getProduct = (state) => {
    return state.product
}

export const getPage = (state) => {
    return state.page
}

export const getPageSize = (state) => {
    return state.pageSize
}

export const getTotalElements = (state) => {
    return state.totalElements
}

export const getTotalPages = (state) => {
    return state.totalPages
}