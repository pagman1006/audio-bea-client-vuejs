<template>
  <div class="d-flex justify-content-between">
    <h1>Marcas</h1>
    <template v-if="brands">
      <div class="col-md-5 col-sm-6">
        <div class="row">
          <div class="col-md-6">
            <h4>Total: {{ totalElements }}</h4>
          </div>
          <div class="col-6">
            <select class="form-select" id="page-size" v-model="paginationSize">
              <option selected disabled>Registros</option>
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="15">15</option>
              <option value="20">20</option>
            </select>
          </div>
        </div>
      </div>
    </template>
  </div>

  <table class="table table-bordered border-primary table-hover table-sm">
    <thead>
      <tr class="text-center table-primary border-primary">
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

  <!-- <div aria-label="Page navigation example">
    <ul class="pagination">
      <li class="page-item">
        <a class="page-link" href="#">
          <i class="fa fa-angle-double-left" aria-hidden="true"></i>
        </a>
      </li>
      <li class="page-item">
        <a class="page-link" href="#">
          <i class="fa fa-angle-left" aria-hidden="true"></i>
        </a>
      </li>
      <li class="page-item">
        <a class="page-link" href="#">1</a>
      </li>
      <li class="page-item">
        <a class="page-link" href="#">2</a>
      </li>
      <li class="page-item">
        <a class="page-link" href="#">3</a>
      </li>
      <li class="page-item">
        <a class="page-link" href="#">
          <i class="fa fa-angle-right" aria-hidden="true"></i>
        </a>
      </li>
      <li class="page-item">
        <a class="page-link" href="#">
          <i class="fa fa-angle-double-right" aria-hidden="true"></i>
        </a>
      </li>
    </ul>
  </div> -->



  <div class="d-flex justify-content-end">

    <template v-for="(item, index) in totalPages">

      <template v-if="index == 0">
        <button :class="{ 'disabled': page < 2 }" class="mx-1 btn btn-outline-primary btn-sm" @click="goToPage(0)">
          <i class="fa fa-angle-double-left" aria-hidden="true"></i>
        </button>
        <button :class="{ 'disabled': page < 2 }" class="mx-1 btn btn-outline-primary btn-sm" @click="goToPage(page - 1)">
          <i class="fa fa-angle-left" aria-hidden="true"></i>
        </button>
      </template>

      <template v-if="index - 4 < page && index + 2 > page">
        <button :class="(index == page) ? 'btn-primary' : 'btn-outline-primary'" class="btn btn-sm mx-1"
          @click="goToPage(index)">
          {{ index + 1 }}
        </button>
      </template>

      <template v-if="index + 1 == totalPages">
        <button :class="{ 'disabled': page + 1 == totalPages }" class="mx-1 btn btn-outline-primary btn-sm"
          @click="goToPage(page + 1)">
          <i class="fa fa-angle-right" aria-hidden="true"></i>
        </button>
        <button :class="{ 'disabled': page + 1 == totalPages }" class="mx-1 btn btn-outline-primary btn-sm"
          @click="goToPage(totalPages - 1)">
          <i class="fa fa-angle-double-right" aria-hidden="true"></i>
        </button>
      </template>

    </template>

  </div>
</template>

<script>
import { useRouter } from 'vue-router'
import { ref, watch } from 'vue'

import Swal from 'sweetalert2'

import useBrand from '../composables/useBrand'

export default {

  setup() {
    const router = useRouter()
    const {
      token,
      brands,
      brand,
      page,
      pageSize,
      totalElements,
      totalPages,
      deleteBrandById,
      listBrands
    } = useBrand();

    const paginationSize = ref(5)
    listBrands({ 'brand': '', 'page': 0, 'pageSize': paginationSize.value })

    watch(
      () => paginationSize.value,
      () => listBrands({ 'brand': '', 'page': 0, 'pageSize': paginationSize.value })

    )

    return {
      brands,
      brand,
      page,
      pageSize,
      totalElements,
      totalPages,
      paginationSize,
      goToPage: (async (page) => {
        listBrands({ 'brand': '', page, 'pageSize': paginationSize.value })
      }),
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