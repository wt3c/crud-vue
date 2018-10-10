import Vue from 'vue'
import Router from 'vue-router'
import testecomp from '@/components/teste-comp'
import productc from '@/components/product'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'productc',
      component: productc
    }
  ]
})
