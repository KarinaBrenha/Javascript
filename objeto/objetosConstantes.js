// pessoa -> 123 -> {...}
const pessoa = {nome: 'Joao'};
pessoa.nome = 'Pedro'; // aqui, mudou o valor de nome
console.log(pessoa);

// pessoa -> 456 -> {...} 
 // pessoa = { nome: 'Ana'}; // não pode atribuir para novo objeto

 Object.freeze(pessoa); // congela o valor atribuido, nao tem como mudar depois
 pessoa.nome = 'Maria';
 console.log(pessoa.nome);
 pessoa.end = 'Rua ABC'; // esta congela e não é possivel atribuir nenhum outro valor
 console.log(pessoa);

 const pessoaConstante = Object.freeze({ nome: 'Joao'}); // criou o objeto ja congelado, nao tem como mudar mais
 console.log(pessoaConstante);

