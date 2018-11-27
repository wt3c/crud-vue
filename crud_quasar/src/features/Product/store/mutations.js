/* eslint-disable consistent-return,no-undef,no-unused-vars,no-unused-expressions */

// export default function SET_PRODUCTS (state, obj) {
//   console.log('** PRODUCT **', obj.product);
//   state.products = obj.product;
// }

const SET_PRODUCTS = (state, obj) => {
  console.log('** PRODUCT **', obj.product);
  state.products = obj.product;
};

export default function () {
  SET_PRODUCTS;
};
