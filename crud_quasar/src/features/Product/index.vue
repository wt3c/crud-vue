<template>
  <div id="q-app">
    <!--<router-view/>-->
    <h3>Teste</h3>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  name: 'Product',
  mounted () {
    this.setProduct();
  },
  methods: {
    ...mapActions('product', ['setProduct'])
  },
  computed: {
    ...mapState('product', ['list'])
  }
};
</script>

<style>
</style>
