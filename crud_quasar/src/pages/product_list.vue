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
      <tr v-for="product in filteredProducts()" :key="product._id">
        <!--<tr v-for="product in products">-->
        <!--<tr v-for="product in products | filterBy searchKey in 'name'">-->

        <td>
          <a>
            <!--                Nome da rota    Parametros º_º  -->
            <router-link :to="{name: 'product', params: {product__id: product._id}, path: '/product'}">
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
              Editar {{product._id}}
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

export default {
  name: 'product_list',

  data () {
    return { searchKey: '' };
  },

  created () {
    return this.$store.state.product.UsingPouchDb();
  },

  // computed: {
  //   startDB () {
  //     return this.$store.state.product.UsingPouchDb();
  //   }
  // },

  methods: {
    filteredProducts () {
      // this.$store.state.product.UsingPouchDb();
      return this.$store.state.product.product_list2.filter(
        product => product.name.indexOf(this.searchKey) > -1);
    }
  }

};
</script>

<style>
</style>
