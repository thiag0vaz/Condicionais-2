/* 21. Realize arredondamentos de números utilizando a regra usual da matemática: se a parte fracionaria for
maior do que ou igual a 0,5, o numero é arredondado para o inteiro imediatamente superior, caso
contrario, é arredondado para o inteiro imediatamente inferior. */

import { question } from "readline-sync";

function main(){
    //Entrada 
    const numero = Number(question("Digite um número: "))

    //Processamento e Saída 
    if (numero % 1 >= 0.5) {
        console.log(`Seu número foi arredondado para ${Math.ceil(numero)}`)
    } else {
        console.log(`Seu numero foi arredondado para ${Math.floor(numero)}`)
    }
}
main()