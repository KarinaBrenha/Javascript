/* Escreva uma função que receba dois parâmetros início e fim. Essa função deve imprimir todos os números
ímpares que estão entre esses valores. Por padrão os valores devem ser 0 para início e 100 para fim. Atente
para corrigir a ordem dos parâmetros caso a função receba o valor maior antes do menor. */

const calcularImpares = (inicio, fim) => {
    if ( inicio > fim) {
        let novofim = inicio;
        let novoinicio = fim;
        for (let i = novoinicio; i < novofim; i++) {
            if (i % 2 !== 0) {
                console.log(i);
            }
        }
    }
    for (let i = inicio; i < fim; i++) {
        if (i % 2 !== 0) {
            console.log(i);
        }
    }
}

calcularImpares(100, 0);