import axios from '../../../plugins/axios'
import { me } from '../../../api'
// import Auth from '../auth/index'

const state = {
  me: null
}
const getters = {
  me: state => state.me
}
const mutations = {
  getMe (state, payload) {
    if (payload) {
      // Store to vuex
      state.me = payload
    }
  }
}
const actions = {
  async ME ({ commit }) {
    try {
      let { data } = await axios.get(me)
      !data ? console.log('no data recievced') : commit('getMe', data)
    } catch (e) {
      console.log('some error')
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
