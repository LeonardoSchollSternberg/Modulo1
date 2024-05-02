// 1. Escreva um algoritmo para ler uma temperatura em graus Celsius, calcular e escrever o valor correspondente em graus Fahrenheit.

const prompt = require('prompt-sync')();
let temp_C = Number(prompt("Digite o valor em graus Celsius para ser convertido em Fahrenheit:"));
let temp_F;

if(isNaN(temp_C)) {
    console.log("Foi digitado um não número, tente novamente");
} else{
    temp_F = temp_C * 1.8 + 32;
    console.log(`${temp_C} graus Celsius resultam em ${temp_F} graus Fahrenheit`);
}
