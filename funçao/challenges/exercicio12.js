// Faça um algoritmo que calcule o fatorial de um número.

const calculofatorial = numero => {
    let resultado = 1;
    for (let i = 1; i <= numero; i++) {
        resultado = i * resultado;
    }
    return resultado;
}

console.log(calculofatorial(5));
console.log(calculofatorial(20));