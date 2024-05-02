// 3. Faça um algoritmo que leia quatro números inteiros e realize as seguintes operações:
//● Some 25 ao primeiro inteiro;
//● Triplique o valor do segundo inteiro;
//● Modifique o valor do terceiro inteiro para 12% do valor original;
//● Armazene no quarto inteiro a soma dos valores originais (os que o usuário digitou) dos primeiros três inteiros.

const prompt = require('prompt-sync')();
let num1 = parseInt(prompt("Digite o 1º número:"));
let num2 = parseInt(prompt("Digite o 2º número:"));
let num3 = parseInt(prompt("Digite o 3º número:"));
let num4 = parseInt(prompt("Digite o 4º número:")); // Obs: enunciado pediu para ler 4 números, mesmo não pedindo fazer algo com o 4º. Fiz o que enunciado pediu, mas achei estranho
let num1_mod;
let num2_mod;
let num3_mod;
let num4_mod;

if(isNaN(num1)||isNaN(num2)||isNaN(num3)||isNaN(num4)) {
    console.log("Foi digitado um não número, tente novamente");
} else {
    num1_mod = num1 + 25;
    num2_mod = num2 * 3;
    num3_mod = num3 * 12 / 100;
    num4_mod = num1 + num2 + num3;
    
    console.log(`Números digitados pelo usuário respectivamente são ${num1}, ${num2}, ${num3}, ${num4}`);
    console.log(`Números após cálculos são ${num1_mod}, ${num2_mod}, ${num3_mod}, ${num4_mod}`);
}