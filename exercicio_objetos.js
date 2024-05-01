/*const professor = {
    nome: "Tony Stark",
    materia: "Matemática",
    notas: {
        aluno1: 3.5,
        aluno2: 4.0,
        aluno3: 2.8
    }
}

//    For in para iterar sobre as propriedades dentro das notas, calcule a média e imprima a média da turma. Caso a média esteja acima de 3.0, indique que a turma está acima da média de aprovação

let somaNotas = 0
let numeroDeAlunos = 0

for (let nota in professor.notas) {
    somaNotas += professor.notas[nota]
    numeroDeAlunos++
}

let media = somaNotas / numeroDeAlunos

console.log("A média das notas é: ",media)
console.log(media >= 3 ? "A turma está aprovada" : "A turma está reprovada") */

/*const biblioteca = [
    { título: '12 Regras para Vida', autor: 'Jordan Peterson', ano: 1925 },
    { título: 'O Hobbit', autor: 'J.R.R. Tolkien', ano: 1937 },
    { título: 'Senhora do Jogo', autor: 'Sindey Sheldon', ano: 2009 },
    { título: 'Zé Carioca', autor: 'Disney', ano: 1940 },
    { título: 'Nação Dopamina', autor: 'Anna Lembke', ano: 2021 }
]

//  For of para iteirar sobre o array. Para cada livro, verifique se foi publicado antes de 2000. Imprimir o título e o ano dos livros que atendem essa condição

for (let livro of biblioteca) {
    if(livro.ano >= 2000) {
        console.log("Livro: " + livro.título + ", ano: " + livro.ano)
    }
}*/

/*const filmes = [
    { título: 'Tropa de Elite', genero: 'Ação' },
    { título: 'Capitão Fantástico', genero: 'Drama' },
    { título: 'O Poderoso Chefão', genero: 'Crime' },
    { título: 'Clube da Luta', genero: 'Drama' },
    { título: 'Oppenheimer', genero: 'Biografia' },
    { título: 'High School Musical', genero: 'Musical' },
    { título: 'Barbie', genero: 'Live action' }
]

//  Com forEach para iterar sobre o array, crie um objeto para armazenar a contagem de filmes por gênero. Para cada filme no array, verifique se o gênero já existe no objeto contagem. Se existir, incremente a contagem, se não, adicione o gênero ao objeto com contagem inicial de 1. Após o loop, imprima cada gênero e o número de filmes correspondente

let contagemGeneros = {}

filmes.forEach((filme) => {
    if (contagemGeneros[filme.genero]) {
        contagemGeneros[filme.genero] ++
    }
    else {
        contagemGeneros[filme.genero] = 1
    }
});

for (let genero in contagemGeneros) {
    console.log(`Existem ${contagemGeneros[genero]} filmes de gênero ${genero}`)
}*/

// PESQUISA BINÁRIA
// Desenvolvam um algoritmo que seja capaz de receber uma lista, e um valor correto. E execute uma pesquisa binária para encontrar o valor certo.

const binarySearch = (list, item) => {
    let low = 0
    let high = list.length - 1

    while (low <= high) {
        const mid = Math.floor((low + high)/2)
        const guess = list[mid]
        if(guess == item) {
            return mid
        } else if (guess > item) {
            high = mid - 1
        } else {
            low = mid + 1
        }
    }

    return null
}

const myList = [1, 3, 5, 7, 9]

console.log(binarySearch(myList, 3))

/*
    spread = espalhar
*/

let tituloArtigo = "movimento ágil"

console.log(...tituloArtigo)
console.log([...tituloArtigo])

// Exemplo útil
let lista1 = [1, 2]
let lista2 = [3, 4]

let listaCompleta = [5, 6, ...lista1, ...lista2]
console.log(listaCompleta)

let pessoa = {nome: 'Pedro', idade: 15}
let dadosCompletos = {endereco: "Rua Teste", ...pessoa}

console.log(dadosCompletos)

/*
    rest = juntar
*/

function soma (...param) {
    let resultado = 0
    
    console.log(param)

    param.forEach(v => resultado += v)

    return resultado

}
console.log(soma(3,8,5,7))

function multiplicacao(m, ...p) {
    console.log(m)
    console.log(p)

    let resultado = 0

    p.forEach(elemento => resultado += m * elemento)

    return resultado
}

console.log(multiplicacao(5,7,12,3,50))