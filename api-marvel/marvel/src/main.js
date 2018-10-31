/* eslint-disable no-new */
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'

// Dizendo para o vue para usar VueMaterial
Vue.use(VueMaterial)

Vue.config.productionTip = false

new Vue({
  el: '#app',
  // Registrando o router na app
  router,
  components: { App },
  template: '<App/>'
})
