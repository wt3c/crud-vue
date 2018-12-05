<template>
  <q-page class="flex flex-center">

    <img alt="Quasar logo" src="~assets/quasar-logo-full.svg">

    <router-link :to="{path: '/add-product'}">
      <q-btn color="deep-orange" class="full-width" label="New product" icon-right="add"></q-btn>
    </router-link>

    <q-input v-model="searchKey" float-label="Product name" id="search-element"/>

    <!--Detalhe dos produtos-->
    <table>
      <thead>
      <tr>
        <th>Name</th>
        <th>Description</th>
        <th>Price</th>
        <th class="col-sm-2">Actions</th>
      </tr>
      </thead>

      <tbody>
      <!--<tr v-for="product in filteredProducts()" :key="product._id">-->
        <tr v-for="product in products" :key="product._id">
        <!--<tr v-for="product in products | filterBy searchKey in 'name'" :key="product._id">-->

        <td>
          <a>
            <!--                Nome da rota    Parametros º_º  -->
            <router-link :to="{name: 'product', params: {product_id: product._id}, path: '/product'}">
              {{ product.name }}
            </router-link>
          </a>
        </td>
        <td>{{ product.description }}</td>
        <td>
          {{ product.price }}
          <span class="glyphicon glyphicon-euro" aria-hidden="true"></span>
        </td>
        <td>
          <a class="btn btn-warning btn-xs">
            <router-link :to="{name: 'product-edit', params: {product_id: product._id}}">
              Editar
            </router-link>
          </a>
          <a class="btn btn-danger btn-xs">
            <router-link :to="{name: 'product-delete', params: {product_id: product._id}}">Delete
            </router-link>
          </a>
        </td>
      </tr>
      </tbody>
    </table>

  </q-page>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  name: 'product_list',

  data () {
    return { searchKey: '', product: [''] };
  },
  mounted () {
    this.product = [];
    // Lembrando que esse THIS é do scopo desse export default

    // console.log(this.$store.state);
    this.setProduct();
    this.product = this.products;
  },
  methods: {
    ...mapActions('modelproduct', ['setProduct']),
    ...mapActions('modelproduct', ['cargalist']),

    filteredProducts () {
      try {
        return this.products.filter(
          product => product.name.indexOf(this.searchKey) > -1);
      } catch (e) {
        console.error('**Ocorreu algum erro**', e);
      }
    }
  },

  computed: {
    ...mapState('modelproduct', ['products'])
  }
};
</script>

<style>
</style>
