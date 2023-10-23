

export const loginUser = (state, { user, token }) => {
  if (token) {
    state.token = token
    state.status = 'authenticated'
    localStorage.setItem('token', token)
    localStorage.setItem('status', 'authenticated')
  }

  if (user) {
    state.user = user
    let isAdmin = validIsAdmin(user.authorities)
    state.isAdmin = isAdmin
    localStorage.setItem('username', user.username)
    localStorage.setItem('isAdmin', isAdmin)
  }
}

export const checkAuthentication = (state, { token, status, username, isAdmin }) => {
  state.token = token
  state.status = status
  state.username = username
  state.isAdmin = isAdmin
}


const validIsAdmin = (authorities) => {
  let isAdmin = false
  authorities.map(auth => {
    const { authority } = auth
    if (authority === 'ADMIN') {
      isAdmin = true
    }
  })
  return isAdmin
}

export const logOut = (state) => {
  state.status = 'not-authenticated'
  state.user = null
  state.token = null
  state.isAdmin = false
  state.username = null

  localStorage.clear()
}