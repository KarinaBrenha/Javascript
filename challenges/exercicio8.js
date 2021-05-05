/* Desenvolva uma função que recebe dois números inteiros não negativos (maiores ou iguais a zero) e realize a
multiplicação deles. Porém, não utilize o operador de mutiplicação. */

const calcularMultiplicacao = (numero1, numero2) => {
    let resultado = 0;
    for (let i = 0; i < numero2; i++){
        if (numero1 === 0 || numero2 === 0) return 0;
        else {
            resultado += numero1;
        }
    } return resultado;
}

console.log(calcularMultiplicacao(5,5));
console.log(calcularMultiplicacao(0, 7));