/* Crie uma função que receba quatro números como parâmetro (numero, minimo, maximo, inclusivo) e retorne se
o parâmetro numero (o primeiro) está entre minimo e maximo. Quando o parâmetro inclusivo for true, tenha
"entre" como inlusivo, ou seja, considerando se numero é igual a minimo ou a maximo. Caso o parâmetro
inclusivo não seja informado, seu valor padrão deverá ser false, portanto, a lógica será exclusiva, não
considerando se numero é igual a minimo ou a maximo. */

const estarEntre = (numero, minimo, maximo, inclusivo = false) => {
    if (inclusivo === true) return minimo <= numero && numero <= maximo;
    else return minimo < numero && numero < maximo;
}

console.log(estarEntre(100, 10, 500));
console.log(estarEntre(16, 100, 160));
console.log(estarEntre(3, 3, 6));
console.log(estarEntre(3, 3, 300, true));