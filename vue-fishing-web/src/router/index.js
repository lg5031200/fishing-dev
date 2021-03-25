import Vue from 'vue';
import Router from 'vue-router';

import Home from '../view/Home';
import AppLayout from '../layout/AppLayout';

Vue.use(Router);

export const routes = [
  {
    path: '/',
    component: AppLayout,
    meta: {
      text: '',
    },
    children: [
      /** 百星一般员工前台首页 */
      {
        path: '',
        name: 'Home',
        component: Home,
        meta: {},
      },
    ],
  },
];

/**
 * CreateRouter - Function to create Vue router.
 *
 * @returns {Object}  Description.
 */
export function createRouter() {
  return new Router({
    mode: 'history',
    routes: routes,
  });
}
