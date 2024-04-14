import { createStore } from 'vuex'

export default createStore({
  state: {
    token: localStorage.getItem('token') || null,
    refreshToken: localStorage.getItem('refreshToken') || null
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

      localStorage.setItem('token', token);
    },

    setRefreshToken({state}, refreshToken) {
      state.refreshToken = refreshToken

      localStorage.setItem('refreshToken', refreshToken);
    }
  },

  modules: {
  }
})
