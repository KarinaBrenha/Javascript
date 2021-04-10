/* Crie um programa que exibe se um dia é dia útil, fim de semana ou dia inválido dado o número referente ao
dia. Considere que domingo é o dia 1 e sábado é o dia 7. Utilize a estrutura Switch. */


const imprimirDia = dia => {
    switch (dia) {
        case 1: case 7:
            console.log('Fim de semana!');
            break;
        case 2: case 3: case 4: case 5: case 7:
            console.log('Dia útil!');
            break;
        default:
            console.log('Dia inválido!');
    }
}



imprimirDia(9);
imprimirDia(5);
imprimirDia(7);