// 9. Escreva um algoritmo que leia o código de origem de um produto e imprima a região do mesmo, conforme a tabela abaixo:

// Código de origem:
// 1 - Sul
// 2 - Norte
// 3 - Leste
// 4 - Oeste
// 5 ou 6 - Nordeste
// 7, 9 ou 9 - Sudeste
// 10 até 20 - Centro-Oeste
// 25 até 50 - Nordeste
// Fora dos Intervalos - Produto Importando

const prompt = require('prompt-sync')();
let codigo = parseInt(prompt("Digite código de produto e será informado a região que pertence:"));

if(isNaN(codigo)) {
    console.log("Foi digitado um não número, tente novamente");
} else if(codigo==1) {
    console.log("Região Sul!");
} else if(codigo==2) {
    console.log("Região Norte!");
} else if(codigo==3) {
    console.log("Região Leste!");
} else if(codigo==4) {
    console.log("Região Oeste!");
} else if(codigo==5 || codigo==6) {
    console.log("Região Nordeste!");
} else if(codigo==7 || codigo==8 || codigo==9) {
    console.log("Região Sudeste!");
} else if(codigo >=10 && codigo <=20) {
    console.log("Região Centro-Oeste!");
} else if(codigo >=25 && codigo <=50) {
    console.log("Região Nordeste!");
} else {
    console.log("Produto Importado!")
}