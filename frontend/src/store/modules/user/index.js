import axios from '../../../plugins/axios'
import { me } from '../../../api'

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
  async ME ({ commit }, payload) {
    let { data } = await axios.get(me)
    console.log(data)
    commit('getMe', data)
  }
}

const module = {
  state,
  getters,
  mutations,
  actions
}

export default module
