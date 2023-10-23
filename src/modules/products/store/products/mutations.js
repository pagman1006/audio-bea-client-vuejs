

// export const myMutation =  (state) => {
// return state
// }


export const setHotdealDate = (state, { hotdeal }) => {
  const hotdealDate = new Date(hotdeal)
  state.hotdealDate = hotdealDate
}

export const setNewProducts = (state, { data }) => {
  if (data) {
    state.newProducts = data
  }
}

export const setImageCollection = (state, { data }) => {
  if (data) {
    state.imageCollection = data
  }
}
