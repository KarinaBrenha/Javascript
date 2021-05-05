/* Elabore uma função que recebe um número como parâmetro e retorne uma string com o símbolo "+" na
quantidade especificada no parâmetro. */

const simboloMais = parametro => {
    let mais = "+";
    for (let i = 1; i < parametro; i++) {
        mais += "+";
    }
    return mais;
}

console.log(simboloMais(7));