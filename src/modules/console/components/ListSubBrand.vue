<template>
  <div class="d-flex justify-content-between">
    <h1>Sub Marcas</h1>
    <template v-if="subBrands">
      <h4>Total: {{ totalElements }}</h4>
    </template>
  </div>

  <div class="card">
    <div class="cadrd-body">
      <table class="table table-striped table-bordered table-hover table-sm">
        <thead>
          <tr class="text-center">
            <th>#</th>
            <th>Sub Marca</th>
            <th>Marca</th>
            <th>Opciones</th>
          </tr>
        </thead>
        <tbody>
          <template v-for="subBrand in subBrands" :key="subBrand.id">
            <tr class="text-center">
              <th scope="row">{{ subBrand.id }}</th>
              <td>{{ subBrand.subBrandName }}</td>
              <td>{{ subBrand.brand.brandName }}</td>
              <td>
                <button class="btn btn-outline-success options" @click="editById(subBrand.id)">
                  <i class="fas fa-pencil-alt"></i>
                </button>
                <button class="btn btn-outline-danger options" @click="deleteById(subBrand.id)">
                  <i class="far fa-trash-alt"></i>
                </button>
              </td>
            </tr>
          </template>
        </tbody>
      </table>
    </div>
    <div class="card-footer">
      <div class="d-flex justify-content-end">
        <template v-for="(item, index) in totalPages">
          <template v-if="index == 0">
            <button v-if="page == 0" class="btn btn-primary btn-sm mx-2" @click="goToPage(index)">
              Primera página
            </button>
            <button v-else class="btn btn-outline-primary btn-sm mx-2" @click="goToPage(index)">
              Primera página
            </button>
          </template>
          <template v-else-if="index + 1 == totalPages">
            <button v-if="page + 1 == totalPages" class="btn btn-primary btn-sm mx-2" @click="goToPage(index)">
              Última página
            </button>
            <button v-else class="btn btn-outline-primary btn-sm mx-2" @click="goToPage(index)">
              Última página
            </button>
          </template>
          <template v-else>
            <button v-if="index == page" class="btn btn-primary btn-sm mx-2" @click="goToPage(index)">
              {{ index + 1 }}
            </button>
            <button v-else class="btn btn-outline-primary btn-sm mx-2" @click="goToPage(index)">
              {{ index + 1 }}
            </button>
          </template>

        </template>
      </div>
    </div>
  </div>
</template>

<script>
import { useRouter } from 'vue-router'
import Swal from 'sweetalert2'

import useSubBrand from '../composables/useSubBrand'

export default {

  setup() {

    const {
      token,
      subBrands,
      subBrand,
      page,
      pageSize,
      totalElements,
      totalPages,
      listSubBrands
    } = useSubBrand();
    listSubBrands({ 'brandId': 'all', 'subBrand': null, 'page': 0, 'pageSize': 10 })
    const router = useRouter()

    return {
      subBrands,
      subBrand,
      page,
      pageSize,
      totalElements,
      totalPages,
      goToPage: (async (page) => {
        listSubBrands({ 'brandId': 'all', page, 'pageSize': 10 })
      }),
      editById: (async (id) => {
        console.log(id)
        // router.push({ name: 'edit-brand', params: { id } })
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
            console.log(id, token.value)
            // deleteBrandById(id, token.value)
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