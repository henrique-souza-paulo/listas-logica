/*Faça um programa que leia um vetor de 15 posições e mostre todos os valores pares
informados pelo usuário.*/

const vetor15 = () => {
    let vetor = []
    let entrada
    let vetorPar = []

    do {
        entrada = Number(prompt("Digite um valor:"))
        vetor.push(entrada)
    } while (vetor.length <= 14);


    for (let i = 0; i <= vetor.length; i++) {
        if (vetor[i] % 2 == 0) {
            vetorPar.push(vetor[i])
        }
    }
    console.log(`Foi digitado os valores ${vetor}. 
    E os numeros pares são ${vetorPar}`)
}
