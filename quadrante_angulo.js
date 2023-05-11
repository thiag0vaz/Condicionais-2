/*20. Leia a medida de um ângulo (entre 0 e 360°) e escreva o quadrante (primeiro, segundo, terceiro ou
quarto) em que o ângulo se localiza. */

import { question } from "readline-sync";

function main(){
    //Entrada 
    const angulo = Number(question("Digite o valor do ângulo: "))

    //Processamento e Saída
    if (angulo < 0 || angulo > 360) {
        console.log("O ângulo é inválido")
    }else if (angulo <= 90) {
        console.log("O ângulo está no primeiro quadrante")
    }else if (angulo <= 180) {
        console.log("O ângulo está no segundo quadrante")
    }else if (angulo <= 270) {
        console.log("O ângulo está no terceiro quadrante")
    } else {
        console.log("O ângulo está no quarto quadrante")
    } 
}
main()