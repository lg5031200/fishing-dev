const fish = {
  state() {
    return {
      fishTerm: null,
    };
  },
  mutations: {
    setFishTerm(state, criteria) {
      state.fishTerm = criteria;
    },
  },
  actions: {
    SET_FISH_TERM({ commit }, criteria) {
      commit('setFishTerm', criteria);
    },
  },
  getters: {
    getFishTerm(state) {
      return state.fishTerm;
    },
  },
};
export default fish;
