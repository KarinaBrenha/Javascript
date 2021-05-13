/* Desenvolva uma função que receba uma string como parâmetro e retorne essa string somente com as
consoantes, ou seja, sem as vogais.
Exemplos:
removerVogais("Cod3r") // retornará "Cd3r"
removerVogais("Fundamentos") // retornará "Fndmnts" */

const removerVogais = string => {
    let resultado = string.replace(/(a|e|i|o|u)/ig, '');
    return resultado;
}

function removerVogais2(frase) {
    const vogais = ["a", "A", "e", "E", "i", "I", "o", "O", "u", "U"]
    vogais.forEach( vogal => frase = frase.replace(vogal, '') )
    return frase
    }

console.log(removerVogais("Cod3r"));
console.log(removerVogais("Fundamentos"));

console.log(removerVogais2("Cod3r"));
console.log(removerVogais2("Fundamentos"));