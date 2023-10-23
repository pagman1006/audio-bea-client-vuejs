import audiobeaApi from "@/api/audiobeaApi"


export const createUser = async ({ commit }, user) => {
  const { username, password } = user

  try {
    const { data } = await audiobeaApi.post('/users', { username, password, 'enabled': true, 'roles': [{ 'authority': 'USER' }] })
    return { 'ok': true, 'message': data }
  } catch (error) {
    const { message } = error.response.data
    return { 'ok': false, 'message': message }
  }
}

export const loginUser = async ({ commit }, user) => {
  const { username, password } = user
  try {
    const { data } = await audiobeaApi.post('/login', { username, password })
    delete data.user.password
    console.log(data)
    commit('loginUser', data)

    return { 'ok': true, 'message': data }
  } catch (error) {
    console.log(error.response.data.message)
    const { message } = error.response.data
    console.log(message)
    return { 'ok': false, 'message': message }
  }

}

export const checkAuthentication = async ({ commit }) => {

  const token = localStorage.getItem('token')
  const status = localStorage.getItem('status')
  const username = localStorage.getItem('username')
  const isAdmin = localStorage.getItem('isAdmin')
  commit('checkAuthentication', { token, status, username, isAdmin })

}

export const logOut = async ({ commit }) => {
  commit('logOut')
}