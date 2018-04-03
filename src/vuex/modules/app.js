const app = {
  state: {
    count: 0,
    type: '1'
  },
  mutations: {
    SET_COUNT: (state, res) => {
      state.count = res
    }
  },
  actions: {
    setcount ({ commit }, res) {
      commit('SET_COUNT', res)
    }
  }
}
export default app
