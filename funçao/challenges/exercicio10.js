// Crie uma função que verifica se um número inteiro passado como parêmetro é divisível por 3 e retorne true

const div = div => {
    if ( (div % 3) === 0 ) {
        return true;
    }
    else return false;
}

console.log(div(10));
console.log(div(30));


// outro jeito

const div1 = numero => (numero % 3) === 0;

console.log(div1(10));
console.log(div1(30));