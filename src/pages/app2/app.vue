<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

<template>
  <div id="app">
    <h1>sdsdsdsdd</h1>aaa
    <img src="@/assets/images/logo.png" alt="">
    <img :src="img1" alt="">
    <App1 />
    <App2 />
    <App3 />
  </div>
</template>

<script>
import img1 from '@/assets/images/logo.png'
import App1 from './app1'
import App2 from './app2'
import App3 from './app3'
export default {
  name: 'App',
  data: () => {
    return {
      img1
    }
  },
  components: {
    App1,
    App2,
    App3
  },
  methods: {
  }
}
</script>
