const produtos = [
    {nome: 'Notebook', preco: 2499, fragil: true},
    {nome: 'ipad Pro', preco: 4199, fragil: true},
    {nome: 'copo de vidro', preco: 12.49, fragil: true},
    {nome: 'copo de plástico', preco: 18.99, fragil: false},
]

const seCaro = elemento => elemento.preco >= 500;

const seFragil = elemento => elemento.fragil === true;

const listaFinal = produtos.filter(seCaro).filter(seFragil);
console.log(listaFinal);

// exemplos abaixo
// console.log(produtos.filter(function(p) {
//     return p.preco > 2500;
// }))

// console.log(produtos.filter(function(p1) {
//     return false;
// }))

// console.log(produtos.filter(function(p2) {
//     return p2.fragil === true;
// }))