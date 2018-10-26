export default {

  product_list: [
    {id: 1, name: 'Angular', description: 'Superheroic JavaScript MVW Framework.', price: 100},
    {id: 2, name: 'Ember', description: 'A framework for creating ambitious web applications.', price: 100},
    {id: 3, name: 'React', description: 'A JavaScript Library for building user interfaces.', price: 100}
  ],

  findProduct(productId) {
    return product[this.findProductKey(productId)];
  },

  findProductKey(productId) {
    for (var key = 0; key < product_list.length; key++) {
      if (product_list[key].id === productId) {
        return key;
      }
    }
  },


}


