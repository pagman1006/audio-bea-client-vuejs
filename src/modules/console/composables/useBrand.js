import { useStore } from "vuex"
import useUser from '@/modules/auth/composables/useUser'
import { computed } from "vue"


const useBrand = () => {
  const store = useStore()
  const { token } = useUser()

  const listBrands = async () => {
    const response = await store.dispatch('console/listBrands', { 'pageSize': 50 })
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



  listBrands()

  return {
    token,
    brands: computed(() => store.getters['console/getBrands']),
    brand: computed(() => store.getters['console/getBrand']),

    getBrandById,
    addBrand,
    updateBrandById,
    deleteBrandById,
  }
}

export default useBrand