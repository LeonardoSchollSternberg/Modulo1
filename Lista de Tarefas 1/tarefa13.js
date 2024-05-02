// 13. Escrever um algoritmo que leia 5 valores para uma variável N e, para cada um deles, calcule e mostre a tabuada de 1 até N. Mostre a tabuada na forma:
// 1 x N = N
// 2 x N = 2N
// 3 x N = 3N

const prompt = require('prompt-sync')();
let num;
console.log("Digite 5 números e será calculado a tabuada deles até o número digitado");

for(contador=0;contador<5;contador++) {
    num = parseInt(prompt("Escreva um número:"));
    while(isNaN(num) || num<=0) {
        console.log("Foi digitado uma opção inválida, tente novamente");
        num = parseInt(prompt("Escreva um número e será calculado a tabuada de 1 até o número digitado:"));
    }
    console.log(`---Tabuada de ${num}---`);
    for(contador2=1;contador2<=num;contador2++) {
        console.log(`${contador2} * ${num} = ${contador2*num}`);
    }
}
