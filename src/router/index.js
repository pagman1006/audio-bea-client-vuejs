import { createRouter, createWebHashHistory } from "vue-router";

import homeRouter from '@/modules/home/router'
import auhtRouter from '@/modules/auth/router'

const routes = [
  {
    path: '/',
    ...homeRouter
  },
  {
    path: '/auth',
    ...auhtRouter
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
