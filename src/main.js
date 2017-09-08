// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueResource from 'vue-resource'
import Vuex from 'vuex'
import 'vue-awesome/icons'
import Icon from 'vue-awesome/components/Icon'
import MuseUI from 'muse-ui'
import 'muse-ui/dist/muse-ui.css'
import 'muse-ui/dist/theme-teal.css'

Vue.config.productionTip = false
Vue.use(MuseUI)
Vue.use(VueResource)
Vue.use(Vuex)
Vue.component('icon', Icon)

import router from './router'
import store from './store'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
