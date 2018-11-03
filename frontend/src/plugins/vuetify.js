import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import 'vuetify/src/stylus/app.styl'

Vue.use(Vuetify, {
  iconfont: 'md',
  theme: {
    primary: '#880088',
    secondary: '#D9004B',
    accent: '#8c9eff',
    error: '#b71c1c',
    dimwhite: '#eee'
  }
})
