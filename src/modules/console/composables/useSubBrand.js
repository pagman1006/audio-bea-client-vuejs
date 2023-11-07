import { useStore } from "vuex"
import { computed } from "vue"

import useUser from '@/modules/auth/composables/useUser'


const useSubBrand = () => {
  const store = useStore()
  const { token } = useUser()

  const listSubBrands = async ({ brandId, subBrand, page, pageSize }) => {
    await store.dispatch('console/listSubBrands', { brandId, subBrand, page, pageSize })
  }

  const getSubBrandById = async (subBrandId) => {
    if (subBrandId == undefined) {
      return
    }
    const response = await store.dispatch('console/getSubBrandById', { subBrandId })
    return response
  }

  const addSubBrand = async (subBrand) => {
    const { brandId, subBrandName, enabled, token } = subBrand
    const response = await store.dispatch('console/createSubBrand', { brandId, subBrandName, enabled, token })
    await store.dispatch('console/listBrands', { 'pageSize': 50 })
    return response
  }

  const updateSubBrandById = async (subBrand, token) => {
    const { id, subBrandName, brand, enabled } = subBrand
    const response = await store.dispatch('console/updateSubBrandById',
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
    await store.dispatch('console/deleteSubBrandById', { brandId, subBrandId, token })
  }

  return {
    token,
    subBrands: computed(() => store.getters['console/getSubBrands']),
    subBrand: computed(() => store.getters['console/getSubBrand']),
    page: computed(() => store.getters['console/getPage']),
    pageSize: computed(() => store.getters['console/getPageSize']),
    totalElements: computed(() => store.getters['console/getTotalElements']),
    totalPages: computed(() => store.getters['console/getTotalPages']),

    listSubBrands,
    getSubBrandById,
    addSubBrand,
    updateSubBrandById,
    deleteSubBrandById,
  }
}

export default useSubBrand