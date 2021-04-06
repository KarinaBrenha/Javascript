/* Crie uma função que dado dois valores (passados como parâmetros) mostre no console a soma, subtração,
multiplicação e divisão desses valores. */



function soma (x ,y) {
    return x + y
} 

function sub (x, y) {
    return x - y
}

function mult (x, y) {
    return x * y
}

function div (x, y) {
    return x / y
}


console.log(soma( 2, 3))
console.log(sub( 2, 3))
console.log(mult( 2, 3))
console.log(div( 2, 3))


// usando arrow function

const soma1 = (x,y) => x + y
console.log(soma1( 2, 3))

const sub1 = (x,y) => x - y
console.log(sub1( 2, 3))

const mult1 = (x,y) => x * y
console.log(mult1( 2, 3))

const div1 = (x,y) => x / y
console.log(div1( 2, 3))
console.log(div1( 60, 2))
