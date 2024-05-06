var clientes = [
    {
        "id": 1,
        "nome": "Luis Santos Silveira",
        "idade": 18
    },
    {
        "id": 2,
        "nome": "Ricardo Lopes Alves",
        "idade": 30
    },
    {
        "id": 3,
        "nome": "Gustavo Silva Junior",
        "idade": 26
    }
];
var numero = "5(1)9-876-543-21";
let nomes = ""
let tamanho

for(row of clientes) {
    console.log(row.nome)
    nomes = row.nome.split(' ');
    tamanho = nomes.length - 1
    console.log("Primeiro e último nomes", nomes[0] + " " + nomes[tamanho])
}

let digitos = numero.replace(/\D/g, "") // regex para tirar todos os caracteres especiais

let numeroFormatado =  `(${digitos.slice(0,2)}) ${digitos.slice(2,3)} ${digitos.slice(3,7)}-${digitos.slice(7,11)}`

console.log(numeroFormatado)