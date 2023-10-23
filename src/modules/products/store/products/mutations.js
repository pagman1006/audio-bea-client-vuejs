

// export const myMutation =  (state) => {
// return state
// }


export const getHotdealDate = (state, { hotdeal }) => {
    const hotdealDate = new Date(hotdeal)
    state.hotdealDate = hotdealDate
    console.log(state.hotdealDate)
}
