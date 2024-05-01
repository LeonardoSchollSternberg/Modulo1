// 11. Escreva um algoritmo para ler uma quantidade indeterminada de valores inteiros. Para cada valor fornecido escrever uma mensagem que indica se cada valor fornecido é PAR ou ÍMPAR. O algoritmo será encerrado imediatamente após a leitura de um valor NULO ou NEGATIVO.

const prompt = require('prompt-sync')();
let num = Number(prompt("Escreva um número e ele será classificado como PAR ou ÍMPAR. Para sair do programa escreva um número NULO ou NEGATIVO:"));

while(num>0 || !isNaN(num)) {
    if(num%2==0) {
        console.log("Você digitou um número PAR");
    }
    else {
        console.log("Você digitou um número ÍMPAR");
    }
    num = Number(prompt("Escreva um número e ele será classificado como PAR ou ÍMPAR. Para sair do programa escreva um número NULO ou NEGATIVO:"));
}
console.log("Você escreveu um número NULO ou NEGATIVO, ou um não número");