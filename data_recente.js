/*23. Leia 2 datas (cada data é composta por 3 variáveis inteiras: dia, mês e ano) e escreva qual delas é a mais
recente. */

import { question } from "readline-sync";

function main(){
    //Entrada 
    const dia = Number(question("Digite o dia da primeira data: "))
    const mes = Number(question("Digite o mes da primeira data: "))
    const ano = Number(question("Digite o ano da primeira data: "))
    const dia2 = Number(question("Digite o dia da segunda data: "))
    const mes2 = Number(question("Digite o mes da segunda data: "))
    const ano2 = Number(question("Digite o ano da segunda data: "))
    //Processamento e saída 
    if ((dia > dia2 && mes >= mes2 && ano >= ano2) || (mes > mes2 && ano >= ano2) || (ano > ano2)) { 
        console.log(`A primeira data é mais recente`)
    } else if((dia2 > dia && mes2 >= mes && ano2 >= ano) || (mes2 > mes && ano2 >= ano) || (ano2 > ano)) {
        console.log(`A segunda data é maior`)
    } else {
        console.log(`As datas são iguais`)
    }
}
main()