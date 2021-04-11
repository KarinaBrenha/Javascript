/* Criar um programa para identificar o valor a ser pago por um plano de saúde dada a idade do conveniado
considerando que todos pagam R$ 100 mais um adicional conforme a seguinte tabela: 1) crianças com menos
de 10 anos pagam R$80; 2) conveniados com idade entre 10 e 30 anos pagam R$50; 3) conveniados com
idade acima de 30 e até 60 anos pagam R$ 95; e 4) conveniados acima de 60 anos pagam R$130 */


const valor = dinheiro => dinheiro.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})

const calcularPlano = idade => {
    let valorPlano = 100;
    if (idade < 10) {
        valorPlano += 80;
    }
    if (idade >= 10 && idade <= 30) {
        valorPlano += 50;
    }
    if (idade > 30 && idade <= 60) {
        valorPlano += 95;
    }
    if (idade > 60) {
        valorPlano += 130;
    }
    return `Valor do plano: ${valor(valorPlano)}`;
}

console.log(calcularPlano(3));
console.log(calcularPlano(26));
console.log(calcularPlano(40));
console.log(calcularPlano(84));