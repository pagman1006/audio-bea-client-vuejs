import { useStore } from "vuex"
import useUser from '@/modules/auth/composables/useUser'
import { computed } from "vue"


const useSubBrand = () => {
  const store = useStore()
  const { token } = useUser()

  const listSubBrands = async ({ brandId, subBrand, page, pageSize }) => {
    console.log('listSubBrands')
    const response = await store.dispatch('console/listSubBrands', { brandId, subBrand, page, pageSize })
  }

  const getBrandById = async (id) => {
    if (id == undefined) {
      return
    }
    const response = await store.dispatch('console/getBrandById', { id })
    return response
  }

  const addBrand = async (brand, token) => {
    const { brandName } = brand
    const response = await store.dispatch('console/createBrand', { brandName, token })
    await store.dispatch('console/listBrands', { 'pageSize': 50 })
    return response
  }

  const updateBrandById = async (brand, token) => {
    const { id, brandName, enabled } = brand
    const response = await store.dispatch('console/updateBrandById', { id, brandName, enabled, token })
    await store.dispatch('console/listBrands', { 'pageSize': 50 })
    return response
  }

  const deleteBrandById = async (id, token) => {
    await store.dispatch('console/deleteBrandById', { id, token })
    await store.dispatch('console/listBrands', { 'pageSize': 50 })
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
    getBrandById,
    addBrand,
    updateBrandById,
    deleteBrandById,
  }
}

export default useSubBrand