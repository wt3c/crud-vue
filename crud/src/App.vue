<template>
  <div id="app">
    <img src="./assets/logo.png">
    <!-- Passando a props products que recebe products_data -->
    <router-view :products=products_data></router-view>
  </div>
</template>

<script>
  import CCrouter from './router/index'

  var product_list = [
    { id: 1, name: 'Angular', description: 'Superheroic JavaScript MVW Framework.', price: 100 },
    { id: 2, name: 'Ember', description: 'A framework for creating ambitious web applications.', price: 100 },
    { id: 3, name: 'React', description: 'A JavaScript Library for building user interfaces.', price: 100 }
  ]

  export default {
    name: 'App',

    data () {
      return {
        products_data: product_list
      }
    },

    // Gostei dessa solução por que ficou fácil de entender e pequeno
    findProduct (productId) {
      return product_list[this.findProductKey(productId)]
    },
    findProductKey (productId) {
      for (var key = 0; key < product_list.length; key++) {
        if (product_list[key].id === productId) {
          //retorna o index da lista
          return key
        }
      }
    },

    deleteProduct (prod) {
      product_list.splice(prod, 1)
      CCrouter.push('/')
    },

    updateProduct (product) {
      // product_list[index]
      product_list[this.findProduct(product.id)] = {
        id: product.id,
        name: product.name,
        description: product.description,
        price: product.price
      }
      CCrouter.push('/')

    },

    createProduct (product) {
      product_list.push({
        // Math.random() retorna uma dizima Ex.: 0.52552552
        // converte para string e delimita por . e pega o index 1
        id: Math.random().toString().split('.')[1],
        name: product.name,
        description: product.description,
        price: product.price
      })
      CCrouter.push('/')
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
