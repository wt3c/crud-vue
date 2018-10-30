<template>

  <div>
    <h2>Edit product</h2>
    <form v-on:submit="updateProduct(productt)">

    <div class="form-group">
      <label for="edit-name">Name</label>
      <input class="form-control" id="edit-name" v-model="productt.name" required/>
    </div>

    <div class="form-group">
      <label for="edit-description">Description</label>
      <textarea class="form-control" id="edit-description" rows="3" v-model="productt.description"></textarea>
    </div>

    <div class="form-group">
      <label for="edit-price">Price, <span class="glyphicon glyphicon-euro"></span></label>
      <input type="number" class="form-control" id="edit-price" v-model="productt.price"/>
    </div>

    <button class="btn btn-primary">Save</button>

    <a class="btn btn-default">
      <router-link to="/">Cancel</router-link>
    </a>
    </form>
  </div>

</template>

<script>

  export default {
    name: "product-edit",

    data() {
      return {productt: this.$store.state.findProduct(this.$route.params.product_id)}
    },
    methods: {
      updateProduct(product) {

        let prod = product;

        const payload = {
          id: prod.id,
          name: prod.name,
          description: prod.description,
          price: prod.price
        };
        this.$store.commit('CHANGE_PRODUCT', payload);
        this.$router.push('/');

      }
    }
  }
</script>

<style scoped>

</style>
