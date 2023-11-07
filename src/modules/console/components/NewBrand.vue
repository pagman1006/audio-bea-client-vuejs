<template>
  <h1>Nueva Marca</h1>
  <div class="card">
    <div class="card-body">
      <form @submit.prevent="onSubmit">
        <div class="form-group row my-3">
          <div class="col-lg-3 col-md-4 col-12">
            <label for="marca" class="col-form-label">Marca: </label>
          </div>
          <div class="col-lg-9 col-md-8 col-12">
            <input class="form-control input" type="text" id="marca" name="marca" placeholder="Nombre de la Marca"
              autofocus="autofocus" v-model="brandForm.brandName">
          </div>
        </div>
      </form>
    </div>
    <div class="card-footer text-center">
      <a class="btn btn-success text-white btn-sm mx-2" @click.prevent="onSubmit()">
        Guardar
      </a>
      <a class="btn btn-danger text-white btn-sm mx-2"
        @click.prevent="$router.push({ name: 'home-console' })">Cancelar</a>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import Swal from 'sweetalert2'

import useBrand from '../composables/useBrand'

export default {

  setup() {

    const { addBrand, token } = useBrand();


    const brandForm = ref({
      brandName: ''
    })

    return {
      brandForm,
      onSubmit: async () => {
        const { ok, message } = await addBrand(brandForm.value, token.value)
        if (ok) {
          Swal.fire('Realizado', 'Se agregó correctamente : "' + brandForm.value.brandName + '"', 'success')
        } else {
          Swal.fire('Error', message, 'error')
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped></style>