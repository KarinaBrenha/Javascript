/* Desenvolva uma função que recebe dois parâmetros, um é a quantidade de horas trabalhadas por um
funcionário num mês, e o quanto ele recebe por hora. O retorno da função deve ser a string "Salário igual a R$
X", em que X é o quanto o funcionário ganhou no mês. */



const CalcularSalario = (horasTrabalhadas, salarioHora) => {
    const valorMes = horasTrabalhadas * salarioHora;
    const salarioMes = valorMes.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
    return `Salário igual a ${salarioMes}`;
} 

console.log(CalcularSalario(38.9, 95.50));