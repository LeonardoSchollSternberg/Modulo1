/*
    Construa um array de números e calcule a soma total dos números e também imprima cada número multiplicado por dois.
*/

let numeros = [1, 12, 15]
let soma = 0

numeros.forEach((valor) => {soma+=valor; console.log(`${valor} * 2 = ${valor*2}`)})
console.log("A soma dos valores é: ",soma)