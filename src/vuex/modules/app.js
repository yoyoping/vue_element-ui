const app = {
  state: {
    tags: localStorage.pageOpenList, // 打开的标签页
    isKeep: true, // 是否缓存
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
      state.tags = res
      localStorage.tags = res
    },
    SET_KEEP: (state, res) => {
      state.isKeep = res
    }
  },
  actions: {
    setcount ({ commit }, res) {
      commit('SET_COUNT', res)
    }
  }
}
export default app
