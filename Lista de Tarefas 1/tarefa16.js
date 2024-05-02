// 16. Escreva um algoritmo para imprimir os 50 primeiros número primos maior que 100. 
// Obs.: Número primo é aquele divisível somente por 1 e ele mesmo.

let qtd_primos_desejados = 50;
let offset = 100;
let contador;
let num_testado = offset;
let qtd_primos_encontrados = 0;
let bool_primo;

console.log(`Estes são os ${qtd_primos_desejados} primeiros números primos a partir de ${offset}:`);

while(qtd_primos_encontrados < qtd_primos_desejados) {
    contador=2;
    bool_primo = 1;
    while(contador < num_testado) {
        if(num_testado%contador == 0) {
            bool_primo = 0;
        }
        contador++;
    }
    if(bool_primo) {
        qtd_primos_encontrados++;
        console.log(`O número ${num_testado} é primo!`);
    }
    num_testado++;
}
