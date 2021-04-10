/* Um funcionário irá receber um aumento de acordo com o seu plano de
trabalho, de acordo com a tabela abaixo:
Plano Aumento
A 10%
B 15%
C 20%
Faça uma função que leia o plano de trabalho e o salário atual de um funcionário e calcula e imprime o seu
novo salário. Use a estrutura switch e faça um caso default que indique que o plano é inválido. */

const atualizaSalario = (planoTrabalho, salarioAtual) => {
    switch (planoTrabalho) {
        case 'A':
            console.log(`Novo salário: ${salarioAtual + (salarioAtual * 0.1)}`);
            break;
        case 'B':
            console.log(`Novo salário: ${salarioAtual + (salarioAtual * 0.15)}`);
            break;
        case 'C':
            console.log(`Novo salário: ${salarioAtual + (salarioAtual * 0.2)}`);
            break;
        default:
            console.log('Plano inválido');
    }
}

atualizaSalario('A', 1000);
atualizaSalario('B', 1000);
atualizaSalario('C', 1000);
atualizaSalario('D', 1000);
