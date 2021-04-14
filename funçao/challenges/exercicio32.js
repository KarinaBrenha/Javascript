// Construir um algoritmo que calcule a média aritmética dos valores de um vetor de inteiros.

const calcularMedia = numeros => {
    let quantidadeNumeros = 0;
    soma = 0;
    let media;
    for (let i = 0; i < numeros.length; i++){
        quantidadeNumeros++;
        soma = soma + numeros[i];
    }
    return `A média é ${soma / quantidadeNumeros}`;
}

console.log(calcularMedia([2, 3, 4, 5, 6, 8]));