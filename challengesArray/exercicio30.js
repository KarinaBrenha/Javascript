/* Elabore uma função que recebe um objeto com estudantes e suas notas. As notas de cada estudante estarão
num array, conforme exemplo abaixo. Você deverá calcular a média da nota de cada aluno e retornar um objeto
com os atributos nome e media, que indica o aluno que teve o melhor desempenho nas notas.
Exemplo:
recerberMelhorEstudante({
Joao: [8, 7.6, 8.9, 6], // média 7.625
Mariana: [9, 6.6, 7.9, 8], // média 7.875
Carla: [7, 7, 8, 9] // média 7.75
}) // retornará { nome: "Mariana", media: 7.875 } */

const recerberMelhorEstudante = notasEstudantes => {
    const arrayAlunos = Object.keys(notasEstudantes);
    const arrayNotas = Object.values(notasEstudantes);

    const soma = arrayNotas.map(arrayNota => arrayNota.reduce((acumulador, nota) => {
        return acumulador + nota;
    }));
        const medias = soma.map((nota, i) => nota / arrayNotas[i].length);
        const melhorMedia = medias.filter((media, i) => media === Math.max(...medias));
        const indexMelhorMedia = medias.findIndex(media => media === melhorMedia[0]);
        
        return { nome: arrayAlunos[indexMelhorMedia], media: melhorMedia[0]};

}

console.log(recerberMelhorEstudante({
    Joao: [8, 7.6, 8.9, 6], 
    Mariana: [9, 6.6, 7.9, 8], 
    Carla: [7, 7, 8, 9] 
}));