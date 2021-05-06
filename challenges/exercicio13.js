/* Crie uma função que receba um array de elementos e retorne um array somente com os números presentes no
array recebido como parâmetro. 
Exemplos:
filtrarNumeros(["Javascript", 1, "3", "Web", 20]) // retornará [1, 20]
filtrarNumeros(["a", "c"]) // retornará []*/

const filtrarNumeros = array => {
           return array.filter(elemento => typeof elemento === "number");
}

console.log(filtrarNumeros(["Javascript", 1, "3", "Web", 20]));