/* Pedro joga N jogos de basquete por temporada. Para saber como ele está progredindo, ele mantém
registro de todos os as pontuações feitas por jogo. Após cada jogo ele anota no novo valor e confere se o
mesmo é maior ou menor que seu melhor e pior desempenho. Dada uma lista string = “pontuação1 pontuação2
pontuação3 etc..”, escreva uma função que ao recebê-la irá comparar os valores um a um e irá retornar um
vetor com o número de vezes que ele bateu seu recorde de maior número de pontos e quando fez seu pior
jogo. (Número do pior jogo). Obs.: O primeiro jogo não conta como novo recorde do melhor.
Exemplo:
String: “10 20 20 8 25 3 0 30 1”
Retorno: [3, 7] (Significa que ele bateu três vezes seu recorde de melhor pontuação e a pior pontuação
aconteceu no sétimo jogo.)*/

const calcularJogo = listaPont => {
    const arraylista = listaPont.split(' ');
    let pontNova;
    let pontPior;
    let pontMelhor;
    let piorJogada;
    let pontRecorde = 0;
    for (let i = 0; i < arraylista.length; i++) {
        pontNova = Number(arraylista[i]);
        if ( i === 0) {
            pontMelhor = pontNova;
            pontPior = pontNova;            
        }
        if (pontNova > pontMelhor) {
            pontMelhor = pontNova;
            pontRecorde++
        }
        if (pontNova < pontPior) {
            pontPior = pontNova;
            piorJogada = i + 1;            
        }
        if ( i === 0 && pontNova === 0){
            piorJogada = 1;
        }
    }
    return [pontRecorde, piorJogada];
}


// const calcularPontuacao = lista => {
//     let arrayList = lista.split(' ');
//     arrayList = arrayList.map(item => Number(item));
//     let piorJogo = Infinity;
//     let indexPiorJogo = null;
//     let recordes = 0;
//     let melhorPontuação;
//     for(let i = 0; i < arrayList.length; i++){
//       if(i === 0) {
//         melhorPontuação = arrayList[0];
//       }
  
//       if(arrayList[i] < piorJogo){
//         piorJogo = arrayList[i];
//         indexPiorJogo = i + 1;
//       }
//       if(i !== 0 && arrayList[i] > melhorPontuação) {
//         recordes++;
//       }
//     }
//     return [recordes, indexPiorJogo]
//   }
  
  console.log(calcularJogo("10 20 20 8 25 3 0 30 1"));






