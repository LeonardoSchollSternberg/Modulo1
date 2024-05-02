// 10. Escreva um algoritmo para ler um número inteiro e escrevê-lo na tela 10 vezes.

const prompt = require('prompt-sync')();
let num = Number(prompt("Escreva um número que será repetido na tela 10 vezes:"));

if(isNaN(num)) {
    console.log("Foi digitado um não número, tente novamente");
} else {
    for(contador = 0; contador < 10; contador++) {
        console.log(num)
    }
}