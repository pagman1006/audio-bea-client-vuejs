import storeRouter from '@/modules/store-module/router'

export default {
  name: 'home-page',
  component: () => import(/* webpackChunkName: "Layout Base" */ '@/layouts/LayoutBase.vue'),
  children: [
    {
      path: '',
      name: 'home',
      component: () => import(/* webpackChunkName: "Home View" */ '@/modules/home/views/HomeView.vue'),
    },
    {
      path: '/store',
      ...storeRouter
    }
  ]
}