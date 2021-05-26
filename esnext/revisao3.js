// ES8: Object.values/Object.entries
const obj = { a: 1, b: 2, c: 3 };
console.log(Object.values(obj));
console.log(Object.entries(obj));

// Melhorias na notação literal
const nome = 'Carla';
const pessoa = {
    nome,
    Ola() {
        return 'Oi gente!';
    }
}

console.log(pessoa.nome, pessoa.Ola());

// Class
class Animal {};
class Cachorro extends Animal {
    falar() {
        return 'Au au!';
    }
}

console.log(new Cachorro(). falar());