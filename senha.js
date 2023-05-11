/* 25. Verifique a validade de uma senha fornecida pelo usuário. A senha é 1234. O algoritmo deve escrever
uma mensagem de permissão de acesso ou não. */

import { question } from "readline-sync";

function main(){
    //Entrada 
    const senha = Number(question("Digite sua senha: "))

    //Processamento e Saída 
    if (senha !== 1234){
        console.log(`Você digitou a senha incorreta`)
    } else {
        console.log(`Senha correta`)
    }

}
main()