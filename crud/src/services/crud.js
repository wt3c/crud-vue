var product_list = [
  {id: 1, name: 'Angular', description: 'Superheroic JavaScript MVW Framework.', price: 100},
  {id: 2, name: 'Ember', description: 'A framework for creating ambitious web applications.', price: 100},
  {id: 3, name: 'React', description: 'A JavaScript Library for building user interfaces.', price: 100}
];

export default {

  a: {id: 3, name: 'React', description: 'A JavaScript Library for building user interfaces.', price: 100},

  getProduct(id) {
    return (product_list[id])
  }

}
