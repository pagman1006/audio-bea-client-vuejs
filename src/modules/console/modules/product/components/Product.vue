<template>
  <h1>Editar Producto</h1>
  <div class="card">
    <div class="card-body">
      <form v-if="product" @submit.prevent="onSubmit">
        <div class="form-group row my-3">
          <div class="col-lg-3 col-md-4 col-12">
            <label for="product" class="col-form-label">Producto</label>
          </div>
          <div class="col-lg-9 col-md-8 col-12">
            <input type="text" id="product" placeholder="Nombre del Producto" class="form-control input"
              v-model="product.productName">
          </div>
        </div>

        <div class="form-group row my-3">
          <div class="col-lg-3 col-md-4 col-12">
            <label for="price" class="col-form-label">Precio</label>
          </div>
          <div class="col-lg-9 col-md-8 col-12">
            <input type="text" id="price" placeholder="Precio" class="form-control input" v-model="product.price">
          </div>
        </div>

        <div class="form-group row my-3">
          <div class="col-lg-3 col-md-4 col-12">
            <label for="discount" class="col-form-label">Descuento</label>
          </div>
          <div class="col-lg-9 col-md-8 col-12">
            <input type="text" id="discount" placeholder="Descuento" class="form-control input"
              v-model="product.discount">
          </div>
        </div>
        <div class="form-group row my-3">
          <div class="col-lg-3 col-md-4 col-12">
            <label for="title" class="col-form-label">Título</label>
          </div>
          <div class="col-lg-9 col-md-8 col-12">
            <input type="text" id="title" placeholder="Título de anuncio" class="form-control input"
              v-model="product.title">
          </div>
        </div>
        <div class="form-group row my-3">
          <div class="col-lg-3 col-md-4 col-12">
            <label for="stock" class="col-form-label">Stock</label>
          </div>
          <div class="col-lg-9 col-md-8 col-12">
            <input type="text" id="stock" placeholder="Stock" class="form-control input" v-model="product.stock">
          </div>
        </div>
        <!-- Select Option -->
        <div class="form-group row my-3">
          <div class="col-lg-3 col-md-4 col-12">
            <label for="category" class="col-form-label">Categoría</label>
          </div>
          <div class="col-lg-9 col-md-8 col-12">
            <input type="text" id="category" placeholder="Categoría" class="form-control input">
          </div>
        </div>
        <div class="form-group row my-3">
          <div class="col-lg-3 col-md-4 col-12">
            <label for="images" class="col-form-label">Imágenes</label>
          </div>
          <div class="col-lg-9 col-md-8 col-12">
            <input class="form-control custom-file" type="file" multiple id="images">
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
import { useRoute } from 'vue-router';
import { watch } from 'vue';

import Swal from 'sweetalert2'

import useProduct from '../composables/useProduct';

export default {
  setup() {
    const route = useRoute()
    const { token, product, getProductById } = useProduct()
    getProductById(route.params.id)

    watch(
      () => route.params.id,
      () => console.log(route.params.id)
    )

    return {
      product,
      onSubmit: async () => {
        console.log(product.value)
        const { ok, message } = await getProductById(product.value, token.value)
        if (ok) {
          Swal.fire('Realizado', 'Se editó correctamente : "' + product.value.productdName + '"', 'success')
        } else {
          Swal.fire('Error', message, 'error')
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.custom-file::-webkit-file-upload-button {
  visibility: hidden;
}


.custom-file::before {
  content: 'Seleccionar imágenes';
}

.custom-file::placeholder {
  visibility: hidden !important;
}
</style>