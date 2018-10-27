import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store'

import Admin from './layouts/Admin.vue'
import Blogger from './layouts/Blogger.vue'
import Default from './layouts/Default.vue'

Vue.component('admin-layout', Admin)
Vue.component('blogger-layout', Blogger)
Vue.component('default-layout', Default)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
