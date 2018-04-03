let userInfo_
if (localStorage.userInfo) {
  userInfo_ = JSON.parse(localStorage.userInfo)
} else {
  userInfo_ = ''
}
const user = {
  state: {
    userInfo: userInfo_,
    message: '张平',
    count: 1
  },
  mutations: {
    SET_MSG: (state, res) => {
      state.message = res
    },
    SET_COUNT: (state, res) => {
      state.count = res
    }
  },
  actions: {
    setmsg ({ commit }, res) {
      commit('SET_MSG', res)
    },
    setcount ({ commit }, res) {
      commit('SET_COUNT', res)
    }
  }
}
export default user
