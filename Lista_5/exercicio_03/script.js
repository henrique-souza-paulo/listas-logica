/*Faça um programa que leia um vetor de 20 posições e informe em quais índices o usuário
digitou o valor zero?*/

const vetor20 = () => {
    let vetor = []
    let entrada
    let mensagem = ""

    do {
        entrada = Number(prompt("Digite um valor:"))
        vetor.push(entrada)
 
    } while (vetor.length <= 19);

    console.log(vetor)

    for (let i = 0; i <= vetor.length; i++) {
        if (vetor[i] == '0') {
            mensagem = `${mensagem}\nO numero 0 estava na posição ${i}`
        }
    }
    console.log(mensagem)
}