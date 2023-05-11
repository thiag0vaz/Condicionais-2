//26. Leia os 3 (três) lados de um triângulo e identifique sua hipotenusa e seus catetos.

import { question } from "readline-sync";

function main(){
    //Entrada 
    const lado1 = Number(question("Digite o valor do primeiro lado: "))
    const lado2 = Number(question("Digite o valor do segundo lado: "))
    const lado3 = Number(question("Digite o valor do terceiro lado: "))

    //Procesamento e saída
    if (lado1 **2 === lado2 **2 + lado3 **2) {
        console.log(`Hipotenusa: ${lado1}`)
        console.log(`Cateto 1: ${lado2}`)
        console.log(`Cateto 2:${lado3}`)
    }else if (lado2 **2 === lado1 **2 + lado3 **2 ) {
        console.log(`Hipotenusa: ${lado2}`)
        console.log(`Cateto 1: ${lado1}`)
        console.log(`Cateto 2:${lado3}`)
    }else if (lado3 **2 === lado2 **2 + lado1 **2) {
        console.log(`Hipotenusa: ${lado3}`)
        console.log(`Cateto 1: ${lado2}`)
        console.log(`Cateto 2: ${lado1}`)
    }else {
        console.log(`Os valos dos lados não formam um triângulo retângulo`)
    }
}
main()