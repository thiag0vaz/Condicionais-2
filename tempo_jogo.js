/*22. Leia a hora do início de um jogo e a hora de fim do jogo (cada hora é composta por 2 variáveis inteiras:
hora e minuto). Calcule e escreva a duração do jogo (horas e minutos), sabendo-se que o tempo
máximo de duração do jogo é de 24 horas e que ele pode iniciar-se em um dia e terminar no dia
seguinte. */

import { question } from "readline-sync";

function main(){
    //Entrada 
    let hora_inicial = Number(question("Digite a hora do início do jogo(formato 24 horas): "))
    let minuto_inicial = Number(question("Digite os minutos do início do jogo: "))
    let hora_final = Number(question("Digite a hora do fim do jogo(formato 24 horas): "))
    let minuto_final = Number(question("Digite os minutos do fim do jogo "))
    
    //Processamento 
    if (minuto_final < hora_inicial || (hora_final === hora_inicial && minuto_final < minuto_inicial)) {
        minuto_final += 24
    }
    let duracao_minutos = (hora_final - hora_inicial) * 60 + (minuto_final - minuto_inicial)
    let duracao_horas = Math.floor(duracao_minutos / 60)
    let duracao_minutos_restantes = duracao_minutos % 60
    //Saída 
    console.log(`O jogo durou ${duracao_horas} horas e ${duracao_minutos_restantes} minutos`)

}
main()
