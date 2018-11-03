import axios from '../../../plugins/axios'
import { blogs } from '../../../api'

const state = {
  blogLoading: true,
  blogs: null
}
const getters = {
  blogs: state => state.blogs,
  blogLoad: state => state.blogLoading
}
const mutations = {
  blogs (state, payload) {
    if (payload) {
      // Store to vuex
      state.blogLoading = false
      state.blogs = payload
    }
  }
}
const actions = {
  async BLOGS ({ commit }, payload) {
    let { data } = await axios.get(blogs)
    console.log(data)
    commit('blogs', data)
  }
}

const module = {
  state,
  getters,
  mutations,
  actions
}

export default module
