// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// import testc from './components/teste-comp'

// Vue.config.productionTip = false

/* eslint-disable no-new */

var product_list = [
    {id: 1, name: 'Angular', description: 'Superheroic JavaScript MVW Framework.', price: 100},
    {id: 2, name: 'Ember', description: 'A framework for creating ambitious web applications.', price: 100},
    {id: 3, name: 'React', description: 'A JavaScript Library for building user interfaces.', price: 100}
  ];


new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',

  data() {
      return{products:product_list}
    }


})

console.log('ESSA PORRA TAMBÉM......', product_list)
