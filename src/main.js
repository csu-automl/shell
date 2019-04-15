// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import storeFactory from './store'

import 'vue-material/dist/vue-material.css'
import 'vue-material/dist/theme/default.css'
import './themes/md-theme-default.scss'
import material from './material'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store: storeFactory(),
  material,
  components: { App },
  template: '<App/>'
})
