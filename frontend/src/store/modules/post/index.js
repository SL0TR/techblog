import axios from '../../../plugins/axios'
import { blogs } from '../../../api'

const state = {
  post: null
}
const getters = {
  post: state => state.post
}
const mutations = {
  getPost (state, payload) {
    if (payload) {
      // Store to vuex
      state.post = payload
    }
  }
}
const actions = {
  async POST ({ commit }, payload) {
    let { data } = await axios.post(blogs, payload)
    // console.log(data)
    commit('getPost', data)
  }
}

const module = {
  state,
  getters,
  mutations,
  actions
}

export default module
