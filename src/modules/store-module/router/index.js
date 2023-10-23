export default {
  name: 'store-module',
  component: () => import(/* webpackChunkName: "Store Layout" */ '@/modules/store-module/layouts/StoreLayout.vue'),
  children: [
    {
      path: '',
      name: 'store',
      component: () => import(/* webpackChunkName: "Store View" */ '@/modules/store-module/views/StoreView.vue'),
      props: () => {
        return {
          section: 'all'
        }
      }
    },
    {
      path: 'promotions',
      name: 'promotions',
      component: () => import(/* webpackChunkName: "Promotions View" */ '@/modules/store-module/views/StoreView.vue'),
      props: () => {
        return {
          section: 'promotions'
        }
      }
    },
  ]
}