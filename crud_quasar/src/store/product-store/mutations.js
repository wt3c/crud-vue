import { uid } from 'quasar';

export function ADD_PRODUCT (state, product) {
  let myuid = uid();

  state.product_list.push({
    id: myuid,
    name: product.name,
    description: product.description,
    price: product.price
  });
  console.log(state.product_list);
};

export function DELETE_PRODUCT (state, product) {
  state.product_list.splice(product, 1);
};

export function CHANGE_PRODUCT (state, product) {
  state.product_list[state.findProduct(product.id)] = product;
}
