/* eslint-disable consistent-return,no-undef,no-unused-vars,no-unused-expressions,no-redeclare,
no-implied-eval */
import { Loading, uid } from 'quasar';
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
 * */
export function createDB () {
  console.log('############ createDB ##############');

  try {
    db.info()
      .then(function (result) {
        if (result.doc_count === 0) {
          products.forEach(function (prod) {
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
      });
  } catch (e) {
    console.error('**Ocorreu algum erro**', e);
  }
};

export function cargalist () {
  console.log('############ cargalist ##############');
  product = [];

  try {
    db.allDocs({
      include_docs: true,
      attachments: true
    })
      .then(function (result) {
        for (let i = 0; i < result.rows.length; i++) {
          product.push(result.rows[i]['doc']);
        }
      });
  } catch (err) {
    console.error('## Ocorreu um erro ao tentar ler o banco ##', err);
  }
};

/**
 * Essa função é chamada toda vez que a pagina inicial é solicitada.
 * Estava usando funções async para gerenciar inicialmente o banco
 * e a lista que alimenta o state, mas com o meu conhecimento limitado,
 * não estava tando certo, parti para o promise MeRmU.
 * O processo banco > lista... tem que ter uma ordem restrida de execução
 * e a unica maneira foi usando o setTime, que provavelmente vai me dá dor
 * cabeça em algum momento.
 **/
export function setProduct ({ commit }, obj) {
  Loading.show({
    // spinner: QSpinnerGears,
    message: 'Some message',
    messageColor: 'blue',
    spinnerSize: 250, // in pixels
    spinnerColor: 'white',
    customClass: 'bg-primary'
  });

  createDB();
  window.setTimeout(cargalist, 500);
  window.setTimeout(() => {
    console.log('############ SetProduct ##############');
    commit('SET_PRODUCTS', { product });
  }, 1000);
}

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
