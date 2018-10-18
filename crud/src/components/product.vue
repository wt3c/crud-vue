<!--<script src="../../../src/vue.js"></script>-->
<template>
  <div>
    <h2>{{ product.name }}</h2>
    <b>Description: </b>
    <div>{{ product.description }}</div>
    <b>Price:</b>
    <div>{{ product.price }}<span class="glyphicon glyphicon-euro"></span></div>
    <br/>
    <span class="glyphicon glyphicon-arrow-left" aria-hidden="true"></span>
    <a>
      <router-link to="/">Back to product list</router-link>
    </a>
  </div>
</template>


<script>
  import productList from '@/components/product-list'
  import crud from '@/services/crud'

  export default {
    name: "product",
    props: ['products'],
    data() {
      return {
        product: [],
      }
    },
    created() {
      // console.log("##############", this.products, this.$route.params.product_id - 1)
       var bb = crud.getProduct(2)
       console.log(bb)

      var cc = productList.findProduct(this.$route.params.product_id - 1)

      console.log(cc, "%%%%%%%%%")


       this.product= cc
    }


  }


</script>

<style scoped>

</style>
