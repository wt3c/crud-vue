<template>
  <q-page padding class="fixed-center">
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
  </q-page>
</template>

<script>
export default {
  name: 'product',

  data () {
    return { product: this.$store.state.product.findProduct(this.$route.params.product_id) };
  }
};
</script>

<style scoped>

</style>
