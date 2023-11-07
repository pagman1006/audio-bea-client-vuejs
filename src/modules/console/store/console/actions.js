import audiobeaApi from "@/api/audiobeaApi"
import { AxiosHeaders } from "axios"


export const createBrand = async ({ commit }, payload) => {
  const { brandName, token } = payload

  try {
    const { data } = await audiobeaApi.post('/brands', { brandName, "enabled": true }, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    return { 'ok': true, 'message': data }
  } catch (error) {
    const { message } = error.response.data
    return { 'ok': false, 'message': message }
  }
}

export const listBrands = async ({ commit }, { brand, page, pageSize }) => {
  try {
    const { data } = await audiobeaApi.get('/brands', {
      params: {
        brand,
        page,
        pageSize
      }
    })
    commit('setBrands', data)
    return { 'ok': true, 'message': data }
  } catch (error) {
    console.log(error)
    const { message } = error.response.data
    return { 'ok': false, 'message': message }
  }
}

export const deleteBrandById = async ({ commit }, { id, token }) => {
  try {
    const { data } = await audiobeaApi.delete(`/brands/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    return { 'ok': true, 'message': data }
  } catch (error) {
    const { message } = error.response.data
    return { 'ok': false, 'message': message }
  }
}

export const getBrandById = async ({ commit }, { id }) => {
  try {
    const { data } = await audiobeaApi.get(`/brands/${id}`)
    commit('setBrand', data)
    return { 'ok': true, 'message': data }
  } catch (error) {
    const { message } = error.response.data
    return { 'ok': false, 'message': message }
  }
}

export const updateBrandById = async ({ commit }, { id, brandName, enabled, token }) => {
  try {
    const { data } = await audiobeaApi.put(`/brands/${id}`, { id, brandName, enabled }, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    commit('setBrand', data)
    return { 'ok': true, 'message': data }
  } catch (error) {
    const { message } = error.response.data
    return { 'ok': false, 'message': message }
  }
}

export const listSubBrands = async ({ commit }, { brandId, subBrand, page, pageSize }) => {
  try {
    const { data, totalElements, totalPages } = await audiobeaApi.get(`/brands/${brandId}/sub-brands`, {
      params: {
        subBrand,
        page,
        pageSize
      }
    })
    commit('setSubBrands', data)
    return { 'ok': true, data, page, pageSize, totalElements, totalPages }
  } catch (error) {
    console.log(error)
    const { message } = error.response.data
    return { 'ok': false, 'message': message }
  }
}

export const getSubBrandById = async ({ commit }, { subBrandId }) => {
  try {
    const { data } = await audiobeaApi.get(`/brands/all/sub-brands/${subBrandId}`)
    commit('setSubBrand', data)
    return { 'ok': true, 'message': data }
  } catch (error) {
    const { message } = error.response.data
    return { 'ok': false, 'message': message }
  }
}

export const updateSubBrandById = async ({ commit }, { brandId, subBrandId, subBrandName, enabled, token }) => {
  try {
    const { data } = await audiobeaApi.put(`/brands/${brandId}/sub-brands/${subBrandId}`,
      {
        'id': subBrandId,
        subBrandName,
        enabled
      },
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
    commit('setSubBrand', data)
    return { 'ok': true, 'message': data }
  } catch (error) {
    const { message } = error.response.data
    return { 'ok': false, 'message': message }
  }
}

export const deleteSubBrandById = async ({ commit }, { brandId, subBrandId, token }) => {
  try {
    const { data } = await audiobeaApi.delete(`/brands/${brandId}/sub-brands/${subBrandId}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    commit('deleteSubBrandById', subBrandId)
    return { 'ok': true, 'message': data }
  } catch (error) {
    const { message } = error.response.data
    return { 'ok': false, 'message': message }
  }
}

export const createSubBrand = async ({ commit }, { brandId, subBrandName, enabled, token }) => {
  try {
    const { data } = await audiobeaApi.post(`/brands/${brandId}/sub-brands`,
      {
        subBrandName,
        'brand': {
          'id': brandId
        },
        enabled
      },
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
    return { 'ok': true, 'message': data }
  } catch (error) {
    const { message } = error.response.data
    return { 'ok': false, 'message': message }
  }
}