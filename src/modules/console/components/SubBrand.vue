<template>
  <h1>Editar</h1>
  <div class="card">
    <div class="card-body">
      <form v-if="brand" @submit.prevent="onSubmit">
        <div class="form-group row my-3">
          <div class="col-lg-3 col-md-4 col-12">
            <label for="marca" class="col-form-label">Marca: </label>
          </div>
          <div class="col-lg-9 col-md-8 col-12">
            <input class="form-control input" type="text" id="marca" name="marca" placeholder="Nombre de la Marca"
              autofocus="autofocus" v-model="brand.brandName">
          </div>
        </div>
      </form>
    </div>
    <div class="card-footer text-center">
      <a class="btn btn-success text-white btn-sm mx-2" @click.prevent="onSubmit()">
        Guardar
      </a>
      <a class="btn btn-danger text-white btn-sm mx-2" @click.prevent="$router.push({ name: 'list-brand' })">Cancelar</a>
    </div>
  </div>
</template>

<script>
import { useRoute } from 'vue-router'
import Swal from 'sweetalert2'

import useBrand from '../composables/useBrand'
import { watch } from 'vue'


export default {
  props: {
    id: {
      type: String,
      required: true
    }
  },
  setup() {

    const route = useRoute()
    const { brand, updateBrandById, token, getBrandById } = useBrand();
    getBrandById(route.params.id)

    watch(
      () => route.params.id,
      () => getBrandById(route.params.id)
    )


    return {
      brand,
      onSubmit: async () => {
        const { ok, message } = await updateBrandById(brand.value, token.value)

        if (ok) {
          Swal.fire('Realizado', 'Se editó correctamente : "' + brand.value.brandName + '"', 'success')
        } else {
          Swal.fire('Error', message, 'error')
        }
      }
    }
  },
}
</script>

<style lang="scss" scoped></style>