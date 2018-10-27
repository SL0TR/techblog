import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Login from './views/Login.vue'
import Admin from './views/Admin.vue'
import Blogger from './views/Blogger.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      meta: { layout: 'default' },
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      meta: { layout: 'default' },
      component: Login
    },
    {
      path: '/admin',
      name: 'admin',
      meta: { layout: 'admin' },
      component: Admin
    },
    {
      path: '/blogger',
      name: 'blogger',
      meta: { layout: 'blogger' },
      component: Blogger
    }
  ]
})
