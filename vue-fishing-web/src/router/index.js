import Vue from 'vue';
import Router from 'vue-router';

import FishLib from '../view/FishLib';
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
        name: 'FishLib',
        component: FishLib,
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
