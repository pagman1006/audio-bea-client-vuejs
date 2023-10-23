<template>
  <div class="section">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="section-title">
            <h3 class="title">Nuevos Productos</h3>
          </div>
        </div>
      </div>
      <div class="row">
        <swiper 
          :modules="modules" 
          :spaceBetween="10" 
          :speed="500" 
          :loop="true" 
          :autoplay="{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true
          }"
          :breakpoints="{
            320: {
              slidesPerView: 2,
              spaceBetween: 10
            },
            640: {
              slidesPerView: 3,
              spaceBetween: 20
            },
            960: {
              slidesPerView: 4,
              spaceBetween: 20
            }
          }">
          <swiper-slide v-for="product in products" :key="product.id">
            <Product :product="product"/>
          </swiper-slide>
        </swiper>
      </div>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'

import Product from './Product.vue'
import useProducts from '@/modules/products/composables/useProducts'

export default {
  components: {
    Swiper, SwiperSlide,
    Product
  },
  setup() {
    const { products } = useProducts()

    return {
      modules: [Autoplay, Pagination],
      products
    }
  }
}
</script>

<style lang="scss" scoped></style>