const state = {
  token: 'dudfornow',
};

const getters = {
  isLoggedIn: state => !!state.token,
};

const actions = {};

const mutations = {
  setToken: (state, token) => {
    state.token = token;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
