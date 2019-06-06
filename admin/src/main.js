// core
import Vue from 'vue';
// utils
import router from './router';
// components
import App from './App.vue';

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
