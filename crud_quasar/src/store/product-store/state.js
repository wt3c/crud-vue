/* eslint-disable consistent-return,no-undef,no-unused-vars */
/* eslint-disable no-plusplus */

// import PouchDB from './MyPouchDB';
// import { UsingPouchDB } from './MyPouchDB';
var productList2 = [];

export default {

  // product_list2: [],

  // product_list: [{
  //   id: 1,
  //   name: 'Angular',
  //   description: 'Superheroic JavaScript MVW Framework.',
  //   price: 100
  // },
  // {
  //   id: 2,
  //   name: 'Ember',
  //   description: 'A framework for creating ambitious web applications.',
  //   price: 100
  // },
  // {
  //   id: 3,
  //   name: 'React',
  //   description: 'A JavaScript Library for building user interfaces.',
  //   price: 100
  // }],

  UsingPouchDb () {
    console.log('----------------- CREATING DATABASE ----------------- ');
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
      db.post(prod)
        .then(function (response) {
          console.log('Banco criado com sucesso!', response);
        })
        .catch(function (err) {
          console.log('Deu RUIM!!!!!!!!!!!', err);
        });
    });

    db.allDocs({
      include_docs: true,
      attachments: true
    })
      .then(function (response) {
        // console.log('############################', response.rows[1]['doc']);
        productList2.push(response.rows[0]['doc']);
        // this.product_list2.push(response.rows[1]['doc']);
        console.log('############################', productList2);
      })
      .catch(function (err) {
        console.log('&&&&&&&&&&&&&&&&&&&&&& * ERRROOOORRRRR *', err);
      });
  },

  findProduct (productId) {
    return productList2[this.findProductKey(productId)];
  },

  findProductKey (productId) {
    for (let key = 0; key < productList2.length; key++) {
      if (productList2[key].id === productId) {
        return key;
      }
    }
  }
};
