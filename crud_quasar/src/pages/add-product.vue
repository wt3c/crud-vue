<template>
  <q-page>
    <h2>Add new product</h2>

    <!--  -->
    <form v-on:submit="createProduct(product)">

      <div class="form-group">
        <q-input float-label="Name" id="add-name" v-model="product.name" required></q-input>
      </div>

      <div class="form-group">
        <q-input type="textarea"  float-label="Description" class="form-control" id="add-description"
                 rows="10" v-model="product.description"></q-input>
      </div>

      <div class="form-group">
        <q-input type="number" float-label="Price" id="add-price" v-model="product.price"></q-input>
      </div>

      <button type="submit" class="btn btn-primary">Create</button>
      <a class="btn btn-default">
        <router-link to="/">Cancel</router-link>
      </a>

    </form>
  </q-page>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'add-product',
  data () {
    return {
      product: { name: '', description: '', price: '' }
    };
  },
  methods: {
    ...mapActions('modelproduct', ['CreateProduct']),

    createProduct (product) {
      let prod = product;

      this.CreateProduct(prod);
      console.log(this.$router);
      this.$router.push('/');
    }
  }

};
</script>

<style scoped>

</style>
