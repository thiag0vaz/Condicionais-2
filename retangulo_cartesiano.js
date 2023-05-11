/*28. Leia as coordenadas cartesianas (x e y) de 2 (dois) pontos no plano, que corresponderão a dois cantos de
um retângulo. Baseado nisto, calcule e escreva a área deste retângulo. Lembre-se de que o valor da área
não pode ser negativo.*/

import { question } from "readline-sync";


function main(){    
    //Entrada 
    const x1 = Number(question("DIgite o ponto X1: "))
    const y1 = Number(question("DIgite o ponto Y1: "))
    const x2 = Number(question("DIgite o ponto X2: "))
    const y2 = Number(question("DIgite o ponto Y2: "))
    //Processamento 
    const largura = Math.abs(x2 - x1);
    const altura = Math.abs(y2 - y1);
    const area = largura * altura;
    //Saída
    if (area < 0) {
        console.log(`Os pontos não formam um retângulo`)
    } else {
        console.log(`A área do retângulo é ${area} unidades de medida.`);
    }
}

main()