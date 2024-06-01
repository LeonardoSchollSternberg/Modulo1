const prompt = require('prompt-sync')()

module.exports = {
    tarefa21: tarefa21 => {
        console.log("21. Faça uma função que recebe, por parâmetro, a altura (alt) e o sexo de uma pessoa e retorna o seu peso ideal. Para homens, calcular o peso ideal usando a fórmula: peso ideal = 72.7 x alt - 58 e, para mulheres, peso ideal = 62.1 x alt - 44.7.")
        function IdealWeight(height, sex) {
            let weight
            if(sex=="M") {
                weight = 72.7 * height - 58
            } else if (sex=="F") {
                weight = 62.1 * height - 44.7
            }
            return weight
        }
        let height = Number(prompt("Digite a altura da pessoa: "))
        let sex = prompt("Digite o sexo da pessoa, sendo M para masculino e F para feminino: ")
        while (isNaN(height) || height < 0 || !(sex =="M" || sex =="F") ) {
            console.log("Você digitou um valor inválido, digite novamente")
            height = Number(prompt("Digite a altura da pessoa: "))
            sex = prompt("Digite o sexo da pessoa, sendo M para masculino e F para feminino: ")
        }
        let weight1 = IdealWeight(height,sex)
        return `O peso da pessoa informada é ${weight1.toFixed(2)}`
    },
    tarefa22: tarefa22 => {
        console.log("22. A prefeitura de uma cidade fez uma pesquisa entre os seus habitantes, coletando dados sobre o salário e número de filhos. Faça uma função que leia esses dados para um número não determinado de pessoas e retorne a média de salário da população, a média do número de filhos, o maior salário e o percentual de pessoas com salário até R$ 350,00.")
        function Output (peopleSurveyed) {
            let count = 0
            let countSmaller350 = 0
            let sumSalary = 0
            let avgSalary
            let sumChildren = 0
            let avgChildren
            let biggestSalary = 0
            let percentSmaller350
            for (ppl of peopleSurveyed) {
                console.log(ppl)
                count++
                sumSalary += ppl.salary
                sumChildren += ppl.num_children
                if (ppl.salary > biggestSalary) {
                    biggestSalary = ppl.salary
                }
                if (ppl.salary < 350) {
                    countSmaller350++
                }
            }
            avgSalary = sumSalary / count
            avgChildren = sumChildren / count
            percentSmaller350 = countSmaller350 / count
            return [avgSalary, avgChildren, biggestSalary, percentSmaller350]
        }
        
        let SurveyData = function (salary, num_children) {
            return {
                salary,
                num_children
            }
        }
        
        let salary
        let num_children
        let people = []
        let cont = prompt("Você gostaria de inserir uma pessoa? Digite N para parar: ")

        while(cont != "N") {
            salary = Number(prompt("Digite o salário da pessoa: "))
            num_children = parseInt(prompt("Digite o número de filhos da pessoa: "))
            while (isNaN(salary) || salary < 0 || isNaN(num_children) || num_children < 0) {
                console.log("Você digitou um valor inválido, digite novamente")
                salary = Number(prompt("Digite o salário da pessoa: "))
                num_children = parseInt(prompt("Digite o número de filhos da pessoa: "))
            }
            people.push(SurveyData(salary,num_children))
            cont = prompt("Você gostaria de inserir uma pessoa? Digite N para parar: ")
        }
        let output = Output(people)
        return `A média do salário é: ${output[0]}\nA média do número de filhos é ${output[1]}\nO maior salário é ${output[2]}\nO percentual de pessoas com salário menor que 350 é: ${(output[3]).toFixed(4)*100}%`
    },
    tarefa23: tarefa23 => {
        console.log("23. Criar e imprimir a matriz identidade MI[1..7,1..7] em que todos os elementos da diagonal principal são iguais a 1 e os demais são nulos.")

        const matrixLength = 7
        let matrix = []
        
        for (let i=0;i<matrixLength;i++) {
            matrix[i] = []
            for (let j=0;j<matrixLength;j++) {
                i==j ? matrix[i][j]=1 : matrix[i][j]=0
            }
        }
        console.log("Matriz resposta:")
        console.table(matrix)
    },
    tarefa24: tarefa24 => {
        console.log("24. Dada uma matriz M[1..6,1..8], criar um vetor C que contenha, em cada posição, a quantidade de elementos negativos da linha correspondente de M.")

        const matrixRows = 6
        const matrixColumns = 8
        let matrix = []
        let numNegatives
        //Criando uma matriz de números reais entre -10 e 5
        for (let i=0;i<matrixRows;i++) {
            matrix[i] = []
            for (let j=0;j<matrixColumns;j++) {
                matrix[i][j] = Math.round(((Math.random() * -10) + (Math.random() * 5)) * 100)/100
            }
        }

        console.log("A matriz gerada foi: ")
        console.table(matrix)

        for (let i=0;i<matrixRows;i++) {
            numNegatives = 0
            for (let j=0;j<matrixColumns;j++) {
                if(matrix[i][j] < 0) {
                    numNegatives++
                }
            }
            console.log(`O número de números negativos na linha ${i} são ${numNegatives} números`)
        }
    },
    tarefa25: tarefa25 => {
        console.log("25. Faça um algoritmo que leia uma matriz de 15 X 20 de números reais e mostre a soma de cada coluna separadamente.")
        
        const matrixRows = 15
        const matrixColumns = 20
        let matrix = []
        let sum
        let sumColumns = []
        
        //Criando uma matriz de números reais entre 0 e 10
        for (let i=0;i<matrixRows;i++) {
            matrix[i] = []
            for (let j=0;j<matrixColumns;j++) {
                matrix[i][j] = Math.round(Math.random() * 10 * 100) / 100
            }
        }
        console.log("Matriz resposta:")
        console.table(matrix)

        for (let j=0;j<matrixColumns;j++) {
            sum = 0
                for (let i=0;i<matrixRows;i++) {
                sum += matrix[i][j]
            }
            sumColumns.push(sum.toFixed(2))
        }
        console.log("A soma das colunas totaliza:")
        console.table(sumColumns)
    },
    tarefa26: tarefa26 => {
        console.log("26. Dadas duas matrizes numéricas A[1..3,1..5] e B[1..3,1..5], calcular a matriz produto P[1..3,1..5].")
        // Exercício adaptado, para ser matrix 3x5 e 5x3 para conseguir multiplicar
        
        const matrixRows1 = 3
        const matrixColumns1 = 5
        let matrix1 = []
        const matrixRows2 = 5
        const matrixColumns2 = 3
        let matrix2 = []
        let matrixPValue
        let matrixP = []
        
        //Criando matriz de números reais entre 0 e 10
        for (let i=0;i<matrixRows1;i++) {
            matrix1[i] = []
            for (let j=0;j<matrixColumns1;j++) {
                matrix1[i][j] = Math.round(Math.random() * 10 * 100) / 100
            }
        }
        for (let i=0;i<matrixRows2;i++) {
            matrix2[i] = []
            for (let j=0;j<matrixColumns2;j++) {
                matrix2[i][j] = Math.round(Math.random() * 10 * 100) / 100
            }
        }

        console.log("Matrized geradas:")
        console.table(matrix1)
        console.table(matrix2)

        for (let i=0;i<matrixRows1;i++) { //itera por acada linha da matriz 1
            matrixP[i] = []
            matrixPValue = 0
            for (let j=0;j<matrixColumns2;j++) { //itera por cada coluna da matriz 2
                for(let k=0;k<matrixRows2;k++) { //itera por cada linha da matriz 2
                    matrixPValue += (matrix1[i][k] * matrix2[k][j])
                }
            matrixP[i][j] = matrixPValue.toFixed(2)
            }
        }
        console.log("matriz Produto:")
        console.table(matrixP)
    },
    tarefa27: tarefa27 => {
        console.log("27. Elaborar um algoritmo que leia uma matriz M(6,6) e um valor A. Após a leitura, multiplicar a matriz M pelo valor A e colocar os valores da matriz multiplicados por A em um vetor V(36). Escrever o vetor V no final.")

        const matrixRows = 6
        const matrixColumns = 6
        let matrix = []
        let matrixAnswer = []
        
        //Criando matriz de números reais de 0 a 10
        for (let i=0;i<matrixRows;i++) {
            matrix[i] = []
            for (let j=0;j<matrixColumns;j++) {
                    matrix[i][j] = Math.round(Math.random() * 10 * 100) / 100
            }
        }
        
        let numMult = Number(prompt("Digite o valor que deseja multiplicar os termos da matriz: "))
        while (isNaN(numMult)) {
            console.log("Você digitou um valor inválido, digite novamente")
            numMult = Number(prompt("Digite o valor que deseja multiplicar os termos da matriz: "))
        }
        
        for (let i=0;i<matrixRows;i++) {
            matrixAnswer[i] = []
            for (let j=0;j<matrixColumns;j++) {
                matrixAnswer[i][j] = Math.round(matrix[i][j] * numMult * 100) / 100
            }
        }
        console.log("A matriz gerada ficou: ")
        console.table(matrix)
        console.log("A matriz resposta ficou: ")
        console.table(matrixAnswer)

    },
    tarefa28: tarefa28 => {
        console.log("28. Fazer um algoritmo para receber uma matriz 10 x 10 e devolver o resultado pedido no item:\n\ta) a soma dos elementos acima da diagonal principal;\n\tb) a soma dos elementos abaixo da diagonal principal;")

        const matrixRows = 10
        const matrixColumns = 10
        let matrix = []
        let sumUpper = 0
        let sumUnder = 0
        
        //Criando matriz de números reais de 0 a 10
        for (let i=0;i<matrixRows;i++) {
            matrix[i] = []
            for (let j=0;j<matrixColumns;j++) {
                matrix[i][j] = Math.round(Math.random() * 10 * 100) / 100
            }
        }
        console.log("Matriz gerada:")
        console.table(matrix)

        for (let i=0;i<matrixRows;i++) {
            for (let j=0;j<matrixColumns;j++) {
                if (j > i) {
                    sumUpper += matrix[i][j]
                } else if (i>j) {
                    sumUnder += matrix[i][j]
                }
            }
        }
        return `A soma dos valores acima da diagonal principal é ${sumUpper.toFixed(2)} e dos valores abaixo da diagonal principal é ${sumUnder.toFixed(2)} `
    },
    tarefa29: tarefa29 => {
        console.log("29. Escreva um algoritmo que leia uma matriz M(5,5) e calcule as somas:\n\ta) da linha 4 de M;\n\tb) da coluna 2 de M;\n\tc) da diagonal principal;\n\td) todos os elementos da matriz M.\nEscrever essas somas e a matriz.")

        const matrixRows = 5
        const matrixColumns = 5
        let matrix = []
        let sumRow4 = 0
        let sumCol2 = 0
        let sumDiag = 0
        let sumAll = 0
        
        //Criando matriz de números reais de 0 a 10
        for (let i=0;i<matrixRows;i++) {
            matrix[i] = []
            for (let j=0;j<matrixColumns;j++) {
                matrix[i][j] = Math.round(Math.random() * 10 * 100) / 100
            }
        }
        console.log("Matriz gerada:")
        console.table(matrix)

        for (let i=0;i<matrixRows;i++) {
            for (let j=0;j<matrixColumns;j++) {
                sumAll += matrix[i][j]
                if (i == 4) {
                    sumRow4 += matrix[i][j]
                }
                if (j == 0) {
                    sumCol2 += matrix[i][j]
                }
                if (i == j) {
                    sumDiag += matrix[i][j]
                }
            }
        }

        return `A soma de todos os valores da linha 4: ${sumRow4.toFixed(2)}\nAsoma de todos os valores da coluna 2: ${sumCol2.toFixed(2)}\nA soma de todos os valores da diagonal principal: ${sumDiag.toFixed(2)}\nA soma de todos os valores da matriz: ${sumAll.toFixed(2)} `

    },
    tarefa30: tarefa30 => {
        console.log("30. Escrever um algoritmo que lê uma matriz M(5,5) e cria 2 vetores SL(5) e SC(5) que contenham, respectivamente, as somas das linhas e das colunas de M. Escrever a matriz e os vetores criados.")

        const matrixRows = 5
        const matrixColumns = 5
        let matrix = []
        let sumRows = 0
        let matrixSumRows = []
        let sumColumns = 0
        let matrixSumColumns = []
        
        //Criando matriz de números reais de 0 a 10
        for (let i=0;i<matrixRows;i++) {
            matrix[i] = []
            for (let j=0;j<matrixColumns;j++) {
                matrix[i][j] = Math.round(Math.random() * 10 * 100) / 100
            }
        }
        console.log("Matriz gerada:")
        console.table(matrix)
        
        for (let i=0;i<matrixRows;i++) {
            for (let j=0;j<matrixColumns;j++) {
                sumRows += matrix[i][j]
            }
            matrixSumRows.push(sumRows)
        }
        for (let i=0;i<matrixColumns;i++) {
            for (let j=0;j<matrixRows;j++) {
                sumColumns += matrix[i][j]
            }
            matrixSumColumns.push(sumColumns)
        }
        return `A soma das linhas totaliza em: ${sumRows.toFixed(2)}\nA soma das colunas totaliza em ${sumColumns.toFixed(2)}`
    }
}
