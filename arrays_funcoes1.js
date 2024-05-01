// Array ou vetor
let listaCompras = Array()

listaCompras[0] = "Shampoo" // pode ser tipo lista
listaCompras[1] = 100
listaCompras['x'] = "oi" // pode ser estilo dicionário

console.log(listaCompras)

let listaFrutas = ['Batana', 'Morango'] // forma alternativa de declarar

console.log(listaFrutas)

let lista_viagem = Array('Passagens', 'Malas') // forma alternativa de declarar

console.log(lista_viagem)

// Array multimensionais

let lista_coisas = Array()

lista_coisas['Frutas'] = Array()

lista_coisas['Frutas'][0] = "Morango" // dentro de um array tem outro array
lista_coisas['Frutas'][1] = "Uva"

lista_coisas['Viagem'] = Array()

lista_coisas['Viagem'][0] = "Passagens"

console.log(lista_coisas)

//inserção de elementos no final do array
lista_coisas['Frutas'].push('Banana')

//inserção de elementos no começo do array
lista_coisas['Frutas'].unshift('Limão')

//exclusão de elementos no começo do array
lista_coisas['Frutas'].shift('Limão')

//exclusão de elementos no final do array
lista_coisas['Frutas'].pop('Limão')

//retorna posição do array (-1 significa que não encontrou)
let aux = lista_coisas['Frutas'].indexOf('Uva')

console.log(aux)

// coloca em orgem alfabética
lista.sort()

// funções
function funcao(entrada1,entrada2) {
    instruções
    return algo
}

let resultado = funcao(1,2)

// existe escopo global, escopo de função, escopo de bloco (dentro de IF, FOR, etc)
// existe elevação de escopo através da var. Se era escopo de bloco vira função, se escopo de função se torna global. Geralmente não utilizado

// função anônima (sem nome), usada para função de callback. Neste exemplo, usado uma variável que chama a função através de envelopamento (wrapper)
let exibirFuncao = function() {
    console.log("Olá")
}

exibirFuncao()

// outra forma de escrever função anônima, como através da arrow function
let teste = () => {
    console.log('Teste')
}