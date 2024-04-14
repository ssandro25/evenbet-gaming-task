import { createStore } from 'vuex'

export default createStore({
  state: {
    token: null,
    refreshToken: null
  },

  getters: {
    getToken: state => state.token,
    getRefreshToken: state => state.refreshToken
  },

  mutations: {
  },

  actions: {
    setToken({state}, token) {
      state.token = token
    },

    setRefreshToken({state}, refreshToken) {
      state.refreshToken = refreshToken
    }
  },

  modules: {
  }
})
