// 12. Escreva um algoritmo que gere os números de 1000 a 1999 e escreva aqueles que, divididos por 11, dão resto igual a 5.

console.log("A seguir os números entre 1000 e 1999 que, divididos por 11, dão resto igual a 5");

for (contador = 1000; contador < 2000; contador++) {
    if(contador%11==5){
        console.log(contador);
    }
}