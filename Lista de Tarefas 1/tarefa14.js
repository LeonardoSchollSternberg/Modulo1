// 14. Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer a média aritmética desses números.

const prompt = require('prompt-sync')();
let num = parseInt(prompt("Escreva um número decimal e será calculado a média com todos. Imprima o resultado digitando 0"));
let contagem = 0;
let soma = 0;
let media = 0;

while(num!==0) {
    if(isNaN(num)) {
        console.log("Você digitou um não número, tente novamente");
        num = parseInt(prompt("Escreva um número decimal e ele será somado aos demais. Imprima o resultado digitando 0:"));
    }
    else {
        soma = soma + num;
        contagem++;
        num = parseInt(prompt("Próximo número:"));
    }
}

if(contagem == 0) {
    console.log("Você não digitou nenhum número");
} else {
    media = soma / contagem;
    console.log(`A média de todos os números totaliza ${media}`);
}