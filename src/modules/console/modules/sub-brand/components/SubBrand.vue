<template>
  <h1>Editar SubMarca</h1>
  <div class="card">
    <div class="card-body">
      <form v-if="subBrand" @submit.prevent="onSubmit">
        <div class="form-group row my-3">
          <div class="col-lg-3 col-md-4 col-12">
            <label for="marca" class="col-form-label">Marca: </label>
          </div>
          <div class="col-lg-9 col-md-8 col-12">
            <select class="form-select" v-model="subBrand.brand.id" id="marca">
              <template v-for="brand in brands" :key="brand.id">
                <option :value="brand.id" :selected="brand.id == subBrand.brand.id">{{ brand.brandName }}</option>
              </template>
            </select>
          </div>
        </div>
        <div class="form-group row my-3">
          <div class="col-lg-3 col-md-4 col-12">
            <label for="sub-marca" class="col-form-label">Sub Marca: </label>
          </div>
          <div class="col-lg-9 col-md-8 col-12">
            <input class="form-control input" type="text" id="sub-marca" name="sub-marca"
              placeholder="Nombre de la Sub Marca" v-model="subBrand.subBrandName">
          </div>
        </div>
      </form>
    </div>
    <div class="card-footer text-center">
      <a class="btn btn-success text-white btn-sm mx-2" @click.prevent="onSubmit()">
        Guardar
      </a>
      <a class="btn btn-danger text-white btn-sm mx-2"
        @click.prevent="$router.push({ name: 'list-sub-brand' })">Cancelar</a>
    </div>
  </div>
</template>

<script>
import { useRoute } from 'vue-router'
import { watch } from 'vue'
import Swal from 'sweetalert2'

import useSubBrand from '../composables/useSubBrand'
import useBrand from '../../brand/composables/useBrand'


export default {
  props: {
    id: {
      type: String,
      required: true
    }
  },
  setup() {

    const route = useRoute()
    const { subBrand, token, getSubBrandById, updateSubBrandById } = useSubBrand();
    const { brands } = useBrand()
    getSubBrandById(route.params.id)

    watch(
      () => route.params.id,
      () => getSubBrandById(route.params.id)
    )


    return {
      subBrand,
      brands,
      onSubmit: async () => {
        const { ok, message } = await updateSubBrandById(subBrand.value, token.value)
        if (ok) {
          Swal.fire('Realizado', 'Se editó correctamente : "' + subBrand.value.subBrandName + '"', 'success')
        } else {
          Swal.fire('Error', message, 'error')
        }
      }
    }
  },
}
</script>

<style lang="scss" scoped></style>