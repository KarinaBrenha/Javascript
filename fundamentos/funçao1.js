// funçao sem retorno
function imprimirSoma(a, b) {
    console.log(a+b)
}

imprimirSoma(2, 3)
imprimirSoma(2)  // nesse caso, b sera undefined
imprimirSoma(2, 10, 4, 5, 6, 7, 8)  // ignora demais elementos atribuidos
imprimirSoma()

// funçao com retorno
function soma(a, b = 1) {
    return a + b
}

console.log(soma(2, 3))
console.log(soma(2)) // usou valor padrao declarado de b

