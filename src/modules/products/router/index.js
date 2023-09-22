export default {
    path: '/',
    component: () => import(/* webpackChunkName: "layout" */ '@/modules/products/layouts/LayoutProducts.vue'),
    children: [
        {
            path: "",
            name: "home",
            component: () => import(/* webpackChunkName: "home" */ '../components/Home.vue')
        },
        {
            path: "/promociones",
            name: "promociones",
            component: () => import(/* webpackChunkName: "promociones" */ '../components/Home.vue')
        },
        {
            path: "/categorias",
            name: "categorias",
            component: () => import(/* webpackChunkName: "promociones" */ '../components/Home.vue')
        },
        {
            path: "/audio-video",
            name: "audio-video",
            component: () => import(/* webpackChunkName: "promociones" */ '../components/Home.vue')
        },
        {
            path: "/mi-cuenta",
            name: "mi-cuenta",
            component: () => import(/* webpackChunkName: "promociones" */ '../components/Home.vue')
        },
        {
            path: "/siguiendo",
            name: "siguiendo",
            component: () => import(/* webpackChunkName: "promociones" */ '../components/Home.vue')
        },
        {
            path: "/carrito",
            name: "carrito",
            component: () => import(/* webpackChunkName: "promociones" */ '../components/Home.vue')
        },
        {
            path: "/iniciar-sesion",
            name: "iniciar-sesion",
            component: () => import(/* webpackChunkName: "promociones" */ '../components/Home.vue')
        },
        {
            path: "/cerrar-sesion",
            name: "cerrar-sesion",
            component: () => import(/* webpackChunkName: "promociones" */ '../components/Home.vue')
        },
        {
            path: "/consola",
            name: "consola",
            component: () => import(/* webpackChunkName: "promociones" */ '../components/Home.vue')
        },
    ]
}