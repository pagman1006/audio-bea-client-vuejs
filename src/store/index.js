import { createStore } from 'vuex'
import user from '../modules/auth/store/user'
import product from '../modules/products/store/products'
import store from '../modules/store-module/store/store'

export default createStore({
    modules: {
        user,
        product,
        store,
    }
})