const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa'];

pilotos.pop(); // remove o ultimo!
console.log(pilotos);

pilotos.push('Verstappen');
console.log(pilotos);

pilotos.shift(); // remove o primeiro!
console.log(pilotos);

pilotos.unshift('Hamilton');  // adiciona no primeiro
console.log(pilotos);

// splice pode acicionar e remover elementos

// adicionar
pilotos.splice(2, 0, 'Bottas', 'Massa');
console.log(pilotos);

// remover
pilotos.splice(3, 1); // exclui posição 3
console.log(pilotos);

const algunsPilotos1 = pilotos.slice(2); // pega um pedaço e cria novo array
console.log(algunsPilotos1);

const algunsPilotos2 = pilotos.slice(1, 4); // pega do indice 1 ate o indice 3, indice 4 nao entra
console.log(algunsPilotos2);
