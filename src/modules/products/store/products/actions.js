import audiobeaApi from "@/api/audiobeaApi"


export const getHotdealDate = async ({ commit }) => {
    try {
        const { data } = await audiobeaApi.get('/products/hotdeal')
        commit('getHotdealDate', data)
    } catch (error) {
        const { message } = error.response.data
        return { 'ok': false, 'message': message }
    }
}