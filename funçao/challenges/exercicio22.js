/* Criar uma função para calcular o valor a ser pago de anuidade de uma associação. A função recebe como
parâmetro um inteiro que representa o mês (1 - janeiro, 2 - fevereiro…) que foi paga e o valor da anuidade. A
anuidade deve ser paga no mês de janeiro. Por mês, é cobrado 5% de juros (sob o regime de juros
compostos). O retorno deve ser o valor a ser pago para o respectivo mês escolhido. */

function jurosCompostos (capitalInicial, taxaJuros, tempoAplicado) {
    return capitalInicial * Math.pow((1 + taxaJuros), tempoAplicado)
}

const converter = dinheiro => dinheiro.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})

const calcularAnuidade = (mes, valor) => {
    if (mes > 12 || mes < 1) return 'Mês incorreto';
    const tempoSemPagar = mes - 1;
    return converter(jurosCompostos(valor, 0.05, tempoSemPagar));    
}

console.log(calcularAnuidade(2, 80));
console.log(calcularAnuidade(1, 80));
console.log(calcularAnuidade(10, 80));
console.log(calcularAnuidade(13, 80));
