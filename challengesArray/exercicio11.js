/* Crie uma função que receba uma array e retorne o primeiro e o último elemento desse array como um novo
array: */

const receberPrimeiroEUltimoElemento = array => {
    let newArray;
    newArray = array.splice(1, array.length - 2);
    console.log(newArray);
}

receberPrimeiroEUltimoElemento([3, 7, 8, 9, 10]);