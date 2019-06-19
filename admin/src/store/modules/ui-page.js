import { uiApi } from '../../api';

const state = {
  nameOfPage: '',
  nameOfPageShort: '',
  path: '',
};

const getters = {
  nameOfPage: state => state.nameOfPage,
  nameOfPageShort: state => state.nameOfPageShort,
  path: state => state.path,
};

const actions = {
  updateNameOfPage: ({ commit }, value) => {
    commit('setNameOfPage', value);
  },
  updateNameOfPageShort: ({ commit }, value) => {
    commit('setNameOfPageShort', value);
  },
  updatePath: ({ commit }, value) => {
    commit('setPath', value);
  },
  createPage: async ({ rootState, commit }) => {
    commit('setProcessing', true);

    const data = {
      nameOfPage: state.nameOfPage,
      nameOfPageShort: state.nameOfPageShort,
      path: state.path,
    };

    await uiApi.postPage(rootState.auth.token, data);

    commit('setProcessing', false);
  },
};

const mutations = {
  setNameOfPage: (state, value) => {
    state.nameOfPage = value;
  },
  setNameOfPageShort: (state, value) => {
    state.nameOfPageShort = value;
  },
  setPath: (state, value) => {
    state.path = value;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
