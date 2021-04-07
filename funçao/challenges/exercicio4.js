/* Crie uma função que irá receber dois valores, o dividendo e o divisor. A função deverá imprimir o resultado
e o resto da divisão destes dois valores. */


function operacao (x, y){
    const div = function (x, y) {
        return x / y
      
    }
    const rest = function (x, y) {
        return x % y
    }
   console.log(`O resultado da divisão é ${div(x, y)} e o resto da divisão é ${rest(x, y)}`)
}

operacao(8, 3)

// usando arrow function

function operacao1 (x, y) {
    div1 = (x, y) => x / y
    rest1 = (x, y) => x % y
    console.log(`O resultado da divisão é ${div1(x, y)} e o resto da divisão é ${rest1(x, y)}`)
}

operacao1(8, 3)
operacao1(9, 5)

// outro modo com arrow function

const operacao2 = (x, y) => console.log(`O resultado da divisão é ${x / y} e o resto da divisão é ${x % y}`)
operacao2(8, 3)
operacao2(9, 5)
