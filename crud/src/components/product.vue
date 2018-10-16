<!--<script src="../../../src/vue.js"></script>-->
<template>
  <div>


    <h2>{{ product.name }}</h2>
    <b>Description: </b>
    <div>{{ product.description }}</div>
    <b>Price:</b>
    <div>{{ product.price }}<span class="glyphicon glyphicon-euro"></span></div>
    <br/>
    <span class="glyphicon glyphicon-arrow-left" aria-hidden="true"></span>
    <a>
      <router-link to="/">Back to product list</router-link>
    </a>
  </div>
</template>


<script>
  // var products = [
  //   {id: 1, name: 'Angular', description: 'Superheroic JavaScript MVW Framework.', price: 100},
  //   {id: 2, name: 'Ember', description: 'A framework for creating ambitious web applications.', price: 100},
  //   {id: 3, name: 'React', description: 'A JavaScript Library for building user interfaces.', price: 100}
  // ];

  export default {
    name: "product",
    data() {
      return {
        msg: 'Teste Boladão nervoso',
        product: products[0]
      }
    }
  }
</script>

<style scoped>

</style>
