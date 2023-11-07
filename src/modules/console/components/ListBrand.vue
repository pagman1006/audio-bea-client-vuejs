<template>
  <div class="d-flex justify-content-between">
    <h1>Marcas</h1>
    <template v-if="brands">
      <h4>Total: {{ brands.length }}</h4>
    </template>
  </div>

  <div class="card">
    <div class="cadrd-body">
      <table class="table table-striped table-bordered table-hover table-sm">
        <thead>
          <tr class="text-center">
            <th>#</th>
            <th>Marca</th>
            <th>Opciones</th>
          </tr>
        </thead>
        <tbody>
          <template v-for="brand in brands" :key="brand.id">
            <tr class="text-center">
              <th scope="row">{{ brand.id }}</th>
              <td>{{ brand.brandName }}</td>
              <td>
                <button class="btn btn-outline-success options" @click="editById(brand.id)">
                  <i class="fas fa-pencil-alt"></i>
                </button>
                <button class="btn btn-outline-danger options" @click="deleteById(brand.id)">
                  <i class="far fa-trash-alt"></i>
                </button>
              </td>
            </tr>
          </template>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { useRouter } from 'vue-router'
import Swal from 'sweetalert2'

import useBrand from '../composables/useBrand'

export default {

  setup() {

    const { brands, token, deleteBrandById } = useBrand();
    const router = useRouter()

    return {
      brands,
      editById: (async (id) => {
        router.push({ name: 'edit-brand', params: { id } })
      }),
      deleteById: (async (id) => {
        Swal.fire({
          title: "¿Desea eliminar la marca?",
          icon: "warning",
          showDenyButton: true,
          confirmButtonText: "Eliminar",
          confirmButtonColor: "#3085d6",
          denyButtonText: `Cancelar`
        }).then((result) => {
          if (result.isConfirmed) {
            deleteBrandById(id, token.value)
            Swal.fire({
              title: "Elimiando!",
              text: "Se eliminó correctamente.",
              icon: "success"
            })
          }
        })
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.options {
  margin-left: 20px;
  border-color: transparent !important;
}
</style>