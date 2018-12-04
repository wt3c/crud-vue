<template>
  <q-page flux flux-center>
    <h2>Delete product {{ product.name }}</h2>
    <form v-on:submit="deleteprod(product)">
    <p>The action cannot be undone.</p>
    <button class="btn btn-danger" >Delete</button>
    <a class="btn btn-default">
      <router-link to="/">Cancel</router-link>
    </a>
    </form>
  </q-page>
</template>

<script>
import { mapActions, mapState } from 'vuex';

export default {
  name: 'product-delete',
  data () {
    return { product: '' };
  },

  computed: {
    ...mapState('modelproduct', ['products'])
  },

  mounted () {
    this.findProduct(this.$route.params.product_id);
    this.product = this.products;
  },

  methods: {
    ...mapActions('modelproduct', ['findProduct']),
    ...mapActions('modelproduct', ['DeleteProduct']),

    deleteprod (product) {
      let prod = product;
      this.DeleteProduct(prod);
      this.$router.push('/');
    }
  }

};
</script>

<style scoped>

</style>
