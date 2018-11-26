/* eslint-disable consistent-return,no-undef,no-unused-vars */
import PouchDB from 'pouchdb';
// PouchDB.plugin(require('pouchdb-find'));

// const setProduct = async ({ commit }, obj) => {
//   const db = (await new PouchDB('productDB'));
//   commit('SET_PRODUCT', { product });
// };

const db = new PouchDB('productDB');

// const setProduct = async ({ commint }, obj) => {
//   const list = (await
//   db.allDocs({ include_docs: true })
//     .then(function (docs) {
//       console.log(docs.rows);
//     })
//     .catch(function (err) {
//       console.log('Ocorreu algum erro', err);
//     })
//   );
// };

const products = [{
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
  price: 100,
  _rev: ''
},
{
  _id: '3',
  name: 'React',
  description: 'A JavaScript Library for building user interfaces.',
  price: 100,
  _rev: ''
}];

const setProduct = [];
// const setProduct = async ({ commint }, obj) => {

var createDB = async () => {
  try {
    var result = await db.info();

    if (result.doc_count === 0) {
      await products.forEach(function (prod) {
        db.post(prod)
          .then(function (response) {
            console.log('Banco criado com sucesso!', response);
          })
          .catch(function (err) {
            console.warn('Ocorreu algum problema ao criar o banco de dados', err);
          });
      });
    } else {
      console.log('---------- Banco existentem, não houve alterações ----------');
    }
  } catch (e) {
    console.warn('**Ocorreu algum erro**', err);
  }
};
createDB();

//
// db.allDocs({
//   include_docs: true,
//   attachments: true
// })
//   .then(function (docs) {
//     // console.log(docs.rows);
//
//     if (!docs.rows) {
//       products.forEach(function (prod) {
//         db.post(prod)
//           .then(function (response) {
//             console.log('Banco criado com sucesso!', response);
//           })
//           .catch(function (err) {
//             console.warn('Ocorreu algum problema ao criar o banco de dados', err);
//           });
//       });
//     } else {
//
//     }
//   })
//   .catch(function (err) {
//     console.log('Ocorreu algum erro', err);
//   });

//   try {
//     var doc = db.info();
//     console.log(doc);
//     commit('SET_LIST', { doc });
//   } catch (err) {
//     console.warn('...## Ocorreu um erro a tentar deletar o registro', ' ##...', err);
//   }
// };

console.table(setProduct);

export function f () {
  return setProduct;
};
