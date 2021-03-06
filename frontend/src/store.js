
import Vue from 'vue'
import Vuex from 'vuex'
import Auth from './store/modules/auth/index'
import Blog from './store/modules/blog/index'
import User from './store/modules/user/index'
import Post from './store/modules/post/index'

Vue.use(Vuex)

const state = {
  me: false
}

const getters = {}

const mutations = {}

const actions = {}

const modules = {
  Auth,
  Blog,
  User,
  Post
}

const store = new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
  modules
})

export default store
