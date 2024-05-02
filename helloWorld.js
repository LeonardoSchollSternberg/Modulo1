console.log("Hello World");
console.log('Hello World');
console.log(`Hello World`); // deixa colocar variável dentro da string
console.log(10.2, "Jaques"); // deixa colocar variável dentro da string
console.log(10.2 + "Jaques"); // deixa colocar variável dentro da string

nome = "leo" // variável global
let nme = "leo" // declaração padrão
var name = "leo" // declaração antiga e inadequada (permite redefinir variáveis o que é cinonflitante)

const NAME = "leo" // constante não mutável (sempre precisa declarar valor, não pode declarar const sem valor)

console.log(typeof(nme)); // retorno tipo de variável

/*
Existem 4 tipos de tipos de dados em Javascript:
string, number, boolean, undefined e NULL

ctrl+ponto e vírgulo -> comenta ou descomenta tudo
shift+del -> deleta toda a linha
ctrl+alt+seta para baixo ou cima -> copia a linha
alt + seta para baixo ou cima -> move toda a linha
ctrl + alt + para cima ou para baixo -> cria múltiplas linhas selecionadas

ponto e vírghula é noa prática, não é obrigatório

number++ e ++number incrementa mas em momentos diferentes (geralmente antes é mais utilizado)
number += number2 -> soma number com number2 e coloca em number
number *= number2
number /= number2


matemática, ordem de leitura:
()
**
* / %
+ -
lê-se da esquerda para direita caso mesma camada


operadores lógicos e rleacionais
== -> igual a (não leva em conta tipo de variável) ex: 10 == "10" é true
=== -> idêntico a (leva em conta tipo de variável) ex: 10 === "10" é false
!= -> diferente (não leva em conta tipo de variável)
!== -> diferente estrito (leva em conta tipo de variável)
&& -> E (conjunção)
|| -: OU (disjunção)
&&! -> E negado
! -> negação


*/