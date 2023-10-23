<template>
  <div class="section">
    <div class="container">
      <div class="row">
        <template v-for="product in productsCollection" :key="product.id">
          <div class="col-sm-4 col-xs-6">
            <image-product :product="product" />
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import { defineAsyncComponent } from 'vue'
import useProducts from '@/modules/products/composables/useProducts'

export default {
  components: {
    ImageProduct: defineAsyncComponent(() => import('./ImageProductCollection.vue'))
  },
  setup() {

    const { productsCollection } = useProducts()
    return {
      productsCollection
    }
  }
}
</script>

<style lang="scss" scoped></style>