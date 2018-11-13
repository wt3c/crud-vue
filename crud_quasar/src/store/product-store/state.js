/* eslint-disable consistent-return,no-undef,no-unused-vars */

/* eslint-disable no-plusplus */

// import PouchDB from './MyPouchDB';
import { UsingPouchDB } from './MyPouchDB';

export default {

  created () {
    console.log('----------------- CREATING DATABASE ----------------- ');
    pounc = new UsingPouchDB();
    pounc();
  },

  UsingPouchDb () {
    var db = new PouchDB('productDB');
    var remoteCouch = false;

    var products = [{
      _id: '1',
      name: 'Angular',
      description: 'Superheroic JavaScript MVW Framework.',
      price: 100,
      _rev: ''
    },
    {
      _id: '2',
      name: 'Ember',
      description: 'A framework for creating ambitious web applications.',
      price: 100
    },
    {
      _id: '3',
      name: 'React',
      description: 'A JavaScript Library for building user interfaces.',
      price: 100
    }
    ];

    products.forEach(function (prod) {
      db.put(prod)
        .then(function (response) {
          console.log('Banco criado com sucesso!', response);
        })
        .catch(function (err) {
          console.log('Deu RUIM!!!!!!!!!!!', err);
        });
    });
  },

  product_list: [{
    id: 1,
    name: 'Angular',
    description: 'Superheroic JavaScript MVW Framework.',
    price: 100
  },
  {
    id: 2,
    name: 'Ember',
    description: 'A framework for creating ambitious web applications.',
    price: 100
  },
  {
    id: 3,
    name: 'React',
    description: 'A JavaScript Library for building user interfaces.',
    price: 100
  }],

  findProduct (productId) {
    UsingPouchDb();
    console.log('###########', tes);
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
