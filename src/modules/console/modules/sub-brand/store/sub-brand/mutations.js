

// export const myMutation =  (state) => {
// return state
// }

export const setSubBrands = (state, { data, page, pageSize, totalElements, totalPages }) => {
    if (data) {
        state.subBrands = data
        state.page = page
        state.pageSize = pageSize
        state.totalElements = totalElements
        state.totalPages = totalPages
    }
}

export const setSubBrand = (state, data) => {
    state.subBrand = data
}

export const deleteSubBrandById = (state, subBrandId) => {
    console.log(subBrandId)
    const result = state.subBrands.filter(subBrand => subBrand.id != subBrandId)
    state.subBrands = result
}