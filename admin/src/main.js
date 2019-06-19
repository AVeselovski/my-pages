// core
import Vue from 'vue';
// utils
import store from './store';
import router from './router';
// components
import App from './App.vue';

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app');
