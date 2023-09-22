import { createRouter, createWebHashHistory } from 'vue-router'
import routerProducts from '@/modules/products/router'

const routes = [
  {
    ...routerProducts

  },

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
