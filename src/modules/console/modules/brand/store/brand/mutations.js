

// export const myMutation =  (state) => {
// return state
// }

export const setBrands = (state, { data, page, pageSize, totalElements, totalPages }) => {
    if (data) {
        state.brands = data
        state.page = page
        state.pageSize = pageSize
        state.totalElements = totalElements
        state.totalPages = totalPages
    }
}

export const setBrand = (state, { brandName, enabled, id }) => {
    state.brand = { id, brandName, enabled }
}
