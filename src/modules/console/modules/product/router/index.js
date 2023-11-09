export default {
  name: 'product',
  component: () => import(/* webpackChunkName: "Brand View" */ '../views/ProductView.vue'),
  children: [
    {
      path: 'add',
      name: 'add-product',
      component: () => import(/* webpackChunkName: "Brands View" */ '../components/NewProduct.vue')
    },
    // {
    //   path: ':id',
    //   name: 'edit-product',
    //   component: () => import(/* webpackChunkName: "Brands Edit" */ '../components/Product.vue'),
    //   props: (route) => {
    //     return {
    //       id: route.params.id
    //     }
    //   }
    // },
    // {
    //   path: 'products',
    //   name: 'list-product',
    //   component: () => import(/* webpackChunkName: "ListBrands View" */ '../components/ListProduct.vue')
    // }
  ]
}
