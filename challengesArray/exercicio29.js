/* Crie uma função que recebe um array de números e retorna o segundo maior número presente nesse array.
Exemplos:
segundoMaior([12, 16, 1, 5]) // retornará 12
segundoMaior([8, 4, 5, 6]) // retornará 6 */

const segundoMaior = todosNumeros => {
    // return todosNumeros.filter(numero => numero < Math.max(...todosNumeros))
    const valor = todosNumeros.filter(numero => numero < Math.max(...todosNumeros)).reduce((acumulador, max) => {
        if (acumulador < max) {
            acumulador = max;
        }
        return acumulador;
    });
    return valor;
}

console.log(segundoMaior([12, 16, 1, 5]));
console.log(segundoMaior([8, 4, 5, 6]));