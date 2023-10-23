import { computed, onMounted, ref } from "vue";
import { useStore } from "vuex";


const useUser = () => {
  const store = useStore()

  const createUser = async (user) => {

    const response = await store.dispatch('user/createUser', user)
    return response
  }

  const loginUser = async (user) => {
    const response = await store.dispatch('user/loginUser', user)
    return response
  }

  const logOut = async () => {
    await store.dispatch('user/logOut')
  }

  onMounted(async () => {
    await store.dispatch('user/checkAuthentication')
  })

  return {
    user: computed(() => store.getters['user/getuser']),
    isLogged: computed(() => store.getters['user/getIsLogged']),
    isAdmin: computed(() => store.getters['user/getIsAdmin']),

    createUser,
    loginUser,
    logOut,
  }
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

export default useUser