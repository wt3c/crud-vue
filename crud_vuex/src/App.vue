<template>
  <div id="app">
    <img src="./assets/logo.png">
    <!--<product_list></product_list>-->
    <!--<product></product>-->
    <router-view></router-view>

  </div>
</template>

<script>
  import product from './components/product'
  import product_list from './components/product-list'
  import product_edit from './components/product-edit'

  export default {
    name: 'App',
    components: {
      product,
      product_list,
      product_edit
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
