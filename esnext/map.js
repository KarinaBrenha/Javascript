const tecnologias = new Map();
tecnologias.set('react', { framework: false});
tecnologias.set('angular', { framework: true});

console.log(tecnologias.react); // nao encontra
console.log(tecnologias.get('react').framework); // jeito certo

const chavesVariadas = new Map([
    [function () { }, 'função'],
    [{}, 'Objeto'],
    [123, 'Número'],
])

chavesVariadas.forEach((vl, ch) => {
    console.log(ch, vl);
})

console.log(chavesVariadas.has(123)); // diz se essta contido ou nao no map
chavesVariadas.delete(123);
console.log(chavesVariadas.has(123)); // falso pois deletou o elemento
console.log(chavesVariadas.size); // pra saber quantos elementos estao contidos dentro do map

chavesVariadas.set(123, 'a');
chavesVariadas.set(123, 'b');
chavesVariadas.set(456, 'b');
console.log(chavesVariadas);