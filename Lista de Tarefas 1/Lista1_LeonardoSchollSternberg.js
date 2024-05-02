const prompt = require('prompt-sync')();
let questao = Number(prompt("Digite o número da questão que deseja, entre 1 a 16:"));

if(isNaN(questao)) {
    console.log("Foi digitado um não número, tente novamente");
} else if (questao>16) {
    console.log("Foi digitado um número inválido, tente novamente");
} else {
    switch(questao) {
        case 1: {
            // 1. Escreva um algoritmo para ler uma temperatura em graus Celsius, calcular e escrever o valor correspondente em graus Fahrenheit.
            let temp_C = Number(prompt("Digite o valor em graus Celsius para ser convertido em Fahrenheit:"));
            let temp_F;

            if(isNaN(temp_C)) {
                console.log("Foi digitado um não número, tente novamente");
            } else {
                temp_F = temp_C * 1.8 + 32;
                console.log(`${temp_C} graus Celsius resultam em ${temp_F} graus Fahrenheit`);
            }
        break;
        }

        case 2: {
            // 2. Escreva um algoritmo para ler o número de eleitores de um município, o número de votos brancos, nulos e válidos. Calcular e escrever o percentual que cada um representa em relação ao total de eleitores.
            let qtd_eleitores = parseInt(prompt("Digite o total de eleitores:"));
            let qtd_vts_brancos = parseInt(prompt("Digite o total de votos brancos:"));
            let qtd_vts_nulos = parseInt(prompt("Digite o total de votos nulos:"));
            let qtd_vts_validos = parseInt(prompt("Digite o total de votos válidos:"));
            let perc_vts_brancos;
            let perc_vts_nulos;
            let perc_vts_validos;

            if(isNaN(qtd_eleitores)||isNaN(qtd_vts_brancos)||isNaN(qtd_vts_nulos)||isNaN(qtd_vts_validos)) {
                console.log("Foi digitado um não número, tente novamente");
            } else if(qtd_eleitores == 0) {
                console.log("Foi digitado número de eleitores igual a zero, tente novamente");
            } else if(qtd_vts_brancos + qtd_vts_nulos + qtd_vts_validos > qtd_eleitores) {
                console.log("Existem mais votos que eleitores, tente novamente");
            } else {
                perc_vts_brancos = qtd_vts_brancos * 100 / qtd_eleitores;
                perc_vts_nulos = qtd_vts_nulos * 100 / qtd_eleitores;
                perc_vts_validos = qtd_vts_validos * 100 / qtd_eleitores;
                console.log("Porcentagem de votos brancos: ",perc_vts_brancos, "%");
                console.log("Porcentagem de votos nulos: ",perc_vts_nulos, "%");
                console.log("Porcentagem de votos válidos: ",perc_vts_validos, "%");
            }
        break;
        }
          
        case 3: {
            // 3. Faça um algoritmo que leia quatro números inteiros e realize as seguintes operações:
            //● Some 25 ao primeiro inteiro;
            //● Triplique o valor do segundo inteiro;
            //● Modifique o valor do terceiro inteiro para 12% do valor original;
            //● Armazene no quarto inteiro a soma dos valores originais (os que o usuário digitou) dos primeiros três inteiros.
            let num1 = parseInt(prompt("Digite o 1º número:"));
            let num2 = parseInt(prompt("Digite o 2º número:"));
            let num3 = parseInt(prompt("Digite o 3º número:"));
            let num4 = parseInt(prompt("Digite o 4º número:"));
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
                console.log(`Números após cálculos são: 25 + ${num1} = ${num1_mod}; 3 * ${num2} = ${num2_mod}; (12 * ${num3}) / 100 = ${num3_mod}; ${num1} + ${num2} + ${num3} = ${num4_mod}`);
            }
        break;
        }
    
        case 4: case 5: {
            // 4. Escreva um algoritmo para ler as notas das duas avaliações de um aluno no semestre, calcular e escrever a média semestral e a seguinte mensagem: ‘PARABÉNS! Você foi aprovado’, somente se o aluno foi aprovado (considere 6.0 a nota mínima para aprovação).
            //5. Acrescente ao exercício acima a mensagem ‘Você foi REPROVADO! Estude mais’ caso a média calculada seja menor que 6,0
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
        break;
        }

        case 6: {
            // 6. Ler três valores para os lados de um triângulo: A, B e C. Verificar se os lados fornecidos formam realmente um triângulo. Caso forme, deve ser indicado o tipo de triângulo:
            // Isósceles, escaleno ou eqüilátero.
            // Para verificar se os lados fornecidos formam triângulo: A < B + C e B < A + C e C < A + B
            // Triângulo isósceles: possui dois lados iguais (A=B ou A=C ou B = C)
            // Triângulo escaleno: possui todos os lados diferentes (A<>B e B <> C)
            // Triângulo eqüilátero: possui todos os lados iguais (A=B e B=C)
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
        break;
        }

        case 7: {
            // 7. As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, e R$ 0,25 se forem compradas pelo menos doze. Escreva um algoritmo que leia o número de maçãs compradas, calcule e escreva o valor total da compra.
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
        break;
        }

        case 8: {
            // 8. Escreva um algoritmo para ler 2 valores (considere que não serão lidos valores iguais) e escreve-los em ordem crescente.
            console.log("Digite dois valores diferentes e eles serão ordenados crescentemente.")
            let valor1 = Number(prompt("Escreva o primeiro valor:"));
            let valor2 = Number(prompt("Escreva o segundo valor:"));

            if(isNaN(valor1) || isNaN(valor2)) {
                console.log("Foi digitado um não número, tente novamente");
            } else if(valor1 == valor2) {
                console.log("Valores são iguais, escreva números diferentes, tente novamente");
            }
            else if(valor1>valor2) {
                console.log(`Ordem crescente: ${valor1} e ${valor2}`);
            }
            else {
                console.log(`Ordem crescente: ${valor2} e ${valor1}`);
            }
        break;
        }

        case 9: {
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
        break;
        }
        
        case 10: {
            // 10. Escreva um algoritmo para ler um número inteiro e escrevê-lo na tela 10 vezes.
            let num = Number(prompt("Escreva um número que será repetido na tela 10 vezes:"));

            if(isNaN(num)) {
                console.log("Foi digitado um não número, tente novamente");
            } else {
                for(contador = 0; contador < 10; contador++) {
                    console.log(num)
                }
            }
        break;
        }

        case 11: {
            // 11. Escreva um algoritmo para ler uma quantidade indeterminada de valores inteiros. Para cada valor fornecido escrever uma mensagem que indica se cada valor fornecido é PAR ou ÍMPAR. O algoritmo será encerrado imediatamente após a leitura de um valor NULO ou NEGATIVO.
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
        break;
        }

        case 12: {
            // 12. Escreva um algoritmo que gere os números de 1000 a 1999 e escreva aqueles que, divididos por 11, dão resto igual a 5.
            console.log("A seguir os números entre 1000 e 1999 que, divididos por 11, dão resto igual a 5");

            for (contador = 1000; contador < 2000; contador++) {
                if(contador%11==5){
                    console.log(contador);
                }
            }
        break;
        }

        case 13: {
            // 13. Escrever um algoritmo que leia 5 valores para uma variável N e, para cada um deles, calcule e mostre a tabuada de 1 até N. Mostre a tabuada na forma:
            // 1 x N = N
            // 2 x N = 2N
            // 3 x N = 3N
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
        break;
        }
    
        case 14: {
            // 14. Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer a média aritmética desses números.
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
        break;
        }

        case 15: {
            // 15. Fazer um algoritmos para receber um número decimal e o peso de cada número até que o usuário digite o número 0. Fazer a média ponderada desses números e pesos respectivos.
            console.log("Escreva um número decimal e seu peso associado até digitar 0. Será feito a média ponderada desses valores.");
            let num = parseInt(prompt("Escreva um número:"));
            let peso = parseInt(prompt("Escreva seu peso:"));
            let numerador = 0;
            let denominador = 0;
            let media_pond = 0;

            while(num!==0 && peso!==0) {
                if(isNaN(num) || isNaN(peso)) {
                    console.log("Você digitou um não número, tente novamente");
                    num = parseInt(prompt("Escreva um número:"));
                    peso = parseInt(prompt("Escreva seu peso:"));
                }
                else {
                    numerador = numerador + num * peso;
                    denominador = denominador + peso;
                    num = parseInt(prompt("Escreva um número:"));
                    peso = parseInt(prompt("Escreva seu peso:"));
                }
            }

            if(denominador == 0) {
                console.log("Você não digitou nenhum número ou seus pesos são iguais a zero");
            } else {
                media_pond = numerador / denominador;
                console.log(`A média ponderada de todos os números totaliza ${media_pond}`);
            }
        break;
        }

        case 16: {
            // 16. Escreva um algoritmo para imprimir os 50 primeiros número primos maior que 100. 
            // Obs.: Número primo é aquele divisível somente por 1 e ele mesmo.
            let qtd_primos_desejados = 50;
            let offset = 100;
            let contador;
            let num_testado = offset;
            let qtd_primos_encontrados = 0;
            let bool_primo;

            console.log(`Estes são os ${qtd_primos_desejados} primeiros números primos a partir de ${offset}:`);

            while(qtd_primos_encontrados < qtd_primos_desejados) {
                contador=2; // testa os números a partir de 2
                bool_primo = 1;
                while(contador < num_testado) {
                    if(num_testado % contador == 0) {
                        bool_primo = 0;
                    }
                    contador++;
                }
                if(bool_primo) {
                    qtd_primos_encontrados++;
                    console.log(`O número ${num_testado} é primo!`);
                }
                num_testado++;
            }
        break;
        }
    }
}