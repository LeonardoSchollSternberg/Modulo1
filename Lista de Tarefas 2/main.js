const prompt = require('prompt-sync')()
let file1 = require('./tarefas_1a10.js')
let file2 = require('./tarefas_11a20.js')
let file3 = require('./tarefas_21a30.js')
let file4 = require('./tarefas_31a40.js')
let file5 = require('./tarefas_41a50.js')

let exercicio
while (exercicio!=0) {
    console.log("\n")
    exercicio = parseInt(prompt("Escolha o exercício que deseja executar, valores de 1 a 50. Digite 0 para sair: "))
    if(isNaN(exercicio) || exercicio < 0 || exercicio > 50) {
        console.log("Você digitou um valor inválido, digite novamente")
        exercicio = parseInt(prompt("Escolha o exercício que deseja executar, valores de 1 a 50. Digite 0 para sair: "))
    }
    
    switch(exercicio) {
        case 1: {
            console.log(file1.tarefa1())
            break
        }
        case 2: {
            console.log(file1.tarefa2())
            break
        }
        case 3: {
            console.log(file1.tarefa3())
            break
        }
        case 4: {
            console.log(file1.tarefa4())
            break
        }
        case 5: {
            console.log(file1.tarefa5())
            break
        }
        case 6: {
            console.log(file1.tarefa6())
            break
        }
        case 7: {
            console.log(file1.tarefa7())
            break
        }
        case 8: {
            console.log(file1.tarefa8())
            break
        }
        case 9: {
            console.log(file1.tarefa9())
            break
        }
        case 10: {
            console.log(file1.tarefa10())
            break
        }
        case 11: {
            console.log(file2.tarefa11())
            break
        }
        case 12: {
            console.log(file2.tarefa12())
            break
        }
        case 13: {
            console.log(file2.tarefa13())
            break
        }
        case 14: {
            console.log(file2.tarefa14())
            break
        }
        case 15: {
            console.log(file2.tarefa15())
            break
        }
        case 16: {
            console.log(file2.tarefa16())
            break
        }
        case 17: {
            console.log(file2.tarefa17())
            break
        }
        case 18: {
            console.log(file2.tarefa18())
            break
        }
        case 19: {
            file2.tarefa19()
            break
        }
        case 20: {
            file2.tarefa20()
            break
        }
        case 21: {
            console.log(file3.tarefa21())
            break
        }
        case 22: {
            console.log(file3.tarefa22())
            break
        }
        case 23: {
            file3.tarefa23()
            break
        }
        case 24: {
            console.log(file3.tarefa24())
            break
        }
        case 25: {
            file3.tarefa25()
            break
        }
        case 26: {
            file3.tarefa26()
            break
        }
        case 27: {
            console.log(file3.tarefa27())
            break
        }
        case 28: {
            console.log(file3.tarefa28())
            break
        }
        case 29: {
            console.log(file3.tarefa29())
            break
        }
        case 30: {
            console.log(file3.tarefa30())
            break
        }
        case 31: {
            file4.tarefa31()
            break
        }
        case 32: {
            file4.tarefa32()
            break
        }
        case 33: {
            file4.tarefa33()
            break
        }
        case 34: {
            file4.tarefa34()
            break
        }
        case 35: {
            console.log(file4.tarefa35())
            break
        }
        case 36: {
            file4.tarefa36()
            break
        }
        case 37: {
            file4.tarefa37()
            break
        }
        case 38: {
            console.log(file4.tarefa38())
            break
        }
        case 39: {
            console.log(file4.tarefa39())
            break
        }
        case 40: {
            file4.tarefa40()
            break
        }
        case 41: {
            file5.tarefa41()
            break
        }
        case 42: {
            file5.tarefa42()
            break
        }
        case 43: {
            file5.tarefa43()
            break
        }
        case 44: {
            file5.tarefa44()
            break
        }
        case 45: {
            file5.tarefa45()
            break
        }
        case 46: {
            file5.tarefa46()
            break
        }
        case 47: {
            file5.tarefa47()
            break
        }
        case 48: {
            file5.tarefa48()
            break
        }
        case 49: {
            file5.tarefa49()
            break
        }
        case 50: {
            file5.tarefa50()
            break
        }
        default:
            break
    }
}




