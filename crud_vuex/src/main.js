/*
* Essa app é quase a mesma coisa que a crud mas como o nome sugeri, utilizei o vuex para transitar os dados
* A principio, gostei muito mais dessa solução.
* */
import Vue from 'vue'
import App from './App'
import router from './router'

import store from './store/store'

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,

  components: { App },
  template: '<App/>'
})
