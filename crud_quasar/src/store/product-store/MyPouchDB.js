/* eslint-disable consistent-return,no-undef,no-unused-vars */

// import PouchDB from PouchDB;

function UsingPouchDB () {
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

  return UsingPouchDB();
};
