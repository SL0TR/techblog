
import Vue from 'vue'
import Vuex from 'vuex'
import Auth from './store/modules/auth/index'

Vue.use(Vuex)

const state = {}

const getters = {}

const mutations = {}

const actions = {}

const modules = {
  Auth
}

const store = new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
  modules
})

export default store
