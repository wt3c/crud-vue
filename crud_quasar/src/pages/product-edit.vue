<template>
  <q-page>
    <h2>Edit product {{product.name}} </h2>
    <form v-on:submit="updateProduct(product)">

      <div class="form-group">
        <q-input float-label="Name" id="add-name" v-model="product.name" required></q-input>
      </div>

      <div class="form-group">
        <q-input type="textarea" float-label="Description" class="form-control" id="add-description"
                 rows="10" v-model="product.description"></q-input>
      </div>

      <div class="form-group">
        <q-input type="number" float-label="Price" id="add-price" v-model="product.price"></q-input>
      </div>

      <button type="submit" class="btn btn-primary">Update</button>
      <a class="btn btn-default">
        <router-link to="/">Cancel</router-link>
      </a>

      {{product}}

    </form>
  </q-page>
</template>

<script>
export default {
  name: 'product-edit',

  data () {
    return { product: this.$store.state.product.findProduct(this.$route.params.product_id) };
  },

  methods: {
    updateProduct (product) {
      let prod = product;

      const payload = {
        _id: prod._id,
        name: prod.name,
        description: prod.description,
        price: prod.price
      };

      // console.log(this.$store);
      this.$store.commit('product/CHANGE_PRODUCT', payload);
      this.$router.push('/');
    }
  }
};
</script>

<style scoped>

</style>
