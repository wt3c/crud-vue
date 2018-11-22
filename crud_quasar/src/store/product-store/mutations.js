/* eslint-disable consistent-return,no-undef,no-unused-vars */

import { uid } from 'quasar';
import PouchDB from 'pouchdb';

var db = new PouchDB('productDB');
var remoteCouch = false;

export function ADD_PRODUCT (state, product) {
  let myuid = uid();

  state.product_list.push({
    _id: myuid,
    name: product.name,
    description: product.description,
    price: product.price
  });
  console.log(state.product_list);
};

export async function DELETE_PRODUCT (state, product) {
  // state.product_list.splice(product, 1);
  try {
    var doc = await db.get(String(product._id));
    var response = await db.remove(doc);
  } catch (err) {
    console.warn('...## Ocorreu um erro a tentar deletar o registro', product.name, ' ##...', err);
  }
};

export function CHANGE_PRODUCT (state, product) {
  // state.product_list[state.findProduct(product.id)] = product;

  // console.log(db);

  // db.allDocs({
  //   include_docs: true,
  //   attachments: true
  // })
  //   .then(function (response) {
  //     console.log(response.rows[0]['doc']);
  //   })
  //   .catch(function (err) {
  //     console.log('Erro em carregar a lista de produtos ## : *', err);
  //   });

  console.log(product);

  db.get(String(product._id))
    .then(function (doc) {
      console.log('## DOC ##', doc);
      return db.put({
        _id: String(product._id),
        name: product.name,
        description: product.description,
        price: product.price,
        _rev: doc._rev
      });
    })
    .then(function (response) {
      console.table(response);
    })
    .catch(function (err) {
      console.warn('### ERRO ###', err);
    });
}
