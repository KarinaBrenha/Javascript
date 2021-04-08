/* Pedro joga N jogos de basquete por temporada. Para saber como ele está progredindo, ele mantém
registro de todos os as pontuações feitas por jogo. Após cada jogo ele anota no novo valor e confere se o
mesmo é maior ou menor que seu melhor e pior desempenho. Dada uma lista string = “pontuação1 pontuação2
pontuação3 etc..”, escreva uma função que ao recebê-la irá comparar os valores um a um e irá retornar um
vetor com o número de vezes que ele bateu seu recorde de maior número de pontos e quando fez seu pior
jogo. (Número do pior jogo). */

const calcularPontuacao = lista => {
    const arrayPontuacao = lista.split(' ');
    let piorPontuacao = 0;
    let novaPontuacao = 0;
    let melhorPontuacao = 0;
    let recorde = 0;
    for (let i = 0; i < arrayPontuacao.length; i++){
        novaPontuacao = Number(arrayPontuacao[i]);
        if (i === 0){
            piorPontuacao = novaPontuacao;
            melhorPontuacao = novaPontuacao;
        }
        if (novaPontuacao > melhorPontuacao && i !== 0) {
            melhorPontuacao = novaPontuacao;
            recorde++;
        }
        if (novaPontuacao < piorPontuacao) {
            piorPontuacao = novaPontuacao;
        }
    }
    return [recorde, piorPontuacao];
}

console.log(calcularPontuacao("10 5 7 30 27 50"));













