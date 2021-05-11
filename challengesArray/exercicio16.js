/* A fim de manter o calendário anual ajustado com o movimento de translação da Terra, criou-se os anos
bissextos, que têm 366 dias em vez dos 365 presentes nos anos normais.
Para determinar se um ano é bissexto, é necessário saber se ele é multiplo de 4. Não pode ser múltiplo de 100,
exceto se for também múltiplo de 400.
Com isso em mente, desenvolva uma função que recebe um número correspondente a um ano e retorna se ele
é bissexto ou não.
Exemplos:
Exercícios - Curso Fundamentos de Programação 4
checarAnoBissexto(2020) // retornará true
checarAnoBissexto(2100) // retornará false, pois é múltiplo de 100 e não é múltiplo de 400 */

const checarAnoBissexto = ano => {
const seMultiplo4 = ano % 4 === 0;
const seMultiplo100 = ano % 100 === 0;
const seMultiplo400 = ano % 400 === 0;

return ((seMultiplo4 && !seMultiplo100) || seMultiplo400);
}

console.log(checarAnoBissexto(2020));
console.log(checarAnoBissexto(2100));
