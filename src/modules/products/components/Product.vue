<template>
  <div class="product">
    <div class="product-img">
      <template v-if="img">
        <img :src="img" :alt="product.name" />
      </template>
      <template v-else>
        <img src="" :alt="product.name" />
      </template>
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
        <i v-for="i in 5" class="fa-star" :class="i <= product.rating ? 'fa-solid' : 'fa-regular'"></i>

      </div>
      <div class="product-btns">
        <button class="add-to-wishlist">
          <i class="fa-regular fa-heart"></i>
          <span class="tooltipp">seguir</span>
        </button>
        <button class="add-to-compare">
          <i class="fa-solid fa-arrow-right-arrow-left"></i>
          <span class="tooltipp">comparar</span>
        </button>
        <button class="quick-view">
          <i class="fa-regular fa-eye"></i>
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
</template>

<script>
import { onMounted, ref } from 'vue'
import { ref as firebaseStorageRef, getDownloadURL } from 'firebase/storage'
import storage from '@/firebase/init'

import { downloadImage } from '../helpers'

export default {
  props: ['product'],
  setup(props) {
    const { product } = props

    const pathReference = firebaseStorageRef(storage, `img/${product.img}`)
    const img = ref(null)

    onMounted(async () => {
      img.value = await downloadImage(pathReference)
    })

    return {
      img
    }
  }
}
</script>

<style lang="scss" scoped></style>