import { useStore } from "vuex"
import { computed } from "vue"

import useUser from '@/modules/auth/composables/useUser'


const useSubBrand = () => {
    const store = useStore()
    const { token } = useUser()

    const listSubBrands = async ({ brandId, subBrand, page, pageSize }) => {
        await store.dispatch('subBrand/listSubBrands', { brandId, subBrand, page, pageSize })
    }

    const getSubBrandById = async (subBrandId) => {
        if (subBrandId == undefined) return
        
        const response = await store.dispatch('subBrand/getSubBrandById', { subBrandId })
        return response
    }

    const addSubBrand = async (subBrand) => {
        const { brandId, subBrandName, enabled, token } = subBrand
        const response = await store.dispatch('subBrand/createSubBrand', { brandId, subBrandName, enabled, token })
        await store.dispatch('subBrand/listBrands', { 'pageSize': 50 })
        return response
    }

    const updateSubBrandById = async (subBrand, token) => {
        const { id, subBrandName, brand, enabled } = subBrand
        const response = await store.dispatch('subBrand/updateSubBrandById',
            {
                'brandId': brand.id,
                'subBrandId': id,
                subBrandName,
                enabled,
                token
            }
        )
        return response
    }

    const deleteSubBrandById = async (brandId, subBrandId, token) => {
        await store.dispatch('subBrand/deleteSubBrandById', { brandId, subBrandId, token })
    }

    return {
        token,
        subBrands: computed(() => store.getters['subBrand/getSubBrands']),
        subBrand: computed(() => store.getters['subBrand/getSubBrand']),
        page: computed(() => store.getters['subBrand/getPage']),
        pageSize: computed(() => store.getters['subBrand/getPageSize']),
        totalElements: computed(() => store.getters['subBrand/getTotalElements']),
        totalPages: computed(() => store.getters['subBrand/getTotalPages']),

        listSubBrands,
        getSubBrandById,
        addSubBrand,
        updateSubBrandById,
        deleteSubBrandById,
    }
}

export default useSubBrand