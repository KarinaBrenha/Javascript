/* Escrever um algoritmo que percorre um vetor de inteiros, conta quantos números negativos há nesse vetor
e imprime a quantidade no console. */

const contarNegativos = numero => {
    let negativo = 0;
    for ( let i = 0; i < numero.length; i++) {
        if ( numero[i] < 0) {
            negativo++;
        }
    }
    return `Há ${negativo} número(s) negativos.`
}


console.log(contarNegativos([ 20, 3, 19, 8, -9, 100]));
console.log(contarNegativos([ -20, 3, 0, 8, -9, 100]));