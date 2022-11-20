/*Faça um programa que:
a. Declare um vetor de 10 posições de números inteiros.
b. Imprima os valores contidos nas posições do vetor.
i. Quais valores foram exibidos? Você consegue explicar o motivo do programa exibir esses
valores?
c. Preencha os índices pares do vetor com o valor 0 (ZERO) e os ímpares com o valor 1 (UM).
d. Imprima os valores contidos nas posições do vetor para validar se o item acima foi realizado
com sucesso.*/

/* A */
const vetor10 = () => {
    let vetor = []
    let vetorAlternativo = []
    let entrada
    let mensagem = ""

    do {
        entrada = parseInt(prompt("Digite um valor:"))
        vetor.push(entrada)
        vetorAlternativo.push(entrada)
    } while (vetor.length < 10);

/* fim da A */
/* B */
    for (let index = 0; index < vetor.length; index++) {
        
        mensagem = `${mensagem}\n Na posição: ${index} o valor do array é: ${vetor[index]}`
        
        //console.log(`Na posição ${index} o valor do array é ${vetor[index]}`)
    }

    console.log(mensagem)
/* fim da B */
/* C */
    for (let index = 0; index < vetor.length; index++) {
        if (vetor[index] % 2 == 0){
            vetor.splice(index, 1, "0")
        }else{
            vetor.splice(index, 1, "1")
        }
    }
/* fim da C */
/* D */
    console.log(`
O vetor recebeu o valor: ${vetorAlternativo}
Atualizando os valores pares para 0 e impares para 1 fica: ${vetor}`)
/* fim da D */   
}