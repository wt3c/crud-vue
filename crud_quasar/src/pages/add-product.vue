<template>
  <q-page>
    <h2>Add new product</h2>

    <!--  -->
    <form v-on:submit="createProduct(product)">

      <div class="form-group">
        <q-input float-label="Name" id="add-name" v-model="product.name" required/>
      </div>

      <div class="form-group">
        <q-input type="textarea"  float-label="Description" class="form-control" id="add-description"
                 rows="10" v-model="product.description"></q-input>
      </div>

      <div class="form-group">
        <q-input type="number" float-label="Price" id="add-price" v-model="product.price"/>
      </div>

      <button type="submit" class="btn btn-primary">Create</button>
      <a class="btn btn-default">
        <router-link to="/">Cancel</router-link>
      </a>

    </form>
  </q-page>
</template>

<script>
export default {
  name: 'add-product',
  data () {
    return {
      product: { name: '', description: '', price: '' }
    };
  },
  methods: {
    createProduct (product) {
      let prod = product;
      this.$store.commit('ADD_PRODUCT', prod);
      this.$route.push('/');
    }
  }

};
</script>

<style scoped>

</style>
