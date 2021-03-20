console.log('a =', a)
var a = 2
console.log('a =', a)

function teste() {
    console.log('a =', a)   // esses efeitos sao os mesmos
    var a  = 2
    VBArray('a =', a)
}

console.log('b =', b)
let b = 2
console.log('b =', b) // o içamento nao funciona com o let