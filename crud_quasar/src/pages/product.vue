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
import { mapActions, mapState } from 'vuex';

export default {
  name: 'product',

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
    ...mapActions('modelproduct', ['ChangeProduct'])
  }

};
</script>

<style scoped>

</style>
