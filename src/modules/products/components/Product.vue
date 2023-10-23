<template>
  <div class="product">
    <div class="product-img">
      <template v-if="img">
        <img :src="img" :alt="product.productName" />
      </template>
      <template v-else>
        <img src="" :alt="product.productName" />
      </template>
      <div class="product-label">
        <span class="sale">{{ product.discount }}%</span>
        <span v-if="product.newProduct" class="new">NUEVO</span>
      </div>
    </div>
    <div class="product-body">
      <p class="product-category">{{ product.productType.type }}</p>
      <h3 class="product-name">
        <a href="#">{{ product.productName }}</a>
      </h3>
      <h4 class="product-price">
        ${{ discount }} <del class="product-old-price">${{ product.price }}</del>
      </h4>
      <div class="product-rating">
        <i v-for="i in 5" class="fa-star" :class="i <= rating ? 'fa-solid' : 'fa-regular'"></i>

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
import { ref as firebaseStorageRef } from 'firebase/storage'
import storage from '@/firebase/init'

import { downloadImage, discountFn } from '../helpers'

export default {
  props: ['product'],
  setup(props) {
    const { product } = props

    const imageName = imageSelected(product)
    const rating = getRating(product)

    const pathReference = firebaseStorageRef(storage, `img/${imageName}`)
    const img = ref(null)

    onMounted(async () => {
      img.value = await downloadImage(pathReference)
    })

    return {
      img,
      rating,
      discount: discountFn(product.price, product.discount)
    }
  }
}

const imageSelected = ({ images }) => {
  let img = ''
  if (Array.isArray(images) && images.length > 0) {
    images.map(image => {
      if (image.selected) {
        let { imageName } = image
        img = imageName
      }
    })
  }
  return img
}

const getRating = ({ rankings }) => {
  let ranking = 0
  if (Array.isArray(rankings) && rankings.length > 0) {
    let count = 0
    let rating = 0
    rankings.map(rank => {
      let { ranking } = rank
      count++
      rating = rating + ranking
    })
    ranking = rating / count
  }
  return ranking
}
</script>

<style lang="scss" scoped></style>