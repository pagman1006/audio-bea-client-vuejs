

// export const myGetter =  (state) => {
// return state
// }

export const getCollections = (state) => {
    return state.productsCollection;
}

export const getProducts = (state) => {
    return state.products;
}

export const getHotdealDate = (state) => {
    return state.hotdealDate;
}

export const getImageCollection = (state) => {
    return state.imageCollection;
}

export const getNewProducts = (state) => {
    return state.newProducts;
}