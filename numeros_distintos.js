/*17. Leia valores inteiros em duas variáveis distintas e se o resto da divisão da primeira pela segunda for 1
escreva a soma dessas variáveis mais o resto da divisão; se for 2 escreva se o primeiro e o segundo valor
são pares ou ímpares; se for igual a 3 multiplique a soma dos valores lidos pelo primeiro; se for igual a 4
divida a soma dos números lidos pelo segundo, se este for diferente de zero. Em qualquer outra situação
escreva o quadrado dos números lidos. */

import { question } from "readline-sync";

function main(){
    //Entrada 
    const numero1 = Number(question("Digite um número inteiro: "))
    const numero2 = Number(question("Digite outro número inteiro: "))

    //Processamento 
    const condicao = condicao_numeros(numero1, numero2)

    //Saída 
    console.log(condicao)
}
main()

function condicao_numeros(numero1, numero2) {
    if (numero1 % numero2 === 1) { //resto igual a 1
        return numero1 + numero2 + 1
    } else if (numero1 % numero2 === 2) { //resto igual 2
       if (numero1 % 2 === 0 && numero2 % 2 === 0) {
            return `${numero1} e ${numero2} são pares`
        } else if (numero1 % 2 !== 0 && numero2 !== 0){
            return `${numero1} e ${numeros2} são ímpares`
        } else if (numero1 % 2 === 0 && numero2 !== 0) {
            return `${numero1} é par e ${numero2} é ímpar`
        } else {
            return `${numero1} é ímpar e ${numero2} é par`
        }
    } else if (numero1 % numero2 === 3) { //resto igual a 3
        return (numero1 + numero2) * numero1 
    } else if (numero1 % numero2 === 4) { //resto igual a 4
        return (numero1 + numero2) / numero2 
    } else (numero1 % numero2 > 4) //resto diferente de todos os anteriores
        return `${numero1 ** 2} é o quadrado do ${numero1} e ${numero2 ** 2} é o quadrado de ${numero2}`
    
 

}
