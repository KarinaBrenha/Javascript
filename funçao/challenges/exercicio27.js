/* Construa uma função que receba como parâmetros as alturas e as taxas de crescimento anuais de duas
crianças e calcule se existe uma criança menor, caso exista se a criança menor ultrapassará a maior e em
quantos anos isso acontecerá. Utilize centímetros para as unidades de medida */


let altura1;
let crescimento1;
let altura2;
let crescimento2;
let ano1;
let ano2;

const calcularCrescimento = (altura1, crescimento1, altura2, crescimento2) => {
    if (altura1 < altura2) {
        for (ano1 = 0; altura1 < altura2; ano1++) {
            altura1 = altura1 * crescimento2;
            altura2 = altura2 * crescimento2;;            
        }
        return crescimento1 > crescimento2 ? `A criança menor ultrapassará a maior em ${ano1} anos.` : 'A ciança menor não ultrapassará a maior.'
    }
    if (altura2 < altura1) {
        for (ano2 = 0; altura2 < altura1; ano2++) {
            altura1 = altura1 * crescimento2;
            altura2 = altura2 * crescimento2;;          
        }
        return crescimento2 > crescimento1 ? `A criança menor ultrapassará a maior em ${ano2} anos.` : 'A ciança menor não ultrapassará a maior.'
    }
    if (altura1 === altura2) {
        if (crescimento1 > crescimento2) {
            return 'A criança 1 ultrapassará a maior em 1 ano'
        }
        if (crescimento2 > crescimento1) {
            return 'A criança 2 ultrapassará a maior em 1 ano'
        }
    }
}

console.log(calcularCrescimento(134, 0.01, 134, 0.02));
console.log(calcularCrescimento(130, 0.01, 134, 0.02));
console.log(calcularCrescimento(134, 0.07, 134, 0.02));
console.log(calcularCrescimento(134, 0.01, 125, 0.30));
console.log(calcularCrescimento(134, 0.08, 125, 0.02));