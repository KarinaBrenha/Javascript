Array.prototype.map2 = function(callback) {
    const newArray = [];
    for (let i = 0; i < this.length; i++) {
        newArray.push(callback(this[i], i, this));
    }
    return newArray;
}

const carrinho = [
    '{"nome": "Borracha", "preco": 3.45}',
    '{"nome": "Caderno", "preco": 13.90}',
    '{"nome": "Kit de Lapis", "preco": 41.22}',
    '{"nome": "Caneta", "preco": 7.50}'
]

// Retornar um array apenas com os preços

const converterObjeto = elemento => JSON.parse(elemento);

const paraDinheiro = elemento => `R$ ${parseFloat(elemento.preco).toFixed(2).replace('.', ',')}`;

const arrayValor = carrinho.map2(converterObjeto).map2(paraDinheiro);
console.log(arrayValor);