import Vue from 'vue';
import Vuex from 'vuex';
// import example from './module-example';
import product from './product-store';

/*
Não gostei muito do mode de importação acima, prefiro a de baixo, mas vou segui o flux
import state from './state'
import mutations from './mutations'
*/

Vue.use(Vuex);

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation
 */

// export default function (/* { ssrContext } */) {
export default function (/* { ssrContext } */) {
  const Store = new Vuex.Store({
    modules: {
      product
    }
  });

  return Store;
}
