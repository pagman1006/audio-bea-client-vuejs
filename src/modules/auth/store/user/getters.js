

// export const myGetter =  (state) => {
// return state
// }

export const getToken = (state) => {
    return state.token
}

export const getStatus = (state) => {
    return state.status
}

export const getIsLogged = (state) => {
    return (state.status === 'authenticated')
}

export const getUser = (state) => {
    return state.user
}

export const getUsername = (state) => {
    return state.username
}

export const getIsAdmin = (state) => {
    return state.isAdmin
}