<template>
  <div id="app">
    <img src="./assets/logo.png">
    <product_list></product_list>
    <router-view></router-view>

  </div>
</template>

<script>
  import product_list from './components/product-list'
  import product from './components/product'

  export default {
    name: 'App',
    components:{
      product_list,
      product
    }


  }
</script>

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
