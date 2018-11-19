// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
// import router from './router'
// import Store from './vuex/index'
// 微信
// import './wechat/init'
// 初始化样式
// import './assets/css/index.scss'

import { get } from 'lodash'
import './styles/index.scss'

const a = {
  d: 1
}
console.log('a.b.d', get(a.d.c))

console.log('999999', process.env)
Vue.use(Vuex)
Vue.config.productionTip = false

// const store = new Vuex.Store(Store)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  // store,
  // router,
  components: { App },
  template: '<App/>'
})
