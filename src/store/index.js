import { createStore } from 'vuex'
import productsStore from '../modules/products/store'

export default createStore({
  modules: {
    products: productsStore
  }
})
