// 2. Escreva um algoritmo para ler o número de eleitores de um município, o número de votos brancos, nulos e válidos. Calcular e escrever o percentual que cada um representa em relação ao total de eleitores.

const prompt = require('prompt-sync')();
let qtd_eleitores = parseInt(prompt("Digite o total de eleitores:"));
let qtd_vts_brancos = parseInt(prompt("Digite o total de votos brancos:"));
let qtd_vts_nulos = parseInt(prompt("Digite o total de votos nulos:"));
let qtd_vts_validos = parseInt(prompt("Digite o total de votos válidos:"));
let perc_vts_brancos;
let perc_vts_nulos;
let perc_vts_validos;

if(isNaN(qtd_eleitores)||isNaN(qtd_vts_brancos)||isNaN(qtd_vts_nulos)||isNaN(qtd_vts_validos)) {
    console.log("Foi digitado um não número, tente novamente");
} else if(qtd_eleitores == 0) {
    console.log("Foi digitado número de eleitores igual a zero, tente novamente");
} else if(qtd_vts_brancos + qtd_vts_nulos + qtd_vts_validos > qtd_eleitores) {
    console.log("Existem mais votos que eleitores, tente novamente");
} else {
    perc_vts_brancos = qtd_vts_brancos * 100 / qtd_eleitores;
    perc_vts_nulos = qtd_vts_nulos * 100 / qtd_eleitores;
    perc_vts_validos = qtd_vts_validos * 100 / qtd_eleitores;
    console.log("Porcentagem de votos brancos: ",perc_vts_brancos, "%");
    console.log("Porcentagem de votos nulos: ",perc_vts_nulos, "%");
    console.log("Porcentagem de votos válidos: ",perc_vts_validos, "%");
}