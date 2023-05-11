/*30. Existem números de 4 dígitos (entre 1000 e 9999) que obedecem à seguinte característica: se dividirmos
o número em dois números de dois dígitos, um composto pela dezena e pela unidade, e outro pelo
milhar e pela centena, se somarmos estes dois novos números gerando um terceiro, o quadrado deste
terceiro número é exatamente o número original de quatro dígitos. Por exemplo:
2025 -> dividindo: 20 e 25 -> somando temos 45 -> 452 = 2025.*/

import { question } from "readline-sync";

function main() {
    //Entrada 
    const numero = Number(question("Digite um número de 4 dígitos: "))
    const milhar = Math.floor((numero / 1000))
    const centena = Math.floor((numero % 1000) / 100)
    const dezena = Math.floor((numero % 100) / 10)
    const unidade = Math.floor(numero % 10)
    
    //Processamento 
    const raiz = Math.sqrt(numero);
    const soma =  ((milhar * 10) + centena) + ((dezena * 10) + unidade)
    
    //Saída 
    if (numero >= 1000 && numero <= 9999 && raiz === soma) {
        console.log(`O número é um quadrado perfeito. 
        Raiz: ${raiz} 
        Soma: ${soma}
        Soma ao quadrado: ${soma * soma}`) 
    } else {
        console.log(`O número não é um quadrado perfeito`)
    } 
}    
main()   