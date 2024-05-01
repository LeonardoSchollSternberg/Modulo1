// 6. Ler três valores para os lados de um triângulo: A, B e C. Verificar se os lados fornecidos formam realmente um triângulo. Caso forme, deve ser indicado o tipo de triângulo:
// Isósceles, escaleno ou eqüilátero.
// Para verificar se os lados fornecidos formam triângulo: A < B + C e B < A + C e C < A + B
// Triângulo isósceles: possui dois lados iguais (A=B ou A=C ou B = C)
// Triângulo escaleno: possui todos os lados diferentes (A<>B e B <> C)
// Triângulo eqüilátero: possui todos os lados iguais (A=B e B=C)

const prompt = require('prompt-sync')();
console.log("Forme um triângulo.")
let lado1 = parseInt(prompt("Digite o primeiro lado do triângulo:"));
let lado2 = parseInt(prompt("Digite o segundo lado do triângulo:"));
let lado3 = parseInt(prompt("Digite o terceiro lado do triângulo:"));

if(isNaN(lado1)||isNaN(lado2)||isNaN(lado3)) {
    console.log("Foi digitado um não número, tente novamente");
} else if(lado1 +lado2 > lado3 && lado1 +lado3 > lado2 && lado2 + lado3 > lado1 ) {
    if(lado1 == lado2 && lado2 == lado3) {
        console.log("Você formou um Triângulo eqüilátero!");
    }
    else if(lado1 == lado2 || lado1 == lado3 || lado2 == lado3) {
        console.log("Você formou um Triângulo isósceles!");
    }
    else {
        console.log("Você formou um Triângulo escaleno!");
    }
} else {
    console.log("Não é possível formar um triângulo");
}