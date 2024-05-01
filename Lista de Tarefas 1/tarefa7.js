// 7. As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, e R$ 0,25 se forem compradas pelo menos doze. Escreva um algoritmo que leia o número de maçãs compradas, calcule e escreva o valor total da compra.

const prompt = require('prompt-sync')();
console.log("Valor das maçãs: R$ 0,30 se menos que 12 maçãs, R$ 0,25 se maior ou igual a 12 maçãs.")
let num_macas = parseInt(prompt("Digite o número de maçãs que deseja comprar:"));
let valor_compra;

if(isNaN(num_macas)) {
    console.log("Foi digitado um não número, tente novamente");
} else if(num_macas<12) {
    valor_compra = num_macas * 0.3;
    console.log(`Você comprou ${num_macas} maçãs por R$ ${valor_compra}.`);
}
else {
    valor_compra = num_macas * 0.25;
    console.log(`Você comprou ${num_macas} maçãs por R$ ${valor_compra}.`);
}