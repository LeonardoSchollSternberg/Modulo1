const prompt = require('prompt-sync')()

module.exports = {
    tarefa1: tarefa1 => {
        console.log("1. Escreva um programa para calcular a redução do tempo de vida de um fumante. Pergunte a quantidade de cigarros fumados por dias e quantos anos ele já fumou. Considere que um fumante perde 10 min de vida a cada cigarro. Calcule quantos dias de vida um fumante perderá e exiba o total em dias.")
        // Ja dizia o Miranha: Sigaro da cãrse
        
        let cigarsPerDay = parseInt(prompt("Digite quantos cigarros por dia você fuma: "))
        let yearsSmoking = parseInt(prompt("Digite por quantos anos você já fumou: "))

        while(isNaN(cigarsPerDay) || isNaN(yearsSmoking) || cigarsPerDay < 0 || yearsSmoking < 0) {
            console.log("Você digitou um valor inválido, digite novamente")
            cigarsPerDay = parseInt(prompt("Digite quantos cigarros por dia você fuma: "))
            yearsSmoking = parseInt(prompt("Digite por quantos anos você já fumou: "))
        }

        let daysLost = parseInt(((cigarsPerDay * 365) * yearsSmoking) * 10/(60*24))
        return (`Você perdeu ${daysLost} dias de vida :(`)
    },
    tarefa2: tarefa2 => {
        console.log("2. Escreva um programa que pergunte a velocidade de um carro. Caso ultrapasse 80 Km/h, exiba uma mensagem dizendo que o usuário foi multado. Nesse caso, exiba o valor da multa, cobrando R$ 5,00 por cada Km acima da velocidade permitida.")

        let speed = Number(prompt("Digite a velocidade do carro: "))
        while(isNaN(speed) || speed < 0) {
            console.log("Você digitou um valor inválido, digite novamente")
            speed = Number(prompt("Digite a velocidade do carro: "))
        }
        if (speed > 80) {
            return (`Você foi multado! Você deverá pagar R$ ${((speed-80)*5).toFixed(2)} `)
        }
        else
            return ("Continue dirigindo dentro da velocidade :)")
    },
    tarefa3: tarefa3 => {
        console.log("3. Faça um algoritmo que pergunte a distância que um passageiro deseja percorrer em Km. Calcule o preço da passagem, cobrando R$ 0.50 por Km para viagens até 200 Km e R$ 0.45 para viagens mais longas.")

        let price
        let distance = Number(prompt("Digite a distância que deseja percorrer: "))
        while(isNaN(distance) || distance < 0) {
            console.log("Você digitou um valor inválido, digite novamente")
            distance = Number(prompt("Digite a distância que deseja percorrer: "))
        }
        distance > 200 ? price = distance * 0.45 : price = distance * 0.5
        return (`Preço da passagem é R$ ${price.toFixed(2)}`)
    },
    tarefa4: tarefa4 => {
        console.log("4. Crie um programa que leia o tamanho de três segmentos de reta. Analise seus comprimentos e diga se é possível formar um triângulo com essas retas. Matematicamente, para três segmentos formarem um triângulo, o comprimento de cada lado deve ser menor que a soma dos outros dois.")

        let segmento1 = Number(prompt("Digite o primeiro segmento de reta: "))
        let segmento2 = Number(prompt("Digite o segundo segmento de reta: "))
        let segmento3 = Number(prompt("Digite o terceiro segmento de reta: "))
        while(isNaN(segmento1) || segmento1 < 0 || isNaN(segmento2) || segmento2 < 0 || isNaN(segmento3) || segmento3 < 0) {
            console.log("Você digitou um valor inválido, digite novamente")
            segmento1 = Number(prompt("Digite o primeiro segmento de reta: "))
            segmento2 = Number(prompt("Digite o segundo segmento de reta: "))
            segmento3 = Number(prompt("Digite o terceiro segmento de reta: "))
        }
        if (segmento1 + segmento2 > segmento3 && segmento1 + segmento3 > segmento2 && segmento2 + segmento3 > segmento1) {
            return "Os segmentos de reta formam um triãngulo"
        } else
        return "Segmentos de reta não formam um triângulo"
    },
    tarefa5: tarefa5 => {
        console.log("5. Crie um jogo de JoKenPo (Pedra-Papel-Tesoura).")
        // Será criado uma inteligência artifical jogando aleatoriamente

        let possibilities = ['pedra', 'papel', 'tesoura']
        let opp_choice = possibilities[Math.floor(Math.random() * possibilities.length)]

        let pl_choice = prompt("Escreva pedra, papel ou tesoura: ")
        while(!(pl_choice == 'pedra' || pl_choice == 'papel' || pl_choice == 'tesoura')) {
            console.log("Você digitou um valor inválido, digite novamente")
            pl_choice = prompt("Escreva pedra, papel ou tesoura: ")
        }
        if(pl_choice == opp_choice) {
            return `O jogo empatou! Ambos escolheram ${pl_choice}`
        } else if ((pl_choice == 'pedra' && opp_choice == 'tesoura') || (pl_choice == 'papel' && opp_choice == 'pedra') || (pl_choice == 'tesoura' && opp_choice == 'papel'))
            return `Você ganhou! Você escolheu ${pl_choice} e seu oponente escolheu ${opp_choice}`
        else {
            return `Você perdeu! Você escolheu ${pl_choice} e seu oponente escolheu ${opp_choice}`
        }
    },
    tarefa6: tarefa6 => {
        console.log("6. Crie um jogo onde o computador vai sortear um número entre 1 e 5. O jogador vai tentar descobrir qual foi o valor sorteado.")

        resposta = Math.floor(Math.random() * 5) + 1
        let guess
        
        while(resposta!=guess) {
            guess = parseInt(prompt("Digite seu chute: "))
            while(isNaN(guess) || guess < 1 || guess > 5) {
                console.log("Você digitou um valor inválido, digite novamente")
                guess = parseInt(prompt("Digite seu chute: "))
            }
            if(guess < resposta) {
                console.log("Você chutou muito baixo, tente um número mais alto")
            } else if (guess > resposta) {
                console.log("Você chutou muito alto, tente um número mais baixo")
            }
        }
        return "Você acertou!"
    },
    tarefa7: tarefa7 => {
        console.log("7. Uma empresa de aluguel de carros precisa cobrar pelos seus serviços. O aluguel de um carro popular custa R$ 90,00 por dia e um carro de luxo custa R$ 150,00. Além disso, o cliente paga por Km percorrido. Faça um programa que leia o tipo de carro alugado (popular ou luxo), quantos dias de aluguel e quantos Km foram percorridos. No final,mostre o preço a ser pago de acordo com os dados a seguir:\n\tCarros populares\n\t- Até 100 Km percorridos: R$ 0,20 por Km\n\t- Acima de 100 Km percorridos: R$ 0,10 por Km\n\tCarros de luxo\n\t- Até 200 Km percorridos: R$ 0,30 por Km\n\t- Acima de 200 Km percorridos: R$ 0,25 por Km")

        let car = prompt("Escolha o carro que deseja, escreva popular ou luxo: ")
        let days = parseInt(prompt("Quantos dias deseja alugar o carro: "))
        let distance = Number(prompt("Quantos km deseja dirigir o carro: "))
        let price
        console.log(car)
        console.log(days)
        console.log(distance)
        while(!(car == 'popular' || car == 'luxo') || isNaN(days) || days < 0 ||isNaN(distance) || distance < 0) {
            console.log("Você digitou um valor inválido, digite novamente")
            car = prompt("Escolha o carro que deseja: ")
            days = parseInt(prompt("Quantos dias deseja alugar o carro: "))
            distance = Number(prompt("Quantos km deseja dirigir o carro: "))
        }
        if(car='popular') {
            if(distance < 100) {
                price = distance * 0.2
            } else {
                price = distance * 0.1
            }
        } else {
            if(distance < 200) {
                price = distance * 0.3
            } else {
                price = distance * 0.25
            }
        }
        return `O preço ficou em R$ ${price.toFixed(2)}`
    },
    tarefa8: tarefa8 => {
        console.log("8. Um programa de vida saudável quer dar pontos por atividades físicas realizadas que podem ser trocados por dinheiro. Cada hora de atividade física no mês vale pontos. O sistema funciona assim:\n\t- até 10 h de atividade no mês: ganha 2 pontos por hora\n\t- de 10 h até 20 h de atividade no mês: ganha 5 pontos por hora\n\t- acima de 20 h de atividade no mês: ganha 10 pontos por hora\n\t- A cada ponto ganho, o cliente fatura R$ 0,05 (5 centavos)\nFaça um programa que leia quantas horas de atividade uma pessoa teve por mês. Calcule e mostre quantos pontos ela teve e quanto dinheiro ela conseguiu ganhar.")

        let hours = parseInt(prompt("Digite quantas horas você fez atividade física: "))
        let points
        let money_gained

        while(isNaN(hours) || hours < 0) {
            console.log("Você digitou um valor inválido, digite novamente")
            hours = parseInt(prompt("Digite quantas horas você fez atividade física: "))
        }
        if (hours < 10) {
            points = hours * 2
        } else if (hours < 20) {
            points = hours * 5
        } else {
            points = hours * 10
        }
        money_gained = points * 0.05
        return `Você fez ${points} pontos e faturou R$ ${money_gained}`
    },
    tarefa9: tarefa9 => {
        console.log("9. Desenvolva um aplicativo que leia o salário e o sexo de vários funcionários. No final, mostre o total de salário pago aos homens e o total pago às mulheres. O programa vai perguntar ao usuário se ele quer continuar ou não sempre que ler os dados de um funcionário.")

        let salary_man = 0
        let qty_man = 0
        let salary_woman = 0
        let qty_woman = 0
        let sex
        let salary

        while(sex != 0) {
            sex = parseInt(prompt("Digite 1 se deseja inserir um homem, 2 uma mulher, ou 0 para terminar de inserir: "))
            salary = Number(prompt("Digite o salário que deseja inserir: "))
            while (isNaN(sex) || sex < 0 || sex > 2 || isNaN(salary)) {
                console.log("Você digitou um valor inválido, digite novamente")
                sex = parseInt(prompt("Digite 1 se deseja inserir um homem, 2 uma mulher, ou 0 para terminar de inserir: "))
                salary = Number(prompt("Digite o salário que deseja inserir: "))
            }
            if(sex == 1) {
                qty_man++
                salary_man += salary
            } else if (sex == 2) {
                qty_woman++
                salary_woman += salary
            }
        }
        return `Você adicionou ${qty_man} funcionários homens com salário ${salary_man}, e adicionou ${qty_woman} funcionários mulheres com salário ${salary_woman}`
    },
    tarefa10: tarefa10 => {
        console.log("10. Crie um programa usando a estrutura “faça enquanto” que leia vários números. A cada laço, pergunte se o usuário quer continuar ou não. No final, mostre na tela:\n\ta) O somatório entre todos os valores;\n\tb) Qual foi o menor valor digitado;\n\tc) A média entre todos os valores;\n\td) Quantos valores são pares.")

        let cont
        let num
        let count = 0
        let sum = 0
        let sml_num
        let avg
        let even = 0

        do{
            cont = prompt("Você deseja continuar? Digite N para sair: ").toUpperCase()
            if(cont!="N") {
                num = Number(prompt("Digite o número que deseja inserir inserir: "))
                while (isNaN(num)) {
                    console.log("Você digitou um valor inválido, digite novamente")
                    num = Number(prompt("Digite o número que deseja inserir inserir: "))
                }
                count++
                sum += num
                if(num % 2 == 0) even++
                if(sml_num > num || typeof(sml_num) == "undefined") sml_num = num
            }
        }while(cont != "N")
        avg = sum / count
        return `Valores: Somatório: ${sum}, Menor Valor ${sml_num}, Média ${avg}, Quantidade de pares: ${even}`
    }
}
