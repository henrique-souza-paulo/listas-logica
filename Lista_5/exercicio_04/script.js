/*Faça um programa que leia dois vetores A e B, cada um com 10 elementos inteiros. Depois,
construa um vetor C, onde cada elemento de C é a soma dos respectivos elementos em A e B,
ou seja: C[i] = A[i] + B[i].*/

const doisVetores = () => {
    let vetorA = []
    let vetorB = []
    let vetorC = []
    let entrada
    let mensagem = ""

    do {
        entrada = parseInt(prompt("Digite os valores do primeiro vetor:"))
        vetorA.push(entrada)
 
    } while (vetorA.length <= 9);

    window.alert(`Os valores adicionados ao vetor A são: ${vetorA}`)

    do {
        entrada = parseInt(prompt("Digite os valores do segundo vetor:"))
        vetorB.push(entrada)
 
    } while (vetorB.length <= 9);

    window.alert(`Os valores adicionados ao vetor B são: ${vetorB}`)

    for (let i = 0; i <= 9; i++) {
        vetorC.push(vetorA[i] + vetorB[i])
        mensagem = `${mensagem}\n ${vetorA[i]} + ${vetorB[i]} = ${vetorC[i]}}`
    }
    window.alert(mensagem)
}