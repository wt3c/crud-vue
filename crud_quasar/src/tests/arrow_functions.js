/* eslint-disable no-labels */
// noinspection JSAnnotator
var pessoa = [
  {
    id: 1,
    nome: 'Welington',
    sobrenome: 'Carlos',
    idade: 40
  },
  {
    id: 2,
    nome: 'Rosangela',
    sobrenome: 'Grosso',
    idade: 37
  },
  {
    id: 3,
    nome: 'Lucas',
    sobrenome: 'Grosso',
    idade: 17
  },
  {
    id: 4,
    nome: 'Eduarda',
    sobrenome: 'Grosso',
    idade: 17
  },
  {
    id: 5,
    nome: 'Bart',
    sobrenome: 'Cavalcante',
    idade: ''
  }
];

function test1 () {
  return pessoa.filter(ps => ps.idade).length;
}
