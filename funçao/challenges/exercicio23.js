/* Escreva um algoritmo que leia o código de um aluno e suas três notas. Calcule a média ponderada do
aluno, considerando que o peso para a maior nota seja 4 e para as duas restantes, 3. Mostre o código do
aluno, suas três notas, a média calculada e uma mensagem "APROVADO" se a média for maior ou igual a 5 e
"REPROVADO" se a média for menor que 5. */

const calcularMedia = (codAluno, nota1, nota2, nota3) => {
    const maiorNota = Math.max(nota1, nota2, nota3);
    let media;
    if (maiorNota === nota1){
        media = (nota1 * 0.4) + (nota2 * 0.3) + (nota3 * 0.3);
    }
    if (maiorNota === nota2){
        media = (nota2 * 0.4) + (nota1 * 0.3) + (nota3 * 0.3);
    }
    if (maiorNota === nota3){
        media = (nota3 * 0.4) + (nota1 * 0.3) + (nota2 * 0.3);
    }
    return `Código do aluno : ${codAluno}, Média: ${media.toFixed(1)}, situação: ${media > 5 ? 'Aprovado' : 'Reprovado'}`
}

console.log(calcularMedia(3, 9, 5, 10));
console.log(calcularMedia(1, 2, 6, 0));

