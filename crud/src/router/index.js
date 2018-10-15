import Vue from 'vue'
import Router from 'vue-router'
// import testecomp from '@/components/teste-comp'
import product from '@/components/product'
import productc_list from '@/components/product-list'
import add_product from '@/components/add-product'
import product_edit from '@/components/product-edit'
import product_delete from '@/components/product-delete'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'productc_list',
      component: productc_list
    },
    {
      path: '/product',
      name: 'product',
      component: product
    },
    {
      path: '/add-product',
      name: 'add_product',
      component: add_product
    },
    {
      path: '/product-edit',
      name: 'product-edit',
      component: product_edit
    },
    {
      path: '/product-delete',
      name: 'product-delete',
      component: product_delete
    },


  ]
})
