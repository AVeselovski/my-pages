// core
import Vue from 'vue';
import Vuex from 'vuex';
// utils
import common from './modules/common';
import auth from './modules/auth';
import uiPage from './modules/ui-page';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: { common, auth, uiPage },
});
