<style lang="stylus" scoped>
@import '../static/css/common.styl'
</style>

<template>
<div>hello world !</div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import { Prop } from 'vue-property-decorator'

import Common from '../common/common.ts'

@Component({
  components: {
  }
})

export default class App extends Vue {
  app: any = this.$store.state.AppVuex // 数据,状态
  @Prop()

  created () {
  }
  mounted () {
    console.log(Common.GetDataType('sss'))
  }
  destroyed () {
  }
  _setData(data: any) {
    // 更新Vuex数据状态
    this.$store.commit('_setData', data) }
}
</script>
