import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Login from './views/Login.vue'
import Blogger from './views/Blogger.vue'
import Blog from './views/Blog.vue'
import store from './store/modules/auth/index'

// const ifNotAuthenticated = (to, from, next) => {
//   if (!store.getters.isAuthenticated) {
//     next()
//     return
//   }
//   next('/')
// }

const ifAuthenticated = (to, from, next) => {
  if (store.getters.isAuthenticated) {
    next()
    return
  }
  next('/login')
}

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
      path: '/blog',
      name: 'blog',
      meta: { layout: 'default' },
      component: Blog
    },
    {
      path: '/login',
      name: 'login',
      meta: { layout: 'default' },
      component: Login
    },
    {
      path: '/blogger',
      name: 'blogger',
      meta: { layout: 'default' },
      component: Blogger,
      beforeEnter: ifAuthenticated
    }
  ]
})
