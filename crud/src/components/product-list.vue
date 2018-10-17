<template id="product-list">
  <div>

    <!--Botão para adcionar-->
    <div class="actions">
      <a class="btn btn-default">
        <router-link :to="{path: '/add-product'}">
          <span class="glyphicon glyphicon-plus"></span>
          Add product
        </router-link>
      </a>
    </div>

    <!--Input search-->
    <div class="filters row">
      <div class="form-group col-sm-3">
        <label for="search-element">Product name</label>
        <input v-model="searchKey" class="form-control" id="search-element" requred/>
      </div>
    </div>

    <!--Detalhe dos produtos-->
    <table class="table">
      <thead>
      <tr>
        <th>Name</th>
        <th>Description</th>
        <th>Price</th>
        <th class="col-sm-2">Actions</th>
      </tr>
      </thead>
      <tbody>

      <tr v-for="product in filteredProducts">
        <!--<tr v-for="product in products">-->
        <!--<tr v-for="product in products | filterBy searchKey in 'name'">-->
        <td>
          <a>
            <!--                Nome da rota    Parametros º_º  -->
            <router-link :to="{name: 'product', params: {product_id: product.id}}">{{ product.name }}
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
            <router-link :to="{name: 'product-edit', params: {product_id: product.id}}">Edit</router-link>
          </a>
          <a class="btn btn-danger btn-xs">
            <router-link :to="{name: 'product-delete', params: {product_id: product.id}}">Delete
            </router-link>
          </a>
        </td>
      </tr>
      </tbody>
    </table>

    <pre>{{products}}</pre>

  </div>

</template>

<script>

  export default {
    name: "product-list",
    props: {products : ['id', 'name', 'description', 'price']},

    data() {
      return {searchKey: ''};
    },
    computed: {
      filteredProducts() {
        return this.products.filter((product) => {
          return product.name.indexOf(this.searchKey) > -1
        })
      }
    }
  }

</script>

<style scoped>

</style>
