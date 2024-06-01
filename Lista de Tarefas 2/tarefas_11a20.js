const prompt = require('prompt-sync')()

module.exports = {
    tarefa11: tarefa11 => {
        console.log("11. Desenvolva um programa que leia o primeiro termo e a razão de uma PA (Progressão Aritmética), mostrando na tela os 10 primeiros elementos da PA e a soma entre todos os valores da sequência.")

        let numberOfTerms = 10
        let nums = []
        let sum = 0
        let num = Number(prompt("Digite o primeiro valor da PA: "))
        let commonDifference = Number(prompt("Digite a razão da PA: "))
        
        while(isNaN(num) || isNaN(commonDifference)) {
            console.log("Você digitou um valor inválido, digite novamente")
            num = Number(prompt("Digite o primeiro valor da PA: "))
            commonDifference = Number(prompt("Digite a razão da PA: "))
        }

        console.log(`1º número da sequência: ${num}`)
        nums.push(num)
        sum += num
        for(let i=2; i<numberOfTerms+1; i++) {
            num += commonDifference
            console.log(`${i}º número da sequência: ${num}`)
            nums.push(num)
            sum += num
        }
        return `Os valores da PA são ${nums} e o valor do somatório totaliza ${sum}`

    },
    tarefa12: tarefa12 => {
        console.log("12. Faça um programa que mostre os 10 primeiros elementos da Sequência de Fibonacci. Ex.: 1, 1, 2, 3, 5, 8, 13, 21.")
        
        numberOfElements = 10
        num1 = 1
        num2 = 1
        nums = [num1, num2]
        for(let i=2;i<numberOfElements;i++) {
            if(num1>num2) {
                num2 += num1
                nums.push(num2)
            } else {
                num1 += num2
                nums.push(num1)
            }
        }
        return `Os ${numberOfElements} primeiro elementos da sequência de Fribonacci são ${nums}`
        
    },
    tarefa13: tarefa13 => {
        console.log("13. Crie um programa que preencha automaticamente (usando lógica, não apenas atribuindo diretamente) um vetor numérico com 15 posições com os primeiros elementos da sequência de Fibonacci.")
        
        numberOfElements = 15
        num1 = 1
        num2 = 1
        nums = [num1, num2]
        for(let i=2;i<numberOfElements;i++) {
            if(num1>num2) {
                num2 += num1
                nums.push(num2)
            } else {
                num1 += num2
                nums.push(num1)
            }
        }
        return `Os ${numberOfElements} primeiro elementos da sequência de Fribonacci são ${nums}`
        
    },
    tarefa14: tarefa14 => {
        console.log("14. Faça um programa que leia 7 nomes de pessoas e guarde-os em um vetor. No final, mostre uma listagem com todos os nomes informados, na ordem inversa daquela em que eles foram informados.")

        let numNames = 7
        let name
        let names = []

        for (let i=0;i<numNames;i++) {
            name = prompt("Digite o próximo nome: ")
            names.push(name)
            console.log(`Nome ${name} foi adicionado!`)
        }
        return `Os nomes digitados na ordem inversa são ${names.reverse()}`
    },
    tarefa15: tarefa15 => {
        console.log("15. Desenvolva um programa que leia 10 números inteiros e guarde-os em um vetor. No final, mostre quais são os números pares que foram digitados e em que posições eles estão armazenados.")
        
        let numNumbers = 10
        let num
        let nums = []

        for (let i=0;i<numNumbers;i++) {
            num = prompt("Digite o próximo número: ")
            while(isNaN(num)) {
                console.log("Você digitou um valor inválido, digite novamente")
                num = prompt("Digite o próximo número: ")
            }
            nums.push(num)
        }
        for (let j=0;j<numNumbers;j++) {
            if(nums[j] % 2 == 0) {
                console.log(`O número ${nums[j]} é par! Ele está na posição ${j}`)
            }
        }
        return `Lembrando que a matriz inteira de números foi ${nums}`
    },
    tarefa16: tarefa16 => {
        console.log("16. Crie uma lógica que preencha um vetor de 20 posições com números aleatórios (entre 0 e 99) gerados pelo computador. Logo em seguida, mostre os números gerados e depois coloque o vetor em ordem crescente, mostrando no final os valores ordenados.")

        let numNumbers = 20
        let num
        let nums = []

        for (let i=0;i<numNumbers;i++) {
            num = parseInt(Math.floor(Math.random() * 99))
            nums.push(num)
        }
        console.log(`Vetor gerado: ${nums}`)
        nums.sort((a,b) => a-b)
        return `Vetor ordenado: ${nums}`
    },
    tarefa17: tarefa17 => {
        console.log("17. Crie um programa que leia o nome e a idade de 9 pessoas e guarde esses valores em dois vetores, em posições relacionadas. No final, mostre uma listagem contendo apenas os dados das pessoas menores de idade.")

        let numPeople = 9
        let name
        let names = []
        let namesUnder = []
        let age
        let ages = []
        let agesUnder = []

        for (let i=0;i<numPeople;i++) {
            name = prompt("Digite o nome da próximas pessoa: ")
            age = parseInt(prompt("Digite a idade da próximas pessoa: "))
            while(isNaN(age) || age < 0) {
                console.log("Você digitou um valor inválido, digite novamente")
                name = prompt("Digite o nome da próximas pessoa: ")
                age = parseInt(prompt("Digite a idade da próximas pessoa: "))
            }
            names.push(name)
            ages.push(age)
        }

        for (let j=0;j<numPeople;j++) {
            if (ages[j] < 18) {
                namesUnder.push(names[j])
                agesUnder.push(ages[j])
            }
        }
        return `O nome das pessoas menores de idade são ${namesUnder} com idades respectivas ${agesUnder}`
    },
    tarefa18: tarefa18 => {
        console.log("18. Crie um registro com o nome do funcionário, cargo e salário. Leia este registro para um funcionário e ao final escreva o conteúdo do registro.")

        let worker = function(nome, cargo, salario) {
            return {
                nome,
                cargo,
                salario,
            }
        }

        let name = prompt("Digite o nome do funcionário: ")
        let position = prompt("Digite o cargo do funcionário: ")
        let salary = Number(prompt("Digite o salário do funcionário: "))

        while(isNaN(salary) || salary < 0) {
            console.log("Você digitou um valor inválido, digite novamente")
            name = prompt("Digite o nome do funcionário: ")
            position = prompt("Digite o cargo do funcionário: ")
            salary = Number(prompt("Digite o salário do funcionário: "))
        }
        let worker1 = worker(name,position,salary)
        return `Você preencheu o cadastro do seguinte trabalhador:\n\tNome: ${worker1.nome}\n\tCargo: ${worker1.cargo}\n\tSalário: ${worker1.salario}`
        
    },
    tarefa19: tarefa19 => {
        console.log("19. Escrever um programa para ler 5 horários. Validar cada horário fornecendo através de repetição. Escrever cada um deles no formato HH.MM.SS.")

        let numCicles = 5
        let hour
        let minute
        let second        
        for (i=0;i<numCicles;i++) {
            hour = parseInt(prompt("Digite a hora: "))
            minute = parseInt(prompt("Digite o minuto: "))
            second = parseInt(prompt("Digite o segundo: "))
            while(isNaN(hour) || hour < 0 || hour >= 24 || isNaN(minute) || minute < 0 || minute >= 60 || isNaN(second) || second < 0 || second >= 60) {
                console.log("Você digitou um valor inválido, digite novamente")
                hour = parseInt(prompt("Digite a hora: "))
                minute = parseInt(prompt("Digite o minuto: "))
                second = parseInt(prompt("Digite o segundo: "))
            }
            console.log(`Você escreveu o horário ${hour}:${minute}:${second}`)
        }

    },
    tarefa20: tarefa20 => {
        console.log("20. Uma indústria faz a folha mensal de pagamentos de seus 80 empregados baseada no seguinte: existe uma tabela com os dados de cada funcionalidade: matrícula, nome e salário bruto. Escreva um programa que leia e processe a tabela e emita (escreva na tela), cada funcionário, seu contracheque, cujo formato é dado a seguir:\n\tMatrícula:\n\tNome:\n\tSalário bruto:\n\tDedução INSS:\n\tSalário líquido:\n(Dicas: desconto de 12%, salário líquido é a diferença entre salário bruto e a redução do INSS).")

        function Worker(registration, name, grossSalary) {
            this.registration = registration,
            this.name = name,
            this.grossSalary = grossSalary
            this.deduction = grossSalary*0.12
            this.netSalary = this.grossSalary - this.deduction
        }

        const workers = {}
//criado no chatGPT os 80 funcionários a seguir
        workers.worker1 = new Worker("001", "João Silva", 3500.00)
        workers.worker2 = new Worker("002", "Maria Souza", 3800.00)
        workers.worker3 = new Worker("003", "Pedro Santos", 4000.00)
        workers.worker4 = new Worker("004", "Ana Oliveira", 3600.00)
        workers.worker5 = new Worker("005", "Carlos Ferreira", 3700.00)
        workers.worker6 = new Worker("006", "Juliana Costa", 3900.00)
        workers.worker7 = new Worker("007", "Rafael Martins", 4200.00)
        workers.worker8 = new Worker("008", "Camila Pereira", 4100.00)
        workers.worker9 = new Worker("009", "Lucas Rodrigues", 3800.00)
        workers.worker10 = new Worker("010", "Mariana Alves", 3500.00)
        workers.worker11 = new Worker("011", "Paulo Lima", 4300.00)
        workers.worker12 = new Worker("012", "Fernanda Gonçalves", 3700.00)
        workers.worker13 = new Worker("013", "Diego Oliveira", 3900.00)
        workers.worker14 = new Worker("014", "Carolina Santos", 4000.00)
        workers.worker15 = new Worker("015", "Gabriel Costa", 3600.00)
        workers.worker16 = new Worker("016", "Isabela Souza", 4200.00)
        workers.worker17 = new Worker("017", "Luciana Silva", 4100.00)
        workers.worker18 = new Worker("018", "Matheus Pereira", 3800.00)
        workers.worker19 = new Worker("019", "Aline Rodrigues", 3500.00)
        workers.worker20 = new Worker("020", "José Alves", 4300.00)
        workers.worker21 = new Worker("021", "Renata Lima", 3700.00)
        workers.worker22 = new Worker("022", "Felipe Gonçalves", 3900.00)
        workers.worker23 = new Worker("023", "Larissa Oliveira", 4000.00)
        workers.worker24 = new Worker("024", "Marcelo Santos", 3600.00)
        workers.worker25 = new Worker("025", "Tatiane Costa", 4200.00)
        workers.worker26 = new Worker("026", "Vinícius Silva", 4100.00)
        workers.worker27 = new Worker("027", "Patrícia Pereira", 3800.00)
        workers.worker28 = new Worker("028", "Rodrigo Rodrigues", 3500.00)
        workers.worker29 = new Worker("029", "Carla Alves", 4300.00)
        workers.worker30 = new Worker("030", "Renato Lima", 3700.00)
        workers.worker31 = new Worker("031", "Sandra Gonçalves", 3900.00)
        workers.worker32 = new Worker("032", "Marcos Oliveira", 4000.00)
        workers.worker33 = new Worker("033", "Eduarda Santos", 3600.00)
        workers.worker34 = new Worker("034", "Thiago Costa", 4200.00)
        workers.worker35 = new Worker("035", "Laura Silva", 4100.00)
        workers.worker36 = new Worker("036", "Ricardo Pereira", 3800.00)
        workers.worker37 = new Worker("037", "Vanessa Rodrigues", 3500.00)
        workers.worker38 = new Worker("038", "Bruno Alves", 4300.00)
        workers.worker39 = new Worker("039", "Luiza Lima", 3700.00)
        workers.worker40 = new Worker("040", "Gabriela Gonçalves", 3900.00)
        workers.worker41 = new Worker("041", "Felipe Oliveira", 4000.00)
        workers.worker42 = new Worker("042", "Carolina Santos", 3600.00)
        workers.worker43 = new Worker("043", "Daniel Costa", 4200.00)
        workers.worker44 = new Worker("044", "Amanda Silva", 4100.00)
        workers.worker45 = new Worker("045", "Lucas Pereira", 3800.00)
        workers.worker46 = new Worker("046", "Mariana Rodrigues", 3500.00)
        workers.worker47 = new Worker("047", "Pedro Alves", 4300.00)
        workers.worker48 = new Worker("048", "Juliana Lima", 3700.00)
        workers.worker49 = new Worker("049", "Lucas Gonçalves", 3900.00)
        workers.worker50 = new Worker("050", "Camila Oliveira", 4000.00)
        workers.worker51 = new Worker("051", "Rafael Santos", 3600.00)
        workers.worker52 = new Worker("052", "Ana Costa", 4200.00)
        workers.worker53 = new Worker("053", "Marcos Silva", 4100.00)
        workers.worker54 = new Worker("054", "Carla Pereira", 3800.00)
        workers.worker55 = new Worker("055", "Fernando Rodrigues", 3500.00)
        workers.worker56 = new Worker("056", "Mariana Alves", 4300.00)
        workers.worker57 = new Worker("057", "Pedro Lima", 3700.00)
        workers.worker58 = new Worker("058", "Patrícia Gonçalves", 3900.00)
        workers.worker59 = new Worker("059", "Gustavo Oliveira", 4000.00)
        workers.worker60 = new Worker("060", "Aline Santos", 3600.00)
        workers.worker61 = new Worker("061", "Lucas Costa", 4200.00)
        workers.worker62 = new Worker("062", "Maria Silva", 4100.00)
        workers.worker63 = new Worker("063", "Rodrigo Pereira", 3800.00)
        workers.worker64 = new Worker("064", "Isabela Rodrigues", 3500.00)
        workers.worker65 = new Worker("065", "Thiago Alves", 4300.00)
        workers.worker66 = new Worker("066", "Carolina Lima", 3700.00)
        workers.worker67 = new Worker("067", "José Gonçalves", 3900.00)
        workers.worker68 = new Worker("068", "Mariana Oliveira", 4000.00)
        workers.worker69 = new Worker("069", "Felipe Santos", 3600.00)
        workers.worker70 = new Worker("070", "Ana Costa", 4200.00)
        workers.worker71 = new Worker("071", "Paulo Silva", 4100.00)
        workers.worker72 = new Worker("072", "Tatiane Pereira", 3800.00)
        workers.worker73 = new Worker("073", "Marcos Rodrigues", 3500.00)
        workers.worker74 = new Worker("074", "Renata Alves", 4300.00)
        workers.worker75 = new Worker("075", "Gustavo Lima", 3700.00)
        workers.worker76 = new Worker("076", "Juliana Gonçalves", 3900.00)
        workers.worker77 = new Worker("077", "Lucas Oliveira", 4000.00)
        workers.worker78 = new Worker("078", "Camila Santos", 3600.00)
        workers.worker79 = new Worker("079", "Ricardo Costa", 4200.00)
        workers.worker80 = new Worker("080", "Amanda Silva", 4100.00)

        console.table(workers)
    }
}
