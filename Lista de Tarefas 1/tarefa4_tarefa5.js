// 4. Escreva um algoritmo para ler as notas das duas avaliações de um aluno no semestre, calcular e escrever a média semestral e a seguinte mensagem: ‘PARABÉNS! Você foi aprovado’, somente se o aluno foi aprovado (considere 6.0 a nota mínima para aprovação).
//5. Acrescente ao exercício acima a mensagem ‘Você foi REPROVADO! Estude mais’ caso a média calculada seja menor que 6,0

const prompt = require('prompt-sync')();
console.log("Veja se você passou no semestre, são duas provas e média necessária 6,0 para passar.")
let nota1 = Number(prompt("Digite a nota da primeira prova:"));
let nota2 = Number(prompt("Digite a nota da segunda prova:"));
let media;

if(isNaN(nota1)||isNaN(nota2)) {
    console.log("Foi digitado um não número, tente novamente");
} else { // Obs: enunciado não falou que nota máxima seria 10, não fiz tratamento
    media = (nota1 + nota2) / 2;
    if(media >= 6.0) {
        console.log(`Média semestral ${media}! PARABÉNS! Você foi aprovado`);
    }
    else {
        console.log(`Média semestral ${media}! Você foi REPROVADO! Estude mais`);
    }
}