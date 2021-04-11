// Ler um vetor de números inteiros e imprimir quantos são pares e quantos são ímpares.

const lernumeros = listaNumeros => {
    let par = 0;
    let impar = 0;
    for (let i = 0; i < listaNumeros.length; i++) {
        if (listaNumeros[i] % 2 === 0 ) par++
        else impar++;            
    }
    return `Números pares: ${par}, números ímpares: ${impar}`;
}

console.log(lernumeros([1, 4, 9, 45, 80, 10, 0, 35]));