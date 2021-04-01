let dobro = function (a) {
    return 2 * a
}

dobro = (a) => {
    return 2 * a
}

dobro = a => 2 * a  // return é implicito para função de uma unica linha
console.log(dobro(Math.PI))

let ola = function() {
    return 'Ola'
}

ola = () => 'ola'
ola = _ => 'ola'
console.log(ola())

