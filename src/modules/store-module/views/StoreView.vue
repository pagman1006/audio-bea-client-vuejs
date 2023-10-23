<template>
  <template v-for="product in products" :key="product.id">
    <div class="col-md-4">
      <Product :product="product" />
    </div>
  </template>
</template>
  
<script>
import { defineAsyncComponent } from 'vue'

import useProducts from '@/modules/products/composables/useProducts'

export default {
  props: {
    section: {
      type: String,
      required: true
    }
  },
  components: {
    Product: defineAsyncComponent(() => import('@/modules/products/components/Product.vue'))
  },
  setup(props) {
    const { products } = useProducts()
    const { section } = props

    console.log(section)
    return {
      products,
      section
    }
  }

}
</script>
  
<style lang="scss" scoped></style>