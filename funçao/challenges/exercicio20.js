/* Crie um programa para informar quais e quantas notas são necessárias para entregar o mínimo de cédulas
para um determinado valor informado pelo usuário considerando notas de R$ 100, R$ 50, R$ 10 e R$ 5 e R$ 1.
Seu programa deve mostrar apenas as notas utilizadas. Por exemplo, ao solicitar R$18, o programa deve
informar apenas a seguinte informação (note que não foram exibidas informações sobre as demais cédulas): 1
nota(s) de R$ 10. 1 nota(s) de R$ 5. 3 nota(s) de R$ 1. */


const carteira = valor => {
    let notasUm = 0;
    let notasCinco = 0;
    let notasDez = 0;
    let notasCinquenta = 0;
    let notasCem = 0;
    let valorRestante = valor;
    if (valorRestante <= valor) {
        while (valorRestante >= 100) {
            valorRestante = valorRestante - 100;
            notasCem++;            
        }
        if (notasCem > 0) {
            console.log(`${notasCem} nota(s) de R$ 100.`);
        }
        while (valorRestante >= 50) {
            valorRestante = valorRestante - 50;
            notasCinquenta++;           
        }
        if (notasCinquenta > 0) {
            console.log(`${notasCinquenta} nota(s) de R$ 50.`);
        }
        while (valorRestante >= 10) {
            valorRestante = valorRestante - 10;
            notasDez++;            
        }
        if (notasDez > 0) {
            console.log(`${notasDez} nota(s) de R$ 10.`);
        }
        while (valorRestante >= 5) {
            valorRestante = valorRestante - 5;
            notasCinco++;            
        }
        if (notasCinco > 0) {
            console.log(`${notasCinco} nota(s) de R$ 5.`);
        }
        while (valorRestante >= 1) {
            valorRestante = valorRestante - 1;
            notasUm++;          
        }
        if (notasUm > 0) {
            console.log(`${notasUm} nota(s) de R$ 1.`);
        }
    }
}

carteira(55);
carteira(187);