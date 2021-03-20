const escola = "Cod3r"

console.log(escola.charAt(5)) // nao gera erro, só nao aponta nenhum caracter

console.log(escola.charAt(3)) // primeira leta é o indice 0

console.log(escola.charCodeAt(3)) // valor na tabela unicode

console.log(escola.indexOf('3'))

console.log(escola.substring(1)) // executa a partir do indice 1

console.log(escola.substring(0, 3)) // executa apenas os indices solicitados - de 0 a 3

console.log('escola '.concat(escola).concat("!")) // soma o que é pra executar, uma frase
console.log('escola '+ escola + "!") // faz o mesmo que com o concat

console.log(escola.replace(3, 'e')) // substituiu 3 por e

/*
/\d/ = substitui todos os digitos
/\w/g = substitui todas as letras e digitos
*/

console.log('Ana,Maria,Pedro'.split(/,/))
