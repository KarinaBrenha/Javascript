// Object.preventExtensions  * atributo não pode ser extendido
const produto = Object.preventExtensions({
    nome: 'Qualquer', preco: 1.99, tag: 'promoção'
})

console.log('Extensível', Object.isExtensible(produto));

produto.nome = 'borracha';
produto.descricao = 'Borracha escolar'; // não consegue adicionar novos atributos
delete produto.tag; // pode excluir atributos
console.log(produto);

// Object.seal * não consegue adicionar nem excluir atributos, mas consegue modificar os existentes
const pessoa = { nome: 'Juliana', idade: 35 };
Object.seal(pessoa);
console.log('Selado:', Object.isSealed(pessoa));

pessoa.sobrenome = 'Silva';
delete pessoa.nome;
pessoa.idade = 29;
console.log(pessoa);

// Object.freeze = selado + valores constantes
