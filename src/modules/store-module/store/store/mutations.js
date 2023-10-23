

export const setProducts = (state, { data }) => {
    if (data) {
        state.products = data
    }
}