import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    showMainAlert: false,
    mainAlertMsg: '',
    isLogin: false,
    cityName: '位置'
  },
  mutations: {
    toogleMainAlert (state, param) {
      console.log(param)
      state.showMainAlert = param.show;
      state.mainAlertMsg = param.msg;
    },
    login (state) {
      state.isLogin = true;
    },
    location (state, param) {
      state.cityName = param.cityName;
    }
  },
})

export default store;