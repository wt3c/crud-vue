<template>
  <div>
    <h2>Delete product {{ product.name }}</h2>
    <form v-on:submit="deleteprod(product)">
    <p>The action cannot be undone.</p>
    <button class="btn btn-danger" >Delete</button>
    <a class="btn btn-default">
      <router-link to="/">Cancel</router-link>
    </a>
    </form>
  </div>
</template>

<script>
  export default {
    name: "product-delete",

    data() {
      return {product: this.$store.state.findProduct(this.$route.params.product_id)}
    },
    methods:{
      deleteprod(product){
        let prod = product;
        this.$store.commit('DELETE_PRODUCT', product);
        this.$router.push('/');
      }

    }
  }
</script>

<style scoped>

</style>
