import { computed } from "vue"
import { useStore } from "vuex"

const useProducts = () => {
    const store = useStore()


    return {
        user: computed(() => store.getters['getUser']),
        products: computed(() => store.getters['getProducts']),
        hotdealDate: computed(() => store.getters['getHotdealDate']),
    }
}

export default useProducts