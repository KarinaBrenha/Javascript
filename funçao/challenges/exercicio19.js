/* O cardápio de uma lanchonete é o seguinte:
Código Descrição do Produto Preço
100 Cachorro Quente R$ 3,00
200 Hambúrguer Simples R$ 4,00
300 Cheeseburguer R$ 5,50
400 Bauru R$ 7,50
500 Refrigerante R$ 3,50
600 Suco R$ 2,80
Implemente uma função que receba como parâmetros o código do item pedido, a quantidade e calcule o valor
a ser pago por aquele lanche. Considere que a cada execução somente será calculado um item. Use o
comando switch. Crie um caso default para produto não existente */

const valor = dinheiro => dinheiro.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})

const lanchonete = (pedido, quantidade) => {
    switch (pedido) {
        case 100:
            console.log(`Pague ${valor(quantidade * 3.00)}`);
            break;
        case 200:
            console.log(`Pague ${valor(quantidade * 4.00)}`);
            break;
        case 300:
            console.log(`Pague ${valor(quantidade * 5.50)}`);
            break;
        case 400:
            console.log(`Pague ${valor(quantidade * 7.50)}`);
            break;
        case 500:
            console.log(`Pague ${valor(quantidade * 3.50)}`);
            break;
        case 600:
            console.log(`Pague ${valor(quantidade * 2.80)}`);
            break;
        default:
            console.log('Produto não existente');
    }
}

lanchonete(100, 1);
lanchonete(200, 4);
lanchonete(300, 5);
lanchonete(400, 4);
lanchonete(500, 2);
lanchonete(600, 1);
lanchonete(700, 4);