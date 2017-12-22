/*
 * @Author: AI
 * @Date: 2017-10-11 21:03:11
 * @Last Modified by: AI
 * @Last Modified time: 2017-12-17 18:04:43
 * @describe
 */

import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

import AppVuex from './appvuex'
export default new Vuex.Store({
  modules: {
    AppVuex
  }
})
