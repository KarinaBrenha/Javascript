/* Faça um programa que leia um número entre 0 e 10, e escreva este número por extenso. Use o comando
switch. Crie um case default que escreva ‘Número fora do intervalo.’ */

const numeroExtenso = numero => {
    switch (numero) {
        case 0:
            console.log('zero');
            break;
        case 1:
            console.log('um');
            break;
        case 2:
            console.log('dois');
            break;
        case 3:
            console.log('três');
            break;
        case 4:
            console.log('quatro');
            break;
        case 5:
            console.log('cinco');
            break;
        case 6:
            console.log('seis');
            break;
        case 7:
            console.log('sete');
            break;
        case 8: 
            console.log('oito');
            break;
        case 9:
            console.log('nove');
            break;
        case 10:
            console.log('dez');
            break;
        default:
            console.log('Número fora do intervalo')
    }
}

numeroExtenso(0);
numeroExtenso(1);
numeroExtenso(2);
numeroExtenso(3);
numeroExtenso(4);
numeroExtenso(5);
numeroExtenso(6);
numeroExtenso(7);
numeroExtenso(8);
numeroExtenso(9);
numeroExtenso(10);
numeroExtenso(110);