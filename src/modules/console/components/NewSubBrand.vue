<template>
  <h1>Nueva Submarca</h1>
  <div class="card">
    <div class="card-body">
      <form>
        <div class="form-group row my-3">
          <div class="col-lg-3 col-md-4 col-12">
            <label for="marca" class="col-form-label">Marca: </label>
          </div>

          <div class="col-lg-9 col-md-8 col-12">
            <select class="form-select" v-model="subBrandForm.brandId" id="marca">
              <option disabled value="">-- Seleccione Marca --</option>
              <template v-for="brand in brands" :key="brand.id">
                <option :value="brand.id">{{ brand.brandName }}</option>
              </template>
            </select>
          </div>

        </div>

        <div class="form-group row my-3">
          <div class="col-lg-3 col-md-4 col-12">
            <label class="col-form-label" for="sub-marca">Submarca:</label>
          </div>
          <div class="col-lg-9 col-md-8 col-12">
            <input class="form-control input" type="text" id="sub-marca" name="sub-marca"
              placeholder="Nombre de la Submarca" v-model="subBrandForm.subBrandName" />
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
import useSubBrand from '../composables/useSubBrand'

export default {

  setup() {
    const { addSubBrand, token } = useSubBrand()
    const { brands } = useBrand()

    const subBrandForm = ref({
      brandId: '',
      subBrandName: '',
      enabled: true,
      token: token.value
    })

    return {
      brands,
      subBrandForm,
      onSubmit: async () => {
        const { ok, message } = await addSubBrand(subBrandForm.value)
        if (ok) {
          Swal.fire('Realizado', 'Se agregó correctamente : "' + subBrandForm.value.subBrandName + '"', 'success')
        } else {
          Swal.fire('Error', message, 'error')
        }
      }
    }

  }

}
</script>

<style lang="scss" scoped></style>