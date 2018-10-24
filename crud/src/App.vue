<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view :products=products_data></router-view>
    <!--<product-list :products=products_data></product-list>-->
  </div>
</template>

<script>
  import CCrouter from './router/index'

  var product_list = [
    {id: 1, name: 'Angular', description: 'Superheroic JavaScript MVW Framework.', price: 100},
    {id: 2, name: 'Ember', description: 'A framework for creating ambitious web applications.', price: 100},
    {id: 3, name: 'React', description: 'A JavaScript Library for building user interfaces.', price: 100}
  ];

  export default {
    name: 'App',

    data() {
      return {
        products_data: product_list
      }
    },
    findProduct(productId) {
      return product_list[this.findProductKey(productId)];
    },
    findProductKey(productId) {
      for (var key = 0; key < product_list.length; key++) {
        if (product_list[key].id === productId) {
          return key;
        }
      }
    },
    deleteProduct(prod) {
      product_list.splice(prod, 1);
      CCrouter.push('/');
    },
    updateProduct(product) {
      product_list[this.findProduct(product.id)] = {
        id: product.id,
        name: product.name,
        description: product.description,
        price: product.price
      };
      CCrouter.push('/');

    },
    createProduct(product) {
      product_list.push({
        id: Math.random().toString().split('.')[1],
        name: product.name,
        description: product.description,
        price: product.price
      });

      CCrouter.push('/');
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
