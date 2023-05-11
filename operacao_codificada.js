/* 18. Leia dois valores e uma das seguintes operações a serem executadas (codificadas da seguinte forma: 1 –
Adição, 2 – Subtração, 3 – Multiplicação e 4 – Divisão). Calcule e escreva o resultado dessa operação
sobre os dois valores lidos. */

import { question } from "readline-sync";

function main(){
    //Entrada 
    const numero1 = Number(question("Digite o primeiro valor: "))
    const numero2 = Number(question("Digite o segundo valor: "))
    const operacao = Number(question("Digite a operação numérica: "))

    //Processamento
    const codigo = tipo_operacao(operacao, numero1, numero2)

    //Saída 
    console.log(codigo)

}
main()

function tipo_operacao(operacao, numero1, numero2) {
    if (operacao === 1) {
        return `Você solicitou adição e o resultado é ${numero1 + numero2}`
    } else if (operacao === 2) {
        return `Você solicitou subtração e o resultado é ${numero1 - numero2}`
    } else if (operacao === 3) {
        return `Você solicitou multiplicação e o resultado é ${numero1 * numero2}`
    } else if (operacao === 4) {
        return `Você solicitou divisão e o resultado é ${numero1 / numero2}`
    } else {
        return `Você solicitou uma operação inexistente neste programa :(`
    }
}