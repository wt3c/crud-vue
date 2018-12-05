/* eslint-disable consistent-return,no-undef,no-unused-vars,no-unused-expressions */
import { uid } from 'quasar';
import PouchDB from 'pouchdb';

const db = new PouchDB('productDB');

var product = [];
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

// let product = [];

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
    console.error('**Ocorreu algum erro**', e);
  }
};
createDB();

// const cargalist = async function () {
export async function cargalist () {
  product = [];

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

  console.log('CARGALIST ####################', product);
};
// cargalist();

export function setProduct ({ commit }, obj) {
  cargalist();
  commit('SET_PRODUCTS', { product });
  // return product;
};

export function findProduct (state, productID) {
  let product = state.state.products[findProductKey(state, productID)];
  state.commit('SET_PRODUCTS', { product });
}

function findProductKey (state, productID) {
  for (let key = 0; key < state.state.products.length; key++) {
    if (state.state.products[key]._id === productID) {
      return key;
    }
  }
}

export function ChangeProduct (state, product) {
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

export async function DeleteProduct (state, product) {
  try {
    var doc = await db.get(String(product._id));
    var response = db.remove(doc);

    // createDB();
  } catch (err) {
    console.warn('...## Ocorreu um erro a tentar deletar o registro', product.name, ' ##...', err);
  }
}

export async function CreateProduct (state, product) {
  let myuid = uid();

  try {
    let response = await db.put({
      _id: myuid,
      name: product.name,
      description: product.description,
      price: product.price
    });
  } catch (err) {
    console.error('OCORREU UM ERRO A GRAVAR O NOVO PRODUTO', err);
  }
}
