<template>
  <div id="q-app">
    <!--<router-view/>-->
    <product></product>
  </div>
</template>

<script>
// Importando os componentes
import Product from './features/Product';
// import Product from './pages/Index';

export default {
  name: 'App',
  components: {
    Product
  }
};
</script>

<style>
</style>
