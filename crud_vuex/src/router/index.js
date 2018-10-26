import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import product_list from '../components/product-list'
import product from '../components/product'
import add_product from '@/components/add-product'
import product_edit from '@/components/product-edit'
import product_delete from '@/components/product-delete'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'product_list',
      component: product_list
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
