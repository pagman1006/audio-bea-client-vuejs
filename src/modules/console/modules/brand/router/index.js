export default {
  name: 'brand',
  component: () => import(/* webpackChunkName: "Brand View" */ '../views/BrandView.vue'),
  children: [
    {
      path: 'add',
      name: 'add-brand',
      component: () => import(/* webpackChunkName: "Brands View" */ '../components/NewBrand.vue')
    },
    {
      path: ':id',
      name: 'edit-brand',
      component: () => import(/* webpackChunkName: "Brands Edit" */ '../components/Brand.vue'),
      props: (route) => {
        return {
          id: route.params.id
        }
      }
    },
    {
      path: 'brands',
      name: 'list-brand',
      component: () => import(/* webpackChunkName: "ListBrands View" */ '../components/ListBrand.vue')
    }
  ]
}
