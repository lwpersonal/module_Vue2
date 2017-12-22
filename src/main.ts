// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

// iconfont
import '../src/static/iconfont/iconfont.js'
// 默认css样式
import './../src/static/css/defaultStyle.css'
// 响应式布局，使用js动态改变html=>font-size大小
import './common/flexible'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
