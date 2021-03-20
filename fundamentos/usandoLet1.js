var numero = 1
{
    let numero = 2 // nao sobrescreve pois nao ta no mesmo escopo
    console.log('dentro = ', numero)
}
console.log('fora = ', numero)