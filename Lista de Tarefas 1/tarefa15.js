// 15. Fazer um algoritmos para receber um número decimal e o peso de cada número até que o usuário digite o número 0. Fazer a média ponderada desses números e pesos respectivos.

console.log("Escreva um número decimal e seu peso associado até digitar 0. Será feito a média ponderada desses valores.");

const prompt = require('prompt-sync')();
let num = parseInt(prompt("Escreva um número:"));
let peso = parseInt(prompt("Escreva seu peso:"));
let numerador = 0;
let denominador = 0;
let media_pond = 0;

while(num!==0 && peso!==0) {
    if(isNaN(num) || isNaN(peso)) {
        console.log("Você digitou um não número, tente novamente");
        num = parseInt(prompt("Escreva um número:"));
        peso = parseInt(prompt("Escreva seu peso:"));
    }
    else {
        numerador = numerador + num * peso;
        denominador = denominador + peso;
        num = parseInt(prompt("Escreva um número:"));
        peso = parseInt(prompt("Escreva seu peso:"));
    }
}

if(denominador == 0) {
    console.log("Você não digitou nenhum número ou seus pesos são iguais a zero");
} else {
    media_pond = numerador / denominador;
    console.log(`A média ponderada de todos os números totaliza ${media_pond}`);
}