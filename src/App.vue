/*
 * @Author: AI
 * @Date: 2017-10-11 21:02:36
 * @Last Modified by: AI
 * @Last Modified time: 2017-12-17 18:25:15
 * @describe
 */
<template>
  <div id="app">
    <!-- 路由渲染出口 -->
    <router-view />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import store from './router/vuex'



@Component({
  store
})
export default class App extends Vue {
  app: any = this.$store.state.AppVuex
  // 钩子函数
  mounted () {
    console.log(this.app)
  }
  _upData(data: any) {
    this.$store.commit('_appUpData', data)
  }
}
</script>

<style lang="stylus">
</style>
