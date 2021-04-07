/* Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados:
Equilátero: Os três lados são iguais. Isósceles: Dois lados iguais. Escaleno: Todos os lados são diferentes.
Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne sua classificação quanto
ao tamanho de seus lados. (Neste exemplo deve-se abstrair as condições matemáticas de existência de um
triângulo). */


// function medidas (a, b, c) {
//     if (a === b && a === c) {
//         console.log('Triângulo equilátero')
//     } else if (a === c && b !== a) {
//        console.log('Triângulo isósceles')
//     } else if (b === c && a !== c) {
//         console.log('Triângulo isósceles')
//     } else if (a === b && b !== c) {
//         console.log('Triângulo isósceles')
//     }
//     else {
//     console.log('Triângulo escaleno')
//     }
// }

function medidas(a, b, c) {
    if (a === b && a === c){
        console.log('Triângulo equilátero')
    } 
    else if ( a !== b && a !== c && b !== c){
        console.log('Triângulo escaleno')
    } else {
        console.log('Triângulo isósceles')
    }
}


medidas(2, 2, 2)
medidas(2, 4, 2)
medidas(2, 4, 6)
medidas(4, 4, 6)
medidas(2, 6, 6)