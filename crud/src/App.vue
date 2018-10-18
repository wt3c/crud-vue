<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view :products=products_data> </router-view>
    <!--<product-list :products=products_data></product-list>-->
  </div>
</template>

<script>
  // import productList from '@/components/product-list'

  var product_list = [
    {id: 1, name: 'Angular', description: 'Superheroic JavaScript MVW Framework.', price: 100},
    {id: 2, name: 'Ember', description: 'A framework for creating ambitious web applications.', price: 100},
    {id: 3, name: 'React', description: 'A JavaScript Library for building user interfaces.', price: 100}
  ];

  export default {
    name: 'App',
    // components: {
    //   productList,
    // },

    data() {
      return {
        products_data: product_list
      }
    },
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
