/*16. Leia duas notas de um aluno e escreva na tela a palavra “Aprovado” se a média das duas notas for maior
ou igual a 7,0. Caso a média seja inferior a 7,0, o programa deve ler a nota do exame e calcule a média
final. Se esta média for maior ou igual a 5,0, o programa deve escreva “Aprovado”, caso contrário deve
escreva “Reprovado”. */

import { question } from "readline-sync";

function main(){
    //Entrada
    const nota1 = Number(question("Primeira nota do Aluno: ")) 
    const nota2 = Number(question("Segunda nota do Aluno: "))

    //Processamento 
    if (calcular_media(nota1, nota2)) {
        console.log("Reprovado")
        console.log("Fará a prova final")
        const nota_final = Number(question("Nota Final: "))
        media_final(nota1, nota2, nota_final)
        if (media_final(nota1, nota2, nota_final)){
            console.log("Reprovado")
        }else {
            console.log("Aprovado")
        }
    } else {
        console.log("Aprovado")
    }

}
main()

function calcular_media(n1, n2){
    return ((n1 + n2) / 2) < 7
}

function media_final(n1, n2, n_final){
    return (((n1 + n2) / 2) + n_final) / 2 < 5 
}