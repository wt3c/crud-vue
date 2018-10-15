<template id="add-product">
  <div>
    <h2>Add new product</h2>

    <!--  -->
    <form v-on:submit="createProduct">

      <div class="form-group">
        <label for="add-name">Name</label>
        <input class="form-control" id="add-name" v-model="product.name" required/>
      </div>

      <div class="form-group">
        <label for="add-description">Description</label>
        <textarea class="form-control" id="add-description" rows="10" v-model="product.description"></textarea>
      </div>

      <div class="form-group">
        <label for="add-price">Price, <span class="glyphicon glyphicon-euro"></span></label>
        <input type="number" class="form-control" id="add-price" v-model="product.price"/>
      </div>

      <button type="submit" class="btn btn-primary">Create</button>
      <a class="btn btn-default">
        <router-link to="/">Cancel</router-link>
      </a>

      <br><br><br> {{ product}}

    </form>
  </div>
</template>

<script>
  var products = [
    {id: 1, name: 'Angular', description: 'Superheroic JavaScript MVW Framework.', price: 100},
    {id: 2, name: 'Ember', description: 'A framework for creating ambitious web applications.', price: 100},
    {id: 3, name: 'React', description: 'A JavaScript Library for building user interfaces.', price: 100}
  ];

  export default {
    name: "add-product",

    data: function () {
      return {
        product: {name: '', description: '', price: ''}
      }
    },

    methods: {
      createProduct: function () {
        //Obsolete, product is available directly from data...
        let product = this.product; //var product = this.$get('product');
        products.push({
          id: Math.random().toString().split('.')[1],
          name: product.name,
          description: product.description,
          price: product.price
        });
        router.push('/');
      }
    }

  }
</script>

<style scoped>

</style>
