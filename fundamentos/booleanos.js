let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1 // verdadeiro
console.log(!!isAtivo) // ! negativo - !! positvo

console.log('os verdadeiros...')
console.log(!!3)
console.log(!!-1)
console.log(!!' ')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true))
console.log(!!'texto')

console.log('os falsos...')
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)  // NaN = not a number
console.log(!!undefined)
console.log(!!(isAtivo = false))

console.log('pra finalizar..')
console.log(!!('' || null || 0 || ' '))

let nome = 'Lucas'
console.log(nome || 'Desconhecido') // imprime desconhecido se estiver vazio a variavel

