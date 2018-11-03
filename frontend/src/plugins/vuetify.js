import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import 'vuetify/src/stylus/app.styl'

Vue.use(Vuetify, {
  iconfont: 'fa',
  theme: {
    primary: '#880088',
    secondary: '#D9004B',
    accent: '#FF7700',
    error: '#b71c1c',
    dimwhite: '#eee'
  }
})
