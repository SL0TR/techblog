import axios from '../../../plugins/axios'
import { login, signup } from '../../../api'

const state = {
  user: {
    token: localStorage.getItem('token') || ''
  }
}
const getters = {
  user: state => state.user,
  isAuthenticated: state => !!state.user.token
}
const mutations = {
  login (state, payload) {
    const token = localStorage.getItem('token')
    // Store to vuex
    state.user.token = payload.token || token

    localStorage.setItem('token', (payload.token || token))
  },
  clearUser (state, payload) {
    localStorage.removeItem('token')
  }
}
const actions = {
  async LOGIN ({ commit }, payload) {
    if (payload) {
      let { data } = await axios.post(login, payload)
      console.log(data)
      commit('login', data)
    }
  },
  LOGOUT ({ commit }, payload) {
    state.user.token = ''
    commit('clearUser')
  },
  async SIGNUP ({ commit }, payload) {
    if (payload) {
      let { data } = await axios.post(signup, payload)
      console.log(data)
      commit('login', data)
    }
  }
}

const module = {
  state,
  getters,
  mutations,
  actions
}

export default module
