import { createStore } from 'vuex'

export default createStore({
    state: {
        user: {
            id: '1',
            username: 'andresg1006@gmail.com',
            roles: [
                {
                    id: '1',
                    authority: 'USER'
                },
                {
                    id: '2',
                    authority: 'ADMIN'
                }
            ]
        },
        products: [
            { id: '1', name: 'Laptop', img: 'product01.png', price: '17890', discount: '30', rating: '5', typeProduct: 'NEW' },
            { id: '2', name: 'Audífonos', img: 'product02.png', price: '590', discount: '30', rating: '3', typeProduct: 'NEW' },
            { id: '3', name: 'Laptop', img: 'product03.png', price: '23490', discount: '30', rating: '4', typeProduct: 'NEW' },
            { id: '4', name: 'Tablet', img: 'product04.png', price: '6990', discount: '30', rating: '5', typeProduct: 'NEW' },
            { id: '5', name: 'Audífonos', img: 'product05.png', price: '990', discount: '30', rating: '4', typeProduct: 'NEW' },
        ],
        hotdealDate: new Date('2023-10-03'),
    },
    getters: {
        getUser: (state) => () => {
            return state.user
        },
        getProducts: (state) => () => {
            return state.products
        },
        getHotdealDate: (state) => () => {
            return state.hotdealDate
        }
    },
    mutations: {
    },
    actions: {
    },
    modules: {
    }
})
