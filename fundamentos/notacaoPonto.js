console.log(typeof console)

console.log(Math.ceil(6.1))

const obj1 = {}
obj1.nome = 'bola'
 // obj1['nome'] = 'bola2'  // sobrescreve
console.log(obj1.nome)

function Obj(nome) {
    this.nome = nome
    this.exec = function () {
        console.log('Exec...')
        console.log(nome)
        
    }
}

const obj2 = new Obj('cadeira')
const obj3 = new Obj('mesa')
console.log(obj2.nome)
console.log(obj3.nome)
obj3.exec()
obj2.exec()