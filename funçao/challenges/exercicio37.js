/* Escreva duas funções, uma para progressão aritmética e uma para progressão geométrica que recebam
como parâmetros um número n (número de termo), a1 (o primeiro termo) e r (a razão) e escreva os n termos ,
bem como a soma dos elementos. */

const calcularPA = (numeroTermo, primeiroTermo, razao) => {
let resultadoPA = primeiroTermo;
let numero = 0;
    for (let i = 1; i < numeroTermo; i++ ) {
        if(i === 1) {
            numero = primeiroTermo;
            console.log(numero) 
        }
            numero += razao;
            resultadoPA += numero; 
            console.log(numero)      
    }
    return `A soma dos valores da PA é ${resultadoPA} `;
}


const calcularPG = (numeroTermo, primeiroTermo, razao) => {
    let resultadoPG = primeiroTermo;
    let numero = 0;
        for (let i = 1; i < numeroTermo; i++ ) {
            if(i === 1) {
                numero = primeiroTermo;
                console.log(numero) 
            }
                numero *= razao;
                resultadoPG += numero; 
                console.log(numero)      
        }
        return `A soma dos valores da PG é ${resultadoPG} `;
    }
    
console.log(calcularPA(10, 25, 5));
console.log(calcularPG(10, 25, 5));