export default {
  name: 'sub-brand',
  component: () => import(/* webpackChunkName: "SubBrand View" */ '../views/SubBrandView.vue'),
  children: [
    {
      path: 'add',
      name: 'add-sub-brand',
      component: () => import(/* webpackChunkName: "SubBrand View" */ '../components/NewSubBrand.vue')
    },
    {
      path: ':id',
      name: 'edit-sub-brand',
      component: () => import(/* webpackChunkName: "SubBrands View" */ '../components/SubBrand.vue'),
      props: (route) => {
        return {
          id: route.params.id
        }
      }
    },
    {
      path: 'sub-brands',
      name: 'list-sub-brand',
      component: () => import(/* webpackChunkName: "ListSubBrands View" */ '../components/ListSubBrand.vue')
    }
  ]
}