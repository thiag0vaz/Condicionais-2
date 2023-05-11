/*27. determine a idade de uma pessoa, em anos, meses e dias, dadas a data (dia, mês e ano) do seu
nascimento e a data (dia, mês e ano) atual. */
import { question } from "readline-sync";

function main(){
    console.log(`Digite sua data de nascimento`)
    let datanasc = {dia: Number(question("Dia: ")), mes: Number(question("Mes: ")), ano: Number(question("Ano: "))};
    console.log(`Digite a data atual`)
    let datatual = {dia: Number(question("Dia: ")), mes: Number(question("Mes: ")), ano: Number(question("Ano: "))}

    let idade = calcularIdade(datanasc.dia, datanasc.mes, datanasc.ano, datatual.dia, datatual.mes, datatual.ano);

    console.log(idade); 
}
main()

function calcularIdade(dianasc, mesnasc, anonasc, diatual, mesatual, anoatual) {
    let qtdanos = anoatual - anonasc;
    let qtdmeses = mesatual - mesnasc;
    let qtdias = diatual - dianasc;
  
    if (qtdmeses < 0 || (qtdmeses === 0 && qtdias < 0)) {
      qtdanos--;
      qtdmeses += 12;
    }
  
    if (qtdias < 0) {
      let ultimo_dia_mes_anterior = new Date(anoatual, mesatual - 1, 0).getDate();
      qtdmeses--;
      qtdias += ultimo_dia_mes_anterior;
    }
  
    return {
      anos: qtdanos,
      meses: qtdmeses,
      dias: qtdias
    };
}
 