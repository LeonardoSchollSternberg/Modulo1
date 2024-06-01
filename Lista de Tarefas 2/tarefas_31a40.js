const prompt = require('prompt-sync')()

module.exports = {
    tarefa31: tarefa31 => {
        console.log("31. Escreva um algoritmo que leia um número inteiro A e uma matriz V 30 x 30 de inteiros. Conte quantos valores iguais a A estão na matriz. Crie, a seguir, uma matriz X contendo todos os elementos de V diferentes de A. Mostre os resultados.")

        const matrixRows = 30
        const matrixColumns = 30
        let matrix = []
        let numAnalysed
        let countNumAnalysed = 0
        let matrixOutput = []
        
        //Criando matriz de números inteiros de 0 a 10
        for (let i=0;i<matrixRows;i++) {
            matrix[i] = []
            for (let j=0;j<matrixColumns;j++) {
                matrix[i][j] = parseInt(Math.random() * 10)
            }
        }
        console.log("Matriz gerada:")
        console.table(matrix)
        
        numAnalysed = parseInt(prompt("Digite o número a ser analizado: "))
        while(isNaN(numAnalysed)) {
            console.log("Você digitou um valor inválido, digite novamente")
            numAnalysed = parseInt(prompt("Digite o número a ser analizado: "))
        }

        for (let i=0;i<matrixRows;i++) {
            matrixOutput[i] = []
            for (let j=0;j<matrixColumns;j++) {
                if(numAnalysed==matrix[i][j]) {
                    countNumAnalysed++
                    matrixOutput[i][j] = -1
                } else {
                    matrixOutput[i][j] = matrix[i][j]
                }
            }
        }
        
        console.log("Matriz resposta. O número escolhido foi substutuído por -1:")
        console.table(matrixOutput)

    },
    tarefa32: tarefa32 => {
        console.log("32. Escrever um algoritmo que lê uma matriz M(12,13) e divida todos os 13 elementos de cada uma das 12 linhas de M pelo maior elemento em módulo daquela linha. Escrever a matriz lida e a modificada.")

        const matrixRows = 12
        const matrixColumns = 13
        let matrix = []
        let biggestNum
        let matrixOutput = []
        
        //Criando matriz de números reais de -10 a 10
        for (let i=0;i<matrixRows;i++) {
            matrix[i] = []
            for (let j=0;j<matrixColumns;j++) {
                matrix[i][j] = Math.round(Number((Math.random() * 10) - (Math.random() * 10)) * 100) / 100
            }
        }
        console.log("Matriz gerada:")
        console.table(matrix)
        
       
        for (let i=0;i<matrixRows;i++) {
            biggestNum = 0
            matrixOutput[i] = []
            for (let j=0;j<matrixColumns;j++) { //obtendo maior valor da linha
                if (Math.abs(matrix[i][j]) > biggestNum) {
                    biggestNum = Math.abs(matrix[i][j])
                }
            }
            console.log(biggestNum)
            for (let j=0;j<matrixColumns;j++) { //dividindo matriz pelo maior elemento da linha
                matrixOutput[i][j] = Math.round((matrix[i][j] / biggestNum * 100)) / 100
            }
        }
        console.log("Matriz final:")
        console.table(matrixOutput)

    },
    tarefa33: tarefa33 => {
        console.log("33. Faça um algoritmo que leia uma matriz 3 x 3 e após a leitura, multiplique os elementos da diagonal principal com a média dos elementos da diagonal secundária.")

        const matrixRows = 3
        const matrixColumns = 3
        let matrix = []
        let sumSecDiag = 0
        let avgSecDiag
        let matrixOutput = []

        //Criando matriz de números reais de -10 a 10
        for (let i=0;i<matrixRows;i++) {
            matrix[i] = []
            for (let j=0;j<matrixColumns;j++) {
                matrix[i][j] = Math.round(Number((Math.random() * 10) - (Math.random() * 10)) * 100) / 100
            }
        }
        console.log("Matriz gerada:")
        console.table(matrix)
        // Obtendo média da diagonal secundária
        for (let i=0;i<matrixRows;i++) {
            sumSecDiag += matrix[i][matrix[i].length - 1]
        }
        console.log(sumSecDiag)

    },
    tarefa34: tarefa34 => {
        console.log("34. Faça um algoritmo que leia uma matriz 50 x 50 de números reais. A seguir, multiplique cada linha pelo elemento da diagonal principal daquela linha. Mostre a matriz após as multiplicações.")
        // Criando uma matriz 50 x 50 com valores entre 0 e 10
        const matrixLength = 50
        let matrix = []
        let mainDiagonal = []
        for(let i=0; i<matrixLength; i++) {
            matrix[i] = []
            for(let j=0; j<matrixLength; j++) {
                matrix[i][j] = (Math.random() * 10).toFixed(4)
                if(i==j) {
                    mainDiagonal[i] = matrix[i][j]
                }
            }
        }

        console.log("Matriz original:")
        console.table(matrix)
        
        for(let i=0; i<matrixLength; i++) {
            for(let j=0; j<matrixLength; j++) {
                matrix[i][j] = (matrix[i][j] * mainDiagonal[i]).toFixed(4)
            }
        }

        console.log("Matriz multiplicada:")
        console.table(matrix)

    },
    tarefa35: tarefa35 => {
        console.log("35. Elaborar um algoritmo que leia um conjunto de 30 valores e os coloca em 2 vetores conforme forem pares ou ímpares. O tamanho do vetor é de 5 posições. Se algum vetor estiver cheio, escrevê-lo. Terminada a leitura, escrever o conteúdo dos dois vetores. Cada vetor pode ser preenchido quantas vezes forem necessárias.")
        
        let numValues = 30
        let values = []
        let even = []
        let odd = []

        //preenchendo 30 valores entre 0 a 100
        for (i=0;i<numValues;i++) {
            values.push(parseInt(Math.random() * 100))
        }
        console.log(values)
        for (value of values) {
            if (value % 2 == 0) {
                if (even.length == 5) {
                    console.log(`Vetor de pares cheio. o vetor cheio era ${even}. Sobre-escrevendo ele`)
                    even = []
                }
                even.push(value)
            } else {
                if (odd.length == 5) {
                    console.log(`Vetor de ímpares cheio. o vetor cheio era ${odd}. Sobre-escrevendo ele`)
                    odd = []
                }
                odd.push(value)
            }
        }
        return `Vetor final par: ${even}\nVetor final ímpar: ${odd}`
    },
    tarefa36: tarefa36 => {
        console.log('36. Escreva um algoritmo que leia um vetor de 13 elementos inteiros, que é o Gabarito de um teste da loteria esportiva. Leia, a seguir, para cada um dos 100 apostadores, o número do seu cartão e um vetor de Respostas de 13 posições. Verifique para cada apostador o número de acertos, comparando o vetor de Gabarito com o vetor de Respostas. Escreva o número do apostador e o número de acertos. Se o apostador tiver 13 acertos, mostrar a mensagem "Parabéns, tu foi o GANHADOR".')

        let numValues = 13
        let lotteryNumbers = []
        let numPlayers = 100
        let players = []
        let countRightNumbers

        //preenchendo valores entre 0 a 14
        function CreateNumbers() {
            let numbers = []
            let currentNumber
            for (i=0;i<numValues;i++) {
                currentNumber = parseInt(Math.random() * 15)
                    while(numbers.includes(currentNumber)) {
                        currentNumber = parseInt(Math.random() * 15)
                    }
                    numbers.push(currentNumber)
            }
            return numbers.sort((a,b) => a-b)
        }

        function Player(id,numbers) {
            return {
                id,
                numbers
            }
        }

        lotteryNumbers = CreateNumbers()
        for (let i=0;i<numPlayers;i++) {
            players[i] = new Player(i,CreateNumbers())
        }

        console.log(`Os números da loteria são: ${lotteryNumbers}`)
        for (player of players) {
            
            countRightNumbers = 0
            for (num of player.numbers) {
                if(lotteryNumbers.includes(num)) countRightNumbers++
            }
            if(countRightNumbers == 13) {
                console.log(`Parabéns cartela ${player.id}, tu foi o GANHADOR. Números apostados ${player.numbers}`)
            } else {
                console.log(`Cartela não ganhadora. Cartela:${player.id} acertou ${countRightNumbers} números. Números apostados ${player.numbers}`)
            }
        }
    },
    tarefa37: tarefa37 => {
        console.log("37. Escreva um algoritmo que leia um vetor G de 20 elementos caractere que representa o gabarito de uma prova. A seguir, para cada um dos 50 alunos da turma, leia o vetor de respostas (R) do aluno e conte o número de acertos. Mostre o número de acertos do aluno e uma mensagem “APROVADO” se a quantidade de acertos for maior ou igual a 12; e mostre uma mensagem de “REPROVADO”, caso contrário.")

        //Respostas são entre 1 e 2
        let numQuestions = 20 // número de questões
        let listAnswers = [] // lista do gabarito
        let numStudents = 50
        let students = []
        let numAnswers = 2 // número de possibilidades por alternativa
        let countRightAnswers
        
        //criando lista de respostas
        function CreateAnswers() {
            let numbers = []
            let currentNumber
            for (i=0;i<numQuestions;i++) {
                currentNumber = Math.ceil(Math.random() * (numAnswers))
                    numbers.push(currentNumber)
            }
            return numbers
        }

        function CreateStudent(id,numbers) {
            return {
                id,
                numbers
            }
        }

        listAnswers = CreateAnswers()
        for (let i=0;i<numStudents;i++) {
            students[i] = new CreateStudent(i,CreateAnswers())
        }
        
        console.log(`Lista de respostas ${listAnswers}`)

        for (student of students) {
            countRightAnswers = 0
            for (let i=0;i<student.numbers.length;i++) {
                if(student.numbers[i] == listAnswers[i]) countRightAnswers++
            }
            if (countRightAnswers >= 12) {
                console.log(`APROVADO! Estudante número ${student.id} acertou ${countRightAnswers} questões. Respostas que ele deu ${student.numbers}`)
            }
            else { 
                console.log(`REPROVADO! Estudante número ${student.id} acertou ${countRightAnswers} questões. Respostas que ele deu ${student.numbers}`)
            }
        }

    },
    tarefa38: tarefa38 => {
        console.log("38. Elabore um algoritmo que leia um vetor de 6 posições e após sua leitura leia outra variável identificadora que calcule a operação conforme a informação contida nesta variável:\n\t1- soma dos elementos;\n\t2- produto dos elementos;\n\t3- média dos elementos;\n\t4- ordene os elementos em ordem crescente;\n\t5- mostre o vetor.")
        let vectorSize = 6
        let vector = [] // lista do gabarito
        let sumVector = 0 // soma dos elementos do vetor
        let multVector = 1 // produtos dos elementos do vetor
        let avgVector // média dos elementos do vetor

        //criando lista do vetor, números entre 0 e 10
        function CreateVector() {
            let numbers = []
            let currentNumber
            for (i=0;i<vectorSize;i++) {
                currentNumber = parseInt(Math.random() * 10)
                    numbers.push(currentNumber)
            }
            return numbers
        }
        vector = new CreateVector()
        for (value of vector) {
            sumVector += value
            multVector *= value
        } 
        avgVector = sumVector / vector.length

        return `1- soma dos elementos: ${sumVector}\n2- produto dos elementos: ${multVector}\n3- média dos elementos: ${avgVector}\n4- ordene os elementos em ordem crescente: ${vector.sort((a,b) => a-b)}\n5- mostre o vetor: ${vector}`
    },
    tarefa39: tarefa39 => {
        console.log("39. Faça um algoritmo que leia um vetor (A) de 100 posições. Em seguida, compacte o vetor, retirando os valores nulos e negativos. Coloque o resultado no vetor B.")
        let vectorSize = 100
        let vector = [] // vetor de 100 posições
        let vectorOutput = [] // vetor resposta

        //criando lista do vetor, números entre -10 e 10
        function CreateVector() {
            let numbers = []
            let currentNumber
            for (i=0;i<vectorSize;i++) {
                currentNumber = parseInt((Math.random() * 10) - (Math.random() * 10))
                    numbers.push(currentNumber)
            }
            return numbers
        }
        
        vector = new CreateVector()
        console.log(`Vetor original ${vector}`)
        for (let i=0; i<vectorSize;i++) {
            if(vector[i] <= 0) {
                vector.splice(i,1)
                i--
            }
        }
        console.log(`Vetor com valores removidos ${vector}`)
        vectorOutput = vector
        return (`Passado para o vetor B: ${vectorOutput}`)
    },
    tarefa40: tarefa40 => {
        console.log('40. Faça um algoritmo que leia um vetor de 5 elementos inteiros, correspondentes ao resultado oficial da Loto. A seguir, leia 50 conjuntos de vetores (com 5 elementos inteiros cada), representando as apostas feitas. Compare os números das apostas com o resultado oficial e mostre uma mensagem ("Ganhador") se todos os números corresponderem ao resultado oficial. (Observação: não é necessário procurar por ternos e quadras, apenas por quinas.)')

        let numValues = 5 //número de números da Loto
        let numPossibilities = 10 //numero de possibilidades da Loto
        let lotteryNumbers = [] //números da Loto
        let numPlayers = 50 //número de jogadores da Loto
        let players = [] //número que os jogadores da Loto escolheram
        let countRightNumbers //contabiliza o número de acertos por jogador

        //preenchendo valores entre 0 a numPossibilities
        function CreateNumbers() {
            let numbers = []
            let currentNumber
            for (i=0;i<numValues;i++) {
                currentNumber = parseInt(Math.random() * numPossibilities)
                    while(numbers.includes(currentNumber)) {
                        currentNumber = parseInt(Math.random() * numPossibilities)
                    }
                    numbers.push(currentNumber)
            }
            return numbers.sort((a,b) => a-b)
        }

        function Player(id,numbers) {
            return {
                id,
                numbers
            }
        }

        lotteryNumbers = CreateNumbers()
        for (let i=0;i<numPlayers;i++) {
            players[i] = new Player(i,CreateNumbers())
        }

        console.log(`Os números da loteria são: ${lotteryNumbers}`)
        for (player of players) {
            countRightNumbers = 0
            for (num of player.numbers) {
                if(lotteryNumbers.includes(num)) countRightNumbers++
            }
            if(countRightNumbers == 5) {
                console.log(`Ganhador! Parabéns cartela ${player.id}, tu foi o GANHADOR. Números apostados ${player.numbers}`)
            } else {
                console.log(`Cartela não ganhadora. Cartela:${player.id} acertou ${countRightNumbers} números. Números apostados ${player.numbers}`)
            }
        }
    }
}
