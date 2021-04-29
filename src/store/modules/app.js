const headerLeftDrawer = {
  namespace: true,
  state() {
    return {
      drawer: false,
    };
  },
  mutations: {
    toggleDrawer(state) {
      state.drawer = !state.drawer;
    },
  },
  actions: {
    TOGGLE_DRAWER({ commit }) {
      commit('toggleDrawer');
    },
  },
  getters: {
    DRAWER_STATE(state) {
      return state.drawer;
    },
  },
};
export default headerLeftDrawer;
