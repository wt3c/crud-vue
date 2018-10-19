<template id="product-delete">
  <div>
    <h2>Delete product {{ product.name }}</h2>
    <!--<form v-on:submit="deleteprod">-->
    <p>The action cannot be undone.</p>
    <button class="btn btn-danger" v-on:click="deleteprod(product)">Delete</button>
    <a class="btn btn-default">
      <router-link to="/">Cancel</router-link>
    </a>
    <!--</form>-->
  </div>
</template>

<script>
  import app from '@/App'

  export default {
    name: "product-delete",

    data: function () {
      return {
        product: app.findProduct(this.$route.params.product_id)
      }
    },
    methods: {
      deleteprod: function (prod) {
        app.deleteProduct(prod)
      }
    }
  }
</script>

<style scoped>

</style>
