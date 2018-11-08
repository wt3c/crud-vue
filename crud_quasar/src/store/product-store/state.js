/* eslint-disable consistent-return */
/* eslint-disable no-plusplus */
export default {

  product_list: [
    {
      id: 1, name: 'Angular', description: 'Superheroic JavaScript MVW Framework.', price: 100
    },
    {
      id: 2, name: 'Ember', description: 'A framework for creating ambitious web applications.', price: 100
    },
    {
      id: 3, name: 'React', description: 'A JavaScript Library for building user interfaces.', price: 100
    }
  ],

  findProduct (productId) {
    return this.product_list[this.findProductKey(productId)];
  },

  findProductKey (productId) {
    for (let key = 0; key < this.product_list.length; key++) {
      if (this.product_list[key].id === productId) {
        return key;
      }
    }
  }

};
