import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store'

import User from './layouts/User.vue'
import Default from './layouts/Default.vue'

Vue.component('user-layout', User)
Vue.component('default-layout', Default)

Vue.config.productionTip = true

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
