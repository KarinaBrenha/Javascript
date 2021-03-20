const valores = [7.7, 8.9, 6.3, 9.2]
console.log(valores[0], valores[3])
console.log(valores[4]) // nao devolve valor pois temos indices de 0 a 3.

valores[4] = 10 // adiciona valor ao indice 4
console.log(valores)
console.log(valores.length)

valores.push({id:3}, false, null, 'teste') // push adicona elementos na ultima posição do array
console.log(valores)

console.log(valores.pop())  // retira ultimo valor do array
delete valores[0]
console.log(valores)

console.log(typeof valores)