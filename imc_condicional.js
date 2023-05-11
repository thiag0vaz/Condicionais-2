/* 19. Leia a altura (em metros) e peso (em Kg) de uma pessoa, em seguida calcule o índice de massa corpórea
(IMC = peso / altura2). Ao final, escreva se a pessoa está com peso normal (IMC abaixo de 25), obeso
(IMC entre 25 e 30) ou obesidade mórbida (IMC acima de 30). */

import { question } from "readline-sync";

function main(){
    //Entrada 
    const peso = Number(question("Digite seu peso (Kg): "))
    const altura = Number(question("Digite sua altura (M): "))

    //Processamento 
    const imc = calcular_imc(peso, altura)
    const classificação_imc = tipo_imc(imc)

    //Saída
    console.log(`Seu IMC é ${imc.toFixed(2)}`)
    console.log(classificação_imc)
}
main()

function calcular_imc(peso, altura) {
    const resultado = peso / (altura ** 2)
    return resultado
}

function tipo_imc(imc) {
    if (imc < 18) {
        return`Segundo seu imc, você está magro.`
    }else if (imc < 25) {
        return`Segundo o seu imc, você está normal.`
    } else if (imc < 30) {
        return`Segundo seu imc, você está obeso.`
    } else {
        return`Segundo seu imc, você está em estado de obesidade mórbida.` 
    }
}