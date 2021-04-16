/* Faça uma função que receba como parâmetro um vetor de notas e mostre os conceitos de cada uma de
modo que de 0,0 a 4,9 seja atribuído o conceito D, de 5,0 a 6,9 seja atribuído o conceito C, de 7,0 a 8,9 o
conceito B e de 9,0 a 10,0 o conceito A */

const calculateScore = arrayScore => {
    for (let i = 0; i < arrayScore.length; i++) {
        if (arrayScore[i] >= 0.0 && arrayScore[i] <= 4.9) {
            console.log(`Para nota ${arrayScore[i]}, conceito D.`);            
        }
        if (arrayScore[i] >= 5.0 && arrayScore[i] <= 6.9) {
            console.log(`Para nota ${arrayScore[i]}, conceito C.`);
        }
        if (arrayScore[i] >= 7.0 && arrayScore[i] <= 8.9) {
            console.log(`Para nota ${arrayScore[i]}, conceito B.`);
        }
        if (arrayScore[i] >= 9.0 && arrayScore[i] <= 10.0) {
            console.log(`Para nota ${arrayScore[i]}, conceito A.`);
        }
        if(arrayScore[i] < 0 || arrayScore[i] > 10) {
             console.log('Nota inválida.', arrayScore[i])
        }
    }
}

calculateScore([2, 7.8, 9.8, 5.6, -2]);