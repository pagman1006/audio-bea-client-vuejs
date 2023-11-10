import { computed } from "vue"
import { useStore } from "vuex"

import useUser from "@/modules/auth/composables/useUser"

const useProduct = () => {
    const store = useStore()
    const { token } = useUser()

    const listProducts = async ({ productType, productName, brand, subBrand, newProduct, page, pageSize }) => {
        await store.dispatch('productAdmin/listProducts', { productType, productName, brand, subBrand, newProduct, page, pageSize })
    }

    const getProductById = async (productId) => {
        if (productId == undefined) return null
        const response = await store.dispatch('productAdmin/getProductById', { productId })
        return { 'ok': true, 'message': response }
    }

    const deleteProductById = async (productId, token) => {
        await store.dispatch('productAdmin/deleteProductById', { productId, token })
    }


    return {
        token,
        product: computed(() => store.getters['productAdmin/getProduct']),
        products: computed(() => store.getters['productAdmin/getProducts']),
        page: computed(() => store.getters['productAdmin/getPage']),
        pageSize: computed(() => store.getters['productAdmin/getPageSize']),
        totalElements: computed(() => store.getters['productAdmin/getTotalElements']),
        totalPages: computed(() => store.getters['productAdmin/getTotalPages']),

        listProducts,
        getProductById,
        deleteProductById,
    }
}

export default useProduct