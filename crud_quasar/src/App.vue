<template>
  <div id="q-app">
    <!--<router-view/>-->
    <product></product>
  </div>
</template>

<script>
import Product from './features/Product';

export default {
  name: 'App',
  components: {
    Product
  }
};
</script>

<style>
</style>
