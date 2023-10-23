<template>
  <div class="shop">
    <div class="shop-img">
      <img v-if="img" :src="img" alt="shop01" />
      <img v-else src="" alt="shop01" />
    </div>
    <div class="shop-body">
      <h3>Colección<br />Audio</h3><a class="cta-btn" href="#">Comprar <i class="fa fa-arrow-circle-right"></i></a>
    </div>
  </div>
</template>

<script>
import { onMounted, ref } from 'vue'
import { ref as firebaseStorageRef } from 'firebase/storage'
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