/* eslint-disable no-parsing-error */
<template>
  <!--<q-page class="flex flex-center">-->
  <q-page class="card-examples row items-start" padding>

    <img alt="Quasar logo" src="~assets/quasar-logo-full.svg">

    <router-link :to="{path: '/add-product'}">
      <q-btn class="full-width" color="deep-orange" icon-right="add" label="New product"></q-btn>
    </router-link>

    <q-input float-label="Product name" id="search-element" v-model="searchKey"/>

    <q-card class="items-center">
      <q-spinner-ball :size="80" color="primary" v-if="products == ''"/>
    </q-card>

    <!--Detalhe dos produtos-->
    <q-card>
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
        <tr :key="product._id" v-for="product in filteredProducts()">
          <!--<tr :key="product._id" v-for="product in products">-->
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
            <q-icon name="euro_symbol"/>
          </td>

          <td>
            <router-link :to="{name: 'product-edit', params: {product_id: product._id}}">
              <q-btn size="10px" rounded color="primary" icon-right="cached" label="Edit"></q-btn>
            </router-link>

            <router-link :to="{name: 'product-delete', params: {product_id: product._id}}">
              <q-btn size="10px" rounded  color="red" icon-right="delete" label="Delete"></q-btn>
            </router-link>

          </td>
        </tr>
        </tbody>
      </table>
    </q-card>
  </q-page>
</template>

<script>
import { mapActions, mapState } from 'vuex';

export default {
  name: 'product_list',

  data () {
    return {
      searchKey: '',
      product: ['']
    };
  },
  mounted () {
    this.product = [];
    // Lembrando que esse THIS é do scopo desse export default
    // this.createDB();
    console.log('############ STORE ###############');
    console.log(this.$store);
    console.log('############ FIM STORE ###############');
    console.log('');

    this.setProduct();
    this.product = this.products;
  },
  methods: {
    // ...mapActions('modelproduct', ['createDB']),
    ...mapActions('modelproduct', ['setProduct']),
    // ...mapActions('modelproduct', ['cargalist']),

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
