const state = {
  processing: false,
};

const getters = {
  processing: state => state.processing,
};

const actions = {
  toggleProcessing: async ({ commit }) => {
    commit('setProcessing', !state.processing);
  },
};

const mutations = {
  setProcessing: (state, value) => {
    state.processing = value;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
