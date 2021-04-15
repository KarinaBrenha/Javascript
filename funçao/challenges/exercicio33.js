/* Crie três vetores, chamados vetorInteiro, vetorString e vetorDouble. Cada um destes vetores deverá conter
quatro valores, sendo o primeiro com valores inteiros, o segundo com strings e o terceiro com valores decimais.
Declarados os vetores, utilize a função de união concat() de duas maneiras diferentes para unir os vetores, e
mostre o resultado no console. Todos os elementos do vetor resultado deverão aparecer no console. */

const vetorInteiro = [2, 6, 8, 10];
const vetorString = ['a', 'b', 'c', 'd'];
const vetorDouble = [0.3, 3.8, 2.9, 1.6];

const resultado = vetorString.concat(vetorInteiro).concat(vetorDouble);

console.log(resultado);
