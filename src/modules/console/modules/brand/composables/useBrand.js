import { useStore } from "vuex"
import { computed } from "vue"

import useUser from '@/modules/auth/composables/useUser'


const useBrand = () => {
  const store = useStore()
  const { token } = useUser()

  const listBrands = async ({ brand, page, pageSize }) => {
    await store.dispatch('brand/listBrands', { brand, page, pageSize })
  }

  const getBrandById = async (id) => {
    if (id == undefined) {
      return
    }
    const response = await store.dispatch('brand/getBrandById', { id })
    return response
  }

  const addBrand = async (brand, token) => {
    const { brandName } = brand
    const response = await store.dispatch('brand/createBrand', { brandName, token })
    await store.dispatch('brand/listBrands', { 'pageSize': 50 })
    return response
  }

  const updateBrandById = async (brand, token) => {
    const { id, brandName, enabled } = brand
    const response = await store.dispatch('brand/updateBrandById', { id, brandName, enabled, token })
    await store.dispatch('brand/listBrands', { 'pageSize': 50 })
    return response
  }

  const deleteBrandById = async (id, token) => {
    await store.dispatch('brand/deleteBrandById', { id, token })
    await store.dispatch('brand/listBrands', { 'pageSize': 50 })
  }

  return {
    token,
    brands: computed(() => store.getters['brand/getBrands']),
    brand: computed(() => store.getters['brand/getBrand']),
    page: computed(() => store.getters['brand/getPage']),
    pageSize: computed(() => store.getters['brand/getPageSize']),
    totalElements: computed(() => store.getters['brand/getTotalElements']),
    totalPages: computed(() => store.getters['brand/getTotalPages']),

    listBrands,
    getBrandById,
    addBrand,
    updateBrandById,
    deleteBrandById,
  }
}

export default useBrand