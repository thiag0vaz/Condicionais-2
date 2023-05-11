/*24. Leia os coeficientes (A, B e C) de uma equações de 2° grau e escreva suas raízes. Vale lembrar que o
coeficiente A deve ser diferente de 0 (zero). */

import { question } from "readline-sync";

function main(){
    //Entrada 
    const a = Number(question("Digite o A: "))
    const b = Number(question("Digite o B: "))
    const c = Number(question("Digite o C: "))
    //Processamento e Saída
    if (a != 0){ 
        const delta = (b * b) - (4 * a * c)
        const raiz1 = Math.floor(-b + Math.sqrt(delta) / 2 * a)
        const raiz2 = Math.floor(-b - Math.sqrt(delta) / 2 * a)
        console.log(`A primeira raiz é ${raiz1}`)
        console.log(`A Segunda raiz é ${raiz2}`)
    } else {
        console.log(`O valor do coeficiente A inviabiliza as raizes`)
    }
}
main()