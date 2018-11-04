import Vue from 'vue'
import Router from 'vue-router'

// import Default from './layouts/Default.vue'

// import store from './store/modules/auth/index'

// const ifNotAuthenticated = (to, from, next) => {
//   if (!store.getters.isAuthenticated) {
//     next()
//     return
//   }
//   next('/')
// }

// const ifAuthenticated = (to, from, next) => {
//   if (store.getters.isAuthenticated) {
//     next()
//     return
//   }
//   next('/login')
// }

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: '/techblog/',
  routes: [
    {
      path: '/',
      name: 'defaultLayout',
      component: () => import('@/layouts/Default.vue'),
      children: [
        {
          path: '/',
          name: 'home',
          component: () => import('@/views/Home.vue')
        },
        {
          path: '/blog',
          name: 'blog',
          component: () => import('@/views/Blog.vue')
        },
        {
          path: '/login',
          name: 'login',
          component: () => import('@/views/Login.vue')
        },
        {
          path: '/blogger',
          name: 'blogger',
          component: () => import('@/views/Blogger.vue')
        },
        {
          path: '/single-post',
          name: 'single-post',
          component: () => import('@/views/SinglePost.vue'),
          props: true
        }
      ]
    }
  ]
})
