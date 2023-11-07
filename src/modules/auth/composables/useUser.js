import { computed } from "vue";
import { useStore } from "vuex";


const useUser = () => {
  const store = useStore()

  store.dispatch('user/checkAuthentication')

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

  return {
    user: computed(() => store.getters['user/getuser']),
    isLogged: computed(() => store.getters['user/getIsLogged']),
    isAdmin: computed(() => store.getters['user/getIsAdmin']),
    token: computed(() => store.getters['user/getToken']),

    createUser,
    loginUser,
    logOut,
  }
}

export default useUser