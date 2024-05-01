//Exercício 1: Par ou Ímpar
/*const prompt = require('prompt-sync')();
let i = prompt("Digite um número:")

if(i%2==0){
    console.log("É par")
}
else {
    console.log("É ímpar")
}*/

// Exercício 2: Maior de dois números
/*const prompt = require('prompt-sync')();
let num1 = parseInt(prompt("Digite um número:"))
let num2 = parseInt(prompt("Digite um número:"))

if(num1>num2){
    console.log("Número 1 é maior")
}
else if(num1==num2) {
    console.log("Números iguais")
}
else {
    console.log("Números 2 é maior")
}*/

// Exercício 3: Triângulo
/*const prompt = require('prompt-sync')();
let lado1 = parseInt(prompt("Insira o comprimento do primeiro lado:"))
let lado2 = parseInt(prompt("Insira o comprimento do segundo lado:"))
let lado3 = parseInt(prompt("Insira o comprimento do terceiro lado:"))

if(lado1 + lado2 > lado3 && lado1 + lado3 > lado2 && lado2 + lado3 > lado1) {
    console.log("É possível formar um triângulo com essas medidas")
}
else {
    console.log("Não é possível formar um triângulo")
}*/

// Exercício 4: Calculadora 4
/*const prompt = require('prompt-sync')();
let num1 = parseInt(prompt("Insira o primeiro número:"));
let num2 = parseInt(prompt("Insira o segundo número:"));
let operacao = prompt("Insira a operação desejada (+. -, /, *)");

let resultado;

if (operacao === '+'){
    resultado = num1+num2;
}
else if(operacao === '-'){
    resultado = num1 - num2;
}
else if(operacao === '*'){
    resultado = num1 * num2;
}
else if (operacao === '/'){
    if (num2 !== 0){
        resultado = num1 / num2;
    }
    else {
        console.log("Erro: divisão por zero.");
        resultado = undefined;
    }
}
else{
    console.log("Operação inválida");
}

if (resultado !== undefined){
    console.log("Resultado: ",resultado);
}*/