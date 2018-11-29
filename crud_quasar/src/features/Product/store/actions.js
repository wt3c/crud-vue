/* eslint-disable consistent-return,no-undef,no-unused-vars,no-unused-expressions */
import PouchDB from 'pouchdb';

const db = new PouchDB('productDB');

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

var product = [];

/**
 * Se o Banco não existir, criar um novo
 * com os dados pre definido no objeto products.
 * Usei o metodo info da instacia do banco
 * que gera um opção chamada doc_count que
 * retorna a quandidade de docs no banco.
 *
 * Usei async mas para testar mesmo. Porém,
 * ficou mais rapido a criação do Banco
 * */

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
            console.error('Ocorreu algum problema ao criar o banco de dados', err);
          });
      });
    } else {
      console.log('---------- Banco existente, não houve alterações ----------');
    }
  } catch (e) {
    console.error('**Ocorreu algum erro**', err);
  }
};
createDB();

const cargalist = async function () {
  try {
    var docs = await db.allDocs({
      include_docs: true,
      attachments: true
    });

    for (let i = 0; i < docs.rows.length; i++) {
      await product.push(docs.rows[i]['doc']);
    }
  } catch (err) {
    console.error('## Ocorreu um erro ao tentar ler o banco ##', err);
  }
};
cargalist();

export function setProduct ({ commit }, obj) {
  commit('SET_PRODUCTS', { product });
  return product;
};

export function findProdct (state, productID) {
  return state.state.products[this.findProductKey[productID]];
}

export function findProductKey (state, productID) {
  for (let key = 0; key < state.state.products.length; key++) {
    if (state.state.products.length[key]._id === productID) {
      return key;
    }
  }
}
