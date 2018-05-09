const app = {
  state: {
    tags: localStorage.pageOpenList,
    count: 0,
    type: '1'
  },
  mutations: {
    SET_COUNT: (state, res) => {
      state.count = res
    },
    ADD_TAG: (state, res) => {
      state.tags.push(res)
    },
    DEL_TAG: (state, res) => {
      state.tags.splice(res, 1)
    },
    TAGS: (state, res) => {
      debugger
      state.tags = res
      localStorage.tags = res
    }
  },
  actions: {
    setcount ({ commit }, res) {
      commit('SET_COUNT', res)
    }
  }
}
export default app
