export default {
  'CHANGE_PRODUCT'(state, payload) {
    state.product_list[state.findProduct(payload.id)] = payload;
  }
}
