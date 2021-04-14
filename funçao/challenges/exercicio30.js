// Escreva um algoritmo que percorre um vetor de inteiros e defina o maior e menor valor dentro do vetor.

const calcularNumero = numero => {
    let maiorNumero;
    let menorNumero;

    for ( let i = 0; i < numero.length; i++) {
        if (i === 0) {
            maiorNumero = numero[i];
            menorNumero = numero[i];
        }
        if ( numero[i] > maiorNumero ) {
            maiorNumero = numero[i];
        }
        if ( numero[i] < menorNumero ) {
            menorNumero = numero[i];
        }
    }
    return `Maior número: ${maiorNumero}. Menor número: ${menorNumero}`;
}

console.log(calcularNumero([ 20, 3, 19, 8, -9, 100]));
console.log(calcularNumero([ 0, 3, 190, 8, 9, 100]));