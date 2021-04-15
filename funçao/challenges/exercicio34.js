/* Construa uma função que receberá duas Strings de tamanhos variados e que retornará True ou False caso
todos os caracteres (independentemente de ser maiúsculo ou minúsculo) estejam contidos em ambas palavras. */

const validarStrings = (texto1, texto2) => {
    texto1 = texto1.toLowerCase();
    texto2 = texto2.toLowerCase();
    return (texto1.includes(texto2) || texto2.includes(texto1));
}

console.log(validarStrings('Maria Clara', 'Mariana'));
console.log(validarStrings('Maria Clara', 'maria'));
console.log(validarStrings('abcd', '123abcd'));

