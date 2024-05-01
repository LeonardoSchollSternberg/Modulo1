// [] é array, {} é objeto
const pessoa = {
    nome: "Lucas",
    idade: 18,
    email: "locas@teste.com",
    profissao: "Músico",
    empregada: true
}

pessoa.nome = "Jurema" // mudou nome através do método pessoa.nome
pessoa['idade'] = 20 // mudou idade

delete pessoa.empregada // deleta o atributo empregada do objeto pessoa. Lembrando que array é um objeto. Constante é a estrutura, não o variável

//pessoa.falar = () => { escopo não funciona pois ela só consegue acessar escopo dentro dela. Não muito utilizado dentro de objetos e construtores
pessoa.falar = function() { // agora funciona
    return `Meu nome é ${this.nome}, tenho ${this.idade} de idade e sou ${this.profissao}`
}

//console.log(pessoa.falar())

for (let chave in pessoa) { // utilizado em objetos
    console.log(chave + ": " + pessoa[chave])
}

let numeros = [10, 20, 100]

for (let numero of numeros) { // utilizado em array
    console.log(numero)
}

// forEach // método específico de array (não é estrutura de repetição). Interessante quando ordem de exibição é interessante, sem interromper interação. "Melhor" que for of

let cores = ['Azul', 'Preto', 'Branco']

cores.forEach(function (cor, indice) {
    console.log(indice + ": " + cor)
})

cores.forEach((indice,cor) => {console.log(indice + ": " + cor)})

//forma de declarar objeto no ES5

let nome = 'Jaques'
let idade = 25
let sexo = 'Masculino'

let objeto = {
    nome,
    idade,
    sexo
}

console.log(objeto)


// factory com design pattern

let BicicletaFactory = function(cor, tipo, marca) {
    return {
        cor,
        tipo,
        marca
    }
}

let bicicleta1 = BicicletaFactory('Azul', 'Speed', 'Caloi')

console.log(bicicleta1)

/* PESQUISA BINÁRIA */

