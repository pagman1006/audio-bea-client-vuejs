import { computed } from 'vue'
import { useStore } from 'vuex'

const useStores = () => {
    const store = useStore()

    store.dispatch('store/getProducts')
    return {
        products: computed(() => store.getters['store/getProducts']),
    }

}

export default useStores