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
export default {
  name: 'product-delete',
  data () {
    return { product: this.$store.state.product.findProduct(this.$route.params.product_id) };
  },
  methods: {
    deleteprod (product) {
      let prod = product;
      this.$store.commit('product/DELETE_PRODUCT', prod);
      this.$router.push('/');
    }
  }

};
</script>

<style scoped>

</style>
