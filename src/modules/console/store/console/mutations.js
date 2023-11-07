

// export const myMutation =  (state) => {
// return state
// }

export const setBrands = (state, { data }) => {
    if (data) {
        state.brands = data
    }
}

export const setBrand = (state, { brandName, enabled, id }) => {
    state.brand = { id, brandName, enabled }
}

export const setSubBrands = (state, { data, page, pageSize, totalElements, totalPages }) => {
    console.log(data)
    if (data) {
        state.subBrands = data
        state.page = page
        state.pageSize = pageSize
        state.totalElements = totalElements
        state.totalPages = totalPages
    }
}

export const setSubBrand = (state, { brandName, enabled, id }) => {
    // state.subBrand = { id, brandName, enabled }
}