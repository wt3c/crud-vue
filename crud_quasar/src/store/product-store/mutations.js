export const ADD_PRODUCT = (state, product) => {
  console.log('##################', state);
  state.product_list.push({
    id: Math.random().toString().split('.')[1],
    name: product.name,
    description: product.description,
    price: product.price
  });
};

/*
export default {

  'CHANGE_PRODUCT' (state, payload) {
    state.product_list[state.findProduct(payload.id)] = payload;
  },

  'DELETE_PRODUCT' (state, product) {
    state.product_list.splice(product, 1);
  },

  'ADD_PRODUCT' (state, product) {
    state.product_list.push({
      id: Math.random().toString().split('.')[1],
      name: product.name,
      description: product.description,
      price: product.price
    });
  }

};
*/
