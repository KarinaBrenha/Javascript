/* Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A
primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda
retornará o valor da aplicação sob o regime de juros compostos. */

function jurosSimples (capitalInicial, taxaJuros, tempoAplicado) {
    return capitalInicial * (1 + tempoAplicado * taxaJuros)
}

console.log(jurosSimples(250000, 0.001, 40))

function jurosCompostos (capitalInicial, taxaJuros, tempoAplicado) {
    return capitalInicial * Math.pow((1 + taxaJuros), tempoAplicado)
}

console.log(jurosCompostos(250000, 0.001, 40))


// usando função arrow

const calculadoraFinanceira = (capitalInicial, taxaJuros, tempoAplicado) => console.log(`Montante com juros simples: ${capitalInicial * (1 + tempoAplicado * taxaJuros)}, montante com juros compostos ${capitalInicial * Math.pow((1 + taxaJuros), tempoAplicado)}`)

calculadoraFinanceira(250000, 0.001, 40)
