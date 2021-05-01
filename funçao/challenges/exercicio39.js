/* Crie uma função que receba dois vetores de igual tamanho e troque seus elementos de modo que o
primeiro elemento do vetorA passe a ser o primeiro elemento do vetorB e vice versa e assim sucessivamente.
Faça a troca sem utilizar uma variável auxiliar. */

const changeArrayValue = (array1, array2) => (
    `Array1: ${array1.concat(array2).slice(array1.length, array1.length + array2.length)} 
    e Array2: ${array2.concat(array1).slice(array2.length, array1.length + array2.length)}`
)


console.log(changeArrayValue([1,2,3,4,5], [6,7,8,9,10]));
console.log(changeArrayValue(['a','b','c'], ['d', 'e', 'f']));