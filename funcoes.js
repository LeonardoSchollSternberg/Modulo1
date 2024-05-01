let numTeste = "5"
let numTeste2 = parseInt(numTeste) 
let numTeste3 = Number(numTeste)

console.log(numTeste + 10);
console.log(numTeste2 + 10);

if (numTeste3 >= 6) {
    console.log("APROVADO")
} else {
    console.log("REPROVADO")
}
// mesma coisa que: condição ? <verdadeiro> : <falso>
let resultado = numTeste3 >= 6 ? "APROVADO" : "REPROVADO"
console.log(resultado)

// precisa da biblioteca prompt-sync (npm install prompt-sync)
const prompt = require('prompt-sync')();

// pede imput do usuário e grava em variável. PRECISA rodar pelo terminal
let teste = prompt("Digite aqui seu nome:");
console.log(teste)

// SWITCH CASE
switch(variavel1){
    case 1:
        instrução;
        break;
    case 2:
        instrução;
        break;
    case 3: case 4:
        instrução;
        break;
    default: //caso nenhum caso entrar
        instrução;
        break;
}

// FOR
for (contador = 0; contador <= 10; contador++) {
    instrução;
}

// variável em console.log
console.log(`${valor1} * ${valor2} =`, valor1 * valor2);

// WHILE
while(variavel1>variavel2) {
    instrução;
    variavel1--;
}

// DO-WHILE
do {
    instrução; //instrução será feita pelo menos 1 vez
} while(condição) //será repetido o DO até sair do while

// Função matemátca
Math.random() // retorna valor entre 0 e 1
Math.floor(variável) // arredonda número para baixo
Math.ceil(10.600) // arredonda para cima
Math.round(10.600) // arredonda para cima ou para baixo, o mais próximo
parseInt(variavel) // transforma em Int
Number(variavel) //transforma em número (float)

// Função avançadas: Datas

let data = new Date() // alguns objetos exigem o new. o Date() precisa de new

console.log(data.getDate()) // pega o dia
console.log(data.getMonth() + 1) // pega o mês (começando no 0, por isso se soma 1)
console.log(data.getFullYear()) // pega o ano

data.toString() // retorna já data atual
data.setDate(data.getDate() + 720) // seta agora data para + 720 dias
data.setFullYear(data.getFullYear() + 2) // seta agora data para + 2 anos
data.getTime() // retorna o tempo em milisegundos

data.toLocaleDateString('pt-BR') // retorna em formato dd/MM/yyyy

let data1 = new Date()

let milisegundosEntreDatas = Maths.abs(data.getTime() - data1.getTime())