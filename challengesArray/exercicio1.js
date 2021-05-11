/* Crie uma função que retorna a string "Olá, " concatenada com um argumento text (a ser passado para a
função) e com ponto de exclamação "!" no final. */

const saudacao = 'Olá,';

const cumprimentar = nome => saudacao.concat(` ${nome}!`);

console.log(cumprimentar('Karina'));