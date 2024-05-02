/*
    Você tem uma lista de objetos que representam diferentes tipos de veículos e suas características. Seu objetivo é primeiro usar o FOR IN para listar todas as propriedades e valores de cada veículos. Depois, utilizar o FOR OF para listar apenas os modelos dos veículos.
*/

const veiculos = [ {
    marca: "Toyota",
    valor: 1000
    },
    {
    marca: "honda",
    valor: 2000
    }
]

for (let chave in veiculos) {
    console.log(veiculos[chave])
}

for (let chave of veiculos) {
    console.log(chave.marca)
}