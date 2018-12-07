<template>
  <q-page class="card-examples row items-start" padding>
    <q-card class=center>

    <h2>Edit product {{product.name}} </h2>
    <form v-on:submit="updateProduct(product)">

      <div class="form-group">
        <q-input float-label="Name" id="add-name" required v-model="product.name"></q-input>
      </div>

      <div class="form-group">
        <q-input class="form-control" float-label="Description" id="add-description" rows="10"
                 type="textarea" v-model="product.description"></q-input>
      </div>

      <div class="form-group">
        <q-input float-label="Price" id="add-price" type="number" v-model="product.price"></q-input>
      </div>

      <button class="btn btn-primary" type="submit">Update</button>
      <a class="btn btn-default">
        <router-link to="/">Cancel</router-link>
      </a>
    </form>
    </q-card>

  </q-page>
</template>

<script>
import { mapActions, mapState } from 'vuex';

export default {
  name: 'product-edit',

  data () {
    return { product: '' };
  },

  mounted () {
    this.findProduct(this.$route.params.product_id);
    this.product = this.products;
  },

  computed: {
    ...mapState('modelproduct', ['products'])
  },

  methods: {
    ...mapActions('modelproduct', ['findProduct']),
    ...mapActions('modelproduct', ['ChangeProduct']),

    updateProduct (product) {
      let prod = product;

      const payload = {
        _id: prod._id,
        name: prod.name,
        description: prod.description,
        price: prod.price
      };

      this.ChangeProduct(payload);
      this.$router.push('/');
    }
  }
};

</script>

<style scoped>

</style>
