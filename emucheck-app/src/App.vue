<template>
 <div>
  <header-view></header-view>
 </div>
</template>

<script>
import HeaderView from './views/HeaderView.vue'
export default {
  components:{
    'header-view': HeaderView
  }
}
 
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
