/*29. Um número é um quadrado perfeito quando a raiz quadrada do número é igual à soma das dezenas
formadas pelos seus dois primeiros e dois últimos dígitos.
Exemplo: √9801 = 99 = 98 + 01. O número 9801 é um quadrado perfeito.
Escreva um algoritmo que leia um número de 4 dígitos e verifique se ele é um quadrado perfeito.*/

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
    if (raiz === soma) {
        console.log(`O número é um quadrado perfeito. Raiz: ${raiz}, Soma: ${soma}`) 
    } else {
        console.log(`O número não é um quadrado perfeito`)
    }    
}
main()