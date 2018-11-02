import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Login from './views/Login.vue'
import Blogger from './views/Blogger.vue'
import Blog from './views/Blog.vue'

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
      meta: { layout: 'user' },
      component: Blogger
    }
  ]
})
