<template>
  <div class="d-flex justify-content-between align-items-center">
    <h1>Productos</h1>
    <template v-if="products">
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

  <table v-if="products" class="table table-bordered border-primary table-hover table-sm">
    <thead>
      <tr class="text-center table-primary border-primary">
        <th>#</th>
        <th>Producto</th>
        <th>Categoria</th>
        <th>Marca</th>
        <th>Sub Marca</th>
        <th>Nuevo</th>
        <th>Precio</th>
        <th>Descuento</th>
        <th>Stock</th>
        <th>Eliminar</th>
      </tr>
    </thead>
    <tbody>
      <template v-for="(product, index) in products" :key="product.id">
        <tr class="text-center">
          <th @click="editById(product.id)" scope="row">{{ product.id }}</th>
          <td @click="editById(product.id)">{{ product.productName }}</td>
          <td @click="editById(product.id)">{{ product.productType.type }}</td>
          <td @click="editById(product.id)">{{ product.subBrand.brand.brandName }}</td>
          <td @click="editById(product.id)">{{ product.subBrand.subBrandName }}</td>
          <td @click="editById(product.id)">
            <p class="text-success" v-if="product.newProduct">Nuevo</p>
          </td>
          <td @click="editById(product.id)">{{ product.price }}</td>
          <td @click="editById(product.id)">{{ product.discount }}</td>
          <td @click="editById(product.id)">{{ product.stock }}</td>
          <td>
            <button class="btn btn-outline-danger options" @click="deleteById(product)">
              <i class="far fa-trash-alt"></i>
            </button>
          </td>
        </tr>
      </template>
    </tbody>
  </table>

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
import { useRouter } from 'vue-router';
import { ref, watch } from 'vue';

import Swal from 'sweetalert2'

import useProduct from '../composables/useProduct';

export default {
  setup() {
    const router = useRouter()
    const {
      token,
      products,
      page,
      pageSize,
      totalElements,
      totalPages,
      listProducts,
      deleteProductById,
    } = useProduct()
    const paginationSize = ref(5)

    listProducts({
      'productType': '',
      'productName': '',
      'brand': '',
      'subBrand': '',
      'newProduct': false,
      'page': 0,
      'pageSize': paginationSize.value
    })

    watch(
      () => paginationSize.value,
      () => listProducts({
        'productType': '',
        'productName': '',
        'brand': '',
        'subBrand': '',
        'newProduct': false,
        'page': 0,
        'pageSize': paginationSize.value
      })
    )

    return {
      products,
      page,
      pageSize,
      totalElements,
      totalPages,
      paginationSize,

      goToPage: (async (page) => {
        listProducts({
          'productType': '',
          'productName': '',
          'brand': '',
          'subBrand': '',
          'newProduct': false,
          page,
          'pageSize': paginationSize.value
        })
      }),
      editById: (async (id) => {
        router.push({ name: 'edit-product', params: { id } })
      }),
      deleteById: (async (product) => {
        Swal.fire({
          title: "¿Desea eliminar la marca?",
          icon: "warning",
          showDenyButton: true,
          confirmButtonText: "Eliminar",
          confirmButtonColor: "#3085d6",
          denyButtonText: `Cancelar`
        }).then((result) => {
          if (result.isConfirmed) {
            deleteProductById(product.id, token.value)
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

<style lang="scss" scoped></style>