import { createRouter, createWebHashHistory } from "vue-router";

import homeRouter from '@/modules/home/router'
import auhtRouter from '@/modules/auth/router'

import consoleRouter from '@/modules/console/router'

const routes = [
  {
    path: '/',
    ...homeRouter
  },
  {
    path: '/auth',
    ...auhtRouter
  },
  {
    path: '/admin',
    ...consoleRouter
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
