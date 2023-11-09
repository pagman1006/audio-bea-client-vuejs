import { createStore } from 'vuex'
import user from '../modules/auth/store/user'
import product from '../modules/products/store/products'
import store from '../modules/store-module/store/store'
import console from '../modules/console/store/console'
import brand from '../modules/console/modules/brand/store/brand'
import subBrand from '../modules/console/modules/sub-brand/store/sub-brand'

export default createStore({
    modules: {
        user,
        product,
        store,
        console,
        brand,
        subBrand,
    }
})