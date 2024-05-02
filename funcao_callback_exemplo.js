function exibirFuncao(callbackSucesso, callbackErro) {
    if(true) {
        callbackSucesso('Funções de callback em casa de sucesso')
    } else {
        callbackErro('Função de callBack em caso de erro')
    }
}

let callbackSucesso = function(titulo) {
    console.log(titulo)
}

let callbackErro = function(erro) {
    console.log(erro)
}

exibirFuncao(callbackSucesso,callbackErro)