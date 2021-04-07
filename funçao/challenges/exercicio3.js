//Crie uma função que recebe dois parâmetros, base e expoente, e retorne a base elevada ao expoente.


//usando arrow
const exp = (x, y) => Math.pow(x, y)
console.log(exp(2, 3))


// outro jeito
function exp1(x, y) {
    return Math.pow(x, y)
}


console.log(exp1(4,9))