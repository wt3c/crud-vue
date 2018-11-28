<template>
  <div id="q-app">
    <!--<router-view/>-->
    <h3>Component Product</h3>
    {{ product }}
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  name: 'Product',

  data () {
    return { product: '' };
  },

  mounted () {
    // Lembrando que esse THIS é do scopo desse export default
    this.setProduct();
    this.product = this.products;
  },
  methods: {
    ...mapActions('modelproduct', ['setProduct'])
  },
  computed: {
    ...mapState('modelproduct', ['products'])

  }
};
</script>

<style>
</style>
