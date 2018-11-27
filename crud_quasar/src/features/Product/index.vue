<template>
  <div id="q-app">
    <!--<router-view/>-->
    <h3>Component Product</h3>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  name: 'Product',

  mounted () {
    console.log(this);
    // Lembrando que esse THIS é do scopo desse export default
    this.setProduct();
  },
  methods: {
    ...mapActions('product', ['setProduct'])
  },
  computed: {
    ...mapState('product', ['products'])

  }
};
</script>

<style>
</style>
