/*Faça um programa que leia a idade de uma pessoa em anos, meses e dias
(devem ser realizadas três perguntas para o usuário). Exemplo: 12 anos, 5 meses e 3 dias. 
Depois, o programa deve escrever a idade dessa pessoa só em dias. 
Considerar ano igual a 365 dias e mês igual a 30 dias.
*/

const conversorIdade = () => { 
    const ano = Number(prompt("Digite a quantidade de anos: "))
    const meses = Number(prompt("Digite a quantidade de meses: "))
    const dia = Number(prompt("Digite a quantidade de dias: "))
   
    const resultado = (365 * ano) + (30 * meses) + dia

    if (resultado == 0) {
        window.alert(`Digite algum valor`)
    } else {
        window.alert(`Sua idade em dias é: ${resultado} dias`)
    }
}