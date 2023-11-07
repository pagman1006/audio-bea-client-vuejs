export default {
  name: 'consola',
  component: () => import(/* webpackChunkName: "Console Layout" */ '@/modules/console/layouts/ConsoleLayout.vue'),
  children: [
    {
      path: '',
      name: 'home-console',
      component: () => import(/* webpackChunkName: "HomeConsole View" */ '../views/HomeConsoleView.vue')
    },
    {
      path: 'brand',
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
    },
    {
      path: 'sub-brand',
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
          path: 'brands',
          name: 'list-sub-brand',
          component: () => import(/* webpackChunkName: "ListSubBrands View" */ '../components/ListSubBrand.vue')
        }
      ]
    },
    {
      path: 'product',
      component: () => import(/* webpackChunkName: "Product View" */ '../views/ProductView.vue'),
      children: [
        {
          path: 'add',
          name: 'add-product',
          component: () => import(/* webpackChunkName: "ProductsConsole View" */ '../components/NewProduct.vue')
        }
      ]
    },
  ]
}