import Vue from 'vue';

import App from './App.vue';
import vuetify from './plugins/vuetify';

import { createProvider } from './vue-apollo';
import { createRouter } from './router';
import { createStore } from './store';

Vue.config.productionTip = false;

const router = createRouter();
const store = createStore();

new Vue({
  store,
  vuetify,
  router,
  apolloProvider: createProvider(),
  render: (h) => h(App),
}).$mount('#app');
