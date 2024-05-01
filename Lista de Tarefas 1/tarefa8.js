// 8. Escreva um algoritmo para ler 2 valores (considere que não serão lidos valores iguais) e escreve-los em ordem crescente.

const prompt = require('prompt-sync')();
console.log("Digite dois valores diferentes e eles serão ordenados crescentemente.")
let valor1 = Number(prompt("Escreva o primeiro valor:"));
let valor2 = Number(prompt("Escreva o segundo valor:"));

if(isNaN(valor1) || isNaN(valor2)) {
    console.log("Foi digitado um não número, tente novamente");
} else if(valor1 == valor2) {
    console.log("Valores são iguais, escreva números diferentes, tente novamente");
}
else if(valor1>valor2) {
    console.log(`Ordem crescente: ${valor1} e ${valor2}`);
}
else {
    console.log(`Ordem crescente: ${valor2} e ${valor1}`);
}