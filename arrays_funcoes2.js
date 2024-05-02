//Exercitando Arrays e funções

// Exercício 1: Somar todos os elementos de um array
/*
let elementos = [1, 2, 3, 4]

function somaElementos(vetor) {
    let soma = 0
    for(let i = 0; i < vetor.length; i++) {
        soma = soma + vetor[i]
    }
    return soma
}

console.log("A soma dos elementos ´: ", somaElementos(elementos))
*/

// Exercício 2: Encontrar o maior número em um Array
/*
let elementos = [1, 3, 4, 2]

function maiorNumero(vetor) {
    let maior = vetor[0];
    for(let i = 1; i < vetor.length; i++) {
        if(vetor[i] > maior) {
            maior = vetor[i]
        }
    }
    return maior
}

console.log(" dos elementos é o valor´: ", maiorNumero(elementos))
*/

// Exercício 3: Reverter um array
/*
let elementos = [1, 3, 4, 2]

function reverterArray(vetor) {
    let vetoResultado = []
    for(let i = vetor.length - 1; i >= 0; i--) {
        vetoResultado.push(vetor[i])
    }
    return vetoResultado
}

console.log("O vetor invertido é´: ", reverterArray(elementos))
*/

// Exercício 4: Somar todos os elementos de uma matriz multidimensional
/*
function somaMatriz(matriz) {
    let soma = 0
    for(let i =0; i < matriz.length; i++) {
        for( let j = 0; j < matriz[i].length; j++) {
            soma += matriz[i][j]
        }
    }
    return soma
}

console.log("A soma dos elementos contidos na nossa matriz é: ", somaMatriz([[1, 2], [3, 4]]))
*/

// Exercício 5: Encontrar o maior número de uma matriz multidimensional
/*
function maiorNumeroMatriz(matriz) {
    let maior = matriz[0][0]
    for(let i = 0; i < matriz.length; i++) {
        for( let j = 0; j < matriz[i].length; j++) {
            if(matriz[i][j] > maior) {
                maior = matriz[i][j]
            }
        }
    }
    return maior
}

console.log("O maior elemento da matriz é: ", maiorNumero([[1, 2], [3, 4]]))
*/

// Funções avançadas: String

/*
    String é considerado um valor primitivo, porém, ao ser interpretado o JS os converte em objetos, possuindo propriedades e métodos.
*/

console.log("Jaques Hyago".length) // espaço conta
console.log("Jaques Hyago".charAt(7)) // indica qual a letra naquela posição

let nome = 'Gabriela Gabs'
console.log(nome.indexOf('G')) // retorna primeira posição que encontrou a letra. É case sensitive
console.log(nome.replace('Gabriela', 'Bruno'))
console.log(nome) // mas não altera a string, só naquela linha, só se salvar como uma variável
console.log(nome.substr('7', '5')) // subtrai, a partir da sétima posição as 5 posições adiantes. Está em desuso, por isso o risco
console.log(nome.toLocaleUpperCase()) // transforma todas as letras em maiúsculo
console.log(nome.toLocaleLowerCase()) // transforma todas as letras em minúsculo
console.log(nome.trim()) // remove espaços antes e depois do nome(se ter)


// Funções avançadas: Matemáticas

let x = Math.ceil(10.100) // arredendo para cima
console.log(x)
