const prompt = require('prompt-sync')()

module.exports = {
    tarefa41: tarefa41 => {
        console.log("41. Dado o objeto pessoa com propriedades nome e idade, acesse e imprima o valor de idade. Adicione uma nova propriedade chamada email ao objeto pessoa que já possui nome e idade.")
        const pessoa = {
            nome: "Leopardo",
            idade: 28
        }
        console.log(`A idade da pessoa ${pessoa.nome} é ${pessoa.idade} :)`)
        pessoa['email'] = 'leopardo@gmail.com'
        console.log(`Adicionado o campo ${pessoa.email}`)

    },
    tarefa42: tarefa42 => {
        console.log("42. Crie um objeto chamado dados que contém várias propriedades, incluindo números, strings e arrays. Escreva uma função que retorne um novo objeto apenas com as propriedades que são arrays.")

        function NewObject (object) {
            let output = {}
            for(key in object) {
                if(typeof(object[key]) == 'object') {
                    output[key] = object[key]
                }
            }
            return output
        }
        
        const dados = {
            numero1: 10,
            numero2: 5.4,
            string1: 'batata',
            string2: 'alfafa23',
            array1: [1, 'trigoide'],
            array2: ['maderudo', 'pedregoso', 70]
        }

        console.log("Objeto criado ",dados)
        let outputObject = NewObject(dados)
        console.log("Objeto com somnete os arrays:", outputObject)
    },
    tarefa43: tarefa43 => {
        console.log("43. Dado dois objetos, obj1 e obj2, escreva uma função que crie um novo objeto combinando as propriedades de ambos, onde as propriedades de obj2 têm precedência sobre as do obj1 em caso de conflitos.")
        const obj1 = {
            nome: "Leobardo",
            telefone: 123456789,
            afazeres: ['Analista de BI', 'Bicicletero', 'Cozinheiro de brownies', 'Amante de viagens' ,'Jogador de tabuleiro']
        }
        const obj2 = {
            nome: "Leocadio",
            telefone: 987654321,
            email: "email@provider.com"
        }

        function UnionObjects (object1,object2) {
            let objectOutput = object1
            for (key in object2) [
                objectOutput[key] = object2[key]
            ]
            return objectOutput
        }

        console.log("Primeiro objeto: ",obj1)
        console.log("Segundo objeto: ",obj2)
        console.log("Objetos combinados: ",UnionObjects(obj1,obj2))
    },
    tarefa44: tarefa44 => {
        console.log("44. Escreva uma função que conte quantas propriedades do tipo string existem em um objeto e retorne esse número.")
        
        function CountString (object) {
            let count = 0
            for(key in object) {
                if(typeof(object[key]) == 'string') {
                    count++
                }
            }
            return count
        }

        const dados = {
            numero1: 10,
            numero2: 5.4,
            string1: 'batata',
            string2: 'alfafa23',
            string3: 'ovelhudo',
            array1: [1, 'trigoide'],
            array2: ['maderudo', 'pedregoso', 70]
        }

        console.log("Objeto criado ",dados)
        console.log("Quantidade de strings:", CountString(dados))
        
    },
    tarefa45: tarefa45 => {
        console.log("45. Dado um array de strings, crie um objeto onde cada string é uma chave, e seu valor é o número de vezes que a string aparece no array.")
        
        array = ['batata', 'alfafa', 'maderudo', 'alfafa', 'alfafa', 'batata']
        const counter = {}

        for (key of array) {
            if(isNaN(counter[key])) counter[key] = 0
            counter[key]++
        }
        console.log("Objeto com contagem do array: ",counter)

    },
    tarefa46: tarefa46 => {
        console.log("46. Suponha que você tem um array de objetos onde cada objeto representa uma venda com vendedor e valor. Escreva uma função que retorne um objeto que sumarize o total de vendas por vendedor.")

        sellers = []

        function sumSalesVendors(input) {
            let output = {}
            for (value of input) {
                if(isNaN(output[value.seller])) {
                    output[value.seller] = 0
                }
                output[value.seller] += value.saleValue
            }
            return output
        }

        let SellersFactory = function(seller,saleValue) {
            return {
                seller,
                saleValue
            }
        } 
        
        sellers.push(SellersFactory("Marcio",100))
        sellers.push(SellersFactory("Julia",100))
        sellers.push(SellersFactory("Julia",100))
        sellers.push(SellersFactory("Julia",50))
        sellers.push(SellersFactory("Joao",20))
        sellers.push(SellersFactory("Marcio",80))

        console.log("As vondas que aconteceram no mês foram:")
        console.table(sellers)
        console.log("A soma das vendas por vendedor totaliza:", sumSalesVendors(sellers))
    },
    tarefa47: tarefa47 => {
        console.log("47. Crie uma função que transforme um objeto de entrada aplicando uma função fornecida a cada uma das propriedades do objeto, retornando um novo objeto com os resultados.")

        function modifyInput(input) {
            let output = {}
            for (key in input) {
                output[key] = input[key] * 2
            }
            return output
        }

        let inputObject = {
            value1: 5,
            value2: 10,
            value3: 20
        }
        console.log("Objeto original: ",inputObject)
        console.log("Objeto multiplicado por 2: ",modifyInput(inputObject))

    },
    tarefa48: tarefa48 => {
        console.log("48. Você recebe dois objetos que representam o inventário de duas lojas diferentes: inventarioLojaA e inventarioLojaB. Cada chave é um item, e o valor é a quantidade desse item em estoque. Escreva uma função que combine os inventários em um único objeto. Se um item aparecer em ambas as lojas, some as quantidades.")

        function sumInventario(inventario1,inventario2) {
            output = inventario1
            for (key in inventario2) {
                if(isNaN(output[key])) output[key] = 0
                output[key] += inventario2[key]
            }
        return output
        }

        let inventarioLojaA = {
            item1: 5,
            item2: 10,
            item3: 20
        }
        let inventarioLojaB = {
            item2: 5,
            item3: 10,
            item4: 20
        }
        console.log("A soma de todos os itens dos inventários totaliza em: ",sumInventario(inventarioLojaA,inventarioLojaB))

    },
    tarefa49: tarefa49 => {
        console.log("49. Você recebe um array de objetos representando transações financeiras. Cada transação possui id, valor, data, e categoria. Escreva uma função que retorne um objeto onde as chaves são as categorias, e os valores são arrays de transações pertencentes a essa categoria. Adicionalmente, inclua um subtotal de valores por categoria.")

        let transactionsCategorized
        let sumCategory = []
        let allTransactions = []

        function analyzeTransactions(input) {
            let output = {}
            let subtotalCategory = {}
            for (value of input) {
                if(output[value.categoria] === undefined) {
                    output[value.categoria] = [value]
                    subtotalCategory[value.categoria] = value.valor
                } else {
                    output[value.categoria].push(value)
                    subtotalCategory[value.categoria] += value.valor
                }
            }
            return output
        }

        let TransactionFactory = function(id, valor, data, categoria) {
            return {
                id,
                valor,
                data,
                categoria
            }
        }

        allTransactions.push(TransactionFactory(1,48,'2024-05-01','Alimentacao'))
        allTransactions.push(TransactionFactory(2,42.2,'2024-05-02','Transporte'))
        allTransactions.push(TransactionFactory(3,300,'2024-05-05','Compras'))
        allTransactions.push(TransactionFactory(4,80,'2024-05-10','Lazer'))
        allTransactions.push(TransactionFactory(5,150.75,'2024-05-12','Saude'))
        allTransactions.push(TransactionFactory(6,200,'2024-05-15','Alimentacao'))
        allTransactions.push(TransactionFactory(7,60.9,'2024-05-18','Transporte'))
        allTransactions.push(TransactionFactory(8,120,'2024-05-20','Lazer'))
        allTransactions.push(TransactionFactory(9,25,'2024-05-22','Outros'))
        allTransactions.push(TransactionFactory(10,75.5,'2024-05-25','Compras'))
        
        transactionsCategorized = analyzeTransactions(allTransactions)
        for(key in transactionsCategorized) {
            for (value of transactionsCategorized[key]) {
                if(isNaN(sumCategory[key])) sumCategory[key] = 0
                sumCategory[key] += value.valor
            }
        }
        console.log("Transações categorizadas:")
        console.log(transactionsCategorized)
        console.log("Tabela com somas das categorias:")
        console.table(sumCategory)
    },
    tarefa50: tarefa50 => {
        console.log("50. Desenvolva um pequeno sistema de reserva de hotéis usando JavaScript. O sistema deverá ser capaz de interagir com o usuário através do console do navegador e manter um registro das reservas e hotéis disponíveis. Utilize objetos e arrays para gerenciar as informações. Não é necessário interface gráfica, apenas funcionalidade lógica.\n\t1. Estrutura de Dados:\n\t\t○ Hotel: Cada hotel deve ser um objeto com propriedades para id, nome, cidade, quartos totais e quartos disponiveis.\n\t\t○ Reservas: Cada reserva deve ser um objeto contendo idReserva, idHotel, e nomeCliente.\n\t2. Funcionalidades:\n\t\t○ Adicionar hotéis: Permitir que o usuário adicione novos hotéis ao sistema.\n\t\t○ Buscar hotéis por cidade: Permitir que o usuário liste todos os hotéis disponíveis em uma cidade específica.\n\t\t○ Fazer reserva: Permitir que um usuário faça uma reserva em um hotel. Isso deve diminuir o número de quartos disponiveis do hotel.\n\t\t○ Cancelar reserva: Permitir que um usuário cancele uma reserva. Isso deve aumentar o número de quartos disponiveis no hotel correspondente.\n\t\t○ Listar reservas: Mostrar todas as reservas, incluindo detalhes do hotel e do cliente.\n\t3. Regras de Negócio:\n\t\t○ Um hotel só pode aceitar reservas se houver quartos disponíveis.\n\t\t○ As reservas devem ser identificadas por um ID único e associadas a um único hotel.\n\t4. Desafios Adicionais (Opcionais):\n\t\t○ Implementar uma função de check-in e check-out que atualize a disponibilidade de quartos.\n\t\t○ Gerar relatórios de ocupação para um hotel.\n\t\t○ Permitir que o usuário avalie o hotel após a estadia, e armazenar essas avaliações dentro do objeto do hotel.")

        let hotels = [] // array com hoteis
        let reservations = []
        let funcionality // funcionalidade que usuário vai escolher
        
        // Factory de criar hoteis
        let HotelFactory = function(idHotel, nameHotel, city, totalRooms) {
            let availableRooms = totalRooms
            let scoreHotel = 'no evaluation'
            return {
                idHotel,
                nameHotel,
                city,
                totalRooms,
                availableRooms,
                scoreHotel
            }
        }

        // Factory de criar reservas no hotel
        let ReservationFactory = function(idReservation, idHotel, clientName) {
            let status = 'booked'
            let scoreReservation = 'no evaluation'
            return {
                idReservation,
                idHotel,
                clientName,
                status,
                scoreReservation
            }
        }

        // usuário irá escolher funcionalidade
        do{
            console.log("\nMenu de Funcionalidades:\n\t🏨 1- Adicionar hotéis\n\t🔍 2- Buscar hotéis na cidade\n\t🔥 3- Fazer reserva\n\t🚫 4- Cancelar reserva\n\t📋 5- Lista reservas\n\t🙋 6- Fazer check-in\n\t💁 7- Fazer check-out\n\t📊 8- Relatório de ocupação\n\t🚪 0- Para sair")
            funcionality = parseInt(prompt("Escolha a funcionalidade que deseja: "))
            while(isNaN(funcionality) || funcionality < 0 || funcionality > 8) {
                // caso a funcionalidade for inválida, irá perguntar novamente
                console.log("\nVocê digitou um valor inválido, digite novamente")
                console.log("Menu de Funcionalidades:\n\t🏨 1- Adicionar hotéis\n\t🔍 2- Buscar hotéis na cidade\n\t🔥 3- Fazer reserva\n\t🚫 4- Cancelar reserva\n\t📋 5- Lista reservas\n\t🙋 6 - Fazer check-in\n\t💁 7- Fazer check-out\n\t📊 8- Relatório de ocupação\n\t🚪 0- Para sair")
                funcionality = parseInt(prompt("Escolha a funcionalidade que deseja: "))
            }
            // fará o tratamento adequado a partir da funcionalidade escolhida
            switch(funcionality) {
                case 1: {
                    // colher propriedades a serem adicionadas do hotel
                    console.log("")
                    let name = prompt("Escreva o nome do hotel: ")
                    let city = prompt("Escreva o nome da cidade: ")
                    let totalRooms = parseInt(prompt("Escreva o número de quartos do hotel: "))
                    while(isNaN(totalRooms) || name == '' || city == '' || totalRooms < 1) {
                        // checa se valores digitados são válidos, senão pergunta novamente
                        console.log("Você digitou um valor inválido, ou número de quartos menor que 1, digite novamente")
                        name = prompt("Escreva o nome do hotel: ")
                        city = prompt("Escreva o nome da cidade: ")
                        totalRooms = parseInt(prompt("Escreva o número de quartos do hotel: "))
                    }
                    // colocando valor de um id incremental
                    let id
                    hotels.length == 0 ? id=0 : id=(hotels[hotels.length - 1].idHotel + 1)
                    // adicionando o hotel na Factory
                    hotels.push(HotelFactory(id,name,city,totalRooms))
                    console.log("Hotel adicionado!")
                    break
                }
                case 2: {
                    console.log("Hoteis que existem:")
                    console.table(hotels)
                    let hotelFound = [] // checa hotéis encontrados para a cidade desejada
                    let hotelQuery = prompt("Escreva a cidade que pretende buscar o hotel: ")
                    // itera sobre os hotéis para encontrar os que existem na cidade
                    for (hotel of hotels) {
                        if(hotelQuery == hotel.city) {
                            hotelFound.push(hotel)
                        }
                    }
                    // tratamento se encontrou ou não hotéis na cidade desejada
                    if(hotelFound.length == 0) {
                        console.log("Não foi encontrado hotéis na cidade desejada :(")
                    } else {
                        console.log("Os hotéis encontrado nessa cidade são:")
                        console.table(hotelFound)
                    }
                    break
                }
                case 3: {
                    console.log("Hoteis que existem:")
                    console.table(hotels)
                    let hotelQuery = parseInt(prompt("Qual id de hotel deseja fazer uma reserva: ")) // armazena qual o hotel de interesse para a reserva
                    while(isNaN(hotelQuery)) {
                        console.log("Você digitou um valor não número, digite novamente")
                        hotelQuery = parseInt(prompt("Qual id de hotel deseja fazer uma reserva: "))
                    }
                    // checa se hotel existe
                    if(hotels.some(hotel => hotel.idHotel == hotelQuery)) {
                        // checa se hotel tem vagas disponíveis
                        if(hotels[hotelQuery].availableRooms > 0) {
                            // cria um id para a reserva do hotel
                            let id
                            reservations.length == 0 ? id=0 : id=reservations.length
                            // adicionando reserva à factory de reservas e diminuindo disponibilidade daquele hotel
                            let name = prompt("Para qual pessoa deseja reservar o quarto?: ")
                            reservations.push(ReservationFactory(id,hotels[hotelQuery].idHotel,name))
                            hotels[hotelQuery].availableRooms = hotels[hotelQuery].availableRooms - 1
                            console.log("Sucesso! Quarto reservado!")
                        } else {
                            console.log("Hotel lotado! Sem quartos disponíveis")
                        }
                    } else {
                        console.log("Hotel digitado não encontrado")
                    }
                    break
                }
                case 4: {
                    console.log("Lista de reservas:")
                    console.table(reservations)
                    let reservationQuery = parseInt(prompt("Qual id de reserva deseja cancelar: ")) // armazena qual o id de reserva de interesse cancelar
                    while(isNaN(reservationQuery)) {
                        console.log("Você digitou um valor não número, digite novamente")
                        reservationQuery = parseInt(prompt("Qual id de reserva deseja cancelar: "))
                    }
                    //checa se reserva existe
                    if(reservations.some(reservation => reservation.idReservation == reservationQuery)) {
                        // procura o index da reserva em reservations, adiciona uma sala vazia para o hotel e muda status da reserva para cancelado
                        let indexReservation = reservations.map(reservation => reservation.idReservation).indexOf(reservationQuery)
                        if(reservations[indexReservation].status != 'checked-out') { // se sala já não estava com check-out, soma uma sala vazia
                            hotels[reservations[indexReservation].idHotel].availableRooms = hotels[reservations[indexReservation].idHotel].availableRooms + 1
                        }
                        reservations[indexReservation].status = 'canceled'
                    } else {
                        console.log("Reserva não encontrada")
                    }
                    break
                }
                case 5: {
                    console.log("Reservas que existem:")
                    console.table(reservations)
                    break
                }
                case 6: {
                    console.log("Lista de reservas:")
                    console.table(reservations)
                    let reservationQuery = parseInt(prompt("Qual id de reserva deseja fazer o check-in: ")) // armazena qual o id de reserva de interesse fazer check-in
                    while(isNaN(reservationQuery)) {
                        console.log("Você digitou um valor não número, digite novamente")
                        reservationQuery = parseInt(prompt("Qual id de reserva deseja fazer o check-in: "))
                    }
                    //checa se reserva existe e quarto disponível
                    if(reservations.some(reservation => reservation.idReservation == reservationQuery)) {
                        // procura o index da reserva em reservations, e muda status da reserva
                        let indexReservation = reservations.map(reservation => reservation.idReservation).indexOf(reservationQuery)
                        if(reservations[indexReservation].status == 'booked') {
                            reservations[indexReservation].status = 'checked-in'
                            console.log("Você fez check-in!")
                        }
                        else {
                            console.log("Reserva não disponível")
                        }
                    } else {
                        console.log("Reserva não encontrada")
                    }
                    break
                }
                case 7: {
                    console.log("Lista de reservas:")
                    console.table(reservations)
                    let reservationQuery = parseInt(prompt("Qual id de reserva deseja fazer o check-out: ")) // armazena qual o id de reserva de interesse fazer check-out
                    while(isNaN(reservationQuery)) {
                        console.log("Você digitou um valor não número, digite novamente")
                        reservationQuery = parseInt(prompt("Qual id de reserva deseja fazer o check-out: "))
                    }
                    //checa se reserva existe e quarto sendo usado
                    if(reservations.some(reservation => reservation.idReservation == reservationQuery)) {
                        // procura o index da reserva em reservations, e muda status da reserva
                        let indexReservation = reservations.map(reservation => reservation.idReservation).indexOf(reservationQuery)
                        if(reservations[indexReservation].status == 'checked-in') {
                            let score = parseInt(prompt("Qual a nota você daria para o hotel entre 1 e 10? "))
                            while(isNaN(score) || score < 0 || score > 10) {
                                console.log("Você digitou um valor inválido")
                                score = parseInt(prompt("Qual a nota você daria para o hotel entre 1 e 10? "))
                            }
                            let sumScore
                            let countScore
                            hotels.forEach(hotel => {
                                sumScore = 0
                                if(!isNaN(hotel.scoreHotel)) {
                                    sumScore += hotel.scoreHotel
                                }
                            })
                            hotels.forEach(hotel => {
                                countScore = 0
                                if(!isNaN(hotel.scoreHotel)) {
                                    countScore ++
                                }
                            })
                            // agora colocar o score na reserva e no hotel, adiciona uma sala disponível e atualiza o status da reserva
                            reservations[indexReservation].scoreReservation = score
                            hotels[reservations[indexReservation].idHotel].scoreHotel = (sumScore+score) / (countScore+1)
                            hotels[reservations[indexReservation].idHotel].availableRooms = hotels[reservations[indexReservation].idHotel].availableRooms + 1
                            reservations[indexReservation].status = 'checked-out'
                            console.log("Você fez check-out!")
                        }
                        else {
                            console.log("Reserva não estava como checked-in!")
                        }
                    } else {
                        console.log("Reserva não encontrada")
                    }
                    break
                }
                case 8: {
                    // cria lista unindo de reservas e hotéis
                    let reservationsMerged = []
                    let indexHotels
                    let merged = {}
                    for (value of reservations) {
                        merged = {...value, ...hotels[value.idHotel]}
                        reservationsMerged.push(merged)
                    }
                    console.log("Reservas que existem com info do hotel junto:")
                    console.table(reservationsMerged)
                }
                default: {
                    break
                }
            }
        }while(funcionality != 0)
    }
}
4