<template>
    <div class="section">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <div class="section-title">
                        <h3 class="title">Nuevos Productos</h3>
                        <div class="section-nav">
                            <ul class="section-tab-nav tab-nav">
                                <li class="active"><a data-toggle="tab" href="#tab1">Laptops</a></li>
                                <li><a data-toggle="tab" href="#tab1">Cameras</a></li>
                                <li><a data-toggle="tab" href="#tab1">Smartphones</a></li>
                                <li><a data-toggle="tab" href="#tab1">Accessories</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <swiper 
                :modules="modules" 
                :spaceBetween="10"
                :speed="500"
                :loop="true" 
                :pagination="{ clickable: true }" 
                :autoplay="{
                    delay: 3000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true
                }" :breakpoints="{
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
                }"
                >
                    <swiper-slide v-for="product in products" :key="product.id">
                        <div class="product">
                            <div class="product-img">
                                <img :src="require(`../../../assets/img/${product.img}`)" alt="" />
                                <div class="product-label">
                                    <span class="sale">{{ product.discount }}%</span>
                                    <span class="new">{{ product.typeProduct }}</span>
                                </div>
                            </div>
                            <div class="product-body">
                                <p class="product-category">Laptops</p>
                                <h3 class="product-name">
                                    <a href="#">{{ product.name }}</a>
                                </h3>
                                <h4 class="product-price">
                                    ${{ product.price }} <del class="product-old-price">${{ product.price
                                    }}</del>
                                </h4>
                                <div class="product-rating">
                                    <i v-for="i in 5" class="fa-star"
                                        :class="i <= product.rating ? 'fa-solid' : 'fa-regular'"></i>

                                </div>
                                <div class="product-btns">
                                    <button class="add-to-wishlist">
                                        <i class="fa fa-heart-o"></i>
                                        <span class="tooltipp">seguir</span>
                                    </button>
                                    <button class="add-to-compare">
                                        <i class="fa fa-exchange"></i>
                                        <span class="tooltipp">comparar</span>
                                    </button>
                                    <button class="quick-view">
                                        <i class="fa fa-eye"></i>
                                        <span class="tooltipp">ver</span>
                                    </button>
                                </div>
                            </div>
                            <div class="add-to-cart">
                                <button class="add-to-cart-btn">
                                    <i class="fa fa-shopping-cart"></i>carrito
                                </button>
                            </div>
                        </div>
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

import useProducts from '../composables/useProducts';
import ProductSlicker from './ProductSlicker.vue'

export default {
    components: {
        ProductSlicker,
        Swiper, SwiperSlide,
    },
    setup() {
        const { products } = useProducts()

        return {
            modules: [Autoplay, Pagination],
            products,
        }
    }
}
</script>

<style lang="scss" scoped></style>