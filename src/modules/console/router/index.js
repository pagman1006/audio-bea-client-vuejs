import brandRouter from '../modules/brand/router'
import subBrandRouter from '../modules/sub-brand/router'
import productRouter from '../modules/product/router'

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
      ...brandRouter
    },
    {
      path: 'sub-brand',
      ...subBrandRouter
    },
    {
      path: 'product',
      ...productRouter
    }
  ]
}