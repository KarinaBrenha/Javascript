/* Crie duas funções que recebem dois parâmetros, um vetor com apenas valores numéricos e um número
inteiro. Faça com que a primeira função retorne outro vetor que será resultado da multiplicação de cada
elemento pelo número passado como parâmetro. A segunda função fará o mesmo da primeira se e somente se
o valor do elemento for maior que 5. */


const calcular1 = (numeros, inteiro) => {
    for ( let i = 0; i < numeros.length; i++) {
        numeros[i] *= inteiro;
    }
    return numeros;
}

const calcular2 = (numeros, inteiro) => {
    for ( let i = 0; i < numeros.length; i++) {
        if (numeros[i] > 5) {
            numeros[i] *= inteiro;
        }        
    }
    return numeros;
}

console.log(calcular1([2, 6, 8, 9], 5));
console.log(calcular2([2, 6, 4, 9], 5));