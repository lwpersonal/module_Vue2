<template>
<p>hello world!</p>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import { Prop, Watch } from 'vue-property-decorator'

@Component({
  // 这里放vue实例的配置
  // props的第一种写法，需要在下声明一下才可以使用
  // props: {width: Number, ratio: Number}
})

export default class Swiper extends Vue {
  // props的第一种写法, props声明
  // width: Number
  // ratio: Number

  // vue实例中的data属性这样写
  scrollWidth: number = window.screen.availWidth
  // ref 子组件的引用
  $refs: {
    // button: Button
  }
  // 生命周期
  mounted () {
  }
  // props的第二种写法
  @Prop()
  width: Number
  @Prop()
  ratio: Number
  @Prop()
  swiperData: Array<Object>
  // 计算属性
  get swiperStyle () :any {
    return ''
  }
  // watch
  @Watch('$route')
  onRouteChanged (route: any, oldRoute: any) :void {
  }
  // 函数方法可以直接写
  getData () :void {}
}
</script>

<style lang="scss" scoped>
p {
  color: blueviolet;
}
</style>
