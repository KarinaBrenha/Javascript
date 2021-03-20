let valor // não inicializada
console.log(valor)
// console.log(valor2) // da erro pois nao foi declarado

valor = null // ausencia de valor
console.log(valor)
// console.log(valor.toString()) // nao pode pois a variavel esta nula, da erro

const produto ={}
console.log(produto.preco)
console.log(produto)

produto.preco = 3.50
console.log(produto)

produto.preco = undefined // evite atribuir undefined
console.log(!!produto.preco)
// delete produto.preco // se quer tirar o atributo declarado
console.log(produto)

produto.preco = null // sem preço
console.log(!!produto.preco)
console.log(produto)

